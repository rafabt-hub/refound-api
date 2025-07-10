# Refund API 💸

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Tech](https://img.shields.io/badge/tech-Node.js%20%26%20Express-68A063?logo=node.js)

The backend API for the Refund application. Built with Node.js, Express, and Prisma, it provides endpoints for managing financial transactions.

## ✨ Features

-   **Full CRUD Support:** Create, read, update, and delete transactions.
-   **Secure Authentication:** User authentication and route protection using JWT.
-   **File Uploads:** Supports file uploads for receipts or attachments using Multer.
-   **Type-safe:** Built with TypeScript and validated with Zod to ensure data integrity.
-   **Secure Password Storage:** Passwords are encrypted using `bcrypt`.

## 🛠️ Tech Stack

-   **Runtime:** [Node.js](https://nodejs.org/)
-   **Framework:** [Express.js](https://expressjs.com/pt-br/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **ORM:** [Prisma](https://www.prisma.io/)
-   **Authentication:** [JSON Web Token (JWT)](https://jwt.io/)
-   **Password Hashing:** [Bcrypt](https://www.npmjs.com/package/bcrypt)
-   **File Uploads:** [Multer](https://github.com/expressjs/multer)
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
4.  **Set up environment variables:**
    Create a `.env` file in the root directory and add your database connection string and JWT secret.
    ```.env
    DATABASE_URL="your-database-connection-string"
    JWT_SECRET="your-super-secret-key"
    ```
5.  **Run database migrations:**
    ```sh
    npx prisma migrate dev
    ```
6.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The API will be available at `http://localhost:3000` (or the port defined in your `server.ts`).

## 📄 License

This project is licensed under the MIT License.

---

<details>
  <summary>🇧🇷 Ver em Português</summary>

  <br>

  > A API backend para a aplicação Refund. Construída com Node.js, Express e Prisma, ela fornece endpoints para gerenciar transações financeiras.

  ### ✨ Funcionalidades

  -   **Suporte CRUD Completo:** Crie, leia, atualize e delete transações.
  -   **Autenticação Segura:** Autenticação de usuário e proteção de rotas usando JWT.
  -   **Upload de Arquivos:** Suporte para upload de arquivos (recibos, anexos) com Multer.
  -   **Tipagem Segura:** Construído com TypeScript e validado com Zod para garantir a integridade dos dados.
  -   **Armazenamento Seguro de Senhas:** Senhas são criptografadas com `bcrypt`.

  ### 🚀 Como Executar

  1.  **Clone o repositório.**
  2.  **Navegue até a pasta do projeto.**
  3.  **Instale as dependências:** `npm install`.
  4.  **Configure as variáveis de ambiente:** Crie um arquivo `.env` com a string de conexão do banco e um segredo para o JWT.
  5.  **Execute as migrações do banco:** `npx prisma migrate dev`.
  6.  **Inicie o servidor:** `npm run dev`.

</details>
