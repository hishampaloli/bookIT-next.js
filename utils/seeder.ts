import { Room } from "../models/room";
const mongoose = require("mongoose");
const dbConnect = require("../config/db");
const rooms = require("../data/rooms");

dbConnect();

const seedRooms = async () => {
  try {
    await Room.deleteMany();
    console.log("Rooms are deleted");

    await Room.insertMany(rooms);
    console.log("All Rooms are added.");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

seedRooms();
