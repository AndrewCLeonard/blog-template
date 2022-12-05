const express = require("express");
const router = express.Router();

// Not working
// import pkg from "express";
// uppercase E?
// const { Express } = pkg;
// const router = express.Router();

const apiRoutes = require("./api");
// import apiRoutes from "./api";
const homeRoutes = require("./home-routes.js");
// import homeRoutes from "./home-routes";

router.use("/api", apiRoutes);
router.use("/", homeRoutes);

router.use((req, res) => {
	res.status(404).end();
});

// export default router;
module.exports = router;
