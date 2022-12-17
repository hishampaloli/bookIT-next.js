import { Inter } from "@next/font/google";
import RoomDetails from "../../components/room/RoomDetails";
import Layout from "../../components/layouts/Layout";
import { useSelector } from "react-redux";
import { getRoomDetails } from "../../redux/actions/roomActions";
import { wrapper } from "../../redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function RoomDetailsPage() {
  const room = useSelector<any>((state) => state?.roomDetails);
  console.log(room);
  
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getRoomDetails('sdffdf', 'dsgdgdgg'))
  });

  return (
    <Layout title={"Home"}>
      <RoomDetails />
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params }): Promise<any> => {
      if (params) {
        await store.dispatch(getRoomDetails(req, params.id));
      }     
    }
);

// TicketShow.getInitialProps = async (context, client) => {
//     const { ticketId } = context.query;
//     const { data } = await client.get(`/api/tickets/${ticketId}`);

//     return { ticket: data };
//   };
