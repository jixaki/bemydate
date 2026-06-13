const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./connectDB");

const app = express();

// middleware
app.use(cors({
  origin: process.env.FRONTEND_URL,
}));
app.use(express.json());

// connect DB
connectDB();

// test route
app.get("/api/test", (req, res) => {
  res.json({ message: "API working 🚀" });
});

app.post("/api/send-invite", async (req, res) => {
  try {
    const { email, name } = req.body;

    res.json({ message: "Invite sent (mock)" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});