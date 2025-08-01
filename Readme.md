# ✅ ToDo Reminder – App de Lista de Tarefas com Lembretes

ToDo Reminder é uma aplicação full stack desenvolvida com **Node.js (Express)** no backend e **Next.js** no frontend. Permite que usuários cadastrem tarefas, definam lembretes e recebam notificações por email antes do prazo.

---

## 🚀 Tecnologias Utilizadas

### Backend (Node.js + Express + MongoDB)
- Express.js
- MongoDB + Mongoose
- JWT para autenticação
- Bcrypt para hash de senha
- Node-Cron para agendar lembretes
- Nodemailer para envio de emails
- Dotenv, Helmet, CORS

### Frontend (Next.js + Tailwind + ShadCN UI)
- Next.js (App Router)
- Tailwind CSS
- ShadCN UI
- React Hook Form + Zod
- Axios

---

## 🔐 Funcionalidades

- Cadastro e login com JWT  
- Login com **e-mail ou nome de usuário**  
- CRUD de tarefas (criar, editar, excluir, listar)  
- Organização por status e categorias  
- Definição de data/hora para lembrete  
- Envio automático de email antes da tarefa vencer  
- UI responsiva e acessível  

---

## 🧪 Requisitos

- Node.js v18+  
- MongoDB local ou Atlas  
- Conta de email (para testes com Nodemailer, use Gmail ou Mailtrap)

---

## ⚙️ Instalação

### 1. Clone o projeto
```bash
git clone https://github.com/seu-usuario/todo-reminder.git
cd todo-reminder
```

### 2. Backend
```bash
cd backend
npm install
```

### Crie um arquivo .env com:
```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/todo_reminder
JWT_SECRET=sua_chave_jwt
EMAIL_USER=seuemail@gmail.com
EMAIL_PASS=sua_senha_de_app
```

### Inicie o backend:
```bash
npm run dev
```

### 3. Frontend
```bash
cd ../frontend
npm install
```

### Configure o endpoint da API em lib/api.ts ou .env.local:
```bash
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Configure o endpoint da API em lib/api.ts ou .env.local:
```bash
npm run dev
```

---

### 🧠 Estrutura de Pastas
```bash
backend/
  ├── src/
  │   ├── controllers/
  │   ├── models/
  │   ├── routes/
  │   ├── middlewares/
  │   └── utils/
frontend/
  ├── app/
  ├── components/
  ├── lib/
  ├── styles/
```

---

## 📧 Envio de Lembretes
O backend roda um cron job a cada minuto para verificar tarefas com dueDate próxima (ex: 30 minutos antes). Ao encontrar, envia um email para o usuário usando Nodemailer.

## 🛡️ Segurança
 - Senhas criptografadas com bcrypt
 - Tokens JWT protegidos com middleware
 - Helmet e CORS configurados
 - Validação no backend com express-validator (ou Zod)
