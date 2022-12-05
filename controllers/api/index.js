// packaged group of API endpoints and prefixing them
const router = require("express").Router();
// import { Express } from "express"; // not working

const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
