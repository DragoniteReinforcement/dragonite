import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import atoms from '../atoms';
import Day from './Day.jsx';

const DaysDisplay = () => {
  const [days, setDays] = useRecoilState(atoms.events);
  const userInfo = useRecoilValue(atoms.userInfo);

  useEffect(() => {
    fetch('/getUserTasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: userInfo.username }),
    })
      .then((res) => res.json())
      .then((data) => setDays(data))
      .catch((err) => console.log('ERROR: ', err));
  }, [userInfo]);

  console.log(days);

  // const getDays = useRecoilValue(atoms.events);

  // const convertToDays = (start, end) => {
  //   const daysBetween = ((end - start) / (60 * 60 * 24 * 1000)) + 1;
  //   return daysBetween;
  // };

  // const startDay = new Date(getDays.start_date);
  // const endDay = new Date(getDays.end_date);
  // const numDays = convertToDays(startDay, endDay);

  // const daysList = [];
  // for (let i = 0; i < numDays; i += 1) {
  //   daysList.push(<Day
  //     key={i}
  //     day={i + 1}
  //     date={`${startDay.getMonth() + 1}/${startDay.getDate() + i}/${startDay.getFullYear()}`}
  //     task={days[0]?.task_name}
  //   />);
  // }
  return (
    <div>
      <h1>Days:</h1>
      <div className="daysDisplayDiv" />
    </div>
  );
};
export default DaysDisplay;
