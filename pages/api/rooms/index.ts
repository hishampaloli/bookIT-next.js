import nc from 'next-connect'
import { getAllRooms } from '../../../controllers/roomController'
import dbConnect from '../../../config/db';

const handler = nc();
dbConnect()

handler.get(getAllRooms)

export default handler;