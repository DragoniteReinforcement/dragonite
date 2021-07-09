import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import atoms from '../atoms';
import Day from './Day.jsx';

const DaysDisplay = () => {
  const [tasks, setTasks] = useRecoilState(atoms.userTasks);
  const dates = useRecoilValue(atoms.events)
  const userInfo = useRecoilValue(atoms.userInfo);

  useEffect(() => {
    fetch('/getUserTasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: userInfo.username }),
    })
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.log('ERROR: ', err));
  },[userInfo]);



  console.log(tasks)
  
  let daysList = [];
  for (let i = 0; i < tasks.length; i += 1) {
    console.log(tasks[i])
    daysList.push(<Day
      key={i}
      day={i + 1}
      task={tasks[i]?.task_name}
    />);
  }
  return (
    <div>
      <h1>Days:</h1>
      <div className="daysDisplayDiv"> {daysList} </div>
    </div>
  );
};
export default DaysDisplay;
