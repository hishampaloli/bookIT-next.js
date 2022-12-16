import { NextApiRequest, NextApiResponse } from "next";
import ErrorHandler from "../utils/errorhandler";

export const onError = (
  err: any,
  req: NextApiRequest,
  res: NextApiResponse,
  next: any
) => {
  err.statusCode = err.statusCode || 500;

  let error = { ...err };
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    error = new ErrorHandler(message, 400);
  }

  // Handling mongoose Validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map(
      (value: any) => value.message
    );
    error = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    error,
    message: error.message,
    stack: error.stack,
  });
};
