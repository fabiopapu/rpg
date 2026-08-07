# -*- coding: utf-8 -*-
"""
Osserva Carburanti — versione per PythonAnywhere (piano free).

PythonAnywhere free blocca l'accesso diretto a mimit.gov.it (non è in
whitelist) e anche i proxy CORS gratuiti si sono rivelati inaffidabili.
Soluzione: un workflow GitHub Actions (.github/workflows/aggiorna-prezzi.yml)
scarica ogni giorno i CSV ufficiali del MIMIT e li salva nella repo. Questo
server legge quei file già pronti da raw.githubusercontent.com, dominio
sempre whitelistato ovunque — zero proxy, zero instabilità.

Fonti ufficiali (originali, scaricate quotidianamente dal workflow):
- Prezzi medi regionali:      MediaRegionaleStradale.csv
- Prezzi medi autostrade:     MediaNazionaleAutostradale.csv
"""

import base64
import json
import re
import sqlite3
import threading
import time
from datetime import datetime

import requests
from flask import Flask, jsonify, render_template, Response, request
from pywebpush import webpush, WebPushException

app = Flask(__name__)


# Icone dell'app (PWA), incorporate come base64 per non dover caricare
# file extra su PythonAnywhere: basta sostituire questo unico file.
_ICONA_192_B64 = "iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAIAAADdvvtQAAADzUlEQVR4nO3dvW3bUBSG4esgXbRKJjGQtGmySUpPEjduU2SSrKIBUggRFP9S/iTyHPJ5KsOwhQvw9dGlRNE3n778HPBeH5ZeAL0JiIiAiAiIiICICIiIgIgIiIiAiAiIiICICIiIgIgIiIiAiAiIiICICIiIgIgIiIiAiAiIiICICIiIgIgIiIiAiAiIiICICIiIgIgIiIiAiAiIiICICIiIgIgIiIiAiAiIiICIfFx6ARez//V96SWM3df7pZcwt5vu/+qgQjePbCqj3gEVrOdoIxk13gNVrmeUX96ldA2oxeFpschQy4AaHZhGS32ffgG1OyTtFnyWfgFRioCINAuo6dNB02VP0SwgqhEQEQERERARAREREJH1XA90arZ3wld8fj7RCifQnNdR7L7eb+SyjZesLaBFDueWG1pbQMxMQEQERERARNZ5Gn+0v3u4+GPufny7+GP2ZQIRERARAREREBEBEVn5WZgzpmszgYgIiIiAiAiIiICICIiIgIisLaBFrnLf8qX1awuIma0woDnnwf7X9y2Pn9HuLq0bP1rPWvYzISucQMxJQEQERGTll3Nswem+cP79kAlEREBEBEREQERsomdywe1tqVdTTSAiAiIiICICIiIgIgIiIiAiAiIiICICIiIgIgIiIiAiAiIiICICIiIgIgIiIiAiAiIiICICIiKgZkp9pmcIqJdq9QwfLGzklXoWvEmZCdRDwdlzIKDqptzHc8G8BFTaxDIWfAqzB6prSj3L3qJ1mEBltahnCGhB+7uH578/7eblFeoZAlrKoZ6nDdXf9DxiD1RIo8FzZAIt4HTwHL/uWM8wgSrY3z2Mz7/f/LGC9QwTaH7P753/3L7+WzXrGSZQfWXTOTCBZvXSqfsYzw+h4vUMAdXyf0P16xkCmtNr4+foX0Mt6hn2QAV1SefABJrJpPFz5k9WIKBZvHWW/kijhgRUVJeGBHR9Z46fXgRUV4shJKAry8ZP/Yacxtey+/Ft6SWcR0DX9OZbpN1yeUpAs1pBMY8I6Gr+3J5e5dPr9eXpbKKvZsI1YisgICICIiIgIgIiIiAizQJqejLcdNlTNAuIavoF1O6vud2Cz9IvIEppGVCjv+lGS32flgGNJgemxSJDXQMa5Q9P8eVdys2nLz+XXkOk4P1vN5LOQcWACjZxJStIrfFTGBUIiIiAiAiIiICICIiIgIgIiIiAiAiIiICIVHwvjEZMICICIiIgIgIiIiAiAiIiICICIiIgIgIiIiAiAiIiICICIiIgIgIiIiAiAiIiICICIiIgIgIi8herRrGJDbp+mwAAAABJRU5ErkJggg=="
_ICONA_512_B64 = "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAAK3UlEQVR4nO3dMW4cRxqAUWqhTLyKTyJASp3wJg59EjFxysAn0VV4gA0kGCutSc0Mu7u66nsvMmBIKEwB/9dVQ7beffj05Q6Anv+MXgAAYwgAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAEDU+9EL4Lyenx5GL2Ep958fRy8BfvDuw6cvo9fAiRj6xxADzkAAuLsz98dRAgYSgDqj/wxkgCEEoMvoPxsZ4GB+CijK9D8hm8LBnAByTJnzcxTgGE4ALab/FGwTxxCAEGNlIjaLAwhAhYEyHVvG3gQgwSiZlI1jVwKwPkNkaraP/QjA4oyPBdhEdiIAAFECsDJPjsuwlexBAJZlZCzGhrI5AQCIEoA1eVpckm1lWwIAECUAC/KcuDCby4YEACBKAACiBGA1rgiWZ4vZigAARAkAQJQAAEQJwFLcDkfYaDYhAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQ9X70ApjY/efH0Us4C+9nZkYCwC2M/p/884EoARNxBcTVTP9X+HCYiABwHQPul3xEzEIAuILRdiEfFFMQAC5lqF3Fx8X5CQBAlABwEc+zN/ChcXICABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFH+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"


# Sostituisci "fabiopapu/carburanti" con il tuo utente/repo GitHub reali,
# e "main" con il nome del ramo se diverso.
REPO_GITHUB = "fabiopapu/carburanti"
RAMO_GITHUB = "main"
BASE_RAW = f"https://raw.githubusercontent.com/{REPO_GITHUB}/{RAMO_GITHUB}/dati"

URL_REGIONI = f"{BASE_RAW}/prezzi_regionali.csv"
URL_AUTOSTRADE = f"{BASE_RAW}/prezzi_autostrade.csv"
URL_IMPIANTI = f"{BASE_RAW}/impianti.json"
URL_RISCHIO = f"{BASE_RAW}/rischio.json"
URL_NOTIZIE = f"{BASE_RAW}/notizie.json"

# --- Notifiche push: quando il prezzo scende sotto la soglia scelta dall'utente ---
# Chiavi VAPID: identificano il nostro server verso i servizi push del browser
# (FCM per Chrome, Mozilla Push per Firefox, ecc.). Generate una volta sola,
# restano sempre le stesse: la privata resta sul server, la pubblica va anche
# nel frontend per la sottoscrizione.
VAPID_PUBLIC_KEY = "BGlMrA5Z58IVUE2elaZLs4-m7kWbf8x9nwlc18G1mCMcmSlyl9m3SiiCSzwEfXKmhXoRcTT3P3iZyvhW1xLWVfk"
VAPID_PRIVATE_KEY = "Z8WdU5Mom0VE8p4RY8TKjkpj5G3k0_vH8PqeqSkcddE"
VAPID_CLAIMS = {"sub": "mailto:papurellofabio@gmail.com"}

PERCORSO_DB = "iscrizioni_notifiche.db"


def db_connessione():
    conn = sqlite3.connect(PERCORSO_DB)
    conn.row_factory = sqlite3.Row
    return conn


def db_inizializza():
    with db_connessione() as conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS iscrizioni (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                endpoint TEXT NOT NULL UNIQUE,
                sottoscrizione_json TEXT NOT NULL,
                regione TEXT NOT NULL,
                carburante TEXT NOT NULL,
                soglia REAL NOT NULL,
                sotto_soglia INTEGER NOT NULL DEFAULT 0,
                creato_il TEXT NOT NULL
            )
        """)
        # Iscrizione separata, non legata a una regione/soglia specifica:
        # avvisa solo per variazioni nazionali GRANDI (default 15%), quindi
        # per costruzione è rara — non invasiva, non quotidiana.
        conn.execute("""
            CREATE TABLE IF NOT EXISTS iscrizioni_variazioni (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                endpoint TEXT NOT NULL UNIQUE,
                sottoscrizione_json TEXT NOT NULL,
                creato_il TEXT NOT NULL,
                ultima_notifica_data TEXT
            )
        """)
        # Memoria minima (un solo valore, non uno storico) del prezzo medio
        # nazionale dell'ultimo controllo, per rilevare variazioni grandi.
        conn.execute("""
            CREATE TABLE IF NOT EXISTS prezzo_precedente (
                carburante TEXT PRIMARY KEY,
                prezzo REAL NOT NULL,
                data TEXT NOT NULL
            )
        """)
        conn.commit()


db_inizializza()

DURATA_CACHE_SECONDI = 3 * 3600  # il MIMIT/il workflow pubblicano una volta al giorno
DURATA_CACHE_IMPIANTI_SECONDI = 6 * 3600  # file pesante, aggiorna meno spesso
TIMEOUT_HTTP = 20
TIMEOUT_HTTP_IMPIANTI = 40  # il file impianti è più grosso, serve più tempo
HEADERS = {"User-Agent": "OsservaCarburanti/1.0 (dati open IODL 2.0)"}

_cache = {"dati": None, "timestamp": 0.0}
_cache_impianti = {"dati": None, "timestamp": 0.0}
_cache_rischio = {"dati": None, "timestamp": 0.0}
_cache_notizie = {"dati": None, "timestamp": 0.0}
_lock = threading.Lock()
_lock_impianti = threading.Lock()
_lock_rischio = threading.Lock()
_lock_notizie = threading.Lock()


def _scarica(url):
    r = requests.get(url, headers=HEADERS, timeout=TIMEOUT_HTTP)
    r.raise_for_status()
    r.encoding = r.encoding or "utf-8"
    return r.text


def _parse_csv_medie(testo):
    """Formato: 'Aggiornamento GG-MM-AAAA' poi righe REGIONE;TIPOLOGIA;EROGAZIONE;PREZZO
    (per le autostrade manca la colonna REGIONE)."""
    data = None
    valori = {}
    for riga in testo.splitlines():
        riga = riga.strip()
        if not riga:
            continue
        m = re.match(r"aggiornamento\s+(\d{2}-\d{2}-\d{4})", riga, re.I)
        if m:
            data = m.group(1)
            continue
        campi = riga.split(";") if ";" in riga else riga.split("|")
        campi = [c.strip() for c in campi]
        if len(campi) < 3:
            continue
        if len(campi) >= 4:
            regione, tipologia, _erog, prezzo_str = campi[:4]
        else:
            regione, tipologia, _erog, prezzo_str = "_nazionale", campi[0], campi[1], campi[2]
        cat_l = tipologia.lower()
        if "benzina" in cat_l:
            chiave = "benzina"
        elif "gasolio" in cat_l:
            chiave = "gasolio"
        elif "gpl" in cat_l:
            chiave = "gpl"
        elif "metano" in cat_l:
            chiave = "metano"
        else:
            continue
        try:
            prezzo = float(prezzo_str.replace(",", "."))
        except ValueError:
            continue
        if prezzo <= 0:
            continue
        valori.setdefault(regione, {})[chiave] = prezzo
    return data, valori


def _elabora():
    testo_reg = _scarica(URL_REGIONI)
    data_reg, regioni = _parse_csv_medie(testo_reg)

    autostrade, data_auto = None, None
    try:
        testo_auto = _scarica(URL_AUTOSTRADE)
        data_auto, valori_auto = _parse_csv_medie(testo_auto)
        autostrade = valori_auto.get("_nazionale") or (next(iter(valori_auto.values()), None))
    except Exception:
        pass  # le autostrade sono un extra: se falliscono non blocco il resto

    return {
        "dataAggiornamento": data_reg,
        "regioni": regioni,
        "autostrade": autostrade,
        "dataAutostrade": data_auto,
        "aggiornatoAlle": datetime.now().strftime("%d/%m/%Y %H:%M"),
    }


def dati_correnti():
    with _lock:
        scaduti = (time.time() - _cache["timestamp"]) > DURATA_CACHE_SECONDI
        if _cache["dati"] is not None and not scaduti:
            return _cache["dati"], None
        try:
            dati = _elabora()
            if not dati["regioni"]:
                raise ValueError("CSV regionale vuoto o non riconosciuto")
            _cache.update(dati=dati, timestamp=time.time())
            return dati, None
        except Exception as e:
            return _cache["dati"], str(e)  # se ho dati vecchi li servo comunque


def impianti_correnti():
    with _lock_impianti:
        scaduti = (time.time() - _cache_impianti["timestamp"]) > DURATA_CACHE_IMPIANTI_SECONDI
        if _cache_impianti["dati"] is not None and not scaduti:
            return _cache_impianti["dati"], None
        try:
            r = requests.get(URL_IMPIANTI, headers=HEADERS, timeout=TIMEOUT_HTTP_IMPIANTI)
            r.raise_for_status()
            lista = r.json()
            if not isinstance(lista, list) or not lista:
                raise ValueError("impianti.json vuoto o non valido")
            _cache_impianti.update(dati=lista, timestamp=time.time())
            return lista, None
        except Exception as e:
            return _cache_impianti["dati"], str(e)


def rischio_corrente():
    with _lock_rischio:
        scaduti = (time.time() - _cache_rischio["timestamp"]) > (6 * 3600)
        if _cache_rischio["dati"] is not None and not scaduti:
            return _cache_rischio["dati"], None
        try:
            r = requests.get(URL_RISCHIO, headers=HEADERS, timeout=TIMEOUT_HTTP)
            r.raise_for_status()
            dati = r.json()
            _cache_rischio.update(dati=dati, timestamp=time.time())
            return dati, None
        except Exception as e:
            return _cache_rischio["dati"], str(e)


def notizie_correnti():
    with _lock_notizie:
        scaduti = (time.time() - _cache_notizie["timestamp"]) > (6 * 3600)
        if _cache_notizie["dati"] is not None and not scaduti:
            return _cache_notizie["dati"], None
        try:
            r = requests.get(URL_NOTIZIE, headers=HEADERS, timeout=TIMEOUT_HTTP)
            r.raise_for_status()
            dati = r.json()
            _cache_notizie.update(dati=dati, timestamp=time.time())
            return dati, None
        except Exception as e:
            return _cache_notizie["dati"], str(e)


@app.after_request
def niente_cache(risposta):
    # Impedisce a browser e app installate (PWA) di tenere in cache pagine
    # vecchie. Senza questo, un'app già installata può continuare a mostrare
    # una versione superata del sito anche dopo un aggiornamento, finché
    # l'utente non la disinstalla — cosa che ovviamente non possiamo chiedere
    # a tutti ogni volta che cambiamo qualcosa.
    risposta.headers["Cache-Control"] = "no-store, no-cache, must-revalidate, max-age=0"
    risposta.headers["Pragma"] = "no-cache"
    risposta.headers["Expires"] = "0"
    return risposta


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/privacy")
def privacy():
    html = """<!DOCTYPE html>
<html lang="it"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Informativa Privacy | Osserva Carburanti</title>
<style>
body{font-family:system-ui,sans-serif;max-width:720px;margin:40px auto;padding:0 20px;line-height:1.6;color:#222}
h1{font-size:24px} h2{font-size:18px;margin-top:28px}
a{color:#0b4ea2}
</style></head><body>
<h1>Informativa Privacy</h1>
<p>Ultimo aggiornamento: luglio 2026.</p>

<h2>Chi tratta i tuoi dati</h2>
<p>Osserva Carburanti è un progetto indipendente gestito da un titolare individuale. Per qualsiasi richiesta relativa alla privacy, puoi scrivere a: papurellofabio@gmail.com</p>

<h2>Dati sui prezzi carburanti</h2>
<p>I prezzi mostrati provengono da dati pubblici ufficiali del Ministero delle Imprese e del Made in Italy (MIMIT). Non raccogliamo alcun dato personale per mostrarti questi prezzi: puoi consultare il sito senza fornire nessuna informazione.</p>

<h2>Notifiche push</h2>
<p>Se scegli di attivare una notifica di prezzo, salviamo:</p>
<ul>
<li>Un identificativo tecnico del tuo dispositivo/browser (necessario al servizio di notifiche del browser stesso, es. Google o Mozilla, per recapitare il messaggio) — non è collegato al tuo nome, email o altri dati identificativi diretti</li>
<li>La regione, il carburante e la soglia di prezzo che hai scelto</li>
</ul>
<p>Questi dati sono usati esclusivamente per mandarti la notifica richiesta. Non vengono venduti, condivisi con terzi per marketing, né usati per altri scopi.</p>
<p><b>Puoi disattivare la notifica in qualsiasi momento</b> con il pulsante "Disattiva le notifiche" nella pagina principale del sito, oppure revocando il permesso di notifiche dalle impostazioni del tuo browser. Alla disattivazione, il tuo identificativo viene cancellato dal nostro database.</p>

<h2>Google Analytics</h2>
<p>Il sito usa Google Analytics per capire in forma aggregata e anonima quante persone lo visitano. Questo servizio può impostare cookie secondo le policy di Google. Puoi consultare l'informativa di Google su <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>.</p>

<h2>Google AdSense</h2>
<p>Il sito mostra pubblicità tramite Google AdSense, che può utilizzare cookie e identificativi per la personalizzazione degli annunci secondo le policy di Google, consultabili su <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener">policies.google.com/technologies/ads</a>.</p>

<h2>I tuoi diritti</h2>
<p>Hai diritto di accesso, rettifica, cancellazione e opposizione al trattamento dei tuoi dati, secondo il Regolamento UE 2016/679 (GDPR). Per esercitarli, scrivi a papurellofabio@gmail.com.</p>

<p style="margin-top:40px"><a href="/">← Torna al sito</a></p>
</body></html>"""
    return Response(html, mimetype="text/html")


@app.route("/ads.txt")
def ads_txt():
    # Google richiede questo file per verificare che il sito sia autorizzato
    # a mostrare i suoi annunci. Formato standard IAB: dominio venditore,
    # ID editore (il tuo pub-id AdSense), tipo di rapporto, ID certificazione.
    testo = "google.com, pub-1619303136988981, DIRECT, f08c47fec0942fa0\n"
    return Response(testo, mimetype="text/plain")


@app.route("/robots.txt")
def robots():
    testo = """User-agent: *
Allow: /

Sitemap: https://carburanti.pythonanywhere.com/sitemap.xml
"""
    return Response(testo, mimetype="text/plain")


@app.route("/sitemap.xml")
def sitemap():
    oggi = datetime.now().strftime("%Y-%m-%d")
    xml = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://carburanti.pythonanywhere.com/</loc>
    <lastmod>{oggi}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
"""
    return Response(xml, mimetype="application/xml")


@app.route("/manifest.json")
def manifest():
    return jsonify({
        "id": "/",
        "name": "Osserva Carburanti",
        "short_name": "Carburanti",
        "description": "Prezzi carburanti in tempo reale, regione per regione",
        "start_url": "/",
        "display": "standalone",
        "background_color": "#eef0ee",
        "theme_color": "#0b4ea2",
        "icons": [
            {"src": "/icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any"},
            {"src": "/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any"},
        ],
    })


@app.route("/icon-192.png")
def icona_192():
    return Response(base64.b64decode(_ICONA_192_B64), mimetype="image/png")


@app.route("/icon-512.png")
def icona_512():
    return Response(base64.b64decode(_ICONA_512_B64), mimetype="image/png")


@app.route("/service-worker.js")
def service_worker():
    # Oltre a rendere il sito installabile, gestisce ora la ricezione delle
    # notifiche push vere: quando arriva una notifica dal server, la mostra;
    # quando l'utente ci clicca sopra, apre il sito.
    js = """
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', (evento) => {
  evento.respondWith(fetch(evento.request));
});

self.addEventListener('push', (evento) => {
  let dati = {};
  try { dati = evento.data.json(); } catch (e) { dati = { titolo: 'Osserva Carburanti', corpo: evento.data ? evento.data.text() : '' }; }
  const opzioni = {
    body: dati.corpo || '',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    data: { url: dati.url || '/' },
  };
  evento.waitUntil(self.registration.showNotification(dati.titolo || 'Osserva Carburanti', opzioni));
});

self.addEventListener('notificationclick', (evento) => {
  evento.notification.close();
  const url = (evento.notification.data && evento.notification.data.url) || '/';
  evento.waitUntil(clients.openWindow(url));
});
"""
    return Response(js, mimetype="application/javascript")


@app.route("/api/prezzi")
def api_prezzi():
    dati, errore = dati_correnti()
    if dati is None:
        return jsonify({"errore": errore or "dati non disponibili"}), 503
    risposta = dict(dati)
    if errore:
        risposta["avviso"] = "Aggiornamento odierno non riuscito, mostro l'ultima rilevazione disponibile."
    return jsonify(risposta)


@app.route("/api/impianti")
def api_impianti():
    lista, errore = impianti_correnti()
    if lista is None:
        return jsonify({"errore": errore or "dati non disponibili"}), 503
    risposta = {"impianti": lista}
    if errore:
        risposta["avviso"] = "Aggiornamento odierno non riuscito, mostro l'ultima rilevazione disponibile."
    return jsonify(risposta)


@app.route("/api/dato-del-giorno")
def api_dato_del_giorno():
    """Calcola al volo la regione più economica e quella più cara d'Italia
    per il carburante richiesto — contenuto pensato per essere mostrato/
    condiviso senza scriverlo a mano.

    Uso apposta i dati REGIONALI ufficiali (la stessa fonte già usata in
    tutto il resto del sito), non i singoli distributori: su 22.000
    inserimenti manuali da parte dei gestori càpitano errori di battitura
    (es. "0,99" invece di "1,99") o casi particolari legittimi ma estremi
    (le isole minori hanno prezzi realmente più alti per costi di
    trasporto) — impossibile distinguere in automatico un errore da un
    prezzo vero e anomalo. La media regionale, calcolata dal Ministero su
    centinaia di distributori insieme, non ha questo problema: un singolo
    errore si perde nella media, non diventa mai il falso "record d'Italia"."""
    carburante = request.args.get("carburante", "benzina")
    if carburante not in ("benzina", "gasolio", "gpl", "metano"):
        return jsonify({"errore": "carburante non valido"}), 400

    dati, errore = dati_correnti()
    if not dati or not dati.get("regioni"):
        return jsonify({"errore": errore or "dati non disponibili"}), 503

    con_prezzo = {reg: v[carburante] for reg, v in dati["regioni"].items() if carburante in v}
    if not con_prezzo:
        return jsonify({"errore": f"nessun dato per {carburante} oggi"}), 503

    regione_economica = min(con_prezzo, key=con_prezzo.get)
    regione_cara = max(con_prezzo, key=con_prezzo.get)

    return jsonify({
        "carburante": carburante,
        "piu_economico": {"regione": regione_economica, "prezzo": con_prezzo[regione_economica]},
        "piu_caro": {"regione": regione_cara, "prezzo": con_prezzo[regione_cara]},
        "n_regioni_confrontate": len(con_prezzo),
    })


@app.route("/api/rischio")
def api_rischio():
    dati, errore = rischio_corrente()
    if dati is None:
        return jsonify({"errore": errore or "dati non disponibili"}), 503
    return jsonify(dati)


@app.route("/api/notizie")
def api_notizie():
    dati, errore = notizie_correnti()
    if dati is None:
        return jsonify({"errore": errore or "dati non disponibili"}), 503
    return jsonify(dati)


@app.route("/api/vapid-public-key")
def api_vapid_public_key():
    return jsonify({"chiave": VAPID_PUBLIC_KEY})


@app.route("/api/iscrivi-notifica", methods=["POST"])
def api_iscrivi_notifica():
    dati = request.get_json(force=True, silent=True) or {}
    sottoscrizione = dati.get("sottoscrizione")
    regione = (dati.get("regione") or "").strip()
    carburante = (dati.get("carburante") or "").strip().lower()
    soglia = dati.get("soglia")

    if not sottoscrizione or not sottoscrizione.get("endpoint"):
        return jsonify({"errore": "sottoscrizione mancante o incompleta"}), 400
    if not regione or carburante not in ("benzina", "gasolio", "gpl", "metano"):
        return jsonify({"errore": "regione o carburante non validi"}), 400
    try:
        soglia = float(soglia)
        if soglia <= 0 or soglia > 10:
            raise ValueError
    except (TypeError, ValueError):
        return jsonify({"errore": "soglia di prezzo non valida"}), 400

    endpoint = sottoscrizione["endpoint"]
    with db_connessione() as conn:
        # Se questo browser era già iscritto (stesso endpoint), aggiorno i
        # suoi parametri invece di creare una seconda iscrizione duplicata.
        conn.execute("""
            INSERT INTO iscrizioni (endpoint, sottoscrizione_json, regione, carburante, soglia, sotto_soglia, creato_il)
            VALUES (?, ?, ?, ?, ?, 0, ?)
            ON CONFLICT(endpoint) DO UPDATE SET
                sottoscrizione_json = excluded.sottoscrizione_json,
                regione = excluded.regione,
                carburante = excluded.carburante,
                soglia = excluded.soglia,
                sotto_soglia = 0
        """, (endpoint, json.dumps(sottoscrizione), regione, carburante, soglia,
              datetime.now().strftime("%Y-%m-%d %H:%M:%S")))
        conn.commit()

    return jsonify({"ok": True})


@app.route("/api/disiscrivi-notifica", methods=["POST"])
def api_disiscrivi_notifica():
    dati = request.get_json(force=True, silent=True) or {}
    endpoint = (dati.get("sottoscrizione") or {}).get("endpoint")
    if not endpoint:
        return jsonify({"errore": "endpoint mancante"}), 400
    with db_connessione() as conn:
        conn.execute("DELETE FROM iscrizioni WHERE endpoint = ?", (endpoint,))
        conn.commit()
    return jsonify({"ok": True})


@app.route("/api/iscrivi-variazioni", methods=["POST"])
def api_iscrivi_variazioni():
    dati = request.get_json(force=True, silent=True) or {}
    sottoscrizione = dati.get("sottoscrizione")
    if not sottoscrizione or not sottoscrizione.get("endpoint"):
        return jsonify({"errore": "sottoscrizione mancante o incompleta"}), 400

    endpoint = sottoscrizione["endpoint"]
    with db_connessione() as conn:
        conn.execute("""
            INSERT INTO iscrizioni_variazioni (endpoint, sottoscrizione_json, creato_il)
            VALUES (?, ?, ?)
            ON CONFLICT(endpoint) DO UPDATE SET sottoscrizione_json = excluded.sottoscrizione_json
        """, (endpoint, json.dumps(sottoscrizione), datetime.now().strftime("%Y-%m-%d %H:%M:%S")))
        conn.commit()
    return jsonify({"ok": True})


@app.route("/api/disiscrivi-variazioni", methods=["POST"])
def api_disiscrivi_variazioni():
    dati = request.get_json(force=True, silent=True) or {}
    endpoint = (dati.get("sottoscrizione") or {}).get("endpoint")
    if not endpoint:
        return jsonify({"errore": "endpoint mancante"}), 400
    with db_connessione() as conn:
        conn.execute("DELETE FROM iscrizioni_variazioni WHERE endpoint = ?", (endpoint,))
        conn.commit()
    return jsonify({"ok": True})


if __name__ == "__main__":
    app.run(debug=True)
