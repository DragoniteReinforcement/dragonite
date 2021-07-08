import React from 'react';

const JoinEventForm = () => {
  const handleSubmit = () => {

  };
  return (
    <div className="joinEventDiv">
      <h2>Join Event</h2>
      <form>
        <input type="text" name="joinEventId" placeholder="Event ID" />
        <input type="submit" value="Join" />
      </form>
    </div>
  );
};

export default JoinEventForm;
