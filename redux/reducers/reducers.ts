import { combineReducers } from "redux";
import { allRoomReducer, roomDetailsReducer } from "./roomReducer";

const reducers = combineReducers({
  allRooms: allRoomReducer,
  roomDetails: roomDetailsReducer,
});

export default reducers;
