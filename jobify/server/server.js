import express from "express";
const app = express();

// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandleMiddleware from "./middleware/error-handler.js";

app.get("/", (req, res) => {
  throw new Error("error");
  res.send("Welcome home !!");
});

app.use(notFoundMiddleware);
app.use(errorHandleMiddleware);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
