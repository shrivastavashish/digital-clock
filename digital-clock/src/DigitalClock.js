import React, { useState, useEffect } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  useEffect(() => {
    function formatTime(time) {
      return time < 10 ? '0' + time : time;
    }

    document.getElementById('hour').innerText = formatTime(time.getHours());
    document.getElementById('minutes').innerText = formatTime(time.getMinutes());
    document.getElementById('seconds').innerText = formatTime(time.getSeconds());
    document.getElementById('ampm').innerText = time.getHours() >= 12 ? 'PM' : 'AM';
  }, [time]);

  return null; 
}

export default DigitalClock;
