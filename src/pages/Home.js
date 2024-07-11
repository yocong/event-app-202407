import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
  console.log('home!');

  // Outlet : Home의 children인 homeRouter들을 모두 Outlet링크로 가져오고
  //          위에 h1태그는 homeRouter에 모두 적용
  return (
    <>
      <h1>My Home Page</h1>
      <Outlet />
    </>
  );
};

export default Home;
