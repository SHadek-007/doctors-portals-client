import chair from '../../assets/images/chair.png';
import bgChair from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({date, setDate}) => {
  return (
    <div style={{
        backgroundImage:`url(${bgChair})`
    }} className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="sm:max-w-sm lg:max-w-xl rounded-lg shadow-2xl" alt=""
        />
        <div className="lg:mr-28 bg-white rounded-lg shadow-lg">
            <DayPicker 
                mode="single"
                selected={date}
                onSelect={setDate}
            />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
