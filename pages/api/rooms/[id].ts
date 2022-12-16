import nc from "next-connect";
import {
  deleteRoom,
  getSingleRoom,
  updateRoom,
} from "../../../controllers/roomController";
import dbConnect from "../../../config/db";
import { onError } from "../../../middlewares/erros";

const handler = nc({ onError });
dbConnect();

handler.get(getSingleRoom);
handler.put(updateRoom);
handler.delete(deleteRoom);

export default handler;
