import React, { useState, useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import CreateEventForm from './CreateEventForm.jsx';
import JoinEventForm from './JoinEventForm.jsx';
import atoms from '../atoms';

const EventDisplay = () => {
  const [event, setEvent] = useRecoilState(atoms.events);
  const userInfo = useRecoilValue(atoms.userInfo);
  // get event information for the user
  // let body = '';
  // if (userInfo.username !== '') body = JSON.stringify(userInfo.username);
  useEffect(() => {
    console.log('____________', userInfo.username);
    console.log('userinfo', userInfo);
    fetch('/getUserEventInfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: userInfo.username }),
    })
      .then((response) => response.json())
      .then((data) => setEvent(data));
  }, [userInfo]);

  console.log(event);

  //   fetch('/api/events')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setEvent(data[0]);
  //     }).catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const convertToDays = (start, end) => {
    const daysBetween = (end - start) / (60 * 60 * 24 * 1000) + 1;
    return daysBetween;
  };

  const startDay = new Date(event.eventInfo?.start_date);
  const endDay = new Date(event.eventInfo?.end_date);
  const days = convertToDays(startDay, endDay);

  /* conditional that displays event if it exists, or form if it does not exist */
  return (
    <div>
      <h1>Event:</h1>
      <div className="eventDisplayDiv">
        {event.eventInfo?.name?.length > 0 ? (
          <div>
            Event:
            {event.eventInfo?.name}
            <br />
            You start on:
            {startDay.toDateString()}
            <br />
            You end on:
            {endDay.toDateString()}
            <br />
            You have {days} days
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
