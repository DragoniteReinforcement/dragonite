import React, { useState } from 'react';

const CreateEventForm = () => {
  const initialEventState = {
    name: '',
    startDay: '2021-07-04',
    endDay: '2021-07-10',
    days: 0,
    tasks: [],
  };

  const [event, setEvent] = useState(initialEventState);

  // newEvent

  let newEventName = '';
  const createEvent = () => {
    // does nothing if input field is empty
    if (!document.getElementById('addEventName').value) {
      return;
    }

    fetch('/api/newEvent', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/JSON' },
      body: JSON.stringify({ item: newEventName }),
    }).catch((err) => {
      console.log('error:', err);
    });
  };

  const handleChange = (e) => {
    newEventName = e.target.value;
  };

  return (
    <div>
      <h2>Create Event</h2>
      <form>
        Event name:
        <input
          type="text"
          name="eventName"
          id="addEventName"
          value={event.name}
          onChange={handleChange}
        />
        <br />

        Start day:
        <input />
        <br />

        End day:
        <input />
        <br />

        Task Name:
        <input />
        <br />

        <button onClick={createEvent}>Submit</button>

      </form>
    </div>
  );
};

export default CreateEventForm;
