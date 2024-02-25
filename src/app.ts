import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import { corsOptionsDelegate } from "./lib/config";
import { NotFoundError, asyncHandler } from "./lib/utils";
import { SuccessResponse } from "./lib/utils/ApiResponse";
import { errorHandler } from "./middlewares/errorHandler";
const app = express();

app.use(cors(corsOptionsDelegate));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// import all routes here and use them

app.get(
  "/",
  asyncHandler(async (_req, res) => {
    const data = {};
    return new SuccessResponse(data).send(res);
  })
);

app.use((_req, _res, next) => next(new NotFoundError("Route not found")));

app.use(errorHandler);

export default app;
