# checklist-generator

**Team FE**

SPA Vue che legge il file "quiz.json" e genera i componenti UI per presentare le domande 
e relative risposte (radio buttons, checkbox, text).

Una volta avviata elaborazione si fa la lista di tutti gli adempimenti correlati con le 
risposte fornite prendendoli da "fulfillments_it.json".

La lista deve essere esportabile in formato PDF oppure CSV.

**Team GDPR**

Legge e rilegge la normativa per capirne gli adempimenti.

https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX%3A32016R0679&from=EN

Crea i file "quiz.json", "questions.json", "answers.json" e "fulfillments.json".

**Gli schemi JSON**

L'SPA si basa sullo schema "quiz.json" che punta gli schemi "questions.json", "answers.json" e "fulfillments.json" creati dal team GDPR.

Il file "quiz.json" è indipendente dalla lingua e contiene il quiz da porre all'utente con risposte ed eventi.
Ogni risposta è correlata all'id di un adempimento e/o a quello di un'altra domanda.

Il formato del file è:
```
[
    {
        "question": 1,
        "answer": {
            "type": "radio",
            "answers": [
                {
                    "id": 1,
                    "fulfillment": 1,
                    "question": 2
                },
                {
                    "id": 2
                }
            ]
        }
    },
    {
        "question": 2,
        "answer": {
            "type": "text",
            "answers": [
                {
                    "value": ">=250",
                    "fulfillment": 2
                }
            ]
        }
    },
    ...
]
```

I tre file "questions.json", "answers.json" e "fulfillments.json" dipendono dalla lingua.

Il file "questions.json" contiene le varie domande.

Il formato del file è:
```
{
    "1": "Azienda tratta dati personali?",
    "2": "Quanti dipendenti ha l'azienda?"
}
```

Il file "answers.json" contiene le varie risposte a scelta multipla.

Il formato del file è:
```
{
    "1": "Sì",
    "2": "No"
}
```

Il file "fulfillments.json" contiene i vari adempimenti a cui ottemperare.

Il formato del file è:
```
{
    "1": "Redigere il trattamento dei dati personali",
    "2": "Nominare un DPO"
}
```