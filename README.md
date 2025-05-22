# 💼 Texell Rate Display Demo – Fintech MVP with .NET Core + Angular

🔧 **Tech Stack:** ASP.NET Core Web API · Angular · TypeScript · In-Memory Data · Azure Ready  
🏦 **Use Case:** Banking & Credit Union Platforms – Loan & Savings Rate Display  
🚀 **Goal:** Demonstrate a real-time financial rate interface simulating a live product listing portal

---

## 📌 Project Overview

This project simulates the **loan and savings rate display system** used by banks and credit unions to show customers current rates in real time. It showcases how **Angular + ASP.NET Core Web API** can deliver a clean, fast, and extensible MVP.

✅ Clean component-based frontend  
✅ Secure, mock API backend  
✅ Ideal starting point for fintech SaaS apps or internal portals

---

## 🔄 How It Works

- Angular frontend fetches live data from `.NET Web API`
- In-memory data model simulates a financial rates database
- Great for prototyping fintech interfaces or client demos

---

## 📂 Project Structure

```
Texell-RateDisplay-Demo/
├── Backend/
│   └── Texell.API/
│       ├── Controllers/          # RatesController.cs
│       ├── Models/               # Rate.cs
│       ├── Program.cs
│       └── Texell.API.csproj
│
├── Frontend/
│   └── texell-ui/
│       └── src/app/components/
│           └── rate-display/     # Angular component
```

---

## ▶️ Getting Started

### 🖥️ Backend – ASP.NET Core

```bash
cd Backend/Texell.API
dotnet run
```

Endpoint: `https://localhost:5001/api/rates`

---

### 🌐 Frontend – Angular

```bash
cd Frontend/texell-ui
npm install
ng serve
```

Open in browser: `http://localhost:4200`

---

## 📊 Sample API Response

```json
[
  {
    "type": "Auto Loan",
    "rateValue": "4.74%",
    "term": "60 months"
  },
  {
    "type": "Home Equity",
    "rateValue": "5.99%",
    "term": "15 years"
  }
]
```

---

## 🎯 Real-World Applications

- 🔹 Credit union customer portals  
- 🔹 Internal rate comparison dashboards  
- 🔹 Mortgage and loan quote UIs  
- 🔹 Azure-hosted banking tools (API + Angular SPA)

---

## 🔖 Tags

`aspnet-core` `angular` `dotnet` `fintech` `mvp` `azure` `rate-display` `banking-app` `typescript` `frontend-backend`

---

## 🤝 Let’s Work Together

Are you building a **fintech MVP**, **loan portal**, or need help creating a **secure web app** for banking or finance?

📬 [Hire me on Upwork](https://www.upwork.com/freelancers/asifhameed)  
🌐 [Visit my portfolio](https://asifhameed.com)

---
