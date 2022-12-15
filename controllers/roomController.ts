import { NextApiRequest, NextApiResponse } from "next";
const getAllRooms = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    success: true,
    message: "All Rooms",
  });
};

export { getAllRooms };
