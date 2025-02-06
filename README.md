# Projeto Fullstack 2.0

Projeto Fullstack com React.js no frontend e FastAPI no backend.

## Estrutura
- backend/ (Código do backend com FastAPI)
- frontend/ (Código do frontend com React.js)

## Tecnologias
- Backend: Python, FastAPI, Uvicorn, Docker
- Frontend: React.js, Axios, Docker

## Como Rodar

1. **Backend**
   - Vá para a pasta backend/
   - Crie o ambiente virtual:
     ```
     python3 -m venv venv
     ```
   - Ative o ambiente:
     - No Linux/Mac:
       ```
       source venv/bin/activate
       ```
     - No Windows:
       ```
       venv\Scripts\activate
       ```
   - Instale as dependências:
     ```
     pip install -r requirements.txt
     ```
   - Rode o backend:
     ```
     uvicorn main:app --reload
     ```
   - O backend estará em http://localhost:8000

2. **Frontend**
   - Vá para a pasta frontend/
   - Instale as dependências:
     ```
     npm install axios
     ```
   - Rode o frontend:
     ```
     npm start
     ```
   - O frontend estará em http://localhost:3000

## Rodando com Docker (Opcional)
1. Crie uma rede Docker:
    - docker network create fullstack
2. Rode o backend:
    - docker run --name backend --rm --network fullstack -p 8000:8000 backend
3. Rode o frontend:
    - docker run --name frontend --rm --network fullstack -p 3000:3000 frontend
