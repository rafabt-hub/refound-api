# Refund API 💸

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Tech](https://img.shields.io/badge/tech-Node.js%20%26%20Fastify-68A063?logo=node.js)

The backend API for the Refund 2.0 application. Built with Node.js, Fastify, and Prisma, it provides endpoints for managing financial transactions and calculating summaries.

## ✨ Features

-   **Create and list transactions:** Full CRUD support for financial entries.
-   **Financial Summary:** A dedicated endpoint to calculate total income, expenses, and the final balance.
-   **Type-safe:** Built with TypeScript and validated with Zod to ensure data integrity.
-   **Lightweight Setup:** Uses SQLite for a file-based database, requiring no external database server for local development.

## 🛠️ Tech Stack

-   **Runtime:** [Node.js](https://nodejs.org/)
-   **Framework:** [Fastify](https://www.fastify.io/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **ORM:** [Prisma](https://www.prisma.io/)
-   **Database:** [SQLite](https://www.sqlite.org/index.html)
-   **Schema Validation:** [Zod](https://zod.dev/)

## 🚀 Getting Started

To run this project locally, you'll need Node.js and npm.

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/rafabt-hub/refound-api.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd refound-api
    ```
3.  **Install dependencies:**
    ```sh
    npm install
    ```
4.  **Set up the database:**
    This project uses SQLite, so no external database is needed. The following command will create the database file and run the necessary migrations.
    ```sh
    npx prisma migrate dev
    ```
5.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The API will be available at `http://localhost:3333`.

## 🌐 API Endpoints

| Method | Endpoint                    | Description                               |
| :----- | :-------------------------- | :---------------------------------------- |
| `POST` | `/transactions`             | Creates a new transaction.                |
| `GET`  | `/transactions`             | Lists all transactions.                   |
| `GET`  | `/transactions/:id`         | Gets a single transaction by its ID.      |
| `GET`  | `/transactions/summary`     | Gets a summary of all transactions.       |

## 📄 License

This project is licensed under the MIT License.

---

<details>
  <summary>🇧🇷 Ver em Português</summary>

  <br>

  > A API backend para a aplicação Refund 2.0. Construída com Node.js, Fastify e Prisma, ela fornece endpoints para gerenciar transações financeiras e calcular resumos.

  ### ✨ Funcionalidades

  -   **Criar e listar transações:** Suporte CRUD completo para lançamentos financeiros.
  -   **Resumo Financeiro:** Um endpoint dedicado para calcular o total de entradas, saídas e o saldo final.
  -   **Tipagem Segura:** Construído com TypeScript e validado com Zod para garantir a integridade dos dados.
  -   **Configuração Leve:** Usa SQLite como banco de dados (baseado em arquivo), não exigindo um servidor de banco de dados externo para desenvolvimento local.

  ### 🚀 Como Executar

  Para rodar este projeto, você precisará do Node.js e npm.

  1.  **Clone o repositório.**
  2.  **Navegue até a pasta do projeto.**
  3.  **Instale as dependências:** `npm install`.
  4.  **Configure o banco de dados:** Este projeto usa SQLite, então nenhum banco externo é necessário. O comando a seguir criará o arquivo do banco e executará as migrações: `npx prisma migrate dev`.
  5.  **Inicie o servidor:** `npm run dev`. A API estará rodando em `http://localhost:3333`.

</details>
