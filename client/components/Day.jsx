import React, { useEffect, useState } from 'react';

const Day = (props) => (
  // const [completed, setCompleted] = useState(false);

  // const handleClick = (e) => {

  // };

  <div className="dayBox">
    <p>Day: {props.day}</p>
    <p>Date: {props.date}</p>
    <p>Task: {props.task}</p>
    <form>
      <label>
        Completed:
        <input name="completed" type="checkbox" onClick={handleClick} />
      </label>
    </form>
  </div>
);
export default Day;
