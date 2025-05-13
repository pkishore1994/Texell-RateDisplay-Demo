# 🖥️ Texell API – ASP.NET Core Backend

This is the backend API for the **Texell Rate Display Demo**, simulating real-time loan and savings product data.

---

## 🔧 Stack

- ASP.NET Core 7.0
- Web API
- In-memory data source (mocked)

---

## 📁 Endpoints

### `GET /api/rates`

Returns a list of loan/savings product rates:

```json
[
  {
    "type": "Auto Loan",
    "rate": "4.74%",
    "term": "60 months"
  },
  {
    "type": "Home Equity",
    "rate": "5.99%",
    "term": "15 years"
  }
]
cd Backend/Texell.API
dotnet run
