import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import RoomItem from "./room/RoomItem";
import { toast } from "react-toastify";
import { clearErrors } from "../redux/actions/roomActions";

const Home = () => {
  const dispatch = useDispatch();

  const { rooms, error }: { rooms: any[]; error: any } = useSelector(
    (state: any) => state?.allRooms
  );

  useEffect(() => {
    if (error) {
      dispatch<any>(clearErrors());
      toast.success(error);
    }
  }, []);

  return (
    <section id="rooms" className="container mt-5">
      <h2 className="mb-3 ml-2 stays-heading">Stays in New York</h2>

      <a href="#" className="ml-2 back-to-search">
        {" "}
        <i className="fa fa-arrow-left"></i> Back to Search
      </a>
      <div className="row">
        {rooms && rooms.length === 0 ? (
          <div className="alert alert-danger">
            <b>No Rooms</b>
          </div>
        ) : (
          <>
            {rooms &&
              rooms?.map((room) => {
                return <RoomItem key={room.id} room={room} />;
              })}
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
