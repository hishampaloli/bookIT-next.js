import { NextApiRequest, NextApiResponse } from "next";
import { Room } from "../models/room";
const getAllRooms = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    success: true,
    message: "All Rooms",
  });
};

const newRoom = (req: NextApiRequest, res: NextApiResponse) => {
  const {
    address,
    airConditioned,
    breakfast,
    category,
    description,
    guestCapacity,
    internet,
    name,
    numOfBeds,
    numOfReviews,
    petsAllowed,
    pricePerNight,
    ratings,
    roomCleaning,
  } = req.body;
  try {
    const room = Room.build({
      address,
      airConditioned,
      breakfast,
      category,
      description,
      guestCapacity,
      internet,
      name,
      numOfBeds,
      numOfReviews,
      petsAllowed,
      pricePerNight,
      ratings,
      roomCleaning,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export { getAllRooms, newRoom };
