const express = require("express");
const app = express();
app.get("/", (req, res) => {
	// res.send("hello world");
	res.status(200).json({ message: "hello world" });
});
app.listen(80);
