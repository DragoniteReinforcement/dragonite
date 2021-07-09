import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import atoms from '../atoms';
// import ScoreItem from '../ScoreItem.jsx';

const MembersProgress = () => (
  // const [scores, setScores] = useRecoilState(atoms.scores);
  // const userInfo = useRecoilValue(atoms.userInfo);
  // // fetch request to /getLeaderboard which will return the scores object containing usernames and current scores
  // useEffect(() => {
  //   fetch('/getLeaderboard', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ username: userInfo.username }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setScores(data))
  //     .catch((err) => console.log('ERROR: ', err));
  // }, [userInfo]);
  // // create an array to hold each ScoreItem (containing username and score)
  // const scoresList = [];
  // for (const username in scores) {
  //   scoresList.push(<ScoreItem username={username} score={scores[username]} />);
  // }
  // return (
  //   <div className="progressDiv">
  //     <h2>Members' Progress</h2>
  //     <div>{scoresList}</div>
  //   </div>
  // );
  <div className="progressDiv">
    <h2>Members' Progress</h2>
  </div>
);
export default MembersProgress;
