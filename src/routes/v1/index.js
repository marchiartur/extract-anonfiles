import express from "express";
import anonFiles from "./anonfiles/index.js";

const router = express.Router();

const defaultRoutes = [
  {
    path: "/anonfiles-href",
    route: anonFiles,
  },
];

defaultRoutes.forEach((element) => {
  router.use(element?.path, element?.route);
});

export default router;
