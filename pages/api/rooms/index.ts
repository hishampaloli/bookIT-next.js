import nc from 'next-connect'
import { getAllRooms } from '../../../controllers/roomController'

const handler = nc();

handler.get(getAllRooms)

export default handler;