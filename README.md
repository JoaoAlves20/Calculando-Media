# 📊 Calculadora de Média de Notas por Usuário

## 📌 Sobre o projeto

Este projeto é uma aplicação backend simples que permite buscar um usuário específico e calcular a média das suas notas em diferentes disciplinas.

O objetivo é praticar conceitos fundamentais de desenvolvimento backend com JavaScript, incluindo manipulação de dados, organização de código e lógica de programação.

---

## 🚀 Funcionalidades

* Buscar um usuário pelo ID e Disciplina
* Calcular a média da nota
* Retornar os dados formatados em JSON

---

## 🛠️ Tecnologias utilizadas

* Node.js
* JavaScript
* Express.js

---

## 📂 Estrutura do projeto

```
src/
 ├── controller/
    └── user.controller.js
 ├── services/
    └── user.service.js
 ├── mocks/
    └── users.js
 ├── router.js
 └── index.js
```

---

## 📥 Instalação

1. Clone o repositório:

```
git clone https://github.com/JoaoAlves20/Calculando-Media.git
```

2. Acesse a pasta:

```
cd Calculando-Media
```

3. Instale as dependências:

```
yarn ou npm install
```

4. Execute o projeto:

```
yarn start ou npm run start
```

---

## 🔎 Exemplo de uso

### 📌 Requisição

```
GET /users/1
```

### 📌 Resposta

```json
{
  "id": 1,
  "username": "João",
  "disciplinas": {
    "matematica": [8, 6],
    "portugues": [7, 7],
    "ciencias": [9, 9]
  }
}
```

---

## 🧠 Lógica aplicada

A média é calculada somando todas as notas e dividindo pela quantidade de notas:

```
media = somaDasNotas / quantidadeDeNotas
```

---

## 📈 Melhorias futuras

* Integração com banco de dados
* Autenticação de usuários
* Validação de dados
* Testes automatizados
