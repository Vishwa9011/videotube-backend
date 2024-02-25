import { ErrorType, InternalError, ApiError } from "../lib/utils";
import { Request, Response, NextFunction } from "express";
import { environment } from "../lib/config";

export const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction): void => {
  if (err instanceof ApiError) {
    ApiError.handle(err, res);
    if (err.type === ErrorType.INTERNAL) {
      console.error(err);
    }
  } else {
    console.error(err);
    if (environment === "development") {
      res.status(500).send(err);
    }
    ApiError.handle(new InternalError(), res);
  }
};
