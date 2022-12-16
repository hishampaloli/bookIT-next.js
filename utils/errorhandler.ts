class ErrorHandler extends Error {
  constructor(message: any, statusCode: number) {
    super(message);
    statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default ErrorHandler;
