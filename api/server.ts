import express from "express";
import cors from "cors";
import advisorsRouter from "./advisors/index.js";

const app =
  express();

const allowedOrigins =
  [
    "http://localhost:3000",
  ];

const corsOptions =
  {
    origin:
      allowedOrigins,
  };

app.use(
  cors(corsOptions)
);
app.use(
  express.json()
);

app.use(
  "/advisors",
  advisorsRouter
);

app.listen(
  8080,
  () => {
    console.log(
      `> Ready on http://loсalhost:8080`
    );
  }
);
