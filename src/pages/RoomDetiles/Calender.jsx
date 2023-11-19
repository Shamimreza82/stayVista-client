/* eslint-disable no-undef */
import { DateRange } from "react-date-range";

const Calender = ({dateRange}) => {
  return (
    <div className="mt-10">
      <DateRange 
       rangeColors={['#F43F5E']}
       ranges={[dateRange]}
       direction="vertical"
       showDateDisplay={false}
      />
    </div>
  );
};

export default Calender;
