require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(express.json());

// Connect to Database
connectDB();

// Routes
app.use("/api/auth", authRoutes); // Use auth routes for login, register, etc.
app.use("/api/tasks", taskRoutes); // Use task routes for task management

const port = 3300;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port hi ${port}`);
});
