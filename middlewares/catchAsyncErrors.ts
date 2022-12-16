import { NextApiRequest, NextApiResponse } from "next";

export const catchAsyncError = (
  req: NextApiRequest,
  res: NextApiResponse,
  next: any
) => {
  Promise.resolve(catchAsyncError(req, res, next)).catch(next);
};
