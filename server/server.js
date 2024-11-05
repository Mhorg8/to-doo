import bodyParser from "body-parser";
import express from "express";
import todosRouter from "../api/todosRoute";
const app = express();
const PORT = 2000;

app.use(bodyParser.json());
app.use("/todos", todosRouter);
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, console.log(`server running on http://localhost:${PORT}`));
