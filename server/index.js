const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let dummyBalance = 1000;

app.get("/api/balance", (req, res) => {
  res.json({ balance: dummyBalance });
});

app.post("/api/withdraw", (req, res) => {
  const amount = req.body.amount || 0;
  dummyBalance -= amount;
  res.json({ balance: dummyBalance });
});

app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));