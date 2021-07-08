import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import atoms from '../atoms';

const Login = () => {
  const history = useHistory();
  const [loginSuccess, setLogin] = useState(0);
  const [user, setUser] = useRecoilState(atoms.userInfo);

  useEffect(() => {
    if (loginSuccess) {
      history.push('/app');
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = document.getElementById('loginUsername').value;
    const passData = document.getElementById('loginPassword').value;

    fetch('/authenticate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: userData, password: passData }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLogin(data.id);
        setUser({ username: userData, userId: data.id });
      })
      .catch((err) => console.log('login err', err));
  };

  return (

    <div className="loginForm">
      <form>
        <label>
          Username:
          <input id="loginUsername" label="Username" />
        </label>
        <label>
          Password:
          <input id="loginPassword" type="password" label="Password" />
        </label>
        <button onClick={handleSubmit}> Log In </button>
      </form>
      <Link to="/signup">
        <button> Sign Up </button>
      </Link>
    </div>
  );
};

export default Login;
