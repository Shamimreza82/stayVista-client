import { Calendar } from "react-date-range";
import Button from "../../components/Button/Button";
import { formatDistance } from "date-fns";
import { useState } from "react";

const RoomReservation = ({ room }) => {

    const [dateRange, setdateRange] = useState({
        startDate: new Date(room?.from), 
        endDate: new Date(room?.to), 
        key: 'selection'
    }) 

    console.log(dateRange);


    const totalDays = formatDistance(new Date(room.to), new Date(room.from)) 
    const roomPrice = parseFloat(room.price * parseFloat(totalDays.split(' ')[0]))
    
  

  return (
    <div className="rounded-lg border-[1px] border-neutral-200  py-4  bg-white px-4 ">
      <div className="flex gap-3 ">
        <p className="text-2xl font-bold">${room.price}</p>
        <h2 className="font-light text-neutral-600">Night</h2>
      </div>
      <hr  className="py-3 mt-3"/>
      <div className="flex justify-center">
        <Calendar
            dateRange={dateRange}
        ></Calendar>
      </div>
      <div>
        <Button
            label={"Resurve"}
        ></Button>
      </div>
      <hr  className=" mt-4 "/>
      <div className="flex justify-between py-2">
        <div className="text-2xl">
            Total:$ 
        </div>
        <div className="text-2xl">
            ${roomPrice}
            <h2 className="text-base text-neutral-600">  {totalDays}</h2>
        </div>
      </div>
    </div>
  );
};

export default RoomReservation;
