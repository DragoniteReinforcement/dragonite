import React, { useState } from 'react';

const RulesDisplay = () => {
  const [rules, setRules] = useState('rules');

  // useEffect(() => {
  //   fetch('/getChallenge')
  //     .then((res) => res.json())
  //     .then((data) => setDays( data
  //
  //     ))
  //     .catch((err) => console.log('ERROR: ', err));
  // });

  return (
    <div>
      <h1>Rules: </h1>
      <div className="rulesDisplayDiv">

        {rules}
      </div>
    </div>
  );
};

export default RulesDisplay;
