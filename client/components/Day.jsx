import React, { useEffect, useState } from 'react';

const Day = (props) => (

  <div className="dayBox">
    <p>Day: {props.day}</p>
    <p>Task: {props.task}</p>
    <form>
      <label>
        Completed:
        <input name="completed" type="checkbox"/>
      </label>
    </form>
  </div>
);
export default Day;
