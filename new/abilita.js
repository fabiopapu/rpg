console.log("✅ abilita.js caricato correttamente");

// --- Nomi delle abilità per classe ---
const ABILITA_CLASSI = {
  "Animista": [
    "Armi Bianche",
    "Cantastorie",
    "Canto Emozionale",
    "Confusione Sonora",
    "Conoscenze Storiche & Geografiche",
    "Custode dell’Eco",
    "Danza",
    "Giocoliere",
    "Guarigione Magica",
    "Lingue",
    "Pittura Sensoriale",
    "Requiem",
    "Suggestione",
    "Pittura-Scultura"
  ],
  
  "Canaglia": [
  "Acrobazia",
  "Armi Bianche",
  "Armi da Tiro",
  "Attore",
  "Borseggio",
  "Killer",
  "Maestro di Veleni",
  "Manipolazione e Raggiro",
  "Prestidigitazione",
  "Sotterfugio",
  "Spia",
  "Scassinare",
  "Trafficante"
],

  "Combattente": [
  "Armi Bianche",
  "Armi da Tiro",
  "Autoritario",
  "Cavaliere",
  "Devastatore",
  "Freddo",
  "Grido di Battaglia",
  "Guardia Implacabile",
  "Maestro d’Armi",
  "Sopravvivenza",
  "Sentinella",
  "Tenace"
],

 "Gitano": [
  "Acrobazia",
  "Armi Bianche",
  "Armi da Tiro",
  "Attore",
  "Artigianato Zingaro",
  "Borseggio",
  "Danza",
  "Furtività",
  "Ipnosi",
  "Lettura della Mano",
  "Prestidigitazione",
  "Scassinare",
  "Sopravvivenza",
  "Sussurri dell’Oltretomba",
  "Tarocchi",
  "Ventriloquo"
],
"Runvald": [
  "Armi Bianche",
  "Balestriere",
  "Conoscenze Runiche",
  "Disinnescatore",
  "Freddo",
  "Guardia Implacabile",
  "Maestro d’Armi",
  "Sentiero del Minatore",
  "Tenace",
  "Trafficante",
  "Travolgere"
],
"Sciamano": [
  "Armi Bianche",
  "Botanica",
  "Connessione con il Fuoco",
  "Connessione con l’Acqua",
  "Connessione con l’Aria",
  "Connessione con la Luna e le Stelle",
  "Connessione con la Terra",
  "Danza delle Ombre",
  "Divinazione",
  "Guarigione Magica",
],

"Sentinella-Scout": [
  "Armi da Tiro",
  "Acrobazia",
  "Armi Bianche",
  "Botanica",
  "Cacciatore di Taglie",
  "Empatia Animale",
  "Furtività",
  "Mimetizzazione",
  "Resistenza ai Veleni",
  "Sentinella",
  "Sopravvivenza",
  "Tiratore Scelto"
],

"Stregone": [
  "Alchimia",
  "Armi Bianche",
  "Astralismo",
  "Conoscenza delle Lingue",
  "Connessione con il Fuoco",
  "Conoscenze Runiche",
  "Conoscenze Storiche & Geografiche",
  "Cronomanzia",
  "Elettrostaticità",
  "Flusso",
  "Illusione",
  "Medicina",
  "Mentalismo",
  "Quintessenza",
  "Negromanzia",
  "Telecinesi",
  "Tenebra",
  "Trasmutazione"
],

  "Templare": [
  "Armi Bianche",
  "Cavaliere Templare",
  "Connessione con la Luce",
  "Consacrare",
  "Essenza",
  "Freddo",
  "Giuramento",
  "Guardia Implacabile",
  "Maestro d'Armi",
  "Medicina",
  "Meditazione",
  "Resistenza alla Magia",
  "Tenace",
  ],
  "Scegli classe":[]


  
};


// --- Descrizioni per classe → abilità → livello ---
const DESCRIZIONI_ABILITA = {
  "Animista": {
    "Armi Bianche": {
      "Neofita": `Il personaggio è in grado di utilizzare con facilità le armi da taglio, eliminando il malus per la mancanza di competenza nel tipo di arma impugnata.
Tuttavia, i personaggi appartenenti a classi specifiche (il Combattente, il Runvald, il Garù, l’Argoniano e il Templare) possono utilizzare anche armi generiche, armi ad asta e armi da impatto senza penalità.
Se il personaggio padroneggia esclusivamente le armi da taglio, l’uso di armi di altro tipo (come armi da impatto, da tiro o di altra natura) comporta un malus automatico di +1D6 ai tiri.`,

      "Pratico": `Il personaggio acquisisce la capacità di essere ambidestro, consentendogli di impugnare due armi di taglia media (ad esempio, due spade).
Può utilizzare entrambe le armi nello stesso turno, scegliendo di colpire un singolo nemico o due nemici distinti.
• Attacco su un singolo nemico: se entrambi i colpi riescono, il danno si arricchisce di un bonus di +1D10 oltre al danno base (M.S.).
• Attacco su due nemici diversi: si calcolano i danni separatamente per ciascun bersaglio.
Inoltre, il personaggio è in grado di lanciare coltelli con precisione fino a 20 metri e giavellotti o lance fino a 80 metri, mantenendo i danni standard delle armi utilizzate.`,

      "Esperto": `Il personaggio amplia la propria competenza, acquisendo la capacità di usare con efficacia armi da impatto a una mano, oltre a quelle da taglio.
• Classi e Razze avanzate (Garù, Guerriero Runico): Questi personaggi possono impugnare con disinvoltura un’arma a due mani da taglio (es. spadone) e da impatto in una sola mano, oppure brandire contemporaneamente un’arma a due mani e un’arma a una mano.
• Se il personaggio utilizza due armi, ottiene un bonus +1 e applica la regola dello scudo in caso di fallimento, aumentando le probabilità di successo o difesa.`,

      "Veterano": `Il personaggio sviluppa una tecnica avanzata che gli permette di ridurre di 1 punto la protezione offerta dalle armature (comprese quelle naturali) quando utilizza un’arma da taglio.
Se utilizza un’arma da impatto, la riduzione della protezione aumenta ulteriormente di 1 punto.`,

      "Maestro": `Il personaggio raggiunge l’apice della maestria nel combattimento, ottenendo un vantaggio devastante sui tiri di danno:
• I risultati di 9 sui dadi contano come danno doppio.
• Per alcune classi e razze avanzate (Garù, Guerriero Runico, Combattente e Templare), anche i risultati di 8 vengono considerati come danno doppio.`
    },

    "Cantastorie": {
      "Neofita": `Il personaggio è in grado di coinvolgere il pubblico narrando storie realmente avvenute o fantastiche, può coinvolgere piccoli gruppi attivi nell’ascolto.
In seguito avrà più attenzione da parte di queste persone, le quali saranno più predisposte a dare informazioni e avrà vantaggio sui tiri carisma nei loro confronti.`,

      "Pratico": `Il personaggio è in grado di raccontare storie interessanti, vere o inventate, che coinvolgono gruppi più grandi.
Le persone sono così rapite da non badare a cosa succede intorno a loro, a meno che non ci sia un evento realmente catastrofico.`,

      "Esperto": `Le fiabe e i racconti diventano realtà: gli spettatori percepiscono visivamente frammenti delle storie narrate.
Le apparizioni sono intangibili, simili a ologrammi innocui che fluttuano intorno alla folla.
Può far apparire un singolo oggetto immobile ma tangibile, come una porta o un ponte, che dura 10 minuti × M.S. poi si dissolve.`,

      "Veterano": `Il personaggio è in grado di far percepire anche suoni, odori e sensazioni.
Se narra di un fuoco, chi è vicino lo percepisce come reale; mantenere l’illusione richiede spesa di punti stanchezza per turno.
L’effetto influisce su un’area di 20 metri intorno a lui.`,

      "Maestro": `Il personaggio è in grado di far uscire persone o creature dal suo racconto: le loro azioni sono reali ma durano solo un istante.
Ha effetto su un’area di 30 metri intorno all’incantatore.`
    },
    "‎Canto Emozionale": {
  "Neofita": `Il canto ha effetto entro un’area di 15 metri e può essere sia positivo che negativo.
Nel primo caso è in grado di riportare pace e armonia e ottiene un vantaggio sui tiri Carisma;
nel secondo diffonde senso di malinconia e sospetto, influenzando la folla, che può diventare
pacifica o, in casi contrari, verbalmente aggressiva o rissosa.`,

  "Pratico": `Il personaggio conosce il Cantico delle Locande: in luoghi chiusi può intonare una canzone
capace di mettere di buon umore le persone e dimezzare i loro tempi di guarigione.
Chi ha ferite lievi o medie viene curato di 5D10. Le parole rimangono impresse nella mente
di chi ascolta, e il personaggio ottiene vantaggio ai tiri Carisma con loro per due settimane.`,

  "Esperto": `Il personaggio può intonare una nenia che induce il sonno. L’effetto è progressivo:
ogni successo consecutivo aumenta la sonnolenza fino al sonno definitivo.
• 1° successo: il bersaglio sbadiglia e si sente stanco;
• 2° successo: rallenta e barcolla;
• 3° successo: cade in un sonno profondo di circa un’ora.
Non funziona su creature immuni alla manipolazione mentale. Se il ciclo viene interrotto,
gli effetti restano per 5 minuti. Il personaggio può cantare e combattere insieme.
Può anche evocare emozioni negli animali, attirando creature di piccola taglia
(topi, uccellini, ecc.) o spaventandole per farle fuggire.`,

  "Veterano": `Il canto può eliminare l’effetto della paura negli alleati entro un’area di 20 metri × M.S.
Può inoltre dissolvere stati di confusione, allucinazioni o follia temporanea,
riportando la lucidità per un breve periodo. L’area d’azione resta 20 metri × M.S.`,

  "Maestro": `Il canto penetra nei tormenti più profondi dell’anima, risvegliando ricordi e presenze del passato.
Chi ne è soggetto entra in una trance cosciente e può sentirsi tormentato o sereno.
Le presenze evocate possono causare sensi di colpa e infliggere 12D10 danni Stanchezza × M.S.,
oppure lenire la mente e restituire energia. L’effetto dura 10 minuti × M.S.
Il personaggio può scegliere se indirizzare l’effetto su uno, alcuni o tutti i soggetti
nell’area di 20 metri × M.S.`
},

"Confusione Sonora": {
  "Neofita": `Il personaggio può rubare la voce di altri e replicarla a piacimento.
Può inoltre avvicinare suoni percepiti entro 30 metri × M.S., come se provenissero
dall’orecchio stesso.`,

  "Pratico": `Crea una barriera di silenzio entro 10 metri × M.S.: chi si trova all’interno
non riesce a parlare e tutti i suoni di fondo vengono annullati.`,

  "Esperto": `Confonde le voci entro 10 metri × M.S., scambiandole tra le persone presenti.
Può anche creare un effetto ventriloquo, facendo provenire voci da punti diversi
o dal vuoto, cambiandone il tono o imitando persone conosciute.`,

  "Veterano": `Entro 20 metri × M.S., controlla i suoni e decide quali amplificare o attenuare.
Può rendere assordante un rumore o coprire altri suoni. L’effetto può colpire
tutti, solo nemici o soggetti scelti a discrezione del personaggio.`,

  "Maestro": `All’interno di 50 metri × M.S., i suoni si distorcono completamente.
Il personaggio può scegliere quali mantenere o eliminare, e persino spostare
i rumori in un punto diverso (es. far sembrare che una campana suoni altrove).`
},
"Conoscenze Storiche & Geografiche": {
  "Neofita": `Il personaggio ha una conoscenza di base degli eventi storici e della geografia,
principalmente legata ai regni umani. Conosce gli ultimi avvenimenti del mondo conosciuto
e sa leggere e orientarsi con le mappe.`,

  "Pratico": `Il personaggio è in grado di disegnare con precisione i confini del mondo da lui conosciuto,
ricorda la storia dei casati e le loro dinamiche interne. Riesce a orientarsi nel mondo
conosciuto anche senza mappe o strumenti, grazie alla memoria visiva e al senso d’orientamento.`,

  "Esperto": `Il personaggio possiede una vasta conoscenza storica e culturale sui regni umani e
frammenti di informazioni su civiltà perdute, regni abbandonati e terre selvagge.
È in grado di leggere tracce del passato nei dettagli e riconoscere scritture antiche o riti dimenticati.
Quando ritorna in un luogo già visitato, il Narratore deve descrivergli come è cambiato nel tempo.
Può decifrare iscrizioni antiche, identificare siti storici di valore, e localizzare zone non più presenti sulle mappe.`,

  "Veterano": `Il personaggio è un archivio vivente di storia e geografia. Collega eventi e luoghi
ricostruendo cause e conseguenze con lucidità quasi sovrannaturale.
Percepisce “fratture” nella Storia: luoghi dove gli eventi sono stati cancellati o manipolati.
Quando entra in un’area carica di passato, può percepire cosa vi è accaduto,
riconoscere menzogne storiche e intuire chi ne abbia beneficiato.
È in grado di sentire le linee geomantiche della terra e distinguere antichi confini o città sommerse.
Il Narratore può offrirgli visioni o percezioni sensoriali dei tempi passati, proporzionali al moltiplicatore M.S.`,

  "Maestro": `Il personaggio non studia più la Storia: la incarna.
Ha un legame mistico con il tempo stesso e percepisce i punti di snodo degli eventi.
Può entrare in trance in presenza di luoghi o oggetti storici, ottenendo visioni di epoche remote
più nitide dei ricordi umani. In certi casi può interagire con le eco di figure storiche,
che rispondono come spiriti della memoria impressi nel mondo.
La sua presenza può risvegliare simboli arcani nascosti o antiche iscrizioni, e rivelare mappe perdute.
Quando racconta la Storia, chi ascolta rivive gli eventi come se li avesse vissuti.
Il Narratore può concedergli frammenti di verità dimenticate e conoscenze che superano
quelle degli oracoli, proporzionalmente al moltiplicatore M.S.`
},

"Custode dell’Eco": {
  "Neofita": `Muovendo la mano, il personaggio può intrappolare suoni in una bolla invisibile
capace di registrare fino a 1 ora × M.S. di conversazione.
Può riascoltare o liberare i suoni a piacimento, anche secoli dopo, finché la bolla non viene dissolta.`,

  "Pratico": `Con un gesto, il personaggio può far suonare strumenti musicali entro 10 metri × M.S.
senza toccarli, purché non siano trattenuti da altri. Inoltre può inviare la propria voce fino a 1 km di distanza
per comunicare con una creatura o persona per 10 minuti × M.S.`,

  "Esperto": `Il personaggio, con la voce o uno strumento, può creare un’implosione sonora che infligge
10D10 danni in un’area di 10 metri × M.S. intorno a sé, danneggiando oggetti, armi e armature.
• Danni >10: scudi distrutti  
• Danni >12: armi distrutte  
• Danni >14: armature distrutte  
Può scegliere i bersagli, colpendo tutti o solo i nemici, ignorando gli alleati.
Le creature di taglia grande dimezzano i danni, quelle piccole subiscono anche danni da caduta.`,

  "Veterano": `Può far riaffiorare suoni e voci del passato entro 20 metri × M.S., fino a 300 anni addietro,
riascoltandoli per 1 ora × M.S. L’implosione sonora si estende a 20 metri × M.S. e può essere
inviata fino a 1 km di distanza, come un tuono devastante in grado di provocare frane o crolli.`,

  "Maestro": `Il personaggio può inviare suoni multipli e differenti entro 1 km × M.S., direzionandoli in punti diversi.
L’onda d’urto può danneggiare la struttura parziale di edifici (crolli di torri, tetti, pareti),
ma non distruggere interamente un edificio. Il personaggio decide l’intensità e la direzione degli effetti.`
},
"Danza": {
  "Neofita": `Il personaggio sa muoversi con grazia e armonia, ottenendo vantaggio sui tiri di Carisma
quando danza con un’altra persona. I movimenti fluidi e la padronanza del ritmo ispirano fiducia
e fascinazione in chi lo osserva.`,

  "Pratico": `Il personaggio è in grado di percepire, durante la danza, le emozioni e gli intenti generici
del partner osservando gli occhi, i movimenti e le espressioni del volto.
Il Narratore deve rivelare quali emozioni o intenzioni superficiali prova l’altro soggetto,
offrendo spunti interpretativi utili alla scena.`,

  "Esperto": `La danza diventa un’arte di illusione e movimento. Il personaggio si muove con tale agilità
da confondere la percezione altrui: durante i combattimenti, gli avversari rischiano di colpirsi
tra loro. In mezzo alla folla, può apparire in un punto e un attimo dopo in un altro,
come se si spostasse tra le ombre.  
Se vi sono specchi, la sua immagine appare simultaneamente in tutti quelli presenti.
Il ritmo e la grazia della danza possono lenire ferite emotive di chi lo osserva.`,

  "Veterano": `La danza del personaggio assume un potere ipnotico.
Chi si trova entro 10 metri × M.S. sente i movimenti rallentare,
come se la gravità stessa li trattenesse a terra.
Il personaggio può scegliere se influenzare tutti o solo alcuni soggetti, evitando gli alleati.
Inoltre, quando danza, non produce alcun rumore: i suoi passi sono silenziosi come l’aria.`,

  "Maestro": `L’arte della danza trascende le leggi della fisica: tende, ombre e foglie si muovono con lui.
Può alterare la luce e la gravità, danzando in verticale su pareti fino a 10 metri o
sottosopra per 10 minuti × M.S. senza difficoltà.
Può estendere questa alterazione gravitazionale anche agli altri
entro 10 metri × M.S., e combinare liberamente tutti gli effetti delle precedenti versioni.`
},

"Giocoliere": {
  "Neofita": `Il personaggio sa lanciare e afferrare due oggetti contemporaneamente, come palline, anelli
o sciarpe leggere. Sviluppa una coordinazione eccellente e un ritmo costante.
Le sue esibizioni trasmettono allegria e attirano l’attenzione del pubblico.`,

  "Pratico": `Il personaggio può gestire fino a tre oggetti diversi (clave, cerchi, torce spente, ecc.)
ed eseguire lanci complessi, come passaggi dietro la schiena o lanci alti.
Integra movimenti acrobatici (salti, giravolte) che gli permettono, una volta per scontro,
di sfuggire senza penalità anche se circondato.
È inoltre in grado di mangiare e sputare fuoco con precisione scenica.`,

  "Esperto": `Il personaggio padroneggia l’arte del mimo: se finge di toccare un muro invisibile,
questo esiste davvero per una frazione di secondo, bloccando chi tenta di attraversarlo.
Può creare piccoli oggetti tangibili, come coltelli o sfere, che possono ferire lievemente.
Inoltre può moltiplicare un oggetto di massimo 20 cm che tiene in mano,
facendolo “piovere dal cielo” entro un’area di 10 metri × M.S.`,

  "Veterano": `Il personaggio può far apparire o scomparire oggetti a distanza entro 5 metri × M.S.
Può simulare corde invisibili su cui camminare per 5 minuti × M.S., o
scomparire avvolgendosi nel mantello per riapparire in un punto entro 5 metri × M.S.
Non è una magia vera e propria, ma un’illusione talmente realistica da ingannare i sensi.`,

  "Maestro": `Come il livello precedente, ma le illusioni tattili si estendono anche agli altri:
alleati e nemici percepiscono come reali gli oggetti e gli effetti mimati.
Se finge di salire una scala invisibile, anche altri potranno farlo.
La durata e le regole restano le stesse (5 minuti × M.S.), ma l’effetto coinvolge tutti i presenti.`
},

"Guarigione Magica": {
  "Neofita": `Ponendo le mani su una persona ferita, il personaggio emana una luce che chiude le ferite
e blocca le emorragie, curando 5D10 punti ferita. Il processo richiede almeno 5 minuti.`,

  "Pratico": `Ponendo le mani su una persona in un contesto tranquillo, il personaggio può espellere
veleni dal corpo del soggetto e guarire 10D10 punti ferita.  
L’effetto richiede 5 minuti e lascia una sensazione di rinascita spirituale e fisica.`,

  "Esperto": `Il personaggio può ricostruire arti, guarire cecità o sordità, riparare fratture e
alleviare dolori cronici. Può rimuovere stati di follia magica, ma non naturale.
Richiede due giorni di tempo, con almeno 1 ora di imposizione delle mani al giorno.`,

  "Veterano": `Può curare completamente una persona, eliminare malattie e pazzia naturale.
Richiede un rituale quotidiano di 1 ora per una settimana. Se il ciclo viene interrotto,
deve ricominciare da capo.`,

  "Maestro": `Il personaggio può riportare in vita una persona morta, ma solo una volta nella propria esistenza.
Attraverso il “Fuoco della Fenice”, infonde vita nel corpo.
Il rituale dura 3 ore senza interruzioni; se interrotto due volte, non potrà più essere ripetuto.
Al termine, l’anima decide se tornare o rimanere nell’Aldilà.`
},
"Lingue": {
  "Neofita": `Il personaggio conosce la lingua comune degli umani, un dialetto locale
e un’altra lingua a sua scelta (nanico, elfico, lingua nera o orchesco).
Sa leggere e scrivere correttamente nella lingua comune.`,

  "Pratico": `Come Neofita, ma conosce una lingua aggiuntiva e fino a due dialetti locali.
Può riconoscere accenti e provenienze regionali e ha una comprensione più fluida
dei linguaggi misti o corruzioni dialettali.`,

  "Esperto": `Il personaggio riesce a interpretare quasi tutte le lingue conosciute,
anche quelle che non parla, intuendone il significato dal tono, dal gesto o dalla struttura.
Può decifrare messaggi semplici in idiomi sconosciuti e comunicare per concetti universali.`,

  "Veterano": `Il personaggio parla e legge tutte le lingue conosciute e comprende
i versi delle creature intelligenti o semi-intelligenti.
È capace di tradurre lingue antiche e dimenticate, anche se parzialmente.
Il Narratore può consentirgli di capire testi o iscrizioni senza bisogno di tiri.`,

  "Maestro": `Riesce a trascrivere poemi o testi complessi in qualsiasi lingua in modo perfetto.
Può interpretare il linguaggio arcano e decifrare formule magiche attraverso l’analisi simbolica.
In presenza di lingue perdute o magiche, ottiene vantaggio su ogni tiro di interpretazione.`
},

"Pittura Sensoriale": {
  "Neofita": `Usando la gestualità delle mani e accompagnando i movimenti con la musica
(o uno strumento), il personaggio riesce ad animare quadri, affreschi, dipinti o statue.
Le figure si muovono solo all’interno della loro cornice o superficie, senza materializzarsi realmente.
Il dipinto deve trovarsi entro 10 metri × M.S. e nel suo campo visivo.`,

  "Pratico": `L’incantatore può estrarre un singolo oggetto da un dipinto o affresco
e renderlo reale per breve tempo.  
L’oggetto deve essere di taglia media (es. una spada) e privo di poteri magici.
Dopo l’uso, ritorna automaticamente nel dipinto originale.
Il quadro deve essere preesistente, non creato dall’incantatore stesso.`,

  "Esperto": `Il personaggio può animare e persino interrogare le figure presenti nei dipinti.
Se rappresentano persone reali o guerrieri del passato, conservano parte dei loro ricordi.
Può inoltre disegnare oggetti stilizzati su pareti o pergamene
e trasformarli in oggetti reali di taglia media e non magici,
purché disponga di strumenti, pigmenti o incisioni adeguate.`,

  "Veterano": `L’incantatore può evocare una creatura o figura da un dipinto e renderla reale
con tutte le sue caratteristiche per 1 ora × M.S.
Può inoltre creare illusioni pittoriche su qualsiasi superficie (pareti, pavimenti, specchi),
raffiguranti scene vive e sensoriali.  
Chi osserva queste illusioni percepisce odori, suoni e sensazioni come se fosse immerso nella scena.
L’effetto dura fino a 12 ore e può servire per nascondere oggetti o ingannare nemici.`,

  "Maestro": `L’incantatore può disegnare qualsiasi cosa, di qualunque dimensione,
e renderla reale per 1 ora + M.S.
Non può creare città o castelli, ma può modificare paesaggi o riempire spazi vuoti
(con alberi, rocce, elementi naturali, ecc.).
Le sue creazioni hanno consistenza e colore veri finché durano, poi svaniscono.`
},

"Requiem": {
  "Neofita": `Suonando o cantando un motivo malinconico, il personaggio riceve segnali dalle anime dei morti.
Non comunicano direttamente, ma possono muovere piccoli oggetti o lasciare segni
per rispondere a domande mentali semplici poste dall’incantatore.`,

  "Pratico": `Attraverso il canto o la musica, i morti possono lasciare segni più concreti:
lettere scritte, oggetti spostati (anche pesanti) o indizi diretti.
I messaggi persistono per qualche ora prima di dissolversi.`,

  "Esperto": `Il personaggio può placare o scacciare gli spiriti inquieti entro 10 metri × M.S.
finché intona la melodia.  
La sua musica purifica l’aria, e i fantasmi o presenze minori si dissolvono o si ritirano
finché il canto prosegue.`,

  "Veterano": `Il personaggio può evocare spiriti dei caduti come visioni evanescenti
per proteggere se stesso e gli alleati.
Gli spiriti si frappongono tra gli avversari e gli alleati o li guidano in luoghi sicuri.
Possono anche spaventare i nemici vicini, riducendone il morale.
Il Narratore tira 1d4 per determinare quanti spiriti rispondono al richiamo.`,

  "Maestro": `Attraverso il canto o la musica, l’incantatore comunica mentalmente con gli spiriti,
ricevendo informazioni, segreti o visioni di luoghi lontani.
Gli spiriti possono aprire passaggi, rivelare verità o servire l’incantatore temporaneamente.
Tira 1d6: il numero indica quanti spiriti lo servono e possono agire simultaneamente.
Essi possono attraversare distanze e svolgere compiti limitati entro la durata del rituale.`
},

"Suggestione": {
  "Neofita": `L’incantatore può porre una domanda che ammetta solo risposta “sì” o “no”,
ottenendo una risposta veritiera.  
Ha un malus di +1D6 contro creature con Sapienza, Carisma o Percezione >10,
e +2D6 se superiori a 12.  
Se l’incantesimo fallisce, non può essere lanciato di nuovo sullo stesso soggetto.`,

  "Pratico": `L’incantatore può amplificare o triplicare un’emozione già presente in un soggetto
(paura, rabbia, odio, invidia, ecc.).  
L’emozione deve essere reale nel bersaglio, altrimenti l’incantesimo fallisce.`,

  "Esperto": `L’incantatore può ipnotizzare un singolo soggetto entro 2 metri nel proprio campo visivo,
costringendolo a compiere azioni contro la sua volontà per 10 minuti × M.S.
La vittima non può attaccare gli alleati: se tenta di farlo, si risveglia dall’incanto.
Può inoltre alterare un singolo ricordo in modo permanente, finché il soggetto
non ritrova un legame diretto con il passato.  
Se il lancio fallisce, non può essere ripetuto sullo stesso soggetto.`,

  "Veterano": `Come Esperto, ma può ipnotizzare una folla entro 15 metri nel suo campo visivo.
Il Narratore calcola i malus medi in base alle caratteristiche della massa.
Può generare illusioni mentali su un soggetto singolo (visive, uditive o sensoriali)
che lo spingono a credere nella loro realtà per 10 minuti × M.S.
Ogni 5–6 turni il Narratore ripete il tiro per verificare se mantiene il controllo.`,

  "Maestro": `L’incantatore può influenzare le menti di un’intera folla entro 15 metri,
creando allucinazioni collettive o isterie di massa.
Può modificare la percezione mentale delle persone a suo piacimento,
sempre entro il suo campo visivo. L’effetto dura 10 minuti × M.S.`
},

"Pittura-Scultura": {
  "Neofita": `Conosci solo le basi della pittura e della scultura: schizzi, bozze e forme rudimentali
che impressionano solo i principianti.`,

  "Pratico": `Sai usare colori, proporzioni e materiali per creare opere espressive.
Le tue creazioni attraggono appassionati e collezionisti.  
Scegli i colori e le forme in modo che esaltino l’opera in condizioni di luce ottimali.`,

  "Esperto": `Padroneggi le tecniche classiche e crei opere realistiche di alta qualità.
I tuoi lavori sono apprezzati anche dagli esperti, grazie ai dettagli vividi e convincenti.`,

  "Veterano": `Le tue opere trasmettono emozioni complesse e profonde.
Chi le osserva prova sensazioni intense o ricordi dimenticati.
Puoi infondere sentimenti reali nelle tue creazioni, influenzando lo stato d’animo
di chi le contempla.`,

  "Maestro": `Ogni tua opera è un capolavoro.
Emanano un’aura magnetica che cattura e ipnotizza chi le osserva,
spingendolo in uno stato di estasi o contemplazione profonda.
L’incantatore può usare quest’effetto per calmare, ammaliare o ispirare chi guarda.`
}

    
  },
  "Canaglia": {"Acrobazia": {
  "Neofita": `Il personaggio può saltare fino a 2 metri d’altezza senza penalità, salvo casi particolari indicati dal Narratore.
È capace di capriole, rotolamenti e movimenti rapidi che migliorano agilità e schivata durante il combattimento.`,

  "Pratico": `È in grado di camminare o mantenere l’equilibrio su superfici strette (corde, travi, parapetti) senza penalità,
a meno che non intervengano condizioni estreme come vento forte o terreno scivoloso.`,

  "Esperto": `Da terra può rialzarsi con un solo colpo di reni, senza spendere un turno completo.
Cammina senza malus anche su superfici in movimento.  
Gli Elfi ignorano totalmente le penalità dovute a condizioni esterne (pioggia, scosse, combattimento in corso)
e possono anche incoccare frecce o attaccare restando in equilibrio.`,

  "Veterano": `Può saltare da 5 metri senza subire danni (10 metri se Elfo).
Ottiene vantaggio ai tiri di schivata anche quando è circondato o sotto attacco a distanza.
Gli Elfi veterani possono correre su superfici sottili senza penalità, tranne in condizioni estreme.`,

  "Maestro": `Ogni volta che compie un’azione acrobatica, può tirare due volte e scegliere il risultato migliore.
Se ha già vantaggio, tira tre volte e sceglie il migliore dei tre.
Può afferrare frecce in volo, saltare su superfici in movimento o instabili con grazia sovrumana.`
},

"Armi Bianche": {
  "Neofita": `Il personaggio usa con disinvoltura le armi da taglio, eliminando il malus per mancanza di competenza.
Le altre classi combattenti (Combattente, Runvald, Garù, Argoniano, Templare) non subiscono penalità con armi generiche o da impatto.
Chi conosce solo armi da taglio subisce un malus di +1D6 ai tiri se usa armi di altro tipo.`,

  "Pratico": `Diventa ambidestro e può impugnare due armi di taglia media (es. due spade).  
Può attaccare un singolo nemico o due distinti:  
• su uno solo, se entrambi i colpi riescono, aggiunge +1D10 ai danni (M.S. incluso)  
• su due bersagli, calcola i danni separatamente.  
Può inoltre lanciare coltelli (fino a 20 m) e giavellotti/lance (fino a 80 m) con danni standard.`,

  "Esperto": `Amplia la propria competenza includendo le armi da impatto a una mano.  
• Razze avanzate (Garù, Guerriero Runico) possono usare armi a due mani con una sola mano.  
• Se usa due armi, ottiene +1 ai tiri e applica la regola dello scudo in caso di fallimento.`,

  "Veterano": `Riduce di 1 punto la protezione delle armature (anche naturali) quando usa armi da taglio.
Se usa armi da impatto, la riduzione aumenta di 1 ulteriore punto.`,

  "Maestro": `I risultati di 9 sui dadi contano come danno doppio.  
Per alcune classi avanzate (Garù, Runico, Combattente, Templare), anche gli 8 valgono come danno doppio.`
},

"Armi da Tiro": {
  "Neofita": `Conosce le basi delle armi da tiro (archi, balestre, armi da fuoco leggere).
Può colpire bersagli a media distanza senza difficoltà, ma senza particolare precisione o rapidità.`,

  "Pratico": `Ignora un dado malus per copertura nemica (oppure ottiene vantaggio se non vi sono coperture).
Può tirare in movimento o da cavallo senza penalità.
Scout e Canaglia possono scoccare due frecce su uno o due bersagli distinti:
su due bersagli, i danni si calcolano separatamente; su uno solo, aggiunge +1D10 al danno.`,

  "Esperto": `Raddoppia la gittata effettiva delle armi da tiro.
Riduce di 1 i punti armatura nemici (anche naturali o a scaglie).  
Gli Elfi Scout possono incoccare tre frecce:  
• due sullo stesso bersaglio → +1D10 al danno  
• tre sullo stesso → +2D10 al danno.`,

  "Veterano": `Può scoccare due frecce nello stesso turno (solo con arco) e tirare da copertura senza penalità.
Scout e Canaglia possono combinare quest’abilità con altre.
Gli Elfi Scout possono attaccare entro 2 metri alternando freccia e spada nello stesso turno.`,

  "Maestro": `Aggiunge +2D10 ai danni con armi da tiro.  
Riduce i punti armatura degli avversari (naturali e artificiali) di 2.` 
},

"Attore": {
  "Neofita": `È in grado di imitare la voce, i gesti e il linguaggio corporeo di un personaggio conosciuto.
Non applicabile a creature non umanoidi.`,

  "Pratico": `Può travestirsi perfettamente se dispone di trucchi, parrucche o abiti adeguati.
Imita anche tono e microespressioni del volto con vantaggio ai tiri di Carisma.
Ha sviluppato inoltre capacità da mimo.`,

  "Esperto": `Può fingere la propria morte o simulare emozioni e malattie in modo estremamente realistico.
Le sue interpretazioni appaiono autentiche agli occhi degli altri.`,

  "Veterano": `Non ha più bisogno di travestimenti: è in grado di modificare le espressioni del viso
per somigliare a un’altra persona del suo stesso sesso.
Può mascherare tratti distintivi con stratagemmi (come cappucci o copricapi).`,

  "Maestro": `Le sue abilità da mimo sono così convincenti che le persone credono a ciò che vedono.
Se finge di tirare una corda, chi si trova dall’altro capo può sentirsi realmente tirare o perdere l’equilibrio.`
},

"Borseggio": {
  "Neofita": `Può creare una distrazione e borseggiare un bersaglio, ottenendo vantaggio.
Può rubare solo oggetti piccoli e visibili; per oggetti nascosti subisce penalità (da 1 a 2 dadi malus).`,

  "Pratico": `Può rubare da tasche o zaini senza che la vittima se ne accorga, senza malus
salvo condizioni estreme (affollamento, guardie vicine, ecc.).`,

  "Esperto": `Con un semplice tocco percepisce che oggetti una persona porta addosso e dove.
Può rubare senza malus anche in mezzo alla folla, o scambiare oggetti mantenendo il peso invariato.
Se collabora con un complice, può passare la refurtiva senza bisogno di tiri.`,

  "Veterano": `Può rubare durante il combattimento, anche armi, senza che l’avversario se ne accorga.
Ignora un dado malus per ogni penalità di difficoltà e ottiene vantaggio contro bersagli distratti.`,

  "Maestro": `Può borseggiare più bersagli contemporaneamente nello stesso turno,
purché siano entro 1,5 metri l’uno dall’altro.` 
},

"Killer": {
  "Neofita": `Dopo 10 minuti di osservazione, individua i punti deboli di un avversario o creatura:
zoppie, difetti di postura, punti vulnerabili. Funziona solo in situazioni di calma.`,

  "Pratico": `Durante il combattimento può tentare un colpo mirato per dissanguare l’avversario.
Se riesce, infligge 4D10 danni da sanguinamento per turno (max 4 turni).
Effetto valido solo su umanoidi di taglia media o superiore.`,

  "Esperto": `Può colpire punti vitali con vantaggio, raddoppiando i danni prima di applicare l’M.S.
Può individuare i punti deboli di una creatura anche durante lo scontro.`,

  "Veterano": `Può ignorare la protezione fornita dalle armature (non quella naturale).
Una volta per combattimento, può infliggere un colpo invalidante che blocca una parte del corpo
per 4 turni (es. far perdere la presa su un’arma). Funziona su umanoidi di taglia pari o superiore.`,

  "Maestro": `Se colpisce un punto vitale di una creatura umanoide media o grande, il colpo è letale.
L’avversario muore all’istante, senza possibilità di resistenza.`
},

"Maestro di Veleni": {
  "Neofita": `Conosce i veleni più comuni derivati da piante o funghi.
Può creare composti lievi che causano nausea, vertigini o debolezza temporanea.`,

  "Pratico": `Sviluppa resistenza ai veleni dimezzando i danni subiti.
Può preparare veleni paralizzanti da ingerire che riducono riflessi e lucidità mentale.
Richiede gli ingredienti specifici decisi dal Narratore.`,

  "Esperto": `Crea veleni a rilascio ritardato che agiscono dopo ore o giorni,
rendendo difficile collegare i sintomi all’avvelenamento.
Ideale per missioni di assassinio o sabotaggio.`,

  "Veterano": `Può preparare veleni mortali da ingerire o da lama.
Quando entrano nel sangue, riducono mobilità e forza del bersaglio, rendendolo vulnerabile in pochi istanti.`,

  "Maestro": `Crea veleni inodori, incolori e privi di tracce.
Applicati a un’arma, infliggono 4D10 danni per turno fino alla morte della vittima,
a meno che il veleno non venga neutralizzato o estratto in tempo.`
},

"Manipolazione e Raggiro": {
  "Neofita": `Il personaggio possiede una spiccata abilità nel correggere i propri errori in tempo reale. 
Se si accorge di aver pronunciato qualcosa di sbagliato, può far dimenticare quella frase all’interlocutore 
e sostituirla con una nuova. La vittima non avrà alcun sospetto e accetterà la nuova versione come vera. 
Tuttavia, questa abilità può essere usata solo una volta per conversazione e non funziona ripetutamente 
sullo stesso soggetto.`,

  "Pratico": `Il personaggio può cancellare e riscrivere non solo una singola frase, ma un intero discorso, 
facendo dimenticare alla vittima le parole precedenti. Questa abilità permette di ribaltare completamente 
una situazione o risolvere errori cruciali. Può essere utilizzata una sola volta per interazione, e 
l’interlocutore accetterà la nuova versione senza alcun dubbio.`,

  "Esperto": `A questo livello, il personaggio diventa un manipolatore di menti. Può convincere 
l’interlocutore di aver appena pronunciato una frase mai detta, spingendolo a rivelare informazioni preziose. 
Se il discorso riguarda direttamente l’interlocutore, questi tenderà a lasciarsi andare e a fornire 
dettagli aggiuntivi. Inoltre, il personaggio può applicare questa tecnica su due persone contemporaneamente, 
influenzando entrambi senza sforzo.`,

  "Veterano": `Il personaggio sviluppa una precisione chirurgica nella lettura delle emozioni e delle 
reazioni altrui. Con un semplice sguardo o una variazione nella voce, sa dove guidare la conversazione 
per ottenere ciò che desidera. Può anche far credere a un piccolo gruppo (fino a cinque persone) di aver 
già discusso un argomento in passato, creando un falso senso di familiarità e fiducia. Questo gli consente 
di manipolare l’intero gruppo senza difficoltà.`,

  "Maestro": `Al culmine delle sue capacità, il personaggio può orchestrare narrazioni completamente 
fittizie su larga scala, inserendole nella mente di più interlocutori contemporaneamente (fino a dieci persone). 
Ogni individuo influenzato accetterà la versione raccontata come assoluta realtà, incapace di distinguere 
il vero dal falso. In questo stato di totale controllo, il manipolatore può condizionare l’intero gruppo 
a seguire i suoi ordini o a credere in una realtà creata ad arte.`
},

"Prestidigitazione": {
  "Neofita": `Il personaggio è in grado di eseguire piccoli trucchi di prestidigitazione, facendo 
sparire oggetti in modo temporaneo per poi farli riapparire altrove o su altre persone, sempre all'interno 
di un raggio di 3 metri dal suo campo visivo.`,

  "Pratico": `Il personaggio può manipolare i risultati di giochi di fortuna come quelli da taverna 
in modo del tutto naturale e senza destare sospetti. Ha anche imparato a ingoiare e sputare fuoco con grande 
abilità. Inoltre, quando munito degli strumenti necessari, è capace di creare fumi che si diffondono rapidamente, 
permettendogli di svanire dalla vista in pochi istanti.`,

  "Esperto": `Il personaggio ha la capacità di alterare temporaneamente le proprietà fisiche degli 
oggetti che tocca, come peso, densità e consistenza. Per esempio, può rendere un oggetto incredibilmente 
leggero o farlo diventare resistente come l’acciaio. Questa manipolazione può servire a risolvere enigmi, 
a guadagnare vantaggi tattici o a influenzare l'ambiente circostante. Penne che scrivono da sole, pennelli 
che dipingono, tutto avviene entro tre metri dal suo campo visivo.`,

  "Veterano": `Il personaggio è in grado di far sparire oggetti di medie dimensioni dalle persone 
entro tre metri, comprese armi come spade o pugnali. Può far scomparire fino a dieci oggetti contemporaneamente, 
rendendo difficile percepirne la sparizione.`,

  "Maestro": `Il personaggio può liberarsi da qualsiasi tipo di catena o costrizione, incluse manette, 
corde o altri vincoli. Può persino attraversare le sbarre di una cella con sorprendente destrezza. Inoltre, 
può creare un’illusione temporanea che fa sembrare il suo volto identico a quello di almeno dieci persone 
presenti nel suo campo visivo per alcuni secondi, confondendo gli avversari.`
},

"Sotterfugio": {
  "Neofita": `Il personaggio è abile nel liberarsi da nodi e legature semplici, impiegando circa 10 minuti. 
In combattimento può usare un mantello per disorientare l’avversario, con il 10% di possibilità che il colpo 
colpisca il mantello invece di lui. Può nascondersi o spostarsi senza attirare attenzione sfruttando l’ambiente.`,

  "Pratico": `Il personaggio può liberarsi da manette o legature complesse in 10 minuti, tirando con vantaggio. 
Il mantello offre protezione del 20%. Si muove silenziosamente su terreni accidentati e può confondersi tra la folla 
senza attirare sospetti. Può rialzarsi velocemente da terra con un colpo di reni.`,

  "Esperto": `Il personaggio individua oggetti utili a creare distrazioni e identifica passaggi stretti 
durante una fuga. Si muove silenziosamente su terreni rumorosi come rami o foglie, scartando sempre un dado malus 
se imposto dal Narratore.`,

  "Veterano": `Il bonus del mantello sale al 50%. Può schivare frecce in qualsiasi situazione e muoversi 
nell’acqua senza rumore. Sfrutta coperture vicine senza tirare dadi, scegliendo quella preferita entro 2 metri.`,

  "Maestro": `Il personaggio può muoversi attorno agli avversari con grazia sovrumana, schivando colpi e 
confondendo i nemici. Può afferrare frecce senza penalità e perfino far colpire due avversari tra loro grazie 
alle sue movenze acrobatiche.`
},

"Spia": {
  "Neofita": `Il personaggio è in grado di leggere il labiale e decifrare il linguaggio del corpo 
attraverso gesti ed espressioni.`,

  "Pratico": `Memorizza parole e frasi ascoltate anche dopo settimane e possiede un udito sopraffino 
che capta conversazioni entro 10 metri, anche dietro pareti sottili. Può riconoscere segni o gesti e 
mappare velocemente le strade di una città memorizzandole dopo un solo sguardo.`,

  "Esperto": `Dal linguaggio del corpo o dal tono della voce capisce se qualcuno mente o dice la verità. 
Basta che veda una volta dei gesti per ripeterli. Può rendersi invisibile sfruttando zone d’ombra, 
se vestito adeguatamente.`,

  "Veterano": `Individua automaticamente elementi dell’ambiente utili per fuggire o ottenere vantaggio. 
Può evitare di riflettersi negli specchi, sfrutta angoli e punti ciechi e si sposta da un’ombra all’altra 
quasi come se si teletrasportasse.`,

  "Maestro": `Crea visioni illusorie di sé stesso fino a 6 metri di distanza e può fingere azioni o parole. 
Può muoversi confondendosi con elementi in movimento (carri, persone, profili), ottenendo un vantaggio.`
},

"Scassinare": {
  "Neofita": `Il personaggio può aprire serrature semplici in meno di 30 secondi, anche con strumenti improvvisati. 
Non serve tirare dadi salvo situazioni di pericolo o urgenza.`,

  "Pratico": `Scassina senza fare rumore e non danneggia strumenti né serrature, anche complesse. 
Può aprire quasi qualsiasi serratura senza comprometterla.`,

  "Esperto": `Apre serrature semplici in 5 secondi e scarta sempre un dado malus in condizioni tranquille. 
Può aprire, esaminare e richiudere una serratura lasciandola intatta.`,

  "Veterano": `Apre serrature complesse in meno di 2 minuti anche sotto stress. Scarta un dado malus 
e può replicare chiavi o serrature semplici osservandole.`,

  "Maestro": `Riproduce e costruisce chiavi o serrature da zero, comprendendo e manipolando qualsiasi meccanismo 
in tempi record.`
},

"Trafficante": {
  "Neofita": `Il personaggio è in grado di valutare i prezzi medi delle locande e dei beni comuni, 
stabilendo se sono realistici.`,

  "Pratico": `Riconosce metalli e valuta oro o argento autentici. Ottiene sempre vantaggio quando tratta sul prezzo.`,

  "Esperto": `Scarta un dado malus quando tenta di vendere anche cianfrusaglie. Determina il valore preciso 
di gemme e pietre.`,

  "Veterano": `Se il tiro ha successo, ottiene sconti del 50% sulla merce che intende acquistare.`,

  "Maestro": `Prevede l’andamento del mercato locale e ottiene un 50% in più di profitti dalle attività che possiede.`
}

 },
 "Combattente": {
  "Armi Bianche": {
    "Neofita": `Il personaggio è in grado di utilizzare con facilità le armi da taglio, eliminando il malus per la mancanza di competenza nel tipo di arma impugnata. Tuttavia, i personaggi appartenenti a classi specifiche (Combattente, Runvald, Garù, Argoniano e Templare) possono utilizzare anche armi generiche, ad asta e da impatto senza penalità. Se il personaggio padroneggia esclusivamente le armi da taglio, l’uso di armi di altro tipo (da impatto, da tiro, ecc.) comporta un malus automatico di +1D6 ai tiri.`,
    "Pratico": `Il personaggio diventa ambidestro, potendo impugnare due armi di taglia media (es. due spade). Può usarle nello stesso turno colpendo uno o due nemici distinti.
• Attacco su un singolo nemico: se entrambi i colpi riescono, aggiunge +1D10 ai danni oltre al danno base (M.S.).
• Attacco su due nemici: i danni si calcolano separatamente.
Inoltre, può lanciare coltelli fino a 20 metri e giavellotti o lance fino a 80 metri mantenendo i danni standard.`,
    "Esperto": `Amplia la competenza includendo armi da impatto a una mano. 
• Classi e razze avanzate (Garù, Guerriero Runico) possono usare armi a due mani con una mano o brandire due armi differenti.
• Se utilizza due armi, ottiene +1 ai tiri e applica la regola dello scudo in caso di fallimento.`,
    "Veterano": `Sviluppa una tecnica che riduce di 1 punto la protezione offerta dalle armature (anche naturali) con armi da taglio; con armi da impatto, la riduzione aumenta di 1 punto ulteriore.`,
    "Maestro": `Raggiunge l’apice della maestria: i risultati di 9 sui dadi contano come danno doppio. Per classi e razze avanzate (Garù, Guerriero Runico, Combattente, Templare), anche gli 8 valgono come danno doppio.`
  },

  "Armi da Tiro": {
    "Neofita": `Conosce le basi delle armi da tiro (archi, balestre, armi da fuoco leggere). Può colpire bersagli a media distanza con discreta precisione.`,
    "Pratico": `Elimina sempre un dado malus per copertura nemica; se non applicabile, ottiene vantaggio. Può scagliare frecce in movimento o da cavallo senza penalità. Scout e Canaglia possono tirare due frecce da arco (non balestra) su uno o due bersagli: su due, i danni si calcolano separatamente; su uno solo, aggiunge +1D10 al danno.`,
    "Esperto": `Raddoppia la gittata delle armi. Riduce di 1 punto l’armatura (anche naturale o a scaglie). Un Elfo Scout può incoccare tre frecce: 
• due sullo stesso bersaglio → +1D10 danno 
• tre sullo stesso → +2D10 danno.`,
    "Veterano": `Può scoccare due frecce nello stesso turno (solo arco) e tirare da copertura senza penalità. Scout e Canaglia possono combinare quest’abilità con altre. Gli Elfi Scout possono alternare freccia e spada nello stesso turno.`,
    "Maestro": `Aggiunge +2D10 ai danni con armi da tiro e riduce di 2 i punti armatura degli avversari (naturali o artificiali).`
  },

  "Autoritario": {
    "Neofita": `Il combattente ha sempre la prima parola durante un confronto: agisce o parla per primo. In caso di parità con un altro Autoritario, prevale chi ottiene il risultato più basso nei tiri Carisma.`,
    "Pratico": `Ottiene vantaggio nei tentativi di intimidire altri esseri pensanti (esclusi mostri e creature). Deve descrivere gesti e parole adeguati per l’intimidazione.`,
    "Esperto": `Può dirigere l’azione di uno o due giocatori, obbligandoli a compiere un’azione che reputa efficace. Se ottiene successo parziale, influenza solo uno; con successo pieno, entrambi. Se fallisce, non può ripetere per una settimana.`,
    "Veterano": `È riconosciuto come figura di comando naturale. Una volta per sessione, può bloccare una decisione collettiva costringendo il gruppo a rivederla. Ottiene vantaggio nei test sociali contro PNG che rispettano gerarchie.`,
    "Maestro": `Può dirigere l’azione di tutti i giocatori in gioco obbligandoli a compiere ciò che ritiene più efficace. Se ottiene successi consecutivi nei tiri Carisma, può farlo continuativamente.`
  },

  "Cavaliere": {
    "Neofita": `Può intervenire contro un singolo avversario in difesa di un alleato entro 6 metri, anche fuori turno, ma solo se l’alleato fallisce l’azione.`,
    "Pratico": `Non subisce penalità atletiche con armature medie. Può difendere due alleati nel loro turno.`,
    "Esperto": `Con armature pesanti applica solo il dado malus, non lo svantaggio. Può difendere o contrattaccare per due alleati falliti nello stesso turno.`,
    "Veterano": `Non risente di alcun malus corazza, neppure pesante. Non perde mai arma o scudo se scaraventato, e ha vantaggio contro tentativi di disarmo.`,
    "Maestro": `Se ha mantenuto il suo codice etico, gli alleati entro 20 metri ricevono 6 punti fortuna ciascuno per un combattimento (una volta al giorno). Inoltre, gli alleati non subiscono affaticamento e gli incantatori consumano 2 punti Stanchezza in meno per incantesimo.`
  },

  "Devastatore": {
    "Neofita": `Usando armi a due mani o d’impatto, ha il 25% di probabilità di scaraventare in aria nemici della stessa taglia o più piccoli (50% su creature piccole).`,
    "Pratico": `Se infligge 7+ danni in un solo colpo, può distruggere scudi o armi di bassa qualità. Servono 10 danni per armature di metallo, 8 per cotte, 14 per scudi torre o da cavaliere.`,
    "Esperto": `Riduce le soglie di distruzione a 6-8-7-12 danni rispettivamente.`,
    "Veterano": `Può stordire un avversario per 1D6 turni una volta per combattimento (funziona su ogni taglia).`,
    "Maestro": `Con un unico colpo può colpire tutti i nemici nel suo campo visivo (180° con spada, 360° con armi a due mani). Applica tutte le regole precedenti.`
  },

  "Freddo": {
    "Neofita": `Ottiene +2 protezione ai tiri paura: il Narratore deve superare 7 invece di 5.`,
    "Pratico": `Vantaggio contro manipolazione, raggiro e incantesimi mentali. Può celare completamente le emozioni.`,
    "Esperto": `Non applica malus ai tiri paura o di freddezza. Non può essere colto alla sprovvista da attacchi nel suo campo visivo.`,
    "Veterano": `Riesce a leggere la paura negli altri e rifletterla contro di loro, anche creature.`,
    "Maestro": `Immunità totale alla paura e agli incantesimi mentali.`
  },

  "Grido di Battaglia": {
    "Neofita": `Le sue grida rallentano temporaneamente le azioni dei nemici entro 20 metri per alcuni turni.`,
    "Pratico": `Il grido è così potente che i nemici esitano ad attaccare; non funziona su creature due taglie più grandi.`,
    "Esperto": `Si tira un dado percentuale per determinare quanti nemici fuggono, sottraendo 20%. I più forti restano. Non funziona su creature o immuni agli effetti mentali.`,
    "Veterano": `Ottiene vantaggio anche se circondato e fa scartare un dado malus agli alleati entro 6 metri (una volta per scontro).`,
    "Maestro": `Per 10 minuti, lui e gli alleati ottengono -2 ai bonus fisici (fino a -8 max). Funziona solo in combattimento.`
  },

  "Guardia Implacabile": {
    "Neofita": `Scarta sempre un dado malus anche se circondato.`,
    "Pratico": `Non subisce penalità da circondamento o terreno, salvo eccezioni. Non ha malus da terra se non imposti da fattori esterni.`,
    "Esperto": `Con scudo grande ottiene vantaggio per parate ravvicinate e a distanza. Può accumulare energia parando: ogni colpo parato consecutivo dà +1D10 danno (fino a +5D10). Se il ciclo si interrompe, azzera il bonus.`,
    "Veterano": `Ignora penalità in qualsiasi posizione o superficie.`,
    "Maestro": `Impedisce agli avversari di accerchiare lui o i suoi alleati. Lo scudo protegge anche da esplosioni.`
  },

  "Maestro d’Armi": {
    "Neofita": `Tira +1D10 danno se è almeno Pratico con l’arma. Danni a mani nude 4D10 (anziché 3D10). È considerato armato anche a mani nude.`,
    "Pratico": `Per infliggere danno serve 4 o più sul dado (invece di 5), salvo avversari con protezione naturale.`,
    "Esperto": `I danni vengono raddoppiati.`,
    "Veterano": `I 10 valgono triplo danno (quadruplo se arma forgiata da Argoniano Maestro).`,
    "Maestro": `Tutti i colpi inflitti entrano con M.S. globale.`
  },

  "Sopravvivenza": {
    "Neofita": `Accende fuochi facilmente, riconosce piante velenose, segue tracce e si orienta perfettamente anche senza strumenti.`,
    "Pratico": `Costruisce armi e trappole rudimentali. Scarta un dado malus in queste azioni o ottiene vantaggio.`,
    "Esperto": `Resiste tre giorni senza cibo o acqua, può estrarre acqua da piante o rocce e costruire rifugi solidi in poco tempo.`,
    "Veterano": `Riposa completamente in 2 ore. Può seguire tracce antiche e dedurne peso, altezza e natura.`,
    "Maestro": `Prevede il clima, si muove senza difficoltà in qualsiasi ambiente, è invisibile alla fauna e trova sempre il percorso migliore.`
  },

  "Sentinella": {
    "Neofita": `Ottiene vantaggio ai tiri Percezione se qualcuno si avvicina entro 6 metri.`,
    "Pratico": `Può uscire da risse caotiche e usare oggetti comuni come armi con danno equivalente.`,
    "Esperto": `Contatti PNG (guardie o esploratori) obbediscono ai suoi ordini. Ottiene vantaggio negli inseguimenti e può mappare l’area rapidamente.`,
    "Veterano": `Ogni successo in combattimento gli permette di deviare il colpo nemico nella direzione scelta.`,
    "Maestro": `Due volte per combattimento può far sì che i nemici si colpiscano a vicenda (non su creature due taglie più grandi).`
  },

  "Tenace": {
    "Neofita": `Può compiere un’ultima azione prima di cadere anche se mortale. Non subisce penalità di movimento se ferito gravemente.`,
    "Pratico": `Dimezza danni da veleno; i 10 sui dadi contano come danno singolo, i tripli come doppi.`,
    "Esperto": `Quando ferito gravemente, trasforma i danni subiti in bonus ai tiri d’attacco del turno successivo (max +6).`,
    "Veterano": `Ha una protezione naturale +1 (equivalente a un’armatura leggera). Se indossa corazza, non si cumula.`,
    "Maestro": `Dimezza tutti i danni subiti.`
  }
},
"Gitano": {
  "Acrobazia": {
    "Neofita": `Il personaggio può saltare con slancio fino a 2 metri d’altezza senza subire penalità, salvo casi particolari indicati dal Narratore. È in grado di eseguire capriole, rotolamenti e movimenti rapidi che migliorano la sua capacità di evitare colpi e muoversi agilmente sul campo.`,
    "Pratico": `È in grado di camminare o restare in equilibrio su superfici strette (corde, travi, parapetti) senza penalità, a meno che non intervengano fattori eccezionali (vento forte, superficie scivolosa, ecc.).`,
    "Esperto": `Da terra, può rimettersi in piedi con un colpo di reni in meno di un turno. Può camminare senza malus su superfici sottili anche in movimento. Se è un Elfo, non subisce penalità da pioggia, scosse o combattimenti, nemmeno durante l’uso di armi o incoccare frecce.`,
    "Veterano": `Può saltare da 5 metri senza danni (10 se Elfo). Ottiene vantaggio nelle prove di schivata anche quando è circondato o preso di mira. Un Elfo veterano può correre su superfici sottili senza penalità, salvo condizioni estreme.`,
    "Maestro": `Ogni azione legata all’acrobazia può essere ritirata due volte scegliendo il risultato migliore. Se già in vantaggio, può tirare tre volte e scegliere il migliore. Può afferrare frecce in volo e saltare su superfici instabili in movimento con grazia sovrumana.`
  },

  "Armi Bianche": {
    "Neofita": `Il personaggio è in grado di utilizzare con facilità le armi da taglio, eliminando il malus per la mancanza di competenza nel tipo di arma impugnata. Tuttavia, classi come Combattente, Guerriero Runico, Garù, Argoniano e Templare possono usare anche armi generiche, ad asta e da impatto senza penalità. Se padroneggia solo le armi da taglio, l’uso di altre comporta un malus automatico di +1D6 ai tiri.`,
    "Pratico": `Diventa ambidestro, impugnando due armi di taglia media (es. due spade). Può colpire uno o due nemici nello stesso turno.
• Attacco singolo: se entrambi i colpi riescono, aggiunge +1D10 al danno base (M.S.).
• Attacco su due nemici: calcola i danni separatamente.  
Può anche lanciare coltelli fino a 20 metri e giavellotti/lance fino a 80 metri con danni standard.`,
    "Esperto": `Amplia la competenza includendo armi da impatto a una mano.  
• Le classi e razze avanzate (Garù, Guerriero Runico) possono usare armi a due mani con una sola o combinarle con un’arma a una mano e scudo.  
• Se usa due armi, ottiene +1 e applica la regola dello scudo in caso di fallimento.`,
    "Veterano": `Sviluppa una tecnica che riduce di 1 punto la protezione delle armature (anche naturali) con armi da taglio. Con armi da impatto, la riduzione aumenta di 1 punto ulteriore.`,
    "Maestro": `Raggiunge l’apice della maestria: i 9 sui dadi contano come danno doppio. Per classi e razze avanzate (Garù, Guerriero Runico, Combattente e Templare) anche gli 8 valgono doppio.`
  },

  "Armi da Tiro": {
    "Neofita": `Possiede una conoscenza di base delle armi da tiro (archi, balestre, armi leggere). Può colpire bersagli a media distanza con discreta precisione.`,
    "Pratico": `Elimina sempre un dado malus per le coperture nemiche; se non applicabile, ottiene vantaggio. Può scagliare frecce in movimento o da cavallo senza penalità. Scout e Canaglia possono scagliare due frecce da arco (non balestra) su uno o due bersagli:  
su due, i danni si calcolano separatamente; su uno solo, aggiunge +1D10 al danno.`,
    "Esperto": `Raddoppia la gittata. Riduce di 1 punto i punti armatura nemici, anche naturali o a scaglie. Un Elfo Scout può scoccare tre frecce: due sullo stesso bersaglio → +1D10 danno; tre sullo stesso → +2D10.`,
    "Veterano": `Può scoccare due frecce nello stesso turno (solo con arco) e tirare da copertura senza penalità. Scout e Canaglia possono combinare quest’abilità con altre. Gli Elfi Scout possono alternare freccia e spada nello stesso turno.`,
    "Maestro": `Aggiunge +2D10 ai danni e riduce di 2 i punti armatura (naturali o artificiali).`
  },

  "Artigianato Zingaro": {
    "Neofita": `Può creare oggetti semplici con materiali comuni (legno, pietra). Può anche costruire piccoli talismani portafortuna che concedono 2 punti fortuna (non riutilizzabili dallo stesso portatore).`,
    "Pratico": `Crea oggetti più complessi con materiali semplici e talismani che vibrano in presenza di pericoli.`,
    "Esperto": `Lavora metalli e pietre preziose realizzando oggetti raffinati (diademi, spille, corone). Può creare talismani che proteggono dalle malattie offrendo vantaggio ai tiri di tempra.`,
    "Veterano": `Costruisce meccanismi complessi (serrature, bussole, orologi) e amuleti che reagiscono alla magia: più è potente, più il talismano si oscura.`,
    "Maestro": `Realizza capolavori architettonici e meccanici di qualsiasi materiale. Può creare un talismano con 10 punti fortuna che si spegne per sempre una volta esauriti; richiede un mese di lavorazione.`
  },

  "Attore": {
    "Neofita": `Imita gesti, linguaggio e voce di persone conosciute. Non funziona su creature.`,
    "Pratico": `Con travestimenti o accessori può rassomigliare perfettamente a persone conosciute (umanoidi). Ottiene sempre vantaggio nei tiri di Carisma. Ha anche capacità da mimo.`,
    "Esperto": `Può fingere la propria morte o simulare emozioni e malattie con realismo intenso.`,
    "Veterano": `Può alterare i lineamenti per imitare altri senza maschere o trucchi. Tuttavia deve mascherare tratti distintivi (es. capelli, sesso) con escamotage.`,
    "Maestro": `Le sue performance da mimo sono talmente convincenti da sembrare reali: chi osserva percepisce fisicamente ciò che lui finge (corde, spinte, colpi immaginari).`
  },

  "Borseggio": {
    "Neofita": `Può borseggiare un singolo bersaglio creando una distrazione. Può sottrarre solo oggetti piccoli visibili. Se tenta di prendere oggetti nascosti, subisce svantaggio.`,
    "Pratico": `Può frugare in tasche o zaini senza farsi notare, salvo casi eccezionali (folla o guardie).`,
    "Esperto": `Percepisce con un tocco che oggetti porta una persona e li localizza rapidamente. Può borseggiare in ambienti affollati con vantaggio. Può anche sostituire un oggetto con uno simile senza che la vittima se ne accorga.`,
    "Veterano": `Può rubare oggetti durante un combattimento (persino un’arma) senza essere notato. Scarta sempre un dado malus e ottiene vantaggio sui tiri legati alle tasche.`,
    "Maestro": `Può borseggiare più bersagli contemporaneamente entro 1,5 metri, ad esempio se accerchiato.`
  },
  "Danza": {
  "Neofita": `Il personaggio sa muoversi sinuosamente e ottiene vantaggio sui tiri di Carisma con la persona con cui sta ballando.`,
  "Pratico": `È in grado di influenzare la persona con cui sta ballando percependo dai suoi occhi ed espressioni ciò che ha in mente, ma solo in modo generico. Il Narratore dovrà descrivere emozioni e intenzioni superficiali.`,
  "Esperto": `Durante la danza si sposta agilmente tra la folla, confondendo chi lo osserva. I nemici rischiano di colpirsi tra loro. Può apparire in più punti grazie ai riflessi degli specchi e lenire le ferite emotive di chi lo circonda attraverso il ritmo.`,
  "Veterano": `La danza diventa ipnotica: chi si trova entro 10 metri x moltiplicatore M.S. si muove più lentamente come se la gravità pesasse su di loro. Può scegliere chi influenzare e danzare in completo silenzio.`,
  "Maestro": `Tende, ombre e foglie si muovono seguendo il suo ritmo. Può alterare la luce e la gravità, danzare su pareti o a testa in giù per 10 minuti, e applicare tutte le abilità precedenti. Può anche cambiare la gravità per chi lo circonda entro 10 metri x moltiplicatore M.S.`
},

"Furtività": {
  "Neofita": `Si muove con agilità e attenzione, riducendo al minimo i rumori. Scioglie nodi semplici senza tiri e ottiene vantaggio nel muoversi silenziosamente, anche su superfici rumorose.`,
  "Pratico": `Sincronizza i movimenti con i suoni ambientali (vento, pioggia, animali) e può avanzare senza essere udito entro 20 metri.`,
  "Esperto": `Si sposta come un’ombra, sfruttando coperture e ostacoli. Scarta sempre un dado malus nei tiri di agilità o furtività, specialmente sotto tiro a distanza.`,
  "Veterano": `Avanza inosservato anche in aree con bassa copertura sfruttando angoli ciechi e distrazioni. Se attacca un bersaglio ignaro, ottiene un vantaggio aggiuntivo.`,
  "Maestro": `Scompare in combattimento spostandosi alle spalle o ai fianchi di un nemico, ottenendo sempre vantaggio in mischia anche contro più avversari.`
},

"Ipnosi": {
  "Neofita": `Può far dimenticare a un soggetto gli ultimi 10 secondi se non è stato ferito. Deve trovarsi entro 3 metri e nel campo visivo.`,
  "Pratico": `Può ipnotizzare più soggetti contemporaneamente entro il proprio campo visivo per pochi secondi, quanto basta per fuggire.`,
  "Esperto": `Può addormentare un singolo avversario in quiete (non ostile) ottenendo almeno due successi. Con un solo successo, il soggetto entra in stato catatonico. Può interrogare chi dorme e ottenere la verità.`,
  "Veterano": `Può manipolare mentalmente un soggetto, fargli credere di avere un’altra identità e costringerlo a obbedire per circa un’ora. Non funziona su creature.`,
  "Maestro": `Può riprogrammare una folla intera entro il proprio campo visivo. Le persone obbediscono finché egli mantiene l’interazione o fino al risveglio. Il Narratore decide eventuali malus in base all’intelligenza dei soggetti.`
},

"Lettura della Mano": {
  "Neofita": `Leggendo la mano di qualcuno, vede un evento passato e ottiene informazioni generiche su un segreto nascosto.`,
  "Pratico": `Percepisce la profondità emotiva del soggetto, leggendo le sue emozioni in modo empatico.`,
  "Esperto": `Ottiene visioni mentali dei segreti più profondi e dei pericoli imminenti del soggetto.`,
  "Veterano": `Rivela il nome di un nemico legato al soggetto e può offrirgli un vantaggio e 5 punti fortuna.`,
  "Maestro": `Legge tutto: passato, obiettivi, segreti e intenzioni. Può donare 7 punti fortuna o imporre fino a 5 svantaggi (o 5 dadi malus) per una settimana.`
},

"Prestidigitazione": {
  "Neofita": `Esegue piccoli trucchi di magia, facendo sparire e riapparire oggetti entro 3 metri dal suo campo visivo.`,
  "Pratico": `Manipola giochi di fortuna senza destare sospetti, può sputare fuoco e creare fumi per svanire rapidamente.`,
  "Esperto": `Altera temporaneamente peso, densità o consistenza degli oggetti, rendendoli leggeri o resistenti. Può animare penne e pennelli entro 3 metri.`,
  "Veterano": `Fa sparire oggetti di medie dimensioni (armi incluse) entro 3 metri, fino a un totale di dieci, senza che gli altri se ne accorgano.`,
  "Maestro": `Si libera da qualsiasi vincolo fisico e può attraversare sbarre o catene. Crea illusioni del proprio volto, assumendo l’aspetto di dieci persone per pochi secondi.`
},

"Scassinare": {
  "Neofita": `Apre serrature semplici in meno di 30 secondi anche con strumenti improvvisati. Nessun tiro necessario salvo pericolo o urgenza.`,
  "Pratico": `Scassina in silenzio e non danneggia gli strumenti in caso di fallimento. Può aprire quasi ogni serratura senza comprometterla.`,
  "Esperto": `Apre serrature semplici in 5 secondi e scarta un dado malus per quelle complesse. Può lasciare intatta l’apparenza di una serratura aperta.`,
  "Veterano": `Apre serrature complesse in meno di 2 minuti anche sotto stress. Può replicare chiavi osservando la serratura.`,
  "Maestro": `Riproduce meccanismi complessi e costruisce chiavi o serrature da zero con maestria artigianale.`
},

"Sopravvivenza": {
  "Neofita": `Sa accendere fuochi, rintracciare animali, orientarsi e riconoscere piante velenose o commestibili.`,
  "Pratico": `Costruisce armi e trappole rudimentali. Scarta sempre un dado malus nel seguire tracce o beneficia del vantaggio se non ci sono penalità.`,
  "Esperto": `Resiste 3 giorni senza cibo o acqua. Estrae acqua da piante o rocce e costruisce rifugi efficaci.`,
  "Veterano": `Gli bastano 2 ore di sonno per sentirsi riposato. Può seguire tracce vecchie di mesi e stimare peso e altezza della creatura.`,
  "Maestro": `Prevede il meteo e si muove con vantaggio su ogni terreno. È invisibile alla fauna e individua sempre il percorso migliore.`
},
"Sussurri dell’Oltretomba": {
  "Neofita": `Percepisce la presenza della morte e degli spiriti entro 20 metri. Non riceve dettagli specifici, ma distingue se l’area è permeata da energie ultraterrene.`,
  "Pratico": `Può udire i sussurri degli spiriti di un luogo. Essi comunicano tramite frasi criptiche o indovinelli che offrono indizi o risposte a domande specifiche.`,
  "Esperto": `Può fungere da tramite tra vivi e morti, consentendo una comunicazione bidirezionale tra i due piani. Gli spiriti e i viventi possono scambiarsi messaggi o risolvere questioni irrisolte.`,
  "Veterano": `Vede chiaramente gli spiriti sul piano etereo anche mentre si trova sul piano materiale. Ne riconosce forma, origine, intenzioni e il motivo del loro legame con il mondo dei vivi.`,
  "Maestro": `Può richiamare uno spirito protettore e vincolarlo al piano materiale per 1 ora x M.S. Lo spirito può esplorare, interagire o svolgere compiti pericolosi (come attraversare zone infestate o verificare trappole).`
},

"Tarocchi": {
  "Neofita": `Mischiando i tarocchi, fa rivivere al soggetto un flashback di un evento cruciale del suo passato che influenza la trama o gli obiettivi del personaggio.`,
  "Pratico": `Conosce un sottomazzo di 5 carte leggendarie, ognuna legata a un potere mistico evocabile casualmente (deciso dal Narratore con un tiro di dado).  
1. Il Mantello Solitario – attraversare muri per 1 ora.  
2. La Clessidra – tornare indietro di pochi secondi per correggere un evento critico (una sola volta).  
3. La Spada – evoca per 1 ora una spada eterea che infligge 5D10 danni.  
4. Lo Scudo – +1 protezione per 1 ora.  
5. Le Catene – immobilizzano o rallentano bersagli.  
Ogni evocazione dura un’ora o fino al termine dell’effetto.`,
  "Esperto": `Può estrarre da 1 a 3 carte e intrecciare una storia coerente che le unisca. Se la narrazione convince il Narratore, ottiene un effetto duraturo (fino a tre settimane di gioco) come fortuna aumentata, protezione, successo in imprese chiave o influenza su PNG/PG. Le carte fluttuano attorno al gitano, irradiando luce simbolica.`,
  "Veterano": `Le carte diventano strumenti narrativi reali, capaci di alterare concretamente la realtà. Il gitano decide come la storia si manifesta e ne sfrutta le conseguenze.`,
  "Maestro": `Può scegliere una carta e influenzare eventi o persone, benedicendoli o maledicendoli anche a distanza. L’effetto dura un giorno e non può essere ripetuto per un mese. Deve trovarsi in uno stato di calma e riposo. Gli effetti sono simbolici ma tangibili: la carta Oscurità riduce la visibilità, la carta Morte induce un’azione fatale o rivelatrice. Ogni carta giocata non può essere rievocata.`
},

"Ventriloquo": {
  "Neofita": `Può far udire una parola o una breve frase come se provenisse da un punto qualsiasi entro 10 metri.`,
  "Pratico": `Può sostituire fino a due parole in una frase pronunciata da un altro personaggio. Tutti udranno la versione modificata come se provenisse dalla voce originale, a meno di fallimento o successo parziale.`,
  "Esperto": `Crea più voci simultanee o una cacofonia di suoni. Può simulare conversazioni tra persone assenti, come se provenissero da dietro una porta.`,
  "Esperto Avanzato": `Può riprodurre suoni e versi di creature che ha conosciuto, combattuto o sconfitto (es. il ruggito di un drago), imitando perfettamente tono e intensità.`,
  "Veterano": `Emette un suono stridulo che stordisce chi si trova entro 10 metri x M.S. I bersagli possono lasciar cadere le armi o coprirsi le orecchie. Dura 2 minuti e può essere usato una sola volta al giorno.`
}


},
"Runvald": { "Armi Bianche": {
  "Neofita": `Può utilizzare con facilità le armi da taglio eliminando il malus per mancanza di competenza. Le classi speciali (Combattente, Guerriero Runico, Garù, Argoniano, Templare) possono usare anche armi generiche, ad asta e da impatto senza penalità. Se usa armi di tipo diverso subisce un malus di +1D6 ai tiri.`,
  "Pratico": `Diventa ambidestro e può impugnare due armi medie nello stesso turno, colpendo un singolo nemico (+1D10 danno se entrambi i colpi riescono) o due bersagli diversi. Può anche lanciare coltelli fino a 20 m e giavellotti/lance fino a 80 m mantenendo i danni standard.`,
  "Esperto": `Amplia la competenza anche alle armi da impatto a una mano. Le classi avanzate (Garù, Guerriero Runico) possono usare un’arma a due mani in una mano sola o combinarla con un’altra arma o scudo. Se usa due armi ottiene +1 e applica la regola dello scudo in caso di fallimento.`,
  "Veterano": `Riduce di 1 punto la protezione delle armature (anche naturali) con armi da taglio, e di 2 se usa armi da impatto.`,
  "Maestro": `Ottiene vantaggio devastante ai danni: i risultati di 9 valgono come danno doppio, e per le classi avanzate (Garù, Guerriero Runico, Combattente, Templare) anche gli 8 contano come doppio.`
},

"Balestriere": {
  "Neofita": `Può scagliare dardi anche in movimento senza malus, salvo condizioni avverse. Non funziona in sella a creature.`,
  "Pratico": `Scaglia due dardi in un turno (solo con balestra a singolo colpo). Le balestre multi-dardo si ricaricano in un solo turno.`,
  "Esperto": `Può tenere la balestra in una mano e un’arma o scudo nell’altra (anche se a due mani, se ha livello Esperto con l’arma). Infligge +1D10 danni da perforazione.`,
  "Veterano": `Abbassa di 1 la protezione delle armature naturali e artificiali.`,
  "Maestro": `Raddoppia i danni (cumulabile con il +1D10) e scarta sempre 1D6 per la mira in qualsiasi condizione.`
},

"Conoscenze Runiche": {
  "Neofita": `Sa incidere rune semplici su pietra e leggerle:  
ᚹ *Runa della Porta* – apre/chiude porte di pietra (1 ora per incidere).  
ᚠ *Runa di Chiusura* – blocca porte richiedendo una chiave runica (20 minuti).`,
  "Pratico": `Può incidere rune base su armi, scudi e armature se possiede Forgiare a livello Pratico:  
ᛒ *Runa del Pericolo* – l’arma brilla di blu in presenza di pericolo (1 giorno).  
ᛋ *Runa del Viandante* – mostra la direzione corretta (20 minuti, scompare dopo l’uso).  
ᛁ *Runa del Trasporto* – rende leggeri gli oggetti portati (1 ora per oggetto).`,
  "Esperto": `Può incidere rune complesse e disattivarle con prove di Sapienza. Richiede Forgiare Esperto:  
ᛉ *Runa del Richiamo* – richiama arma o scudo disarmato entro 15 m (1 giorno).  
ᛃ *Runa della Leggerezza* – rende l’armatura più leggera, elimina 1 dado malus (1 settimana).  
ᛞ *Runa Scudo* – aumenta dimensioni e difesa dello scudo.  
ᚫ *Runa della Terra* – impedisce sollevamenti magici o crea un’onda d’urto (1 settimana).  
ᚺ *Runa del Sangue* – tatuaggio che rigenera 2 ferite quando colpito (1 giorno).  
ᛋ *Runa del Fulmine* – folgora chi la tocca (15D10 + 4D10 bonus su armature metalliche), o elettrifica armi e armature per 5 turni (2 settimane).  
ᚢ *Runa dell’Aria* – arma leggera e capace di creare correnti che spazzano via nemici (2 settimane).`,
  "Veterano": `Può incidere rune avanzate anche su pareti. Richiede Forgiare Veterano:  
ᚱ *Runa del Fuoco* – arma fiammeggiante (+2D10 danni fuoco) o armatura incendiaria. Se incisa su parete, sputa fiamme (8D10 danni).  
ᛈ *Runa Rossa* – riduce i dadi armatura di 2 punti.  
ᚦ *Runa Anti-Illusione* – maschera che filtra ogni illusione.  
ᛏ *Runa della Resistenza* – rende armi e armature infrangibili (1 mese).  
ᛜ *Runa Anti-Magia* – 40% di riflettere incantesimi fisici diretti.  
ᛟ *Runa Eterea* – arma che ferisce spettri ma non esseri materiali.  
ᛞ *Runa della Prigionia* – tre rune formano un campo che intrappola chi lo attraversa (10 minuti per incidere).`,
  "Maestro": `Può incidere rune supreme:  
ᛗ *Runa Invisibilità* – rende invisibile un oggetto finché resta immobile, annulla rilevamento magico (2 giorni).  
ᚷ *Runa Portale* – collega due luoghi con la stessa runa fino a 10 km di distanza (10 minuti per l’attivazione).`
},

"Disinnescatore": {
  "Neofita": `Scarta sempre 1D6 di difficoltà quando cerca di individuare trappole.`,
  "Pratico": `Può disattivare trappole comuni (a scatto, molla, corda, pressione, leva) dopo averle individuate.`,
  "Esperto": `Sa costruire trappole semplici con materiali comuni: lame a scatto, dardi, reti, buche, allarmi sonori o trappole a liquidi. Non servono conoscenze di meccanica, ma precisione e intuito.`,
  "Veterano": `Comprende la logica e i meccanismi delle trappole complesse (a orologeria, ritardate, a combinazione). Il Narratore deve descriverne il funzionamento nel dettaglio.  
Non può disinnescarle direttamente: deve elaborare un piano logico o una soluzione creativa.  
Può tirare con un dado malus per ottenere un suggerimento utile dal Narratore.`,
  "Maestro": `Può costruire trappole complesse come quelle descritte nel livello Veterano.  
Può combinare questa abilità con il *Sentiero del Minatore* per creare o occultare sistemi sotterranei di trappole.`
},

"Freddo": {
  "Neofita": `Ottiene +2 protezione sui tiri paura (il Narratore deve ottenere almeno 7 anziché 5).`,
  "Pratico": `Ottiene vantaggio contro manipolazione, raggiro o incantesimi mentali. È in grado di celare perfettamente le proprie emozioni.`,
  "Esperto": `Non subisce mai malus sui tiri paura o su quelli che richiedono sangue freddo.  
Non può essere colto alla sprovvista entro il proprio campo visivo.`,
  "Veterano": `Riesce a leggere la paura negli altri, anche se nascosta, individuandone i punti deboli e riflettendo quella paura contro di loro. Funziona anche sulle creature.`,
  "Maestro": `È completamente immune alla paura e agli incantesimi mentali.`
},

"Guardia Implacabile": {
  "Neofita": `Scarta sempre un dado malus anche se circondato.`,
  "Pratico": `Non subisce penalità anche se circondato o a terra (salvo casi speciali).`,
  "Esperto": `Se possiede uno scudo grande, ottiene vantaggio per parare colpi a distanza e in mischia.  
Può “caricare” energia parando più volte: ogni parata riuscita aggiunge +1D10 al danno del turno successivo, fino a +5D10.  
Può anche parare due volte consecutive e poi colpire con +2D10, ma se fallisce deve ricominciare la sequenza.`,
  "Veterano": `Non subisce penalità da posizione o ambiente (anche su superfici mobili o sdraiato).`,
  "Maestro": `Impedisce ai nemici di accerchiare lui o i suoi alleati. Lo scudo lo protegge completamente dalle esplosioni.`
},

"Maestro d’Armi": {
  "Neofita": `Infligge +1D10 danno se è almeno Pratico con l’arma usata. Si somma ad altri bonus.  
Il danno a mani nude è di 5D10 (anziché 4D10) e non subisce malus se disarmato.`,
  "Pratico": `Colpisce con successo già con risultati pari o superiori a 4 (invece che 5), salvo armature naturali.`,
  "Esperto": `I danni vengono raddoppiati.`,
  "Veterano": `I risultati di 10 contano come danno triplo.  
Se l’arma è forgiata da un Argoniano di livello Maestro, il danno diventa quadruplo.`,
  "Maestro": `Tutti i colpi inferti colpiscono con M.S. globale, ignorando ogni forma di difesa o deviazione.`
},

"Sentiero del Minatore": {
  "Neofita": `Riconosce la qualità della roccia e i minerali grezzi a occhio nudo.  
Sa se una galleria è stabile e si orienta perfettamente nei tunnel.  
Nei sotterranei sviluppa una vista particolare che gli permette di vedere al buio.  
Non tira mai per scalare pareti semplici e applica la regola del vantaggio anche in casi difficili.`,
  "Pratico": `Trova cavità e punti vuoti nelle pareti, potendo scavare rapidamente un passaggio verso l’altro lato.  
Capisce se dietro c’è vuoto, roccia, un corridoio o una cavità.  
Scala pareti lisce senza tiri e mantiene il vantaggio come da regola precedente.`,
  "Esperto": `Conosce la geologia sotterranea in modo impeccabile. Stabilizza gallerie instabili, crea passaggi sicuri e riconosce fratture e vene minerarie.  
Ricorda ogni percorso esplorato e non si perde mai.  
Durante le scalate, anche in condizioni avverse (vento, neve, pioggia), non effettua tiri e applica sempre la regola del vantaggio.`,
  "Veterano": `Diventa un “sismografo vivente”: percepisce vibrazioni, cavità, risorse e creature nel sottosuolo.  
Individua collegamenti tra gallerie e crea nuovi passaggi sicuri.  
Può “sentire” i movimenti o la presenza di minerali e nemici attraverso la roccia.`,
  "Maestro": `Sviluppa un’intimità assoluta con la pietra.  
Può comunicare a distanza attraverso le pareti usando vibrazioni naturali, come un eco controllato.  
È capace di guidare squadre per costruire infrastrutture sotterranee complesse (ventilazione, ascensori, passaggi).  
Toccando la roccia, percepisce una “mappa viva” del sottosuolo, individuando trappole, instabilità, risorse e minacce.`
},
"Tenace": {
  "Neofita": `Quando risulterebbe morto, può compiere ancora un’azione prima di cadere.  
Se ferito gravemente, non subisce penalità ai movimenti.`,
  "Pratico": `Dimezza i danni da veleno.  
I risultati di 10 sui dadi danno contano come singoli, e i danni tripli valgono solo come doppi.`,
  "Esperto": `Anche se quasi privo di vita, continua a combattere come se fosse fresco.  
Quando raggiunge lo status di *ferita profonda*, può trasformare ogni danno subito in punti bonus d’attacco per il turno successivo (fino a +6 cumulabili).`,
  "Veterano": `Possiede una resistenza naturale che gli concede +1 alla protezione, come se indossasse un’armatura.  
Per ferirlo, l’avversario deve ottenere 6 o più su ogni dado.  
L’effetto è cumulabile con la protezione naturale del Garù, ma non con armature fisiche.`,
  "Maestro": `I danni inferti al personaggio vengono sempre dimezzati, indipendentemente dalla fonte.`
},

"Trafficante": {
  "Neofita": `Può determinare i prezzi medi delle locande e capire se sono equi.  
Sa valutare il valore reale della merce (cibo, armi, armature, beni di scambio) in base al luogo e al contesto.`,
  "Pratico": `Riconosce metalli e pietre preziose distinguendo l’autentico dal falso a occhio nudo.  
Ottiene sempre vantaggio nelle trattative economiche.`,
  "Esperto": `Scarta 1 dado malus quando tenta di vendere oggetti anche di poco valore.  
Sa valutare con precisione le gemme e il loro pregio.`,
  "Veterano": `Se il tiro ha successo, ottiene automaticamente uno sconto del 50% sulla merce che desidera acquistare.`,
  "Maestro": `Prevede l’andamento del mercato locale, anticipando rialzi e crolli dei prezzi.  
Sa dove conviene investire e, se possiede attività, ottiene +50% delle entrate da ciascuna.`
},

"Travolgere": {
  "Neofita": `Può caricare solo da almeno 6 metri di distanza.  
Durante la carica, costringe i nemici di taglia uguale o superiore a retrocedere di 1–2 passi, lasciandoli vulnerabili.  
Interrompe la loro difesa e l’equilibrio, rendendo difficile reagire.`,
  "Pratico": `La carica diventa un attacco mirato e brutale.  
Sbilancia chiunque si trovi davanti, anche di taglia superiore, spingendolo contro ostacoli o muri e infliggendo danni da impatto.  
Può rompere la concentrazione e le difese nemiche, aprendo varchi per i compagni.`,
  "Esperto": `La carica diventa devastante: travolge fisicamente i nemici facendoli cadere o sbalzandoli a terra.  
Può abbattere più bersagli contemporaneamente e danneggiare l’ambiente (spaccare rocce, travi, porte).  
Crea passaggi o ostacoli sfruttando la forza d’urto.`,
  "Veterano": `Il terreno trema sotto i suoi passi: la carica genera vibrazioni che sbilanciano chiunque entro pochi metri.  
Può far crollare strutture instabili o colpire a terra creando un’onda tellurica che danneggia e divide il campo di battaglia.`,
  "Maestro": `Diventa una frana vivente.  
Può travolgere creature enormi, raddoppiare la distanza di carica e generare un’onda d’urto che sbalza via i nemici nel raggio di alcuni metri.  
Gli alleati possono seguirlo senza ostacoli nella scia della carica.  
Contro creature colossali, può mirare a punti strutturalmente deboli per farle crollare o inginocchiare.`
}
},
"Sciamano": {
  "Armi Bianche": {
    "Neofita": `Può utilizzare con facilità le armi da taglio eliminando il malus per mancanza di competenza. Le classi speciali (Combattente, Guerriero Runico, Garù, Argoniano, Templare) possono usare anche armi generiche, ad asta e da impatto senza penalità. Se usa armi di tipo diverso subisce un malus di +1D6 ai tiri.`,
    "Pratico": `Diventa ambidestro e può impugnare due armi medie nello stesso turno, colpendo un singolo nemico (+1D10 danno se entrambi i colpi riescono) o due bersagli. Può lanciare coltelli fino a 20 m e giavellotti/lance fino a 80 m mantenendo i danni standard.`,
    "Esperto": `Amplia la competenza anche alle armi da impatto a una mano. Se usa due armi ottiene +1 e applica la regola dello scudo in caso di fallimento.`,
    "Veterano": `Riduce di 1 punto la protezione delle armature (anche naturali) con armi da taglio; se usa armi da impatto la riduzione aumenta di 1 ulteriore punto.`,
    "Maestro": `Vantaggio ai danni: i 9 valgono come danno doppio; per Garù, Guerriero Runico, Combattente e Templare anche gli 8 contano come doppio.`
  },

  "Botanica": {
    "Neofita": `Riconosce piante, alberi ed erbe commestibili/tossiche e valuta la fertilità del terreno.`,
    "Pratico": `Identifica erbe/bacche curative e velenose, conosce funghi (anche psicotropi). Prepara infusi che attenuano fame e stanchezza per qualche ora.`,
    "Esperto": `Prepara rimedi erboristici per disturbi, avvelenamenti e sanguinamenti. Può ridurre di 1–2 livelli gli effetti delle ferite in base al tiro e alla difficoltà. Può sintetizzare antidoti specifici.`,
    "Veterano": `Estrae e lavora veleni vegetali, creando tossine letali, oppiacei e droghe in base alle piante raccolte.`,
    "Maestro": `Crea preparati che leniscono completamente ferite, curano malattie ed espellono veleni rapidamente. Può realizzare elisir che donano forza, agilità e resistenza eliminando la stanchezza per alcune ore.`
  },

  "Connessione con il Fuoco": {
    "Neofita": `Manipola con le mani la forma e l’intensità di fuochi già accesi entro 10 m. Volume manipolabile: 3 dm³ per punto di MS (se MS = 0 considera 5). Non agisce su fuochi magici/non naturali. Può generare una scintilla per accendere fuochi.`,
    "Pratico": `Può spostare fuochi entro 10 m e controllarne più di uno. Riscalda 1 m³ d’acqua per punto di MS causando 4D10 danni/turno a chi è immerso. Lancia una sfera di fuoco fino a 10 m (5D10 + MS); con due mani può evocarne due (stesso o diversi bersagli; sullo stesso +1D10). Le fiamme si spengono su bersagli con corazze naturali/armature; può mantenerle con concentrazione e punti stanchezza (anche su due bersagli senza costi raddoppiati).`,
    "Esperto": `Accende oggetti infiammabili entro 6 m e riscalda metallo (1 dm³ per punto di MS). Scaglia una sfera esplosiva a 18 m (raggio 6 m, 7D10 + MS). Crea cerchio o muro di fuoco (raggio 5 m, entro 10 m, 5 turni): chi attraversa subisce 6D10 e ha 20% di incendiarsi; il cerchio può restringersi per soffocare/avvolgere con concentrazione.`,
    "Veterano": `Evoca 3 cerchi di fuoco per punto di MS con le stesse regole dell’Esperto. È immune al fuoco. Può creare un turbine che infligge 3D10 ai nemici in mischia (10 turni) e un vortice che lo avvolge (4D10/turno a chi lo ingaggia, 10 turni). Può infiammare armi e scudi degli alleati entro 30 m: +2D10 ai danni; quando gli alleati parano, i nemici subiscono 3D10 ustione.`,
    "Maestro": `Cupola di fuoco (diametro 10 m): alleati all’interno immuni al fuoco; nessuna fiamma esterna la attraversa. Nemici all’interno subiscono 6D10 + MS danni/turno. Durata: 3 turni per punto di MS. In spazi angusti la potenza è ridotta (3D10 + MS danni/turno e portata ridotta).`
  },
  "Connessione con l’Acqua": {
  "Neofita": `L’incantatore ha imparato ad ascoltare l’acqua. Fiumi, pozzi, acquedotti, nebbie e laghi gli “parlano”, e può sussurrare loro in cambio. 
– Può percepire la presenza dell’acqua anche dietro muri o sotto terra entro 20 metri × M.S.
– Usando la gestualità della mano può prosciugare l’acqua contenuta in borracce, bottiglie o coppe (o qualsiasi liquido misto ad acqua, come vino) entro 10 metri, ma solo per la quantità effettivamente contenuta.`,

  "Pratico": `Toccando una massa d’acqua, lo sciamano può rallentarne il flusso entro 20 m² × M.S. (senza applicare il moltiplicatore). Può congelarne una parte per creare una superficie stabile di ghiaccio, utile per attraversare o bloccare un passaggio (non funziona su esseri viventi). 
Può evocare fino a 10 dm³ di acqua potabile tra le mani e respirare sott’acqua per 1 ora × M.S.
Può condensare l’umidità per creare una fitta nebbia in un’area di 25 metri × M.S., mantenendo la concentrazione per 3 turni (voce + gestualità).`,

  "Esperto": `Durante la pioggia può trasformare le gocce in grandine affilata entro 20 metri × M.S., infliggendo 3D10 danni/turno finché i bersagli non trovano riparo. 
Può proiettare la propria coscienza attraverso corsi d’acqua naturali (fiumi, canali, acquedotti) per osservare luoghi remoti finché il flusso è continuo.
Può modificare il livello dell’acqua fino a 15 metri di distanza (area 20 metri × M.S.): far salire la marea, abbassare un corso o prosciugare un bacino.
Può evocare in un’area di 20 metri × M.S. un’onda anomala o un mulinello vorticoso che infliggono 9D10 danni immediati e 2D10/turno per 5 turni (estendibile con punti stanchezza). Il moltiplicatore M.S. non si applica ai danni.`,

  "Veterano": `Può teletrasportarsi lungo corsi d’acqua (fiumi, torrenti, cascate), anche per miglia, fondendosi con l’acqua dopo 6 turni di concentrazione e riapparendo in un punto connesso. 
Può spezzare argini e deviare fiumi entro 20 metri × M.S., facendo avanzare l’acqua fino a 2 km × M.S., travolgendo ciò che incontra (6D10 danni/turno a chi è immerso). 
In mare aperto può generare onde alte fino a 10 metri che devastano imbarcazioni e coste (area 1 km × M.S.).`,

  "Maestro": `Richiama le forze primordiali dell’acqua e della terra, evocando geyser incandescenti in un’area di 20 metri di diametro × M.S. (fino a 5 geyser per M.S.). 
Ogni geyser infligge 10D10 danni da ustione e scaglia in aria il bersaglio, che subisce ulteriori 15D10 danni da caduta. Il terreno trema e si deforma, causando danni e destabilizzando l’area circostante.`
},
"Connessione con l’Aria": {
  "Neofita": `L’incantatore sviluppa una sensibilità innata alle correnti d’aria, percependo variazioni di pressione e movimenti attorno a sé, anche a occhi chiusi. 
Può generare una brezza controllata con la gestualità della mano per sollevare polvere, spegnere piccole fiamme o muovere oggetti leggeri entro 5 metri. 
Può amplificare la propria voce tramite l’aria, facendola risuonare come un’eco o proiettandola fino a 50 metri.`,

  "Pratico": `Può generare una corrente d’aria in un raggio di 10 metri che disperde fumi, nebbie, gas o polveri tossiche, rendendo l’area respirabile e visibile. 
In combattimento la corrente può sbilanciare nemici vicini o respingere oggetti leggeri. 
Può ammortizzare cadute creando un cuscino d’aria o, al contrario, aumentare il proprio peso con un turbine discendente che lo tiene saldo al terreno. 
Evoca una scarica elettrica dal palmo della mano (5D10 × M.S.), raddoppiata contro armature metalliche e dimezzata se parata con scudo. Può colpire due bersagli o concentrare entrambe le mani su uno (6D10 danni).`,

  "Esperto": `Evoca le antiche parole del vento e, dopo 2 ore di concentrazione, altera le condizioni atmosferiche entro 1 km × M.S. (nuvole, piogge, venti, nebbie, bufere). L’effetto dura finché mantiene la connessione con l’ambiente (fino a un giorno). 
Può scatenare un fulmine dal cielo entro 12 metri, che colpisce in un raggio di 8 metri: infligge 6D10 + M.S. danni (raddoppiati su bersagli in acqua o in armature metalliche, dimezzati se parati con scudo metallico). 
Può sottrarre ossigeno da un’area di 10 metri entro 10 metri di distanza, rendendola irrespirabile per 5 turni × M.S. (chi respira subisce soffocamento progressivo).`,

  "Veterano": `Può dissolvere il proprio corpo e trasformarsi in pura essenza d’aria per 5 turni × M.S.:
– si muove fino a 30 m/turno e attraversa fessure o grate;
– è immune ad attacchi fisici e magie di terra, fuoco o ghiaccio;
– non può colpire o usare incanti vocali/materiali. 
Può essere disperso da magie dell’aria ostili o intrappolato in barriere magiche. 
Mentre è in forma aerea può camminare sull’aria e evocare un vortice entro 20 metri, con area di 25 × M.S., che solleva e scaraventa creature di taglia uguale o inferiore (danni da caduta e impatto a discrezione del narratore).`,

  "Maestro": `Richiama l’essenza primordiale dell’Aria, generando una Cupola di Tempesta nel raggio di 30 metri × M.S.:
– Raffiche violente sollevano oggetti, distruggono strutture fragili e scaraventano a terra chi non è ancorato.
– Fino a 5 × M.S. fulmini colpiscono bersagli scelti, infliggendo 6D10 + M.S. danni (raddoppiati in acqua o su armature metalliche, dimezzati se parati con scudo metallico).
Richiede concentrazione per evitare di colpire alleati. 
La tempesta dura 5 turni × M.S. e rende l’area quasi inaccessibile alle creature prive di protezioni contro gli elementi.`
},
"Connessione con la Luna e le Stelle": {
  "Neofita": `L’incantatore può evocare una luce argentea sulla propria mano che dura 1 ora × M.S. e illumina un’area di 6 metri. Può applicarla a oggetti entro 10 metri per farli brillare o rendere visibili iscrizioni e testi nascosti. 
Sviluppa inoltre una percezione innata delle costellazioni, riuscendo a orientarsi perfettamente e riconoscere i punti cardinali anche sotto terra.`,

  "Pratico": `Può plasmare l’influenza lunare entro 20 metri × M.S., facendo gonfiare torrenti, crescere vegetazione selvaggia o creare barriere naturali (solo di notte e in luoghi naturali). 
Quando è illuminato da luce lunare o stellare, dimezza automaticamente la spesa di punti stanchezza per gli incantesimi. 
Può disegnare nel cielo una scia di luce simile a una stella cadente che per 3 ore × M.S. indica la direzione del cammino (cielo limpido richiesto).`,

  "Esperto": `Può interrogare fino a 5 stelle visibili, ottenendo risposte simboliche: le stelle si illuminano se la risposta è corretta, si spengono altrimenti (riutilizzabili dopo 2 settimane o 3 giorni rispettivamente). 
Può illuminare nemici con luce lunare e scagliare una o due fiamme azzurre: i non morti colpiti non possono rigenerarsi per 10 minuti × M.S. e non possono nascondersi, poiché le stelle rivelano la loro posizione. 
Una volta per notte, può evocare un rituale che trasporta una nave o imbarcazione nel firmamento, navigando tra le stelle fino all’alba (evocazione: 1 ora). Il viaggio riduce enormemente le distanze.`,

  "Veterano": `Dopo 30 minuti di meditazione, l’incantatore eleva la propria coscienza alla Luna, osservando la natura in un raggio di 10 km come un’unica entità vivente. 
Può controllare le maree e sollevare o prosciugare acque su vasta scala, più potente durante le fasi di Luna crescente o calante. 
Può assorbire le stelle nel proprio sguardo, creando fonti di luce purificata entro 30 metri di raggio che dissolvono tenebre, rivelano illusioni e respingono corruzioni. 
Ogni stella posta riduce temporaneamente il legame con il cielo fino alla notte successiva. 
La rete di luci può illuminare aree immense e creare zone di pace e rigenerazione.`,

  "Maestro": `Durante la notte limpida, l’incantatore può dissolvere il corpo in polvere argentea e ascendere alla Luna Eterica — un piano sospeso tra sogno e realtà. 
Da lì può proiettare la coscienza in 7 luoghi entro 100 km, percependo tutto come se fosse presente fisicamente, e sussurrare ai puri di cuore attraverso la luce lunare. 
Può evocare la Cripta Celeste: una cupola eterea di 500 metri di raggio in cui il tempo scorre più lentamente (3 giorni all’interno = ½ giorno all’esterno). 
All’interno tutto è immerso in luce argentea e silenzio: nessuno può entrare o uscire. 
La Cripta dura fino a 30 giorni interni (5 esterni) e può essere evocata solo una volta per ciclo lunare.`
},
"Connessione con la Terra": {
  "Neofita": `Quando poggia i piedi nudi sul terreno, lo sciamano stabilisce un legame diretto con la terra viva. In ambienti naturali può percepire e mappare sentieri entro 1 km come se li vedesse dall’alto, riconoscendo anche presenze vive, spiriti o animali. 
Toccando una pianta può porle fino a due domande, ricevendo risposte tramite immagini o sensazioni. 
Può inoltre proiettare la coscienza in un animale di piccole o medie dimensioni entro 10 metri, percependo il mondo attraverso i suoi sensi. Se l’animale muore, subisce un contraccolpo spirituale.`,

  "Pratico": `Può calmare animali comuni (non mutaforma, draghi o simili) o assumerne temporaneamente il controllo se entro 10 metri, anche in branco o sciame. 
Può cavalcare animali fino a due taglie più grandi. In foresta rigenera ferite a velocità tripla. 
In ambienti naturali, le vene assumono il colore verde della clorofilla e può evocare liane di rovi ed edera per intrappolare un bersaglio (più efficace su taglie uguali o inferiori). 
Può anche animare la vegetazione entro 10 metri × M.S., facendo muovere radici, rami o piante come estensioni della sua volontà.`,

  "Esperto": `Può fondere la propria coscienza in un animale fino al doppio della sua taglia (se fallisce, non può ritentare con lo stesso). 
Può anche trasformarsi in piccolo animale mantenendo la mente umana, ma se il corpo muore, muore anche lui. 
Può scatenare frane o smottamenti entro 10 metri × M.S., sgretolare roccia (1 m³ × M.S.) o creare piccole scosse telluriche che fanno barcollare creature vicine (anche alleati, se presenti). 
Può evocare ancora grovigli di liane e rovi su fino a 3 avversari × M.S.`,

  "Veterano": `Controlla pienamente l’ambiente entro 20 metri × M.S.: la vegetazione prende vita e agisce come un esercito di radici, tronchi e rami che attaccano o difendono a comando. 
Può proiettare la coscienza in più creature contemporaneamente (fino a 2 × M.S.), percependo e agendo attraverso di esse. 
È completamente ancorato al terreno, immune a spinte o sbilanciamenti. 
Può evocare scosse telluriche che aprono spaccature o smuovono sabbie e polveri per accecare o ostacolare nemici — manifestazioni dirette della sua volontà primordiale.`,

  "Maestro": `Può stabilire un legame mentale con creature colossali o gigantesche, guidandole con il pensiero se non ostili. 
Può far rinascere una foresta vivente entro 1 km × M.S., anche dove prima vi era solo roccia o sabbia, scegliendone la composizione (rovi, alberi, fiori velenosi, rampicanti, ecc.). 
All’interno della foresta evocata ottiene copertura naturale e vantaggi di combattimento per sé e gli alleati. 
Nel cuore della foresta può evocare fino a 2 Troll × M.S., guardiani primordiali della terra, che restano finché non vengono distrutti.`
},
"Danza delle Ombre": {
  "Neofita": `L’incantatore sviluppa una connessione primordiale con le ombre. 
Può vedere nel buio totale come in pieno giorno per 1 ora × M.S. 
Può interrogare l’ombra visibile di una creatura: essa risponde mentalmente con due parole — una chiara (“sì”, “no”, “fuga”, “bugia”) e una sensazione (“freddo”, “eco”, “peso”). 
Ogni ombra può essere interrogata una sola volta e deve essere visibile.`,

  "Pratico": `Può muovere e animare la propria ombra entro 10 metri, indipendentemente dalla sua posizione fisica. 
L’ombra può assumere pose, comunicare per gesti o mimare movimenti. 
Può anche deformare con la mano le ombre di oggetti o creature, allungandole, rendendole onde o veli per celarsi o distrarre. 
Tutte le manipolazioni richiedono ombre visibili.`,

  "Esperto": `La propria ombra diventa semitangibile: può impugnare armi, afferrare oggetti e attaccare con le stesse caratteristiche dell’incantatore (ma non lancia incantesimi). 
Può spostarsi fino a 20 metri e deve restare visibile. Se la luce viene rimossa, l’ombra svanisce. 
L’incantatore può anche teletrasportarsi istantaneamente nel punto dove si trova la propria ombra — purché visibile e non nella completa oscurità.`,

  "Veterano": `Può utilizzare **qualsiasi ombra visibile** per:
– Teletrasportarsi tra due ombre (max 50 metri), se abbastanza grandi da contenerlo;
– Entrare nella propria ombra per diventare invisibile, intangibile e irrintracciabile finché non agisce.  
Può inoltre evocare le ombre degli avversari, piegandole alla propria volontà:
– Richiama fino a 3 × M.S. ombre combattenti da nemici visibili entro 20 metri;  
– Le ombre agiscono indipendentemente, usando armi e forza del nemico originale;  
– I loro attacchi non possono essere parati fisicamente, solo schivati o contrastati magicamente;  
– Ogni ombra dura 3 turni × M.S. o finché la fonte di luce viene spezzata.`,

  "Maestro": `Apprende il segreto del **Distacco d’Ombra**, separando le ombre da corpi viventi o caduti.  
Le Ombre Vaganti sono entità fluide e scure, visibili solo in parte alla luce diretta; si muovono rapidamente lungo le zone d’ombra, persino sospese nel vuoto se restano collegate a un’ombra sottostante.  

**Regole della Luce:**
– Le ombre si muovono ovunque ci sia ombra naturale o proiettata;  
– La luce piena (sole diretto, incanti sacri, fuoco puro) spezza il legame e le immobilizza;  
– Luce fioca o intermittente (luna, torce, fiamme tremolanti) le rallenta;  
– Possono attraversare brevi tratti di luce (fino a 1 metro) in un singolo turno.  

**Teletrasporto d’Ombra:**  
Quando un’ombra raggiunge un luogo e si ancora lì, l’incantatore e gli alleati possono svanire e ricomparire nel punto raggiunto.  
Le ombre possono osservare, ascoltare e riferire telepaticamente.  

**Durata:**  
8 ore × M.S., mantenendo la concentrazione.  
Alla fine dell’effetto, deve rievocare l’incantesimo per mantenerlo attivo.`
},
"Divinazione": {
  "Neofita": `Sviluppa un senso extrasensoriale che gli permette di percepire la presenza di creature senzienti e non senzienti entro 10 metri per 8 ore. 
Funziona anche durante il sonno, rivelando il numero esatto di presenze vicine, ma non la loro natura o intenzione.`,

  "Pratico": `Tracciando un simbolo sull’acqua e concentrandosi per 10 minuti, può ottenere una visione di un evento legato a un luogo o una persona. 
La visione può mostrare passato, presente o futuro, ma è sfocata e senza suoni, dura al massimo 5 minuti. 
Inoltre può celare completamente la propria aura magica, rendendosi invisibile a sensi e incanti mistici.`,

  "Esperto": `Può entrare nei sogni di un individuo conosciuto, modificandone l’ambiente e assumendo qualsiasi forma. 
Può usare questa capacità per influenzare, interrogare o manipolare il bersaglio. 
Per mantenere il controllo deve restare in trance per 2 ore, risultando vulnerabile. 
L’evocazione richiede 10 minuti di meditazione.`,

  "Veterano": `In trance profonda può proiettare la propria coscienza per individuare con precisione la posizione di una persona, alleato o nemico, ovunque nel mondo o su altri piani. 
Non può però vedere il contesto né comunicare. 
Richiede 10 minuti di meditazione per evocare l’incantesimo.`,

  "Maestro": `Raggiunge la piena percezione delle energie e creature circostanti. 
Può percepire auree entro il raggio visivo, scoprendone posizione, natura, numero, punti di forza e debolezza. 
Può anche osservare eventi accaduti fino a una settimana prima, con visioni nitide e udibili come ologrammi del passato.`
},

"Guarigione Magica": {
  "Neofita": `Imponendo le mani su una persona ferita, emana una luce che ferma le emorragie e cura 5D10 punti ferita. 
L’effetto richiede 5 minuti di concentrazione.`,

  "Pratico": `Può espellere completamente i veleni dal corpo del bersaglio e guarire 10D10 punti ferita. 
Richiede 5 minuti di calma e concentrazione.`,

  "Esperto": `Può ricostruire arti, rimuovere cecità o sordità, riparare fratture e alleviare dolori. 
Rimuove stati di follia magica (non naturale). 
Richiede 2 giorni di trattamento con 1 ora al giorno di imposizione delle mani.`,

  "Veterano": `Può guarire completamente una persona ferita, mitigare e rimuovere malattie in 2 settimane, e curare anche pazzia non magica. 
Deve dedicare 1 ora al giorno per 7 giorni consecutivi; se il ciclo si interrompe, deve ricominciare.`,

  "Maestro": `Può riportare in vita una persona morta una sola volta, infondendo in essa il Fuoco della Fenice. 
Il rito dura 3 ore senza interruzioni; se viene interrotto, deve essere ripetuto. 
Se fallisce una seconda volta, non potrà mai più essere usato. 
Il defunto sceglie se accettare o meno il ritorno alla vita.`
}

},

"Sentinella-Scout": {
  "Armi da Tiro": {
    "Neofita": `Possiede una conoscenza di base delle armi da tiro e una buona mira. Può usare con discrezione archi, balestre o armi da fuoco leggere. Colpisce bersagli a media distanza con moderata precisione, ma senza rapidità o potenza eccezionali.`,
    "Pratico": `Elimina un dado malus dovuto alle coperture del bersaglio. Se non vi è malus, applica la regola del vantaggio. Può scoccare frecce in movimento o da cavallo senza penalità, muovendosi in avanti o indietro liberamente.  
Lo Scout o la Canaglia possono scoccare due frecce da arco (non balestra) nello stesso turno, su uno o due bersagli distinti:  
– Se il tiro ha successo parziale, una freccia va sprecata e l’altra colpisce;  
– Se entrambe colpiscono lo stesso bersaglio, aggiunge +1D10 ai danni.`,
    "Esperto": `Raddoppia la gittata delle armi da tiro e riduce di 1 la protezione delle armature nemiche (anche naturali o a scaglie).  
Un Elfo Scout può incoccare tre frecce contemporaneamente:  
– Due frecce su un bersaglio: +1D10 danni totali;  
– Tre frecce su un bersaglio: +2D10 danni totali.`,
    "Veterano": `Può scoccare due frecce consecutive in un singolo turno (solo con arco). Può inoltre attaccare dalle coperture senza penalità né esporsi.  
Lo Scout e la Canaglia possono combinare questa abilità con altre.  
Un Elfo Scout può scoccare frecce a distanza ravvicinata (entro 2 m) e alternare colpi di spada e arco nello stesso turno.`,
    "Maestro": `Aumenta i danni di +2D10 e riduce ulteriormente di 1 i punti armatura del bersaglio (sia naturali che non). La sua mira è letale e infallibile anche contro bersagli in movimento o in copertura.`
  },

  "Acrobazia": {
    "Neofita": `Può saltare fino a 2 metri d’altezza senza penalità e compiere movimenti agili come capriole e rotolamenti per evitare colpi o ostacoli.`,
    "Pratico": `Cammina o mantiene equilibrio su superfici strette (corde, travi, parapetti) senza penalità, salvo condizioni estreme come vento o superfici scivolose.`,
    "Esperto": `Può rialzarsi da terra in meno di un turno con un colpo di reni. Cammina su superfici sottili anche in movimento.  
Se è un Elfo, ignora penalità dovute a pioggia, vento o combattimento mentre mira o si muove.`,
    "Veterano": `Può saltare da 5 m senza subire danni (10 m se Elfo). Ottiene vantaggio alle prove di schivata, anche circondato o sotto attacco a distanza.  
Un Elfo veterano può correre su superfici sottili anche in movimento.`,
    "Maestro": `Può ritirare due volte i dadi per azioni acrobatiche e scegliere il risultato migliore. Se già in vantaggio, può tirare tre volte.  
Esegue manovre straordinarie: afferrare frecce in volo, saltare su oggetti instabili o muoversi su terreni in rapido mutamento.`
  },

  "Armi Bianche": {
    "Neofita": `Può usare armi da taglio senza penalità. Se utilizza armi di altro tipo (impatto, tiro, ecc.), subisce +1D6 di malus ai tiri.`,
    "Pratico": `Diventa ambidestro e può impugnare due armi medie nello stesso turno.  
– Su un singolo nemico: +1D10 danno se entrambi i colpi riescono.  
– Su due nemici: calcola i danni separatamente.  
Può lanciare coltelli fino a 20 m e giavellotti/lance fino a 80 m mantenendo i danni standard.`,
    "Esperto": `Aumenta la competenza alle armi da impatto a una mano.  
Classi avanzate (Garù, Guerriero Runico) possono usare un’arma a due mani in una sola o combinarla con scudo/arma.  
Se usa due armi, ottiene +1 e applica la regola dello scudo in caso di fallimento.`,
    "Veterano": `Riduce di 1 punto la protezione delle armature (naturali incluse) con armi da taglio, e di 2 con armi da impatto.`,
    "Maestro": `Ottiene vantaggio devastante ai danni: i 9 valgono doppio, e per le classi avanzate (Garù, Guerriero Runico, Combattente, Templare) anche gli 8.`
  },

  "Botanica": {
    "Neofita": `Riconosce piante, alberi ed erbe commestibili o tossiche e valuta la fertilità del terreno.`,
    "Pratico": `Identifica erbe curative o velenose e conosce funghi psicotropi. Prepara infusi che riducono fame e stanchezza per alcune ore.`,
    "Esperto": `Crea rimedi erboristici contro disturbi o veleni, riducendo di 1–2 livelli gli effetti delle ferite. Può sintetizzare antidoti specifici.`,
    "Veterano": `Estrae e lavora veleni vegetali, tossine, oppiacei e droghe naturali.`,
    "Maestro": `Prepara elisir che guariscono malattie, ferite e veleni. Può creare tonici che donano forza, agilità e resistenza, annullando la stanchezza per ore.`
  },

  "Cacciatore di Taglie": {
    "Neofita": `Riconosce e segue le tracce del bersaglio attraverso odori e sensazioni. Può percepire il suo passaggio fino a una settimana dopo.  
Avverte la paura e la presenza del nemico come un istinto animale.`,
    "Pratico": `Percepisce il calore delle creature entro 20 metri, come una vista a infrarossi. Individua nemici nascosti anche attraverso pareti sottili.`,
    "Esperto": `Quando individua il bersaglio, ottiene vantaggio contro di lui e raddoppia i danni prima dell’applicazione del M.S.  
Se è circondato, subisce comunque le penalità previste dal Narratore.`,
    "Veterano": `Carica verso il bersaglio tracciato con tale forza da travolgere chiunque sulla traiettoria, scartando sempre un dado malus.  
Il nemico che non riesce a schivare viene sbalzato o sbilanciato.  
Può essere usata solo a distanza minima di 15 metri e non in mischia.`,
    "Maestro": `I danni doppi si sommano come singoli e ottiene +1 naturale alla difesa (fino a un massimo di 8+) contro il bersaglio.  
È protetto come da un’armatura leggera e la sua caccia è inesorabile.`
  },
  "Empatia Animale": {
    "Neofita": `Comprende i comportamenti degli animali e ne interpreta i segnali d’allarme. Può intuire la presenza di pericoli, fonti d’acqua o cibo nelle vicinanze osservandone il comportamento.`,
    "Pratico": `Può comunicare con un singolo animale entro 20 metri, impartendo comandi semplici (seguire, cercare, riportare oggetti, individuare cibo).  
Non funziona su predatori o animali feroci.  
Può addestrare un compagno animale (falco, corvo, topo, ermellino, ecc.) in un mese, legandolo a sé in modo fedele.  
Riconosce i punti deboli e forti delle creature osservate.`,
    "Esperto": `Può comunicare con un branco o stormo della stessa specie, anche a distanza (entro 2 km) tramite suoni e fischi particolari.  
Può richiamarli per assisterlo o attaccare se necessario.  
Funziona anche su predatori di piccola taglia come lupi o sciacalli.  
Il Narratore può decidere la presenza con un tiro percentuale.`,
    "Veterano": `Comunica con gli animali come se avessero un legame telepatico.  
Può scegliere un compagno animale permanente (lupo, lince, aquila, gufo, ecc.) che lo segue e lo assiste.  
Se il compagno muore, può legarsi a un altro dopo una settimana, ma se lo maltratta o uccide, perde per sempre questa capacità.`,
    "Maestro": `Può creare un legame con una creatura di grossa taglia (orso, tigre, cervo, ecc.) dopo un’ora di calma e offerta di cibo.  
Se il tiro riesce, la creatura diventa cavalcabile e risponde ai richiami del personaggio tramite suoni specifici.`
  },

  "Furtività": {
    "Neofita": `Si muove con attenzione e silenzio, riducendo il rumore dei propri passi.  
Può sciogliere nodi e legature semplici in 10 minuti e ottiene sempre vantaggio nei tiri per muoversi silenziosamente, anche su superfici difficili.`,
    "Pratico": `Sincronizza i movimenti con i suoni ambientali (vento, pioggia, corsi d’acqua, versi animali).  
Può muoversi entro 20 metri senza essere udito, sfruttando i rumori naturali per mascherarsi.`,
    "Esperto": `Si sposta come un’ombra, sfruttando coperture e ostacoli per nascondersi.  
Può scartare un dado malus nei tiri di agilità o furtività quando è sotto tiro o in movimento.`,
    "Veterano": `Avanza inosservato anche in zone con scarsa copertura, sfruttando distrazioni e angoli ciechi.  
Se attacca un bersaglio ignaro, ottiene un vantaggio aggiuntivo nell’attacco a sorpresa.`,
    "Maestro": `Può sparire in combattimento e riapparire alle spalle o di lato del nemico.  
Ottiene sempre vantaggio in mischia e può colpire più avversari senza essere visto.`
  },

  "Mimetizzazione": {
    "Neofita": `Ottiene vantaggio nel nascondersi in ambienti naturali sfruttando alberi, rocce o cespugli.`,
    "Pratico": `Può mascherare odore e colore dell’equipaggiamento con fango, foglie o materiali naturali.  
Gli Elfi modificano automaticamente il colore dei propri abiti per fondersi con l’ambiente.`,
    "Esperto": `È in grado di celare persino la propria ombra, rendendosi quasi invisibile in natura o ambienti urbani poco illuminati.`,
    "Veterano": `Riflette la luce e si fonde con l’ambiente circostante, diventando quasi invisibile.  
Muovendosi, la sua sagoma può però essere individuata da osservatori attenti.`,
    "Maestro": `Può assumere la forma statica di un elemento naturale delle proprie dimensioni (masso, tronco, ecc.).  
Appena si muove, torna visibile.`
  },

  "Resistenza ai Veleni": {
    "Neofita": `Riconosce i veleni a vista o al primo assaggio.  
Il corpo reagisce lentamente alle tossine, permettendogli di agire prima che abbiano effetto.`,
    "Pratico": `Metabolizza o espelle i veleni ingeriti grazie a tecniche di respirazione.  
Dimezza i danni dei veleni da ferite (arrotondati per difetto).  
Il corpo emana un odore erbaceo o minerale, segno della sua resistenza.`,
    "Esperto": `Ha vantaggio nei tiri sulla tempra contro veleni soporiferi.  
I veleni aerei o interni agiscono più lentamente: un effetto per turno vale ogni 3 turni per lui.  
Riduce gli effetti anche di ore o giorni, a discrezione del Narratore.`,
    "Veterano": `I veleni paralizzanti o mentali hanno scarso effetto.  
Il corpo sviluppa una tolleranza tale da sembrare immune ai veleni comuni.`,
    "Maestro": `È totalmente immune ai veleni trasmessi per via aerea.  
Il suo corpo è ormai un filtro vivente contro ogni tossina.`
  },

  "Sentinella": {
    "Neofita": `Ottiene vantaggio nei tiri di percezione contro chi si avvicina entro 6 metri.`,
    "Pratico": `Durante le risse può lasciare la mischia senza penalità.  
Qualsiasi oggetto impugnato (bottiglia, gamba di sedia, ecc.) infligge danni pari a un’arma standard.`,
    "Esperto": `Può impartire ordini a PNG fidati (guardie, esploratori, ecc.) se presenti in scena.  
Tira 1D10 × M.S. per determinare l’efficacia delle azioni coordinate.  
Ottiene vantaggio negli inseguimenti e mappa l’ambiente rapidamente.`,
    "Veterano": `Ogni volta che ottiene un successo in combattimento può deviare l’arma del nemico nella direzione scelta (senza disarmarlo).`,
    "Maestro": `Due volte per combattimento può spingere i nemici circostanti a colpirsi tra loro.  
Non funziona su creature di due taglie più grandi (come draghi o viverne).`
  },

  "Sopravvivenza": {
    "Neofita": `Sa accendere fuochi, seguire tracce, orientarsi e riconoscere piante commestibili o velenose.  
Individua acqua potabile e sa distinguere i punti cardinali anche senza strumenti.`,
    "Pratico": `Costruisce trappole e armi rudimentali.  
Scarta sempre un dado malus nei tiri per tracce o sopravvivenza; se non vi sono malus, ottiene vantaggio.`,
    "Esperto": `Può resistere a fame e sete per 3 giorni senza penalità.  
Estrae acqua da piante o rocce e costruisce ripari efficaci in poco tempo.`,
    "Veterano": `Ha bisogno di sole 2 ore di sonno per riprendersi completamente.  
Può seguire tracce vecchie di mesi e dedurre peso, altezza e direzione del bersaglio.`,
    "Maestro": `Prevede il clima, si muove con vantaggio su ogni terreno e non viene percepito dalla fauna locale.  
Individua sempre il percorso più sicuro e sopravvive anche negli ambienti più ostili.`
  },

  "Tiratore Scelto": {
    "Neofita": `Ignora malus dovuti a vento, pioggia o scarsa visibilità. Scarta sempre un dado malus se presente.`,
    "Pratico": `Può far rimbalzare una freccia su muri o superfici per colpire un bersaglio nascosto.  
Combinabile con altre abilità da tiro (come ambo di frecce).`,
    "Esperto": `Restando immobile per 3 turni, ignora completamente l’armatura del bersaglio (anche naturale).  
Può studiare e colpire con precisione chirurgica da lunga distanza.`,
    "Veterano": `Può disarmare a distanza e raddoppiare la gittata dell’arma senza penalità.  
Se mira per 3 turni consecutivi, gli 8 e superiori contano come danno doppio.`,
    "Maestro": `Una sola volta per sessione può studiare un nemico per 5 turni, colpendo un punto vitale che dimezza istantaneamente i suoi Punti Ferita.  
Se interrotto, non può ripetere l’azione fino al giorno successivo.`
  }
  
},

"Stregone": {
  "Armi Bianche": {
    "Neofita": `È in grado di utilizzare con facilità le armi da taglio, eliminando il malus per mancanza di competenza. Le classi speciali (Combattente, Guerriero Runico, Garù, Argoniano, Templare) possono usare anche armi generiche, ad asta e da impatto senza penalità. Se usa armi di tipo diverso subisce un malus di +1D6 ai tiri.`,
    "Pratico": `Diventa ambidestro, impugnando due armi medie nello stesso turno. Può colpire un singolo nemico (+1D10 danno se entrambi i colpi riescono) o due bersagli diversi. Può lanciare coltelli fino a 20 m e giavellotti/lance fino a 80 m mantenendo i danni standard.`,
    "Esperto": `Amplia la competenza anche alle armi da impatto a una mano. Le classi avanzate (Garù, Guerriero Runico) possono usare un’arma a due mani in una sola mano o combinarla con un’altra arma o scudo. Se usa due armi ottiene +1 e applica la regola dello scudo in caso di fallimento.`,
    "Veterano": `Riduce di 1 punto la protezione delle armature (anche naturali) con armi da taglio; se usa armi da impatto la riduzione aumenta di 1 ulteriore punto.`,
    "Maestro": `Vantaggio devastante ai danni: i 9 valgono come danno doppio, e per Garù, Guerriero Runico, Combattente e Templare anche gli 8 contano come doppio.`
  },

  "Alchimia": {
    "Neofita": `Può miscelare elementi comuni per ottenere intrugli semplici che curano sintomi lievi (mal di testa, nausea, dolori). Sa fondere metalli e creare leghe come l’acciaio.`,
    "Pratico": `Crea piccole pozioni curative per ferite lievi o medie e intrugli che espellono veleni leggeri. Analizza tessuti e organi per comprenderne natura e abilità. Può rinforzare temporaneamente materiali naturali e creare unguenti protettivi contro condizioni estreme (freddo, caldo).`,
    "Esperto": `Crea pozioni potenti che accelerano la guarigione di ferite gravi. Può mutare lo stato fisico degli elementi (liquido ↔ solido ↔ gassoso) e sintetizzare antidoti completi. Produce veleni o infusi che alterano la percezione, aumentano forza o resistenza e pozioni durature di protezione fisica o magica.`,
    "Veterano": `Può usare sangue infetto per creare cure contro malattie contagiose. Crea gas tossici e veleni letali da composti naturali o creature magiche, capaci di paralizzare o uccidere in poche ore. Rischia contaminazione o esplosioni se la miscela fallisce.`,
    "Maestro": `Raggiunge la trasmutazione alchemica: converte materia solida in altra di pari massa (pietra→ferro, rame→oro, legno→acciaio). Il processo richiede un cerchio alchemico, componenti rari e un’ora di concentrazione. L’effetto è permanente ma può essere eseguito solo una volta al giorno. Non funziona su esseri viventi.`
  },

  "Astralismo": {
    "Neofita": `Percepisce il mondo oltre il velo: può celare la propria aura magica, scrutare attraverso superfici sottili (30 cm) e ascoltare suoni lontani entro 20 m. Può evocare un cerchio invisibile di allarme che lo avverte con un sibilo se viene attraversato da entità ostili.`,
    "Pratico": `Crea un contenitore astrale invisibile (senza limiti di peso o spazio) accessibile solo a lui. Può proiettare una copia eterea di sé fino a 500 m o estendere la propria visione fino a 1 km, percependo tutto come se fosse presente fisicamente.`,
    "Esperto": `Evoca una gabbia spirituale mobile che respinge entità del Piano Etereo. Può smaterializzarsi per attraversare pareti sottili (≤1 m). Evoca sentinelle spirituali vincolate a oggetti che lo avvertono di presenze vive. Può teletrasportarsi di 15 m e penetrare nei sogni di altri per influenzarli.`,
    "Veterano": `Può teletrasportare sé e gli alleati entro 15 m o trasportarli temporaneamente nel Piano Etereo, dove fluttuano e ignorano le leggi fisiche. Lì possono combattere entità eteree con armi normali. Può percepire ogni tipo di aura magica, anche celata.`,
    "Maestro": `Apre portali verso luoghi conosciuti, attivi per 5 minuti, richiedendo 6 turni di concentrazione. Può entrare e uscire liberamente dal Piano Etereo e crea una seconda coscienza astrale che osserva e comunica entro 1 km, attiva per una sola scena al giorno.`
  },
  "Conoscenza delle Lingue": {
  "Neofita": `Il personaggio è in grado di comprendere e parlare fluentemente una o due lingue straniere comuni, oltre alla propria. Può anche decifrare frammenti semplici di scritture sconosciute o antiche, a patto che vi siano indizi nel contesto o simboli ripetuti. È in grado di capire il senso generale di una conversazione anche se non padroneggia la lingua usata, purché si tratti di una lingua parlata da una razza intelligente e conosciuta.`,
  "Pratico": `Il personaggio può apprendere nuove lingue in tempi sorprendentemente brevi, anche solo ascoltandole. Può leggere testi antichi o in lingue morte con un buon grado di precisione, e decifrare codici elementari. È in grado di imitare l’accento e l’inflessione di un parlante nativo, passando facilmente inosservato in un contesto sociale estraneo. Può anche fungere da interprete tra due creature che parlano lingue diverse, traducendo con grande rapidità e senza alterare il significato.`,
  "Esperto": `Il personaggio comprende a fondo la struttura delle lingue e può dedurne significato, uso e radici anche da testi completamente sconosciuti o criptici. Può decifrare antichi manoscritti, glifi, simboli magici e iscrizioni dimenticate, ricostruendo messaggi anche incompleti. È in grado di apprendere sul momento una lingua sconosciuta ascoltandone alcune frasi chiave, e può trasmettere a qualcun altro la comprensione temporanea di una lingua (per poche ore), tramite contatto o formula verbale. Può leggere il tono nascosto in una frase, cogliendo sfumature come sarcasmo, menzogna o minaccia velata.`,
  "Veterano": `Il personaggio è in grado di comprendere e comunicare in ogni lingua viva parlata da esseri senzienti, anche se sentita per la prima volta. Può inoltre “tradurre” mentalmente simboli non verbali, come pittogrammi o linguaggi gestuali, e dedurre il significato di testi criptici, purché dotati di una struttura logica. È capace di scrivere o parlare in modo cifrato, creando codici comprensibili solo da chi possiede la sua stessa conoscenza delle lingue. Può interpretare linguaggi magici o dimenticati, inclusi quelli usati da entità soprannaturali o razze estinte. Infine, può far sì che due creature che non condividono alcuna lingua si comprendano per un breve tempo, fungendo da ponte mentale.`,
  "Maestro": `Il personaggio è in grado di comprendere, leggere e parlare qualsiasi linguaggio esistente, compresi quelli dimenticati, proibiti, o appartenenti a creature superiori e piani alieni. Può "leggere" i pensieri espressi interiormente da un soggetto se formulati in forma linguistica, anche senza parlare con lui. Può scrivere o pronunciare frasi impossibili, capaci di influenzare la realtà se pronunciate nella Lingua Prima (un idioma primordiale noto solo ai Maestri), alterando l’emotività o la comprensione di chi ascolta. Infine, può sigillare o distruggere un testo magico semplicemente riscrivendone la struttura o nominando il suo contenuto ad alta voce, come se dominasse la grammatica stessa del potere.`
},

"Connessione con il Fuoco": {
  "Neofita": `L'incantatore usando le mani è in grado di alterare la forma e le dimensioni dei fuochi già accesi (3 dm³ x M.S. In questo caso non si conta il moltiplicatore ma la differenza tra la soglia del successo e il risultato ottenuto, se il risultato è 0, allora il moltiplicatore sarà per 5) entro un'area di 10 metri del suo campo visivo. Non può spostare i fuochi dalla loro posizione originale, ma può creare forme, alzare o abbassare l'intensità del fuoco o spegnerlo. Non è in grado di manipolare fuochi evocati magicamente o che non siano prodotti in modo artificiale. Inoltre, è in grado di generare una scintilla sulle sue mani, utile come alternativa all'acciarino per accendere fuochi.`,
  "Pratico": `Non solo può alterare i fuochi, ma può anche spostarli nell'area circostante. Utilizzando le mani può muovere un fuoco a piacere entro un raggio di 10 metri, dirigendolo verso altri oggetti o modificando la sua posizione, senza che il fuoco si estingua o perda intensità. Inoltre, può agire su più fuochi contemporaneamente, rendendo l’incantatore molto più pericoloso in situazioni di battaglia o in ambienti infuocati. Può anche scaldare 1 metro cubo d'acqua per M.S., causando 4D10 danni da ustione a turno a chi si trova nell’area. Può scagliare una o due sfere infuocate fino a 10 metri, che causano 5D10 danni per moltiplicatore M.S. e possono essere mantenute spendendo punti stanchezza.`,
  "Esperto": `Può accendere oggetti infiammabili entro 6 metri e surriscaldare metallo (1 dm³ per M.S.). Può scagliare una sfera infuocata fino a 18 metri, che esplode e colpisce in un’area di 6 metri infliggendo 7D10 danni + M.S. Può creare cerchi o muri di fuoco entro 10 metri, che causano 6D10 danni da ustione e possono restringersi sulle vittime. Questi durano almeno 5 turni e possono essere mantenuti spendendo punti stanchezza.`,
  "Veterano": `Può evocare fino a 3 x M.S. cerchi di fuoco identici a quelli dell’Esperto, creare un turbine di fuoco che lo rende immune al calore e infligge 3D10 danni da fuoco a turno a chi è in mischia. Può infiammare le armi degli alleati entro 20 m x M.S., conferendo +2D10 danni da fuoco e 3D10 danni da ustione quando si para. Può anche evocare cerchi protettivi per sé e gli alleati.`,
  "Maestro": `Evoca una cupola di fiamme di 10 metri di diametro che dura 3 turni x M.S., immune per chi è all’interno e letale per chi è fuori. I nemici all’interno subiscono 6D10 danni da fuoco a turno, moltiplicati per M.S. La cupola è impenetrabile al fuoco esterno e in spazi angusti la potenza si riduce (3D10 danni per turno x M.S.). Le fiamme consumano lentamente tutto ciò che toccano, rendendo il potere del Maestro della Piromanzia temuto da ogni mortale.`
},
"Conoscenze Runiche": {
  "Neofita": `Il personaggio è in grado di riconoscere simboli runici legati a concetti generali (protezione, maledizione, forza, ecc.), ma non ne comprende completamente il significato profondo. Inoltre, può iniziare a riconoscere rune in ambienti o su oggetti specifici e capire se ci sono effetti legati a esse.`,
  "Pratico": `Il personaggio è in grado di tradurre un intero testo runico in linguaggio comune, comprendendo il significato delle rune e la loro disposizione. È anche capace di cominciare a riconoscere rune che influenzano l'ambiente, come rune di protezione o di attivazione, senza essere ancora in grado di manipolarle a pieno.`,
  "Esperto": `Il personaggio è in grado non solo di leggere le rune, ma anche di attivarle, disattivarle o modificarle con la voce fino a una distanza di 15 metri se sono entro il suo campo visivo. La sua capacità di manipolare le rune diventa molto più versatile, permettendogli di influenzare gli oggetti o l’ambiente in maniera significativa.`,
  "Veterano": `Il personaggio è in grado, usando la mano, di cancellare o ripristinare rune da un testo o incise su una parete o su un oggetto. La cancellazione o il ripristino richiedono il contatto diretto con la runa e almeno un’ora di lavoro, durante la quale lo stregone deve pronunciare parole arcane. Può anche manipolare rune antiche o danneggiate, tentando di ripristinare i loro effetti o di cancellarle completamente, ma la difficoltà aumenta con la complessità della runa.`,
  "Maestro": `Il personaggio non è in grado di incidere rune come i nani, ma può trasferire rune da un oggetto all’altro utilizzando la magia, rendendo la runa effettiva sull’oggetto di destinazione. Può anche evocare rune temporanee di protezione o potenziamento. Il trasferimento di rune richiede un alto livello di concentrazione e almeno un'ora di lavoro senza distrazioni.`
},

"Conoscenze Storiche & Geografiche": {
  "Neofita": `Il personaggio ha una conoscenza base degli eventi storici e della geografia perlopiù legata ai regni umani. Conosce gli ultimi avvenimenti del mondo conosciuto e sa leggere e orientarsi grazie alle mappe.`,
  "Pratico": `Il personaggio è in grado di disegnare i confini del mondo da lui conosciuto, conosce la storia dei casati e le loro dinamiche interne, oltre ciò è in grado di orientarsi nel mondo conosciuto anche senza l’ausilio di mappe.`,
  "Esperto": `Il personaggio possiede una vasta conoscenza storica e sociologica legata ai regni umani, e ha raccolto frammenti significativi anche su civiltà perdute, regni abbandonati e terre selvagge. È in grado di leggere il passato nei dettagli nascosti e, tornando in un insediamento già visitato, percepisce come il luogo è cambiato nel tempo. Può decifrare scritture antiche, riconoscere riti dimenticati e localizzare siti storici di grande importanza ormai scomparsi dalle mappe.`,
  "Veterano": `Il personaggio è un archivio vivente della storia del mondo conosciuto e dei suoi misteri. Collega eventi sparsi come fili in un arazzo invisibile, percependo manipolazioni o omissioni nella Storia. Quando entra in un luogo, può avvertire la presenza di eventi antichi e riconoscere menzogne o versioni alterate degli eventi. È in grado di percepire confini dimenticati, città sepolte e deviazioni nei paesaggi causate da magie o cataclismi, leggendo le linee geomantiche del mondo.`,
  "Maestro": `Il personaggio non studia più la Storia: la incarna. È in grado di identificare punti di snodo storici e percepire biforcazioni del destino. In presenza di luoghi o oggetti antichi può entrare in trance e ricevere visioni di eventi remoti, comunicando con le eco delle figure storiche. La sua sola presenza può riattivare simboli arcani sepolti, sbloccare portali nascosti o far riaffiorare iscrizioni dimenticate. Riesce a vedere la forma originaria di continenti e paesaggi mutati nei secoli e, quando narra, chi lo ascolta vive la Storia come un ricordo proprio. Può accedere a verità perdute e mappe dimenticate che superano persino la conoscenza degli oracoli.`
},
"Cronomanzia": {
  "Neofita": `Toccando un oggetto o un punto del luogo, l’incantatore può evocare un breve frammento di passato o futuro, scegliendo un soggetto e un contesto dichiarati a voce. L’immagine, intensa ma fugace, dura un istante e può essere richiamata solo una volta per scena. In assenza di luce solare, lo stregone conserva una percezione precisa del tempo: sa che ora è, quanto è trascorso e quando si avvicinano momenti chiave come l’alba o la notte.`,
  "Pratico": `Toccando un oggetto, l’incantatore può farne scorrere all’indietro il tempo fino a otto ore, restituendolo a un suo stato passato. Le modifiche possono influire su condizione, posizione o funzionalità: una serratura può tornare chiusa o aprirsi, un’arma danneggiata può tornare intatta, un calice versato può riempirsi di nuovo. L’incantatore può assumere temporaneamente un aspetto più anziano, come se il suo corpo avesse vissuto anni in più. Non è un’illusione: pelle, voce e movenze cambiano realmente, anche se l’effetto svanisce dopo qualche minuto. Può anche accelerare o rallentare lievemente la propria percezione del tempo, ottenendo un piccolo vantaggio o ritardo nelle azioni, utile per reagire prima, osservare meglio o evitare pericoli imminenti.`,
  "Esperto": `L’incantatore meditando per mezz’ora può proiettarsi nel passato e osservare un evento specifico accaduto in un luogo preciso. La visione è esterna, come se fluttuasse tra ombre e ricordi, e dura fino a un’ora. Non può interagire con ciò che vede, né modificare gli eventi. L’esperienza è estenuante: consuma molta energia, e lo stesso evento non può essere rivisto una seconda volta. Ogni 15 minuti di visione costa punti stanchezza. Inoltre, al semplice tocco, lo stregone può accelerare o invertire il tempo su una superficie fino a un metro x M.S., facendo arrugginire il metallo, marcire il legno o ricostruire oggetti in avanti o indietro nel tempo. L’effetto è istantaneo e reale, ma non può essere applicato su esseri viventi.`,
  "Veterano": `L’incantatore può rallentare il tempo all’interno di un'area di 20 metri per un massimo di 4 turni x M.S., facendo muovere se stesso e i suoi alleati al doppio della velocità. Gli avversari, invece, risultano rallentati e dimezzano la velocità d’azione. Questo effetto è limitato a creature della stessa taglia o al massimo due taglie superiori. Inoltre, può evocare un Paradosso Temporale: nel momento in cui un avversario sta per colpirlo, lo stregone può distorcere il tempo per evitare completamente l’attacco. L’incantesimo può essere usato solo una volta ogni settimana.`,
  "Maestro": `L’incantatore meditando per tre ore è in grado di intraprendere viaggi nel tempo e manipolare eventi passati. Tuttavia, più resta ancorato al passato, più la sua energia si esaurisce e i suoi ricordi si frammentano, invecchiando rapidamente. Ogni giorno trascorso nel passato equivale ad almeno tre settimane nel tempo presente.`
},

"Elettrostaticità": {
  "Neofita": `Lo stregone ha imparato a condensare un primo, rudimentale legame con l’energia elettrostatica. Le sue dita crepitano a comando e la pelle sussurra cariche invisibili nell’aria. Può scatenare piccole scariche elettriche tramite il tocco, che non arrecano danni significativi ma provocano spasmi, tremori o perdita di concentrazione. Può anche imprimere queste scariche su un oggetto (maniglia, arma, libro, coppa) che rilascerà la scossa al primo contatto, utile per distrarre o rivelare presenze.`,
  "Pratico": `Lo stregone può ora canalizzare e liberare una vera scarica elettrica. Scaglia una scarica che causa 3D10 danni + M.S., distribuibile su più bersagli (fino a 5 con una mano o 10 con due) entro 10 metri in un cono di 180°, ma non in mischia. Concentrandola su un singolo bersaglio: 5D10 danni con una mano, 6D10 con due. Può mantenere l’incantesimo più turni spendendo Punti Stanchezza. Può anche imprimere una trappola elettrostatica in un oggetto, che al tocco esplode causando 14D10 danni diretti e 6D10 a chi si trova entro 6 metri.`,
  "Esperto": `Può caricare un oggetto (bastone, anello, bracciale ecc.) in un turno e dirigere la scarica, infliggendo 8D10 danni (+M.S.). Le scariche evocate dalle dita causano 4D10 danni, 6D10 con una mano e 7D10 con due. Può creare una gabbia elettrostatica intorno a sé per 5 minuti: chi lo attacca in mischia subisce 4D10 danni da elettricità per turno. Inoltre, può rendere magnetiche armi e armature entro 10 metri, facendole attrarre o respingere tra loro per 1 turno.`,
  "Veterano": `Può scatenare un’onda magnetica che colpisce chi indossa o impugna metallo entro il suo raggio. Infligge 7D10 danni + M.S., raddoppiati contro armature metalliche. In alternativa, può colpire altri bersagli per 6D10 + M.S. senza raddoppio. Crea anche un campo magnetico di 10 metri che attrae o respinge armi e oggetti metallici, disarmando o disorientando i nemici per 1 turno.`,
  "Maestro": `Lo stregone domina totalmente l’energia elettrostatica. Può evocare una gabbia di 10 metri che infligge 6D10 danni da elettricità per turno (raddoppiati contro metallo). Gli alleati possono essere esclusi con un tiro di precisione. La gabbia dura 10 turni e può essere mantenuta spendendo punti stanchezza. Il controllo dell’energia è tale da poter devastare un’intera area o neutralizzare completamente chi vi è intrappolato.`
},
"Flusso": {
  "Neofita": `L’incantatore può fissare il punto e mantenere integro un oggetto che altrimenti collasserebbe prima del punto di rottura: una spada spezzata può ancora parare, un sigillo rotto resta chiuso, una bottiglia scheggiata non si svuota. Può anche mantenerlo integro finché mantiene la concentrazione, spendendo punti stanchezza. È inoltre in grado di percepire il punto di rottura naturale di un oggetto, costrutto o artefatto, individuando dove colpire un muro per farlo cedere, quale ingranaggio è prossimo al guasto o dove un oggetto magico è più instabile.`,
  "Pratico": `L’incantatore manipola il flusso energetico interno degli oggetti magici. Con un gesto della mano, può svuotarli della loro energia, sottraendo fino a 3 punti stanchezza per turno e ripristinando tanti punti stanchezza quanti ne ha sottratti. Se l’oggetto è corrotto, i punti stanchezza diventano punti paura. Può evocare una fiamma bianca eterea sulla mano che illumina un’area di 3 metri senza calore. Lanciata contro creature spettrali o d’ombra infligge 5D10 danni + M.S., riducendo del 25% l’incorporeità e triplicando i danni contro le ombre. Non ha effetto sulle creature fisiche. Può evocare una fiamma per mano se entrambe sono libere. Inoltre, può richiamare a sé un oggetto personale legato affettivamente entro 10 metri, anche se trattenuto, con tiri contrapposti. L’incantesimo può essere lanciato solo una volta al giorno.`,
  "Esperto": `Le fiamme bianche possono ora essere estese agli alleati entro 10 metri × M.S. Applicazioni: armi (danni bonus contro spettri), armature (25% protezione contro attacchi incorporei), scudi (possono deviare parzialmente magie o colpi non fisici). Può inoltre evocare una cupola semitrasparente di energia bianca che protegge sé e gli alleati entro 10 metri: ogni attacco magico esterno ha il 50% di probabilità di fallire; se un nemico entra nella cupola, paga il doppio dei punti stanchezza per incantesimo.`,
  "Veterano": `Può evocare una bolla di luce intensa che esplode in un cono frontale di 10×30 metri: le creature non morte subiscono 6D10 danni × M.S., le creature d’ombra subiscono danni triplicati, mentre le creature fisiche non subiscono effetti. L’esplosione può fungere da varco per uscire dal Piano delle Ombre e contrastare magie di tenebra. Può inoltre distruggere magicamente un oggetto incantato entro 10 metri, con una difficoltà aumentata di +1D6; se fallisce, non può ritentare sullo stesso oggetto.`,
  "Maestro": `Per 10 minuti, l’incantatore crea una zona inviolabile di Flusso puro estesa per 10 metri × M.S. Nessun oggetto può essere corrotto, consumato o distrutto, inclusa la vegetazione. Nessuna creatura può essere evocata, rianimata o influenzata da necromanzia, mentalismo o illusionismo. Le influenze del Piano delle Ombre vengono respinte, e le creature spettrali o d’ombra subiscono 5D10 danni automatici per turno. L’area brilla di una luce lattiginosa sospesa, rallentando la percezione del tempo. L’incantesimo non può essere attivato sotto stress e può essere usato solo una volta al giorno.`
},

"Illusione": {
  "Neofita": `L’incantatore può celare il proprio volto per dieci minuti rendendo i tratti indefiniti. Per mantenerlo oltre questo tempo deve spendere stanchezza ogni dieci minuti. Può anche mutare o imitare la voce di una creatura conosciuta per lo stesso periodo.`,
  "Pratico": `L’incantatore può evocare un oggetto illusorio entro 10 metri (scudo, arma, barile ecc.). Se toccato, l’illusione si dissolve. Aggiungendo un dado malus, può evocare ulteriori oggetti fino a fallimento. Può anche alterare la percezione visiva di un singolo oggetto (es. far sembrare una porta chiusa). Inoltre, può mimetizzarsi assumendo i colori dell’ambiente, scartando un dado malus nei tiri per nascondersi.`,
  "Esperto": `Gli oggetti evocati possono ora essere toccati e percepiti con suoni e odori reali, ma restano temporanei. Può creare un suo doppio olografico perfettamente identico, evocabile in un luogo conosciuto e mantenuto fino a un’ora con concentrazione e spesa di stanchezza. Il doppio non può attaccare. Può anche fondersi in un quadro o dipinto, diventandone parte visiva, e provocare piccole visioni nella mente di uno o più avversari entro 6 metri, che reagiscono come se le illusioni fossero reali.`,
  "Veterano": `Può creare illusioni permanenti entro 30 metri che alterano clima, morfologia e percezioni dell’ambiente. Le illusioni persistono anche per anni finché non vengono svelate. Può cambiare il proprio aspetto assumendo sembianze di altre razze per un’ora, difficili da individuare (due dadi malus per percezione). Può anche evocare un duplicato reale di sé stesso identico in tutto e per tutto, capace di combattere con i suoi stessi danni. Ogni copia dura un’ora e costa punti stanchezza. Una volta usato, deve attendere una settimana prima di evocare un’altra copia, e dieci per il completo recupero.`,
  "Maestro": `L’incantatore può distorcere completamente la realtà in un’area di 1 km, alterando oggetti, luoghi e persone. Può far apparire nemici come alleati e viceversa, generare sensazioni fisiche reali come freddo, calore o dolore. Le illusioni sono così potenti da far reagire le vittime come se fossero reali, finché non si accorgono dell’inganno.`
},
"Medicina": {
  "Neofita": `Il personaggio è in grado di stabilizzare ferite gravi e impedire che un soggetto in fin di vita peggiori ulteriormente. Può trattare condizioni comuni come febbre, emorragie leggere, infezioni e intossicazioni semplici, riducendo di un grado la gravità del malus associato. Con un controllo accurato, può identificare l’origine di un trauma o avvelenamento recente, e distinguere se una morte è stata naturale o provocata. Le cure richiedono almeno 10 minuti di intervento diretto.`,
  "Pratico": `Il personaggio può ridurre in modo significativo il tempo di guarigione naturale di una creatura, dimezzandolo. È in grado di trattare ferite profonde, infezioni resistenti e stabilizzare arti fratturati, suturare con precisione e ricomporre traumi interni. Può inoltre preparare antidoti e trattamenti personalizzati per veleni e droghe comuni, e sa riconoscere la presenza di sostanze estranee nel corpo anche senza strumenti avanzati. Infine, può monitorare le funzioni vitali di un soggetto e valutarne lo stato di salute globale con una breve analisi fisica (1 minuto).`,
  "Esperto": `Può effettuare interventi chirurgici sotto stress, rimuovere dardi o oggetti conficcati, ricucire organi interni o salvare un paziente in arresto respiratorio o cardiaco. Ha conoscenze approfondite su malattie rare e può sintetizzare rimedi complessi se ha accesso a materiali idonei. È in grado di migliorare temporaneamente l’efficienza fisica di un soggetto tramite stimolanti naturali o alchemici, garantendo bonus per poche ore. Può anche preparare miscele sedative o paralizzanti che, se somministrate con attenzione, possono addormentare o immobilizzare un bersaglio per breve tempo.`,
  "Veterano": `Il personaggio è in grado di ricollegare tendini, nervi o muscoli danneggiati, restituendo parzialmente la funzionalità a un arto offeso. Inoltre, è in grado di preparare un composto rigenerante che accelera in modo eccezionale la guarigione (un giorno in un’ora), ma richiede ingredienti rari e tempo di preparazione. È capace di sospendere temporaneamente un corpo tra la vita e la morte, congelandone i parametri vitali per alcune ore in attesa di cure definitive.`,
  "Maestro": `Il personaggio è in grado di estrarre con precisione corpi estranei dai tessuti — come dardi, schegge o frammenti ossei — senza causare danni aggiuntivi. Può ripristinare parzialmente i sensi compromessi, restituendo in parte la vista a un cieco o l’udito a un sordo, purché il danno non sia di natura magica. È in grado di curare qualsiasi malattia conosciuta e neutralizzare ogni tipo di veleno, indipendentemente dalla sua potenza o origine.`
},

"Mentalismo": {
  "Neofita": `L’incantatore, con il tocco o attraverso lo sguardo, riesce per almeno un secondo a percepire le emozioni dominanti di una creatura, ma solo una volta per soggetto. Può inviare una breve frase mentale nella mente di una creatura conosciuta entro 15 metri. Può anche alterare per un attimo la percezione di un singolo bersaglio, facendolo esitare o compiere un gesto incerto, ottenendo così un turno di vantaggio.`,
  "Pratico": `L’incantatore può intensificare fino a triplicare un’emozione già presente in una creatura, semplicemente toccandola o fissandola negli occhi per qualche secondo. L’effetto funziona solo se il bersaglio prova già quel sentimento (paura, odio, amore, ecc.), spingendolo ad azioni impulsive. Inoltre può trasmettere telepaticamente un’unica frase a più soggetti entro 15 metri (la stessa per tutti).`,
  "Esperto": `L’incantatore può instaurare una comunicazione telepatica bidirezionale con un soggetto entro 15 metri, finché lo desidera o finché l’altro non interrompe. Può ipnotizzare una creatura, costringendola a compiere un’azione contro la propria volontà (mai autodistruttiva). L’effetto dura un’ora. Se fallisce, non potrà più ripetere il tentativo sullo stesso soggetto. Può inoltre suggestionare un individuo alterandogli un ricordo specifico in modo permanente, salvo prova concreta o intervento magico.`,
  "Veterano": `Può ipnotizzare e controllare una folla entro 30 metri, evocando l’incantesimo con la mano. Si calcola una media delle menti presenti per determinare il malus ai dadi di controllo. Può indurre costrizioni mentali o allucinazioni realistiche, percepite solo dalla vittima. Può comunicare telepaticamente con più persone entro 20 metri e creare un muro mentale per 10 minuti × M.S., che lo protegge da illusioni e incantesimi mentali.`,
  "Maestro": `L’incantatore può controllare per alcuni minuti un individuo, agendo attraverso di lui come se fosse un’estensione del proprio corpo. Il soggetto è cosciente ma inerte, e il controllo non può essere ristabilito una seconda volta. Può inoltre dominare mentalmente un gruppo entro 20 metri, infondendo un’unica emozione collettiva (terrore, euforia, pace, ecc.) o generare allucinazioni collettive. Può riscrivere intere porzioni di memoria, creando ricordi complessi indistinguibili da quelli reali. Infine, può erigere una barriera mentale permanente contro ogni forma di manipolazione o telepatia, estesa anche agli alleati entro 3 metri.`
},

"Quintessenza": {
  "Neofita": `L’incantatore, meditando per 30 minuti, può collegarsi al mondo onirico e ricevere visioni parziali di eventi in corso. Con la mano può smascherare illusioni minori o individuare alterazioni fisiche del volto di qualcuno. Inoltre può evocare un incantesimo che rivela oggetti, porte o scritte nascoste entro 20 metri, circondandoli di un’aura azzurra.`,
  "Pratico": `Percepisce la presenza di magia entro 20 metri, anche se nascosta. Può trasferire parte della sua essenza magica in un oggetto, dopo 4 ore di concentrazione. L’oggetto permette di recuperare stanchezza al doppio della velocità o contenere un singolo incantesimo. Può smascherare illusioni ambientali entro 20 metri ed entrare nei sogni di persone conosciute, invitandole a un sogno collettivo immune al mentalismo.`,
  "Esperto": `Può costringere un soggetto a dire la verità anche contro la sua volontà, proiettargli rimorso o sensi di colpa per azioni malvagie e localizzare l’essenza di un essere ovunque si trovi, anche su una mappa. Può infondere fino a due incantesimi in un oggetto, rendendolo più resistente.`,
  "Veterano": `Disintegra illusioni permanenti entro 1 km. Percepisce le aure delle creature intelligenti e distingue ostilità o amicizia. Può vedere essenze invisibili o sul piano etereo per 10 minuti, riattivabile. Può curare pazzia, rimuovere maledizioni e possessioni, e purificare cadaveri entro 20 metri liberandone le anime. Può anche potenziare oggetti magici, riducendo la stanchezza dell’utilizzatore.`,
  "Maestro": `Protegge costantemente sé e chiunque entro 20 metri da qualsiasi manipolazione mentale, senza spesa di stanchezza. Può teletrasportare la propria coscienza in qualsiasi punto del mondo per un’ora × M.S. La sua massima abilità è fondere il piano materiale con quello onirico entro 20 metri × M.S., creando elementi del sogno nel mondo reale. Le creazioni sono tangibili ma non alterano oggetti o esseri già esistenti. La fusione dura 20 minuti × M.S. e può essere interrotta a volontà.`
},
"Negromanzia": {
  "Neofita": `L’incantatore può interrogare un morto purché il suo corpo sia integro, ponendogli due domande. Inoltre percepisce la morte e le presenze spiritiche entro un’area di 25 metri.`,
  "Pratico": `Toccando un corpo deceduto, l’incantatore può infondergli parte del suo potere: se apre gli occhi al cadavere e li mantiene aperti, può vedere attraverso di esso anche a distanza e udire ciò che accade come se fosse presente. Può farlo su tutti i cadaveri entro 15 metri, aprendo loro gli occhi per avere visuale. Una volta utilizzato l’incantesimo, esso si esaurisce.  
Può anche sottrarre energia da un essere dormiente per curarsi, avvicinando la bocca a 5 cm dalla vittima e succhiandone la forza vitale: decide lui quanto ristorarsi, ma può uccidere la vittima se esagera. Non utilizzabile in battaglia.  
Può rendere la propria lama eterea per un’ora, colpendo creature sul piano etereo e curandosi di 3D10 per colpo inflitto.  
Infine, può evocare una brezza gelida accompagnata da voci sussurranti entro 10 metri di raggio: i bersagli devono superare un tiro di freddezza sulla tempra. I soggetti falliti subiscono svantaggi, mentre gli alleati ottengono vantaggi. L’effetto dura 10 minuti e non influenza creature immuni alla paura o a incantesimi mentali.`,
  "Esperto": `L’incantatore può risvegliare una o più creature morte entro 15 metri, trasformandole in redivivi privi di volontà. Queste obbediscono ai suoi comandi o rispondono a domande semplici. Se sconfitte, non possono essere rievocate.  
Può evocare una nube pestilenziale verdastra entro 20 metri: tutti coloro che si trovano nell’area devono effettuare due tiri su Tempra o svengono; chi fallisce solo uno dei due accusa nausea e dolori (malus a discrezione del Narratore). La nube dura 10 minuti.  
Inoltre, l’incantatore può emettere un urlo inquietante che infligge 8D10 × M.S. di effetto paura (vedi regole status). Non funziona su creature immuni alla paura o agli incantesimi mentali.`,
  "Veterano": `L’incantatore può evocare da 1 a 4 spettri dal piano etereo (tira 1D4). Essi restano al suo servizio per un’ora e obbediscono ai suoi comandi.  
Può eseguire un patto di sangue, mescolando il proprio sangue con quello di una vittima conscia o vulnerabile, creando un legame che consente di controllarla a distanza (azioni semplici), leggerne i pensieri o bloccarne i poteri magici. Il patto dura finché l’incantatore non muore o il rito non viene spezzato.  
Può diventare incorporeo per pochi secondi, tentando di possedere una vittima o sovrapporre la propria volontà alla sua (test contrapposto).  
Può rendere invulnerabili permanentemente i propri organi vitali (cuore, polmoni, ecc.), restando però mortale per decapitazione, fuoco o disgregazione.  
Infine, può ancorare la propria forza vitale in un oggetto attraverso un rituale di un mese (3 ore al giorno): se il corpo muore ma l’oggetto resta integro, l’anima sopravvive e può lentamente ricostruire il corpo. Se l’oggetto viene distrutto, l’incantatore cessa di esistere.`,
  "Maestro": `L’incantatore può racchiudere la propria essenza in un clone vivente perfettamente identico, con un rituale di un mese (3 ore al giorno). La forza vitale è condivisa tra corpo e clone. Finché il clone esiste, l’incantatore non può morire davvero: se "ucciso", cade in coma per due giorni e poi si risveglia con ricordi intatti. Il clone non può essere ricreato una volta distrutto.  
Può controllare il clone a distanza senza spesa di stanchezza, comunicando e agendo in parallelo in due luoghi diversi.  
Può inoltre creare entro 20 metri una bolla di necrosi in cui la materia marcisce, il metallo arrugginisce e i morti si rialzano come redivivi finché egli è vicino. L’effetto persiste fino alla sua morte o a un incantesimo opposto.  
Infine, può assumere forma spettrale a volontà, divenendo immateriale e immune al 50% degli attacchi fisici (tranne armi magiche o rituali). La durata può essere di ore o indefinita.`
},

"Telecinesi": {
  "Neofita": `L’incantatore può manipolare con la mano un singolo oggetto leggero (fino a 2 kg) entro 10 metri, come se una mano invisibile lo muovesse. Può aprire porte, versare liquidi o sfilare piccoli oggetti, ma non combattere o compiere azioni complesse. L’effetto dura finché mantiene la concentrazione.`,
  "Pratico": `Può manipolare fino a 3 oggetti × M.S. contemporaneamente.  
• Sposta oggetti fino a 5 kg entro 10 metri.  
• Esegue azioni più complesse (aprire serrature semplici, sollevare oggetti, applicare pressione).  
• Può spostare oggetti sottili senza deformarli.  
• Può applicare una pressione direzionale pari a 1,5 volte il proprio peso per spingere o sollevare oggetti più pesanti.`,
  "Esperto": `Può manovrare armi e oggetti con precisione e interferire con esseri leggeri.  
• Controlla fino a 2 armi entro 15 metri, usandole per combattere o disarmare. Se le armi sono impugnate, serve un tiro contrapposto (dadi malus +1D6 o +2D6 se possenza nemico ≥11 o ≥13).  
• Può disarmare fino a 2 avversari simultaneamente, entro 15 metri.  
• Può sollevare creature leggere (es. goblin, cani) fino a 15 kg, con malus se Tempra ≥11 (+1D6) o ≥13 (+2D6).  
• Può bloccare o fermare oggetti in movimento (frecce, porte, massimi 150 kg) mantenendo concentrazione.  
• Può rompere oggetti medi (bastoni, scudi, armi fragili) applicando una forza telecinetica diretta entro 15 metri.`,
  "Veterano": `Può disarmare tutti gli avversari entro 15 metri, manipolando le armi fino a 3 × M.S. come se le impugnasse.  
Può sollevare o spostare creature della sua stessa taglia o inferiori, con malus in base alla Tempra.  
Può deformare e distruggere oggetti fragili o medi fino a 15 metri, applicando una forza fino a 2 × M.S. della sua forza fisica.`,
  "Maestro": `Può manipolare oggetti non magici fino a una tonnellata ciascuno, o più oggetti minori fino alla stessa massa totale. Domina la materia come se fosse sospesa nel vuoto.  
Può sollevare e dirigere più bersagli viventi della sua taglia entro 10 metri simultaneamente, con le stesse regole di controllo e malus del livello precedente.`
},
"Tenebra": {
  "Neofita": `L’incantatore comincia a padroneggiare il fluido potere delle ombre, adattando la realtà all’oscurità come se fosse una seconda pelle.  
• **Visione notturna amplificata:** può vedere al buio come in pieno giorno per 6 ore, ma subisce disorientamento se la luce ritorna bruscamente.  
• **Velare il volto:** ottiene una maschera d’ombra che ne nasconde i lineamenti per 10 minuti, rendendolo irriconoscibile.  
• **Manipolazione delle ombre:** può estendere e deformare le ombre fino a 5 metri di giorno e fino a 20 metri di notte, modellandole come estensioni della propria volontà.`,
  "Pratico": `L’incantatore affina la connessione con le ombre e può nascondersi o sfruttarle per attaccare.  
• **Invisibilità nelle ombre:** di notte, può muoversi quasi invisibile se avvolto nel mantello. Ottiene vantaggio nei tiri di furtività (-1D6 alla scoperta).  
• **Manipolazione avanzata delle ombre:** può allungare, distorcere o muovere ombre entro 10 metri, influenzando l’ambiente.  
• **Fiamme nere:** evoca fiamme oscure che ignorano corazze e colpiscono creature incorporee, infliggendo 5D10 + M.S. danni. Se concentrate su un solo bersaglio, infliggono 6D10 totali. Curano invece le creature d’ombra. Le fiamme si estinguono dopo l’impatto e possono essere schivate o parate.`,
  "Esperto": `Può viaggiare tra le ombre entro 30 metri, teletrasportandosi da un’ombra all’altra. Ogni salto lascia una scia oscura visibile solo di giorno.  
Può assorbire una fonte di luce magica entro 12 metri (sacra o profana), subendo 6D10 danni ma impedendo al nemico di riattivarla per un’ora. La quantità assorbita è 1 m³ × M.S.  
Può infondere **fiamme nere** nelle armi proprie o di alleati entro 10 metri, rendendole capaci di colpire creature incorporee e ignorare armature per 1 ora.  
Può evocare fino a **otto tentacoli d’ombra** che attaccano fino a otto nemici di pari taglia o maggiori: ogni tentacolo infligge 6D10 danni da strangolamento per turno e cura l’incantatore di una parte dei danni inflitti. I tentacoli sono sensibili alla luce e richiedono concentrazione costante.`,
  "Veterano": `L’incantatore può dissolversi completamente in un’ombra e riemergere in un’altra entro 100 metri, anche in spazi minimi. Ogni teletrasporto ripetuto nello stesso minuto infligge 3D10 danni da logoramento.  
Può evocare una **cupola di tenebre** di 20 metri di raggio, in cui la luce scompare e il buio induce paura: chi non resiste subisce 10D10 danni da paura × il proprio grado di Mente o Saggezza. Chi resiste subisce solo malus di orientamento. L’incantatore vede chiaramente nella cupola, ma gli alleati all’interno rischiano effetti collaterali.  
Può evocare **due Fremen** dal piano d’Ombra, che lo servono per 10 turni (vedi Bestiario).`,
  "Maestro": `L’incantatore può aprire uno squarcio tra il piano materiale e quello delle ombre, richiedendo un’ora di concentrazione in un luogo buio. Per un giorno intero può viaggiare liberamente tra i due mondi, restando intangibile e invisibile nel piano d’Ombra.  
Può stendere un **velo di tenebra** entro 1 km × M.S., spegnendo ogni luce naturale o magica e generando un crepuscolo perenne.  
Nel cuore del velo, le ombre prendono vita e si muovono autonomamente, i suoni si distorcono e il tempo rallenta.  
Gli incantatori della luce vedono le proprie magie indebolirsi, e i portali verso i piani superiori falliscono.  
L’incantatore può proiettare la propria **ombra come simulacro animato**, che agisce e parla in sua vece, combattendo con i suoi poteri base. Se distrutto, il simulacro può essere evocato di nuovo solo dopo il tramonto successivo.  
Questo potere può essere invocato solo una volta ogni luna piena.`
},

"Trasmutazione": {
  "Neofita": `L’incantatore può trasformare una quantità pari a 1 dcm³ × M.S. di materiale (ghiaccio ↔ acqua, acqua ↔ nebbia, roccia ↔ sabbia, ferro ↔ acciaio).  
La distanza massima è 8 metri, ma per i metalli è necessario il contatto.  
Funziona solo su materiali inerti. Ogni livello superiore aumenta di 1 dcm³ il volume trasformabile (fino a 5 al livello Maestro).  
Il Margine di Successo (M.S.) si calcola come 5 - risultato del tiro (minimo 1).`,
  "Pratico": `Può **riparare oggetti** piccoli o medi, anche magici (es. lame, anelli, crepe fino a 2 metri × M.S.).  
Può **trasmutare i polmoni in branchie** per respirare sott’acqua per un’ora.  
Può **aprire passaggi temporanei** attraverso pareti fino a 1 metro di spessore: il varco resta aperto finché l’incantatore vi permane.`,
  "Esperto": `Può trasformare materiali grezzi in strutture complesse (es. roccia in scala, tronchi in ponte) entro 10 metri, purché vi sia materia prima sufficiente.  
Può **riparare strutture grandi** (porte, ponti, tetti, oggetti multipli).  
Può **mutare il proprio aspetto fisico** una volta a settimana, assumendo sembianze di una creatura umanoide conosciuta per 2 ore (non è un’illusione).  
Può rendersi **immune a una condizione fisica** (freddo, caldo, fame, sete, fuoco, stanchezza) per un giorno intero.`,
  "Veterano": `Può **diventare invisibile** fondendo il corpo con l’ambiente per 10 minuti per livello.  
Durante l’invisibilità:  
• non può attaccare o lanciare incantesimi ostili;  
• torna visibile se colpito o toccato;  
• l’aura magica resta percepibile.  
Può **trasmutare metalli comuni in oro puro** o viceversa (1 dcm³ × M.S.). L’oro magico è instabile e torna normale dopo una settimana, a meno di un rituale permanente di livello Maestro.`,
  "Maestro": `Può **dare vita a un oggetto inanimato** grande fino al doppio della sua taglia (es. statue che camminano, libri che parlano). L’effetto dura 1 ora × M.S.  
Può **alterare l’età materiale** di un oggetto, facendolo invecchiare o ringiovanire istantaneamente (1 m³ × M.S.).  
Può creare un **Golem di pietra** da un corpo appena ucciso (vedi Bestiario). Il golem dura giorni pari a metà del M.S. e il rituale richiede una settimana di preparazione.  
Infine, può **pietrificare un avversario vivo** mantenendo lo sguardo su di lui per tre turni consecutivi, superando ogni turno una prova di Sapienza. Al termine, se riesce, l’avversario è completamente pietrificato.`
},

},
"Templare": {
  "Armi Bianche": {
    "Neofita": `Il personaggio è in grado di utilizzare con facilità le armi da taglio, eliminando il malus per la mancanza di competenza nel tipo di arma impugnata. Tuttavia, i personaggi appartenenti a classi specifiche (Combattente, Guerriero Runico, Garù, Argoniano e Templare) possono utilizzare anche armi generiche, armi ad asta e armi da impatto senza penalità. Se il personaggio padroneggia esclusivamente le armi da taglio, l’uso di armi di altro tipo comporta un malus di +1D6 ai tiri.`,
    "Pratico": `Diventa ambidestro, potendo impugnare due armi medie (es. due spade). Può colpire un singolo nemico con entrambe le armi (+1D10 danno se entrambi i colpi riescono) oppure due bersagli diversi. È anche in grado di lanciare coltelli con precisione fino a 20 metri e giavellotti o lance fino a 80 metri mantenendo i danni standard.`,
    "Esperto": `Amplia la competenza alle armi da impatto a una mano, oltre a quelle da taglio. Le classi e razze avanzate (Garù, Guerriero Runico) possono impugnare un’arma a due mani con una sola mano o combinarla con un’altra arma o scudo. Se usa due armi ottiene +1 e applica la regola dello scudo in caso di fallimento.`,
    "Veterano": `Riduce di 1 punto la protezione delle armature (anche naturali) con armi da taglio; se usa armi da impatto, la riduzione aumenta di 1 ulteriore punto.`,
    "Maestro": `Ottiene un vantaggio devastante sui danni: i 9 valgono come doppio danno, e per Garù, Guerriero Runico, Combattente e Templare anche gli 8 contano come doppio.`
  },

  "Cavaliere Templare": {
    "Neofita": `Può intervenire contro un singolo avversario in difesa di un alleato entro 6 metri anche se non è il suo turno. L’alleato deve aver fallito l’azione. Il Templare può difendere usando spada o scudo.`,
    "Pratico": `Non subisce penalità atletiche con armature medie. Può intervenire in difesa di due alleati che falliscono un tiro durante il loro turno.`,
    "Esperto": `Per corazze pesanti si applica solo il dado malus e non lo svantaggio. Può intervenire durante il turno di due alleati che falliscono, potendo difendere o contrattaccare.`,
    "Veterano": `Non risente del malus corazza, nemmeno con corazze pesanti. Non perde mai arma o scudo nemmeno se viene sbalzato via, a meno di tentativi diretti di disarmo (in cui ha vantaggio).`,
    "Maestro": `Se il cavaliere ha seguito coerentemente il suo codice etico, tutti gli alleati entro 20 metri ottengono 6 punti fortuna ciascuno, da usare solo in quel combattimento. Inoltre, gli alleati nell’area non subiscono affaticamento e gli incantatori dimezzano i costi in punti stanchezza.`
  },

  "Connessione con la Luce": {
    "Neofita": `Può illuminare la via di un alleato ovunque si trovi, quando questo invoca il suo aiuto ad alta voce: sfere e lucciole luminose lo guidano per 3 ore × M.S. Funziona solo con alleati conosciuti.`,
    "Pratico": `Può far scaturire una luce accecante dall’acciaio della propria arma, disturbando gli avversari per un turno.`,
    "Esperto": `Può dissolvere le ombre entro il suo campo visivo (non i Fremen o le creature del piano d’Ombra), avendo almeno una mano libera. Può inoltre evocare una luce sulla spada che raddoppia i danni contro le creature d’ombra per 1 ora × M.S.`,
    "Veterano": `Può infondere luce sulle armi da mischia degli alleati entro 10 metri (durata 1 ora × M.S.), raddoppiando i danni contro le creature d’ombra. Può marchiare con luce un avversario semi-invisibile o incorporeo rendendolo visibile; le ombre subiscono 4D10 danni a turno mentre mantiene l’incantesimo spendendo punti stanchezza.`,
    "Maestro": `Crea una bolla di luce impenetrabile dalle tenebre entro 15 metri, che protegge chiunque al suo interno. La bolla si muove con lui e dura 6 ore × M.S., mantenibile spendendo punti stanchezza.`
  },

  "Consacrare": {
    "Neofita": `Versando il proprio sangue, il Templare può consacrare un luogo, oggetto o elemento. Sul cadavere lo libera per sempre, impedendo resurrezioni o evocazioni. Nel fuoco rivela ciò che è falso in un’area di 20 m; sull’acqua purifica 10 dm³ da infezioni; sulla terra o oggetti li rende sensibili alla sua presenza (si illuminano o vibrano se mossi).`,
    "Pratico": `I cadaveri non riportati in vita si sbriciolano. Il fuoco consacrato diviene luce accecante che indebolisce la Tenebra e la Negromanzia. L’acqua consacrata rigenera e cura 8D10 danni (una volta al giorno). Gli oggetti consacrati ustionano chi ha il cuore impuro.`,
    "Esperto": `Il sangue consacra i morti, impedendo la comparsa dei loro spiriti. Il fuoco consacrato rivela passaggi segreti e ferisce ombre e incorporei. L’acqua consacrata crea barriere invalicabili per non morti e spiriti. Gli oggetti magici corrotti hanno il 20% di probabilità di distruggersi se consacrati.`,
    "Veterano": `Gli spiriti dei cadaveri consacrati diventano suoi alleati per breve tempo nel luogo in cui dimorano. Il fuoco consacrato non lo danneggia. Gli oggetti consacrati possono essere impugnati solo da cuori puri. L’acqua consacrata triplica i danni contro non morti se cosparsa sulle armi.`,
    "Maestro": `I cadaveri si dissolvono entro 20 m al suo passaggio. I non morti subiscono 5D10 danni per aura sacra. Gli alleati entro 10 m sono immuni ai danni del fuoco. Può incenerire oggetti magici corrotti a distanza con il 50% di successo. L’acqua consacrata guarisce malattie, maledizioni e ferite (10 dm³ × M.S.).`
  },

  "Essenza": {
    "Neofita": `Percepisce la natura energetica di persone e oggetti come lampi intuitivi:  
    • Grigio = neutro;  
    • Nero = corrotto o stagnante;  
    • Bianco = vitale e puro.`,
    "Pratico": `Percepisce variazioni di status tra luce e oscurità negli esseri viventi, riconoscendo menzogna o corruzione, pur senza comprenderne la causa.`,
    "Esperto": `Avverte la presenza e la fonte della magia in luoghi, oggetti o esseri. Le creature d’Ombra o incorporee devono chiedere il permesso per entrare nella sua area (10 m), altrimenti subiscono 3D10 danni a turno finché restano. Può bandirle con un comando verbale.`,
    "Veterano": `Riesce a individuare e curare maledizioni. Con un gesto sulla fronte del bersaglio può rimuovere maledizioni, incantesimi mentali o stati ipnotici.`,
    "Maestro": `Percepisce le forze primordiali dietro la magia, riconoscendone scopo e origine. Può spezzare incantesimi negativi e illusioni su oggetti o luoghi pronunciando parole arcane.`
  },

  "Freddo": {
    "Neofita": `Ottiene +2 protezione sui tiri paura (il Narratore deve superare 7 invece di 5).`,
    "Pratico": `Ha vantaggio contro tiri di manipolazione, raggiro o incantesimi mentali, e può celare le proprie emozioni.`,
    "Esperto": `Non subisce mai malus ai tiri paura o freddezza. Non può essere colto alla sprovvista: percepisce attacchi a sorpresa entro il suo campo visivo.`,
    "Veterano": `Riconosce la paura negli altri, anche se nascosta, potendo usarla contro di loro. Funziona anche su creature.`,
    "Maestro": `Diventa completamente immune alla paura e agli incantesimi mentali.`
  },
  "Giuramento": {
    "Neofita": `Ogni volta che combatte contro un avversario verso cui ha giurato vendetta o per qualcuno che ha giurato di proteggere, applica sempre la regola del vantaggio, anche se vi sono dadi malus.`,
    "Pratico": `Qualsiasi manipolazione volta a farlo andare contro il proprio giuramento fallisce automaticamente e viene percepita nella sua mente. Avverte il pericolo a distanza verso persone o luoghi che ha giurato di proteggere, percependo dolore, paura e sofferenza.`,
    "Esperto": `Può, tramite un patto di sangue, inviare un suo alter spirituale a proteggere un gruppo toccato in precedenza dal suo sangue. L’alter è uno spirito incorporeo con le stesse abilità del Templare, ma la sua presenza richiede concentrazione e consuma punti stanchezza ogni turno.`,
    "Veterano": `Può sottoporre altri suoi seguaci o compagni a un patto di sangue. Finché il patto non è spezzato, se cadono in stato critico o svengono, al risveglio tirano 12D10 dadi guarigione: ogni risultato superiore a 4 ripristina 1 punto ferita.`,
    "Maestro": `Si manifesta fisicamente ovunque vi sia bisogno di lui, se è stato siglato un giuramento e questo non è stato spezzato. Riconosce la sincerità del richiamo e può scegliere se rispondere. Non può essere imprigionato o incatenato in quel momento.`
  },

  "Guardia Implacabile": {
    "Neofita": `Anche se circondato, scarta sempre un dado malus.`,
    "Pratico": `Non subisce penalità anche se circondato o riverso a terra, a meno che non derivino da altri fattori.`,
    "Esperto": `Se possiede uno scudo sufficientemente grande, ottiene vantaggio nel parare colpi sia a distanza che in mischia. Può accumulare energia parando colpi consecutivi: ogni parata riuscita aggiunge +1D10 al danno del prossimo turno (fino a +5D10 e bonus M.S.). Se interrompe la sequenza, deve ricominciare. Può anche scegliere di parare due volte e poi attaccare con +2D10 al danno.`,
    "Veterano": `Non applica penalità di alcun tipo, indipendentemente dalla posizione o dal terreno (anche a terra o su superfici instabili).`,
    "Maestro": `Né lui né i suoi alleati possono essere accerchiati dai nemici. Il suo scudo lo protegge completamente dalle esplosioni.`
  },

  "Maestro d'Armi": {
    "Neofita": `Aumenta di +1D10 il danno se è almeno di livello Pratico con l’arma impugnata. I danni a mani nude diventano mortali (4D10) e viene considerato sempre “armato”.`,
    "Pratico": `Per infliggere danno basta ottenere 4 o più sul tiro (anziché 5), salvo protezioni naturali o armature.`,
    "Esperto": `Il danno inflitto viene raddoppiato.`,
    "Veterano": `I risultati di 10 sui dadi danno valgono come danno triplo.`,
    "Maestro": `Tutti i colpi inferti entrano automaticamente con Margine di Successo globale.`
  },

  "Medicina": {
    "Neofita": `Stabilizza ferite gravi e impedisce il peggioramento di un soggetto morente. Cura febbre, infezioni, emorragie e intossicazioni leggere, riducendo i malus di un grado. Può identificare la causa di morte o avvelenamento. Ogni cura richiede circa 10 minuti.`,
    "Pratico": `Dimezza i tempi di guarigione naturale. Cura ferite profonde e fratture, sutura traumi interni e prepara antidoti contro veleni comuni. Può diagnosticare lo stato di salute in un minuto.`,
    "Esperto": `Può operare sotto stress, rimuovere oggetti conficcati, salvare pazienti in arresto e sintetizzare rimedi complessi. Può creare stimolanti o sedativi temporanei con effetti di durata limitata.`,
    "Veterano": `Può riparare tendini, nervi e muscoli danneggiati. Prepara composti rigeneranti che accelerano la guarigione (1 giorno in 1 ora) e può sospendere temporaneamente la vita di un corpo per alcune ore.`,
    "Maestro": `Può estrarre corpi estranei senza danni aggiuntivi, ripristinare parzialmente vista o udito se non magici, curare qualsiasi malattia e rimuovere ogni veleno o tossina dal corpo, indipendentemente dalla potenza.`
  },

  "Meditazione": {
    "Neofita": `Pregando una volta al giorno elimina parzialmente fame e sete, recupera metà della stanchezza e triplica la velocità di guarigione.`,
    "Pratico": `Pregando un’ora al giorno elimina fame e sete per 24 ore. Gli alleati entro 20 m recuperano metà della stanchezza e 6D10 punti ferita.`,
    "Esperto": `Concentrandosi un’ora percepisce distorsioni della realtà, illusioni e presenze di altri piani. Può respingere incantesimi di manipolazione mentale, riflettendoli al mittente.`,
    "Veterano": `Pregando un’ora al giorno cura sé stesso e gli alleati vicini di 10D10. Può effettuare esorcismi su creature possedute (richiede due successi pieni in due turni).`,
    "Maestro": `Può rispedire le creature extraplanari al loro piano e separare temporaneamente il proprio spirito, viaggiando sul piano etereo. In tale forma percepisce entità e trappole magiche e comunica telepaticamente, con il 50% di probabilità di eludere attacchi fisici.`
  },

  "Resistenza alla Magia": {
    "Neofita": `Ottiene vantaggio nel resistere a qualsiasi tipo di incantesimo.`,
    "Pratico": `Gli incantesimi fisici hanno il 20% di probabilità di fallire anche se vanno a segno, annullando il danno.`,
    "Esperto": `Crea una barriera invisibile di 10 metri che si muove con lui: gli incantesimi hanno il 50% di probabilità di infrangersi.`,
    "Veterano": `Può attraversare barriere magiche senza subirne gli effetti. Quando la magia si infrange su di lui, lo cura e sottrae punti stanchezza all’incantatore che l’ha lanciata.`,
    "Maestro": `I danni fisici elementali subiti vengono dimezzati.`
  },

  "Tenace": {
    "Neofita": `Quando dovrebbe morire può comunque compiere un’ultima azione. Non subisce penalità ai movimenti quando gravemente ferito.`,
    "Pratico": `Dimezza i danni da veleno. I 10 sui dadi danno contano come danno singolo, e quelli tripli valgono come doppi.`,
    "Esperto": `Quando raggiunge lo status di ferita profonda, può convertire ogni danno subito in punti bonus d’attacco (fino a +6).`,
    "Veterano": `Possiede una protezione naturale permanente +1 come se indossasse un’armatura (cumulabile con protezione del Garù, ma non con armature reali).`,
    "Maestro": `Tutti i danni subiti vengono dimezzati.`
  }
}










 

};
