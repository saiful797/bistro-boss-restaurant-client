import { useState, useEffect } from 'react';
import moment from 'moment';

const DateTime = () => {
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment());
    }, 1000); // Update time every second

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div className='flex justify-evenly'>
      <p>Date: {currentTime.format('YYYY-MM-DD')}</p>
      <p>Time: {currentTime.format('HH:mm:ss A')}</p>
    </div>
  );
}

export default DateTime;