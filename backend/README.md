# ReGive Backend (Sprint 1–3)

Node.js + Express + MongoDB API cho ReGive.

- **Sprint 1:** Auth, Campaign, Donation, Volunteer, Beneficiary, Notification  
- **Sprint 2:** Product, Warehouse/Inventory, Marketplace, Order, Payment sandbox, Reports  
- **Sprint 3:** AI product assessment (human-in-the-loop), E2E integration

## Stack

- Node.js (JavaScript)
- Express.js
- MongoDB + Mongoose
- JWT + bcryptjs
- AI provider: `mock` (heuristic) — sẵn hook đổi sang API ngoài qua env

## Cài đặt

```bash
cd backend
cp .env.example .env
npm install
npm run seed
npm run dev
```

API: `http://localhost:5000`

Demo E2E (cần server đang chạy):

```bash
npm run demo:e2e
```

## Tài khoản demo

| Role | Email | Password |
|---|---|---|
| ADMIN | admin@regive.local | Admin@123 |
| EMPLOYEE | employee@regive.local | Employee@123 |
| USER | user@regive.local | User@123 |
| BENEFICIARY | beneficiary@regive.local | Beneficiary@123 |

Seed có:
- Marketplace: **Balo học sinh second-hand**
- AI draft: **Áo khoác denim second-hand**

## Luồng demo Sprint 3 (AI)

```text
Intake product (draft)
  → POST /api/ai/assess-product        (AI gợi ý, KHÔNG áp dụng)
  → POST /api/ai/assessments/:id/confirm  (Employee confirm/override → áp vào product)
  → stock-in → publish → order → payment
```

**Quy tắc AI bắt buộc**
- AI chỉ `suggested` — không tự set giá authoritative, không auto-publish marketplace  
- Status: `suggested` → `confirmed` | `overridden` | `rejected` | `failed`  
- AI lỗi → vẫn đánh giá thủ công `POST /api/products/:id/assess`

## API Sprint 3 (AI)

| Method | Path | Auth | Mô tả |
|---|---|---|---|
| POST | `/api/ai/assess-product` | Employee/Admin | Chạy AI, lưu suggestion |
| GET | `/api/ai/pending` | Employee/Admin | Hàng chờ review |
| GET | `/api/ai/products/:productId` | Employee/Admin | Lịch sử AI theo product |
| GET | `/api/ai/assessments/:id` | Employee/Admin | Chi tiết assessment |
| POST | `/api/ai/assessments/:id/confirm` | Employee/Admin | Confirm/override + apply product |
| POST | `/api/ai/assessments/:id/reject` | Employee/Admin | Từ chối suggestion |

## Env AI

```text
AI_PROVIDER=mock
AI_API_KEY=
```

## Response format

```json
{
  "success": true,
  "message": "OK",
  "data": {}
}
```
