import React, { useState, useEffect } from "react";

const Countdown = () => {
  const targetDate = new Date("2024/09/29 21:00:00");
  const [days, setDays] = useState(0);
  const [hrs, setHrs] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      timeToLaunch();
    }, 1000);

    return () => clearInterval(countdownTimer);
  }, []);

  const timeToLaunch = () => {
    const currentDate = new Date();
    const diff = Math.floor((targetDate - currentDate) / 1000);

    const daysRemaining = Math.floor(diff / (24 * 60 * 60));
    let secondsRemaining = diff - daysRemaining * 24 * 60 * 60;

    const hoursRemaining = Math.floor(secondsRemaining / (60 * 60));
    secondsRemaining = secondsRemaining - hoursRemaining * 60 * 60;

    const minutesRemaining = Math.floor(secondsRemaining / 60);
    secondsRemaining = secondsRemaining - minutesRemaining * 60;

    setDays(daysRemaining);
    setHrs(hoursRemaining);
    setMin(minutesRemaining);
    setSec(secondsRemaining);
  };

  return (
    <div className="mt-3 py-0 py-lg-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-3 col-sm-6 my-1 my-lg-0">
            <div id="days" className="text-center">
              <div className="number ">{days < 10 ? `0${days}` : days}</div>
              <div className="label">Giorni</div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 my-1 my-lg-0">
            <div id="hours" className="text-center">
              <div className="number">{hrs < 10 ? `0${hrs}` : hrs}</div>
              <div className="label">Ore</div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 my-1 my-lg-0">
            <div id="minutes" className="text-center">
              <div className="number">{min < 10 ? `0${min}` : min}</div>
              <div className="label">Minuti</div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 my-1 my-lg-0">
            <div id="seconds" className="text-center">
              <div className="last-number">{sec < 10 ? `0${sec}` : sec}</div>
              <div className="label">Secondi</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
