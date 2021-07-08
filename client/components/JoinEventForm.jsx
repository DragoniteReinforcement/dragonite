import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import atoms from '../atoms';

const JoinEventForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const eventID = document.getElementById('eventID').value;
    const user = useRecoilValue(atoms.userInfo);
    const [tasks, setTasks] = useRecoilState(atom.userTasks);
    const [event, setEvent] = useRecoilState(atom.events);
    const { username } = user;
    // writes tasks to userTasks Atom
    fetch('/userJoinsEvent', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventID, username),
    })
      .then((response) => response.json())
      .then((arrOfTasks) => setTasks(arrOfTasks))
      .catch((err) => console.log('join event err ', err));

    // writes event info to event Atom
    fetch('/getUserEventInfo', {
      method: 'GET', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(username),
    })
      .then((response) => response.json())
      .then((eventInfo) => setEvent(eventInfo))
      .catch((err) => console.log('join event err ', err));
  };
  return (
    <div className="joinEventDiv">
      <h2>Join Event</h2>
      <form>
        <input type="text" name="joinEventId" placeholder="Event ID" id="eventID" />
        <button type="submit" value="Join" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default JoinEventForm;
