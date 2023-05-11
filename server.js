import pg from "pg";
import express from "express";
import dotenv from "dotenv";

const app = express();
const PORT = 4000;

dotenv.config();

app.use(express.json());

const db = new pg.Pool({
	connectionString: process.env.DATABASE_URL,
});

app.use(express.static("public"));

// GET request
app.get("/api/tasks", (req, res) => {
	db.query("SELECT * FROM todo").then((data) => {
		res.json(data.rows);
	});
});

app.listen(PORT, () => {
	console.log(`Listening on Port: ${PORT}`);
});
