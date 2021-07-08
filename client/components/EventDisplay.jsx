import React, { useState, useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import CreateEventForm from './CreateEventForm.jsx';
import JoinEventForm from './JoinEventForm.jsx';
import atoms from '../atoms';

const EventDisplay = (props) => {
  const [event, setEvent] = useRecoilState(atoms.events);
  const userInfo = useRecoilValue(atoms.userInfo);
  // get event information for the user
  useEffect(() => {
    fetch('/getUserEventInfo', {
      method: 'GET', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo.username),
    })
      .then((response) => response.json())
      .then((data) => setEvent(data));
  }, []);

  //   fetch('/api/events')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setEvent(data[0]);
  //     }).catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const convertToDays = (start, end) => {
    const daysBetween = ((end - start) / (60 * 60 * 24 * 1000)) + 1;
    return daysBetween;
  };

  const startDay = new Date(event.start_date);
  const endDay = new Date(event.end_date);
  const days = convertToDays(startDay, endDay);

  /* conditional that displays event if it exists, or form if it does not exist */
  return (
    <div>
      <h1>Event:</h1>
      <div className="eventDisplayDiv">
        {event.name?.length > 0 ? (
          <div>
            Event:
            {event?.name}
            <br />
            You start on:
            {startDay.toDateString()}
            <br />
            You end on:
            {endDay.toDateString()}
            <br />
            You have
            {' '}
            {days}
            {' '}
            days
            <br />

          </div>
        ) : (
          <div>
            <CreateEventForm />
            <p>or</p>
            <JoinEventForm />
          </div>
        )}

      </div>
    </div>
  );
};

export default EventDisplay;
