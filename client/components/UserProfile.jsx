import React, { useState } from 'react';

const UserProfile = (props) => {
  const [points, setPoints] = useState(0);

  return (
    <div className="userProfileDiv">
      <h1>Welcome</h1>
      <h2>
        You have
        {' '}
        {points}
        {' '}
        points
      </h2>
    </div>
  );
};

export default UserProfile;
