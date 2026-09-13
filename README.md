# ReGive — Capstone 2

Nền tảng từ thiện + marketplace second-hand (AI hỗ trợ, human-in-the-loop).

## Stack

- Backend: Node.js + Express + MongoDB + JWT (`backend/`)
- Admin web: React + Vite + Tailwind (`admin/`) — Admin & Employee

## Chạy local

```bash
# 1. API
cd backend
cp .env.example .env
npm install
npm run seed
npm start
```

```bash
# 2. Admin (http://localhost:5173)
cd admin
npm install
npm run dev
```

Vite proxy `/api` → `http://localhost:5000`. Backend CORS mặc định cho origin `http://localhost:5173`.

## Tài khoản demo

| Role | Email | Password |
|---|---|---|
| ADMIN | admin@regive.local | Admin@123 |
| EMPLOYEE | employee@regive.local | Employee@123 |
| USER | user@regive.local | User@123 |
| BENEFICIARY | beneficiary@regive.local | Beneficiary@123 |

Chỉ ADMIN / EMPLOYEE đăng nhập được admin web.

## Tài liệu

- `document/ReGive_KeHoach_XayDung_Theo_Phase.md`
- `backend/README.md` · `backend/docs/RBAC.md` · `backend/docs/openapi.yaml`
- `admin/README.md`
