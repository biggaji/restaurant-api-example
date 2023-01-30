const dotenv = require("dotenv");

if (process.env.NODE_ENV !== "production") {
	dotenv.config();
}

const express = require("express");

const APP = express();

APP.use(express.urlencoded({ extended: false }));
APP.use(express.json());

APP.get("/", (req, res) => {
	res.json({ messsage: "Restaurant API connected"});
});

APP.listen(PORT, () => {
	console.log(`API server running on ${PORT}`);
});