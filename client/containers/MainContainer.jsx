import React from 'react';
import EventsContainer from './EventsContainer.jsx';
import DaysContainer from './DaysContainer.jsx';
import RulesPrizeContainer from './RulesPrizeContainer.jsx';
import UserProfileContainer from './UserProfileContainer.jsx';
import ProgressContainer from './ProgressContainer.jsx';

const MainContainer = () => (
  <div className="mainContainerDiv">
    <div className="leftDiv">
      <div id="userProfile">
        <UserProfileContainer />
      </div>
      <div id="progress">
        <ProgressContainer />
      </div>
    </div>

    <div className="rightDiv">
      <EventsContainer />
      <DaysContainer />
      <br />
      <RulesPrizeContainer />
    </div>
  </div>
);
export default MainContainer;
