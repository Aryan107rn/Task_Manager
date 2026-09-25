import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

connectDB();

app.get("/", (req, res) => {
    res.json({
        message: "Task Manager API is running"
    });
});

app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}`);
});