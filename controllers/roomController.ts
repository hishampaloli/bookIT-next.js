import { NextApiRequest, NextApiResponse } from "next";
import { Room } from "../models/room";

const getAllRooms = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const rooms = await Room.find({});

    res.status(200).json({
      success: true,
      rooms: rooms,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
};

const newRoom = async (req: NextApiRequest, res: NextApiResponse) => {
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

    await room.save();

    res.status(201).json({
      success: true,
      room,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const getSingleRoom = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const room = await Room.findById(req.query.id);

    if (!room) {
      res.status(404).json({
        success: false,
        error: "Room not found",
      });
    }

    res.status(200).json({
      success: true,
      room,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const updateRoom = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const rooms = await Room.findById(req.query.id);

    if (!rooms) {
      res.status(404).json({
        success: false,
        error: "Room not found",
      });
    }

    const room = await Room.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    await room?.save();

    res.status(200).json({
      success: true,
      room,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const deleteRoom = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const rooms = await Room.findById(req.query.id);

    if (!rooms) {
      res.status(404).json({
        success: false,
        error: "Room not found",
      });
    }

    await rooms?.remove();
    

    res.status(200).json({
      success: true,
      message: "deleted",
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export { getAllRooms, newRoom, getSingleRoom, updateRoom ,deleteRoom};
