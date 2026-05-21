const express = require('express');
const cors = require('cors');
const authRoutes = require('./modules/auth/routes.js');
const app = express();

const pool = require('./config/db.js');

app.use(cors());
app.use(express.json());

pool.connect().then(() => {
    console.log("Database connected");
}).catch((err) => {
    console.log(err);
});

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});