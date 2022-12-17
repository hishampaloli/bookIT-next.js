import axios from "axios";
import { Dispatch } from "redux";
import absoluteUrl from "next-absolute-url";

import {
  ALL_ROOM_SUCCESS,
  ALL_ROOM_FAIL,
  ROOM_DETAILS_FAIL,
  ROOM_DETAILS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/roomTypes";

export const getRooms = (req: any) => async (dispatch: Dispatch) => {
  try {
    const { origin } = absoluteUrl(req);

    console.log(origin + ">>>>>>>>>>>>>>>>>>>>>>>>>>>");
    

    const { data } = await axios.get(`${origin}/api/rooms`);

    

    dispatch({
      type: ALL_ROOM_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: ALL_ROOM_FAIL,
      payload: error.response.data,
    });
  }
};



export const getRoomDetails = (req: any, id: any) => async (dispatch: Dispatch) => {
    try {
        console.log(id);
      const { origin } = absoluteUrl(req);


    console.log("******************************");
    
      
  
      const { data }: {data: any} = await axios.get(`${origin}/api/rooms/${id}`);
  console.log(data );
  
      dispatch({
        type: ROOM_DETAILS_SUCCESS,
        payload: data.room,
      });
    } catch (error: any) {
      dispatch({
        type: ROOM_DETAILS_FAIL,
        payload: error.response.data,
      });
    }
  };

export const clearErrors = () => async (dispatch: Dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
