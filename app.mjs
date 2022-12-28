import path from "path";
import express from "express";
const app = express();
import { engine } from "express-handlebars";
import sequelize from "./config/connection.js";

/**
 * https://bobbyhadz.com/blog/javascript-dirname-is-not-defined-in-es-module-scope
 * use __dirname inside a module fix
 */
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
	res.render("home");
});

// turn on connection to db and server
const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => console.log(`Now listening on ${PORT}`));

try {
	await sequelize.authenticate();
	console.log("Connection has been established successfully.");
} catch (error) {
	console.error("Unable to connect to the database:", error);
}

sequelize.sync({ force: true }).then(() => {
	app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});
