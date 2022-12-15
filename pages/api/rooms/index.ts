import nc from "next-connect";
import { getAllRooms, newRoom } from "../../../controllers/roomController";
import dbConnect from "../../../config/db";

const handler = nc();
dbConnect();

handler.get(getAllRooms);
handler.post(newRoom);

export default handler;
