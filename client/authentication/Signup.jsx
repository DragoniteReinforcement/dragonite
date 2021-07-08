import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';
import atoms from '../atoms';

const Signup = () => {
  const history = useHistory();
  const [signupSuccess, setSignup] = useState(0);
  const [user, setUser] = useRecoilState(atoms.userInfo);

  useEffect(() => {
    console.log(signupSuccess);
    if (signupSuccess > 0) {
      history.push('/app');
    }
  });
  // Handle sign up request
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = document.getElementById('signupUsername').value;
    const passData = document.getElementById('signupPassword').value;

    fetch('/addNewUser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: userData, password: passData }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSignup(data);
        setUser({ username: userData, userId: data });
      })
      .catch((err) => console.log('signup err', err));
  };

  return (
    <div className="signupForm">
      <form>
        <label>
          Username:
          <input id="signupUsername" label="Username" />
        </label>
        <label>
          Password:
          <input id="signupPassword" type="password" label="Password" />
        </label>
        <button onClick={handleSubmit}> Sign Up </button>
      </form>
    </div>
  );
};

export default Signup;
