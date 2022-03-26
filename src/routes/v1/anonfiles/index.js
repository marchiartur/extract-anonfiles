import express from "express";
import anonFiles from "../../../controllers/anonfiles/index.js";

const router = express.Router();

router.route("/").get(anonFiles.getHref);

export default router;
