# ⚡ Kamigawa-Inspirerad Användarautentisering med JWT

Projektet innehåller användarregistrering, inloggning och åtkomst till en skyddad sida genom JWT (JSON Web Tokens). Designen är inspirerad av japansk cyberpunk med neon-accenter och mörkt tema.

## Funktioner

- Registrering och inloggning av användare via Fetch API
- JWT används för autentisering
- Skyddad undersida som endast kan nås när användaren är inloggad
- Backend med SQLite, Express.js och Node.js
- JWT lagras säkert i `sessionStorage`

## Teknisk översikt

### Frontend

- **HTML, CSS & JavaScript**
- `fetch()` används för alla API-anrop
- JWT sparas i `sessionStorage` och skickas i `Authorization`-header
- Sidor:
  - `index.html` – Inloggning & registrering
  - `protected.html` – Visar skyddad information efter inloggning

### Backend

- **Node.js med Express**
- **SQLite** databas
- Routes:
  - `POST /api/register` – Registrera ny användare
  - `POST /api/login` – Logga in och få JWT
  - `GET /api/protected` – Skyddad resurs kräver giltig token
