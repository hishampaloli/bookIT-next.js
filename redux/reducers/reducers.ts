import { combineReducers } from "redux";
import { allRoomReducer } from "./roomReducer";

const reducers = combineReducers({
  allRooms: allRoomReducer,
});

export default reducers;
