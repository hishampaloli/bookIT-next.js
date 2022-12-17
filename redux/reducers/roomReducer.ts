import {
  ALL_ROOM_FAIL,
  ALL_ROOM_SUCCESS,
  ROOM_DETAILS_FAIL,
  ROOM_DETAILS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/roomTypes";

export const allRoomReducer = (state = { rooms: [] }, action: any) => {
  switch (action.type) {
    case ALL_ROOM_SUCCESS:
      return {
        roomCount: action.payload.roomsCount,
        resPerPage: action.payload.resPerPage,
        rooms: action.payload.rooms,
      };

    case ALL_ROOM_FAIL:
      return {
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        error: null,
      };
    default:
      return state;
  }
};

export const roomDetailsReducer = (state = {loading: true, todo: []}, action: any) => {
  console.log(action.payload);
  console.log(action.type);
  

  switch (action.type) {
    case ROOM_DETAILS_SUCCESS:

      return { loading: false, rooms: action.payload};
    case ROOM_DETAILS_FAIL:
      return {
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        error: null,
      };
    default:
      return state;
  }
};
