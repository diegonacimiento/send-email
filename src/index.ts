import express from "express";
import routerApi from "./routes/index.js";
import cors from "cors";

const app = express();
const PORT: number = 3000;

app.listen(PORT, () => {
  console.log("Servidor levantado en el puerto: " + PORT);
})

app.use(express.json());
app.use(express.text());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hola mundo, primer servidor con typescript");
})

routerApi(app);