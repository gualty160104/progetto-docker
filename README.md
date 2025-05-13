# Progetto Docker: Frontend + Backend con Hello API

## Descrizione

Questo progetto prevede la creazione di due container Docker comunicanti tramite `docker-compose`:

- **Backend**: un'app Node.js che espone un endpoint `/api` e restituisce la stringa `"hello-api"`.
- **Frontend**: una pagina HTML servita con Nginx che effettua una richiesta `fetch` al backend e visualizza il risultato.

---

## Requisiti

- Docker installato
- Docker Compose installato

---

## Struttura del progetto

Progetto/
├── backend/
│ ├── Dockerfile
│ └── index.js
| └── package.json
├── frontend/
│ ├── Dockerfile
│ ├── index.html
│ └── default.conf
├── docker-compose.yml
└── .gitignore.md

---

## Avvio del progetto

1. Posizionarsi nella cartella `Progetto`:
```bash
cd percorso/della/cartella/Progetto

Avviare i container:
docker-compose up --build

Aprire il browser all'indirizzo:
http://localhost:8080

Una volta aperto l'indirizzo, verrà visualizzato "hello-api"

Test manuale dell’API

Per verificare direttamente il backend:
Apri: http://localhost:3000/api

Una volta aperto l'indirizzo, verrà visualizzato "hello-api"

## Comandi Utili
Avvio con build:
docker-compose up --build

Arresto dei container:
docker-compose down
