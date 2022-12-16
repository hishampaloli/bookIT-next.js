import { NextApiRequest, NextApiResponse } from "next";
import { Room } from "../models/room";
import ErrorHandler from "../utils/errorhandler";
import { catchAsyncError } from "../middlewares/catchAsyncErrors";
import APIFeatures from "../utils/apiFeatures";

const getAllRooms = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: any
) => {
  try {
    const apiFeatures = new APIFeatures(Room.find(), req.query).search();
    const rooms = await apiFeatures.query;

    res.status(200).json({
      success: true,
      count: rooms.length,
      rooms: rooms,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
};

const newRoom = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: any
) => {
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

const getSingleRoom = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: any
) => {
  try {
    const room = await Room.findById(req.query.id);

    if (!room) {
      return next(new ErrorHandler("Room not found in this ID", 404));
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

const updateRoom = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: any
) => {
  try {
    const rooms = await Room.findById(req.query.id);

    if (!rooms) {
      return next(new ErrorHandler("Room not found in this ID", 404));
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

const deleteRoom = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: any
) => {
  try {
    const rooms = await Room.findById(req.query.id);

    if (!rooms) {
      return next(new ErrorHandler("Room not found in this ID", 404));
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

export { getAllRooms, newRoom, getSingleRoom, updateRoom, deleteRoom };
