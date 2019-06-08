# checklist-generator

**Team FE**

SPA Vue che legge il file "quiz_it.json" e genera i componenti UI per presentare le domande 
e relative risposte (radio buttons, checkbox, text).

Una volta avviata elaborazione si fa la lista di tutti gli adempimenti correlati con le 
risposte fornite prendendoli da "fulfillments_it.json".

La lista deve essere esportabile in formato PDF oppure CSV.

**Team GDPR**

Legge e rilegge la normativa per capirne gli adempimenti.

https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX%3A32016R0679&from=EN

Crea il file "quiz_it.json" e il file "fulfillments_it.json".

**Gli schemi JSON**

L'SPA si basa sui due schemi "quiz_it.json" e "fulfillments_it.json" creati dal team GDPR.
Il suffisso "_it" prevede la possibilità di avere la selezione della lingua ed 
eventuale traduzione.

"quiz_it.json" contiene le domande da porre all'utente e le risposte a tali domande.
Ogni risposta è correlata all'id di un adempimento e/o a quello di un'altra domanda.

Il formato del file è:
```
{
 1: {
    question: "Azienda tratta dati personali?",
    answers: [
        {
            value: "Sì.",
            fulfillment: 1,
            question: 2
        },
        {
            value: "No."
        }
    ]
 },
 2: {
     question: "Tra i dati personali ci sono informazioni sensibili?",
     answers: [
         {
             value: "Sì.",
             fulfillment: 2
         },
         {
             value: "No.",
         }
     ]
  },
  ...
}
```

Il file "fulfillments_it.json" contiene i vari adempimenti a cui ottemperare.

Il formato del file è:
```
{
    1: "Redigere il consenso per il trattamento e tracciarlo in modo certo.",
    2: "Redigere il DPIA ovvero il documento di valutazione dei rischi.",
    ...
}
```