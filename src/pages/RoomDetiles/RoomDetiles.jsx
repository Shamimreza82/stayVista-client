import { useLoaderData } from "react-router-dom";
import Header from "../../components/RoomsDetiles/Header";
import Container from "../../components/Shared/Container";
import RoomInfo from "./RoomInfo";
import RoomReservation from "./RoomReservation";

const RoomDetiles = () => {
  const { data: room } = useLoaderData();
  console.log(room);

  return (
    <Container>
      <div className="">
        <div>
          <Header roomData={room}></Header>
        </div>
        <div className="grid grid-cols-6 mt-10 gap-6">
          <div className="col-span-4">
            <RoomInfo roomData={room}></RoomInfo>
          </div>
          <div className="col-span-2">
            <RoomReservation room={room} ></RoomReservation>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetiles;
