import express from "express";
import routes from "./routes/v1/index.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (request, response) => {
  response.status(200).send("server is working");
});

app.use("/v1", routes);

export default app;
