# 💼 Texell Rate Display Demo

🔧 **Tech Stack:** ASP.NET Core Web API (Backend) + Angular (Frontend)  
🎯 **Goal:** Simulate real-time display of dynamic loan & savings rates using mock APIs.

---

## 🔄 How It Works

- Frontend UI displays featured rates (e.g., Auto Loan, Home Equity)
- Rates are fetched via API from a mock database (in-memory)
- Designed to simulate live financial product display for banking portals

---

## 📂 Project Structure

- `/Backend/Texell.API/` – ASP.NET Core Web API with `RatesController`
- `/Frontend/texell-ui/` – Angular app with `RateDisplayComponent`

---

## ▶️ Getting Started

### 🚀 Backend (ASP.NET Core)

```bash
cd Backend/Texell.API
dotnet run


Texell-RateDisplay-Demo/
├── Backend/
│   ├── Texell.API/
│   │   ├── Controllers/
│   │   │   └── RatesController.cs
│   │   ├── Models/
│   │   │   └── Rate.cs
│   │   ├── Program.cs
│   │   ├── Startup.cs
│   │   └── Texell.API.csproj
│   └── README.md
│
├── Frontend/
│   ├── texell-ui/
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── components/
│   │   │   │   │   └── rate-display/
│   │   │   │   └── app.module.ts
│   │   └── angular.json
│   └── README.md
│
├── README.md
└── LICENSE

