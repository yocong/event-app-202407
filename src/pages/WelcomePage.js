import React, { useEffect, useState } from 'react';
import LoginForm from '../components/auth/LoginForm';
import Main from '../components/Main';
import { useRouteLoaderData } from 'react-router-dom';

const WelcomePage = () => {
  
  // console.log('WelcomePage 실행!');

  // 상위 route 페이지의 loader 데이터 불러오기
  const userData = useRouteLoaderData('user-data'); 
  // console.log(userData);

  return (
    <>
      {!userData && <LoginForm />}
      {userData && <Main />}
    </>
  );
}

export default WelcomePage