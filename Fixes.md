API Base URL: Local vs Production

Problem:
Production me `BASE_URL = "/api"` working tha, but local Vite me `/api` request backend tak nahi ja rahi thi.

Local:
Frontend → /api/request/... → Vite → ❌ 404

Production:
Frontend → /api/request/... → Backend → ✅

Reason:
Local me request backend ke instead Vite frontend server par ja rahi thi, isliye 404 aa raha tha aur Vite ka index.html return ho raha tha.

✅ Ternary Operator:
export const BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000/api"
    : "/api";

Meaning:
localhost → http://localhost:3000/api
deployed  → /api

Note: `3000` ko apne actual backend port se replace karo.