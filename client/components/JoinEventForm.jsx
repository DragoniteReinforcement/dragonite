import React, { useState, useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { Link, useHistory, BrowserRouter, Route } from 'react-router-dom';
import atoms from '../atoms';

const JoinEventForm = () => {
  const [joinedEvent, setJoinedEvent] = useState(false);
  // const history = useHistory();

  const user = useRecoilValue(atoms.userInfo);
  const { username } = user;
  const [tasks, setTasks] = useRecoilState(atoms.userTasks);
  const [event, setEvent] = useRecoilState(atoms.events);

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventID = document.getElementById('eventID').value;

    // // // writes tasks to userTasks Atom
    fetch('/userJoinsEvent', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ eventId: eventID, username }),
    })
      .then((response) => response.json())
      .then((arrOfTasks) => setTasks(arrOfTasks))
      .catch((err) => console.log('join event err ', err));

    // // writes event info to event Atom
    fetch('/getUserEventInfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    })
      .then((response) => response.json())
      .then((eventInfo) => setEvent(eventInfo))
      .catch((err) => console.log('join event err ', err));

    // setJoinedEvent(true)
  };

  // useEffect(() => {
  //   if (joinedEvent) {
  //     history.push('/app');
  //   }
  // }, [tasks, event]);

  return (
    <div className="joinEventDiv">
      <h2>Join Event</h2>
      <form>
        <input type="text" name="joinEventId" placeholder="Event ID" id="eventID" />
        <button type="submit" value="Join">
          Join The Event
        </button>
      </form>
    </div>
  );
};

export default JoinEventForm;
