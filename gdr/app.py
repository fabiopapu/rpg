from flask import Flask, request, jsonify, make_response
from flask import render_template_string
import os, json, re

app = Flask(__name__)

# ---------------------- STORAGE ----------------------
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
SAVES_DIR = os.path.join(BASE_DIR, 'saves')
os.makedirs(SAVES_DIR, exist_ok=True)

SAFE_NAME = re.compile(r"^[a-zA-Z0-9_-]{1,64}$")

# ---------------------- PAGES ------------------------
INDEX_HTML = r"""
<!doctype html>
<html lang="it">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Scheda PG – Fantasy Web</title>
  <style>
    :root{
      --bg:#0b0f16; --card:#121826ee; --muted:#9ccfd8; --acc:#ffb454; --acc2:#ffd580; --text:#e6edf3; --cyan:#7de3ff; --bonus:#39ff14; --danger:#ff6b6b;
      --ring: 0 0 0 .15rem rgba(125,227,255,.35);
    }
    *{box-sizing:border-box}
    html,body{height:100%}
    body{margin:0;font-family:system-ui,Segoe UI,Roboto,Ubuntu,Arial,sans-serif;background:radial-gradient(1200px 700px at 10% 0%,#1a2240 0%,#0b0f16 55%),url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1200\" height=\"800\"><defs><radialGradient id=\"g\" cx=\"50%\" cy=\"50%\" r=\"50%\"><stop offset=\"0%\" stop-color=\"%2366ccff\" stop-opacity=\".25\"/><stop offset=\"100%\" stop-color=\"%23000\" stop-opacity=\"0\"/></radialGradient></defs><rect width=\"1200\" height=\"800\" fill=\"%23000\"/><g fill=\"url(%23g)\">'+Array(50).fill(0).map((_,i)=>`<circle cx=\"${Math.random()*1200}\" cy=\"${Math.random()*800}\" r=\"${Math.random()*3}\"/>`).join('')+'</g></svg>');color:var(--text);}
    header{position:sticky;top:0;z-index:2;backdrop-filter: blur(6px);background:#0b0f16cc;border-bottom:1px solid #2a3142}
    .wrap{max-width:1200px;margin:0 auto;padding:16px}
    h1{margin:0;font-size:20px;color:var(--cyan)}
    .grid{display:grid;gap:12px}
    @media(min-width:960px){.grid.cols-3{grid-template-columns:2fr 1fr 1fr}}
    .card{background:var(--card);border:1px solid #272e3f;border-radius:16px;padding:12px;box-shadow:0 10px 24px rgba(0,0,0,.35)}
    .row{display:grid;grid-template-columns:140px 1fr;gap:8px;align-items:center;margin:6px 0}
    label{color:var(--muted);font-size:12px}
    input,select,textarea,button{font:inherit}
    input[type=text],input[type=number],select,textarea{width:100%;padding:8px 10px;border-radius:10px;border:1px solid #334
      ;background:#0d1220;color:var(--text);outline:none}
    input:focus,select:focus,textarea:focus{box-shadow:var(--ring);border-color:#4a90e2}
    .pill{display:inline-flex;gap:6px;align-items:center;background:#0d1220;border:1px solid #334;padding:4px 8px;border-radius:999px}
    .btn{cursor:pointer;border:none;border-radius:10px;padding:9px 12px;color:#0b0f16;font-weight:600}
    .btn-acc{background:var(--acc)}.btn-acc2{background:var(--acc2)}.btn-cyan{background:var(--cyan)}.btn-danger{background:var(--danger)}
    .toolbar{display:flex;flex-wrap:wrap;gap:8px}
    table{width:100%;border-collapse:collapse}
    th,td{border-bottom:1px solid #2b3347;padding:8px;text-align:left;font-size:14px}
    th{color:#a2b2c2;font-weight:600}
    .muted{opacity:.8}
    .kpi{display:flex;gap:8px;flex-wrap:wrap}
    .kpi .chip{background:#0d1220;border:1px solid #334;padding:6px 10px;border-radius:12px}
    .right{margin-left:auto}
    .footer-note{font-size:12px;color:#9aa7b4;opacity:.9}
    dialog{border:none;border-radius:16px;padding:0;max-width:720px;width:90%}
    dialog::backdrop{background:rgba(0,0,0,.5)}
    .modal{background:#0f1526;color:var(--text);border:1px solid #2a3142;border-radius:16px}
    .modal header{position:sticky;top:0;background:#121a30;border-bottom:1px solid #2a3142;border-radius:16px 16px 0 0}
    .modal .content{padding:12px}
    code{white-space:pre-wrap;word-break:break-word}
  </style>
</head>
<body>
  <header>
    <div class="wrap" style="display:flex;gap:12px;align-items:center">
      <h1>🛡️ Scheda PG – Fantasy Web</h1>
      <span class="pill">File: <input id="saveName" placeholder="nome_scheda" style="width:160px"> <button class="btn btn-cyan" id="btnLoad">Carica</button> <button class="btn btn-acc" id="btnSave">Salva</button> <button class="btn btn-acc2" id="btnList">Elenco</button> <button class="btn" id="btnPreview">Mostra JSON</button></span>
      <span class="right"></span>
    </div>
  </header>
  <main class="wrap grid cols-3" style="margin-top:12px">
    <section class="card">
      <h3 style="margin:0 0 8px">📇 Info Personaggio</h3>
      <div id="info"></div>
      <h3 style="margin:12px 0 6px">💪 Caratteristiche</h3>
      <div id="caratt"></div>
      <div class="kpi" id="bonusKpi"></div>
      <h3 style="margin:12px 0 6px">❤️ Stato</h3>
      <div id="stati"></div>
      <div class="kpi" id="statiKpi"></div>
    </section>

    <section class="card">
      <h3 style="margin:0 0 8px">🧠 Abilità</h3>
      <div class="toolbar">
        <button class="btn btn-acc" id="addAb">Aggiungi Abilità</button>
      </div>
      <table id="tabAb">
        <thead><tr><th>Abilità</th><th>Livello</th><th></th></tr></thead>
        <tbody></tbody>
      </table>

      <h3 style="margin:12px 0 6px">🎒 Equipaggiamento</h3>
      <div class="toolbar">
        <button class="btn btn-acc2" id="addEq">Aggiungi Oggetto</button>
        <button class="btn btn-danger" id="remEq">Rimuovi selezionati</button>
      </div>
      <table id="tabEq">
        <thead><tr><th style="width:50%">Oggetto</th><th>Peso</th><th>Ingombro</th><th></th></tr></thead>
        <tbody></tbody>
      </table>
      <div class="kpi" id="sumEq"></div>

      <h3 style="margin:12px 0 6px">🪙 Borsellino</h3>
      <div class="kpi" id="borsa"></div>

      <h3 style="margin:12px 0 6px">⚔️ Armi & Difesa</h3>
      <div id="armi"></div>
    </section>

    <section class="card">
      <h3 style="margin:0 0 8px">📜 Background</h3>
      <textarea id="background" rows="10" placeholder="Storia del personaggio..."></textarea>
      <h3 style="margin:12px 0 6px">🗒️ Note</h3>
      <textarea id="note" rows="10" placeholder="Appunti di gioco..."></textarea>
      <p class="footer-note">Suggerimento: puoi salvare più versioni cambiando il <em>nome file</em>.</p>
    </section>
  </main>

  <dialog id="dlg" class="modal">
    <header class="wrap"><h3 style="margin:8px 0">Anteprima JSON</h3></header>
    <div class="content wrap"><code id="jsonOut"></code></div>
    <div class="wrap" style="display:flex;gap:8px;justify-content:flex-end;padding:12px"><button class="btn" onclick="dlg.close()">Chiudi</button></div>
  </dialog>

  <dialog id="listDlg" class="modal">
    <header class="wrap"><h3 style="margin:8px 0">File salvati</h3></header>
    <div class="content wrap" id="savedList"></div>
    <div class="wrap" style="display:flex;gap:8px;justify-content:flex-end;padding:12px"><button class="btn" onclick="listDlg.close()">Chiudi</button></div>
  </dialog>

<script>
// -------------------- MODEL --------------------
const caratteristiche = ['possensa','resistenza','atletica','manualita','percezione','sapienza','carisma'];
const livelli = ['Neofita','Pratico','Esperto','Veterano','Maestro'];
const armi = [
  'Falcetto 2D10','Accetta 4D10','Pugnale 3D10','Sica 4D10','Daga 4D10','Spada Corta 6D10','Ascia 5D10',
  'Sciabola 5D10','Spada 5D10','Spadone 6D10','Falchion 5D10','Ascia Bipenne 6D10',
  'Randello 3D10','Mazza Chiodata 6D10','Mazzafrusto 5D10','Clava 4D10','Martello da Guerra 6D10',
  'Lancia 5D10','Alabarda 6D10','Bardica 6D10',
  'Balestra piccola a 1 mano 4D10','Balestra Grande 5D10','Arco piccolo 4D10','Arco Lungo Composito 5D10',
  'Balestra multidardo a 2 mani 4D10','Frusta 4D10'
];
const difese = ['0','+1','+2','+3'];

const state = {
  info: {nome:'', livello:'', pe:'', razza:'', classe:'', eta:'', fortuna:''},
  car: Object.fromEntries(caratteristiche.map(k=>[k,''])),
  stato: {
    indice_ferite: 1, danni_ferite: 0,
    indice_stanchezza: 1, danni_stanchezza: 0,
    indice_paura: 1, danni_paura: 0
  },
  abilita: [], // [{nome, livello}]
  equip: [],   // [{oggetto, peso, ingombro}]
  borsa: {MO:0, MA:0, MR:0},
  armi: {arma1:'', arma2:''},
  difesa: {armatura:'0', scudo:'0'},
  background: '',
  note: ''
};

// -------------------- UI BUILD --------------------
function el(tag, attrs={}, children=[]) {
  const e=document.createElement(tag);
  Object.entries(attrs).forEach(([k,v])=>{
    if(k==='class') e.className=v; else if(k==='html') e.innerHTML=v; else if(k.startsWith('on')) e.addEventListener(k.slice(2),v); else e.setAttribute(k,v);
  });
  children.forEach(c=> e.appendChild(typeof c==='string'?document.createTextNode(c):c));
  return e;
}

function buildInfo(){
  const container=document.getElementById('info'); container.innerHTML='';
  const fields=[["Nome","nome"],["Livello","livello"],["PE","pe"],["Razza","razza"],["Classe","classe"],["Età","eta"],["Fortuna","fortuna"]];
  fields.forEach(([label,key])=>{
    const row=el('div',{class:'row'},[el('label',{for:key},[label]), el('input',{id:key, value:state.info[key]||'', oninput:e=>{state.info[key]=e.target.value}})]);
    container.appendChild(row);
  });
}

function buildCaratt(){
  const container=document.getElementById('caratt'); container.innerHTML='';
  caratteristiche.forEach(k=>{
    const row=el('div',{class:'row'},[
      el('label',{for:k},[k.charAt(0).toUpperCase()+k.slice(1)]),
      el('input',{id:k, type:'number', value:state.car[k], oninput:e=>{state.car[k]=e.target.value; renderBonus();}})
    ]);
    container.appendChild(row);
  })
}

function calcolaBonus(val){
  let v=parseInt(val); if(isNaN(v)) return 0; if(v<5) v=5; if(v>15) v=15;
  const map={5:0,6:-1,7:-1,8:-2,9:-2,10:-3,11:-4,12:-5,13:-6,14:-7,15:-8};
  return map[v]??0;
}

function renderBonus(){
  const box=document.getElementById('bonusKpi'); box.innerHTML='';
  caratteristiche.forEach(k=>{
    const b=calcolaBonus(state.car[k]);
    box.appendChild(el('div',{class:'chip'},[`${k}: Bonus ${b}`]));
  });
}

function calcolaStato(indice,danni,tipi){
  const maxs=[...Array(tipi.length-1).keys()].map(i=> indice*(i+1));
  for(let i=0;i<maxs.length;i++){ if(danni<=maxs[i]) return tipi[i]; }
  return tipi[tipi.length-1];
}

function buildStati(){
  const wrap=document.getElementById('stati'); wrap.innerHTML='';
  const cfg=[
    {label:'Ferite', v1:'indice_ferite', v2:'danni_ferite', tipi:['Lieve','Media','Lacerante','Profonda','Critica','Grave']},
    {label:'Affaticamento', v1:'indice_stanchezza', v2:'danni_stanchezza', tipi:['Riposato','Fresco','Affaticato','Stanco','Stremato']},
    {label:'Paura', v1:'indice_paura', v2:'danni_paura', tipi:['Quieto','Teso','Intimorito','Spaventato','Panico']},
  ];
  cfg.forEach(c=>{
    const row=el('div',{class:'row'},[
      el('label',{},[c.label+ ' indice']),
      el('input',{type:'number', value:state.stato[c.v1], oninput:e=>{state.stato[c.v1]=toInt(e.target.value,1); renderStatiKpi();}}),
    ]);
    const row2=el('div',{class:'row'},[
      el('label',{},[c.label+' danni']),
      el('input',{type:'number', value:state.stato[c.v2], oninput:e=>{state.stato[c.v2]=toInt(e.target.value,0); renderStatiKpi();}})
    ]);
    wrap.appendChild(row); wrap.appendChild(row2);
  });
}

function renderStatiKpi(){
  const box=document.getElementById('statiKpi'); box.innerHTML='';
  const cfg=[
    {key:['indice_ferite','danni_ferite'], tipi:['Lieve','Media','Lacerante','Profonda','Critica','Grave'], label:'Ferite'},
    {key:['indice_stanchezza','danni_stanchezza'], tipi:['Riposato','Fresco','Affaticato','Stanco','Stremato'], label:'Affaticamento'},
    {key:['indice_paura','danni_paura'], tipi:['Quieto','Teso','Intimorito','Spaventato','Panico'], label:'Paura'},
  ];
  cfg.forEach(c=>{
    const st = calcolaStato(toInt(state.stato[c.key[0]],1), toInt(state.stato[c.key[1]],0), c.tipi);
    box.appendChild(el('div',{class:'chip'},[`${c.label}: ${st}`]));
  })
}

function buildAbilita(){
  const tbody=document.querySelector('#tabAb tbody'); tbody.innerHTML='';
  state.abilita.forEach((a,idx)=> tbody.appendChild(renderAbRow(a,idx)) );
}

function renderAbRow(a,idx){
  const tr=el('tr');
  const td1=el('td',{},[el('input',{value:a.nome, oninput:e=>{a.nome=e.target.value;}})]);
  const sel=el('select',{}, livelli.map(l=>el('option',{value:l,selected:l===a.livello},[l])));
  sel.addEventListener('change', e=> a.livello=e.target.value);
  const td2=el('td',{},[sel]);
  const td3=el('td',{},[el('button',{class:'btn btn-danger', onclick:()=>{state.abilita.splice(idx,1); buildAbilita();}},['Rimuovi'])]);
  tr.append(td1,td2,td3); return tr;
}

function buildEquip(){
  const tbody=document.querySelector('#tabEq tbody'); tbody.innerHTML='';
  state.equip.forEach((e,idx)=> tbody.appendChild(renderEqRow(e,idx)) );
  renderSommaEq();
}

function renderEqRow(obj,idx){
  const tr=el('tr');
  const td1=el('td',{},[el('input',{value:obj.oggetto, oninput:e=>{obj.oggetto=e.target.value;}})]);
  const td2=el('td',{},[el('input',{type:'number', step:'0.01', value:obj.peso, oninput:e=>{obj.peso=e.target.value; renderSommaEq();}})]);
  const td3=el('td',{},[el('input',{type:'number', step:'0.01', value:obj.ingombro, oninput:e=>{obj.ingombro=e.target.value; renderSommaEq();}})]);
  const td4=el('td',{},[el('button',{class:'btn btn-danger', onclick:()=>{state.equip.splice(idx,1); buildEquip();}},['Rimuovi'])]);
  tr.append(td1,td2,td3,td4); return tr;
}

function renderSommaEq(){
  const peso = state.equip.reduce((s,e)=> s + (parseFloat(e.peso)||0), 0);
  const ing  = state.equip.reduce((s,e)=> s + (parseFloat(e.ingombro)||0), 0);
  const box=document.getElementById('sumEq'); box.innerHTML='';
  box.appendChild(el('div',{class:'chip'},[`Somma Peso: ${peso}`]));
  box.appendChild(el('div',{class:'chip'},[`Somma Ingombro: ${ing}`]));
}

function buildBorsa(){
  const box=document.getElementById('borsa'); box.innerHTML='';
  ['MO','MA','MR'].forEach(k=>{
    const spin=el('input',{type:'number', min:'0', value: state.borsa[k]||0, oninput:e=> state.borsa[k]=toInt(e.target.value,0)});
    box.appendChild(el('div',{class:'chip'},[k+': ', spin]));
  })
}

function buildArmi(){
  const box=document.getElementById('armi'); box.innerHTML='';
  const rows=[['Arma 1','arma1',armi],['Arma 2','arma2',armi],['Armatura','armatura',difese],['Scudo','scudo',difese]];
  rows.forEach(([label,key,opts])=>{
    const sel=el('select',{}, opts.map(o=> el('option',{value:o,selected:(key in state.armi?state.armi[key]:state.difesa[key])===o},[o]) ));
    sel.addEventListener('change', e=>{
      if(key==='armatura'|| key==='scudo') state.difesa[key]=e.target.value; else state.armi[key]=e.target.value;
    });
    const row=el('div',{class:'row'},[el('label',{},[label]),sel]);
    box.appendChild(row);
  })
}

function toInt(v,def){ const n=parseInt(v); return Number.isFinite(n)?n:def; }

// -------------------- SAVE/LOAD --------------------
function collect(){
  return {
    info: structuredClone(state.info),
    car: structuredClone(state.car),
    stato: structuredClone(state.stato),
    abilita: state.abilita.map(a=>({nome:a.nome||'', livello:a.livello||'Neofita'})),
    equip: state.equip.map(e=>({oggetto:e.oggetto||'', peso: numOrNull(e.peso), ingombro: numOrNull(e.ingombro)})),
    borsa: structuredClone(state.borsa),
    armi: structuredClone(state.armi),
    difesa: structuredClone(state.difesa),
    background: document.querySelector('#background').value,
    note: document.querySelector('#note').value
  };
}
function numOrNull(v){ const n=parseFloat(v); return Number.isFinite(n)?n:null; }

async function save(){
  const name=document.querySelector('#saveName').value.trim();
  if(!name){ alert('Inserisci un nome file (solo lettere/numeri/_-)'); return; }
  const payload = { name, data: collect() };
  const res = await fetch('/api/save', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload)});
  if(!res.ok){ const t=await res.text(); alert('Errore salvataggio: '+t); return; }
  alert('Salvato: '+name);
}

async function load(){
  const name=document.querySelector('#saveName').value.trim();
  if(!name){ alert('Inserisci un nome file da caricare'); return; }
  const res = await fetch('/api/load?name='+encodeURIComponent(name));
  if(!res.ok){ alert('File non trovato'); return; }
  const data = await res.json();
  applyData(data);
  alert('Caricato: '+name);
}

async function listSaves(){
  const res = await fetch('/api/list');
  const arr = await res.json();
  const box=document.getElementById('savedList'); box.innerHTML='';
  if(!arr.length){ box.textContent='Nessun file salvato.'; listDlg.showModal(); return; }
  const ul=el('ul');
  arr.forEach(n=>{
    const li=el('li',{},[n,' ', el('button',{class:'btn btn-cyan', onclick:()=>{document.querySelector('#saveName').value=n; load(); listDlg.close();}},['Carica'])]);
    ul.appendChild(li);
  });
  box.appendChild(ul); listDlg.showModal();
}

function applyData(d){
  Object.assign(state.info, d.info||{});
  Object.assign(state.car, d.car||{});
  Object.assign(state.stato, d.stato||{});
  state.abilita = (d.abilita||[]).map(a=>({nome:a.nome, livello:a.livello}))
  state.equip   = (d.equip||[]).map(e=>({oggetto:e.oggetto, peso:e.peso, ingombro:e.ingombro}))
  Object.assign(state.borsa, d.borsa||{});
  Object.assign(state.armi, d.armi||{});
  Object.assign(state.difesa, d.difesa||{});
  document.querySelector('#background').value = d.background||'';
  document.querySelector('#note').value = d.note||'';
  // rebuild
  buildInfo(); buildCaratt(); renderBonus(); buildStati(); renderStatiKpi(); buildAbilita(); buildEquip(); buildBorsa(); buildArmi();
}

// -------------------- INIT --------------------
function mount(){
  buildInfo(); buildCaratt(); renderBonus(); buildStati(); renderStatiKpi(); buildAbilita(); buildEquip(); buildBorsa(); buildArmi();
  document.getElementById('addAb').onclick=()=>{ state.abilita.push({nome:'', livello:'Neofita'}); buildAbilita(); };
  document.getElementById('addEq').onclick=()=>{ state.equip.push({oggetto:'', peso:'', ingombro:''}); buildEquip(); };
  document.getElementById('remEq').onclick=()=>{ const n=state.equip.length; if(!n) return; state.equip.pop(); buildEquip(); };
  document.getElementById('btnSave').onclick=save;
  document.getElementById('btnLoad').onclick=load;
  document.getElementById('btnList').onclick=listSaves;
  document.getElementById('btnPreview').onclick=()=>{ const j=JSON.stringify(collect(), null, 2); jsonOut.textContent=j; dlg.showModal(); };
}

window.addEventListener('DOMContentLoaded', mount);
</script>
</body></html>
"""

@app.get('/')
def index():
    return render_template_string(INDEX_HTML)

# ---------------------- API ------------------------
@app.get('/api/load')
def api_load():
    name = request.args.get('name','').strip()
    if not SAFE_NAME.match(name):
        return make_response('Nome file non valido', 400)
    path = os.path.join(SAVES_DIR, f'{name}.json')
    if not os.path.exists(path):
        return make_response('Not found', 404)
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return jsonify(data)

@app.post('/api/save')
def api_save():
    try:
        payload = request.get_json(force=True)
    except Exception:
        return make_response('JSON non valido', 400)
    name = (payload or {}).get('name','').strip()
    data = (payload or {}).get('data', {})
    if not SAFE_NAME.match(name):
        return make_response('Nome file non valido. Usa solo lettere, numeri, _ e - (max 64).', 400)
    # Sanitize: ensure no NaN/Inf values in numbers
    def clean(obj):
        if isinstance(obj, dict):
            return {k: clean(v) for k,v in obj.items()}
        if isinstance(obj, list):
            return [clean(v) for v in obj]
        if isinstance(obj, float):
            if not (obj == obj) or obj in (float('inf'), float('-inf')):
                return None
            return obj
        return obj
    data = clean(data)
    path = os.path.join(SAVES_DIR, f'{name}.json')
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    return jsonify({'ok': True})

@app.get('/api/list')
def api_list():
    files = []
    for fn in os.listdir(SAVES_DIR):
        if fn.endswith('.json'):
            files.append(os.path.splitext(fn)[0])
    files.sort()
    return jsonify(files)

if __name__ == '__main__':
    print('💠 Avvio Fantasy GDR Web su http://127.0.0.1:5000')
    app.run(host='127.0.0.1', port=5000, debug=False)
