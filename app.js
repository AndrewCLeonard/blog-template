// don't know if this path import is correct:
import path from "node:path";

import express from "express";
import { engine } from "express-handlebars";

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
	res.render("home");
});

app.listen(3000);
