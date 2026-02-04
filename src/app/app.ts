/* eslint-disable @typescript-eslint/no-unused-vars */
import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import { router } from "./routes";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";
import notFound from "./middlewares/notFound";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to Management system Backend",
  });
});

// global error handler
app.use(globalErrorHandler);
app.use(notFound);

export default app;