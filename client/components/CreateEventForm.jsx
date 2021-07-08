import React, { useRecoilState } from 'react';
import { useRecoilValue } from 'recoil';
import atoms from '../atoms';

const CreateEventForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const eventName = document.getElementById('eventName').value;
    const startDay = document.getElementById('startDay').value;
    const endDay = document.getElementById('endDay').value;
    const taskName = document.getElementById('taskName').value;
    const [tasks, setTasks] = useRecoilState(atoms.userTasks);
    const user = useRecoilValue(atoms.userInfo);
    const { username } = user;

    fetch('/newEvent', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/JSON' },
      body: JSON.stringify(eventName, startDay, endDay, taskName, username),
    })
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((err) => {
        console.log('create event err:', err);
      });
  };

  return (
    <div>
      <h2>Create Event</h2>
      <form>
        Event name:
        <input
          type="text"
          name="eventName"
          id="eventName"
          onChange={handleChange}
        />
        <br />

        Start day:
        <input type="date" id="startDay" />
        <br />

        End day:
        <input type="date" id="endDay" />
        <br />

        Task Name:
        <input type="text" id="taskName" />
        <br />

        <button onClick={handleSubmit}>Submit</button>

      </form>
    </div>
  );
};

export default CreateEventForm;
