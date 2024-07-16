import React, { useEffect, useState } from 'react';
import LoginForm from '../components/auth/LoginForm';
import Main from '../components/Main';


const WelcomePage = () => {
  
  console.log('WelcomePage 실행!');


  // React는 상태 변경이 되지않으면 화면 렌더링이 일어나지 않음
  // -> 로그인시 화면 전환이 안되는 이유

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('userData') !== null);

  // 로그인 여부 (localStorage 뒤져봐)
  // useEffect는 렌더링 될 때 최초 1회 실행이지만 [isLoggedIn]이 바뀌면
  // 또 실행됨
  useEffect(() => {
    const userData = localStorage.getItem('userData');

    if (userData) setIsLoggedIn(true);
    else setIsLoggedIn(false);
  }, [isLoggedIn]);

  return (
    <>
      {!isLoggedIn  && <LoginForm />}
      {isLoggedIn  && <Main />}
    </>
  );
}

export default WelcomePage