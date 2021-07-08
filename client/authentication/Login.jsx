import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import atoms from '../atoms';

const Login = () => (
  <div className="loginForm">
    <form>
      <label>
        Username:
        <input />
      </label>
      <label>
        Password:
        <input />
      </label>
      <button> Log In </button>
    </form>
    <button> Sign Up </button>
  </div>
);

export default Login;
