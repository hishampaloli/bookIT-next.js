import nc from "next-connect";
import { getAllRooms, newRoom } from "../../../controllers/roomController";
import dbConnect from "../../../config/db";
import { onError } from "../../../middlewares/erros";

const handler = nc({ onError });
dbConnect();

handler.get(getAllRooms);
handler.post(newRoom);

export default handler;
