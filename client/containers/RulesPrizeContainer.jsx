/* eslint-disable arrow-body-style */
import React from 'react';
import RulesDisplay from '../components/RulesDisplay.jsx';
import Prize from '../components/Prize.jsx';

const RulesPrizeContainer = () => {
  return (
    <div className="rulesPriceContainerDiv">
      <RulesDisplay />
      <Prize />
    </div>
  );
};

export default RulesPrizeContainer;
