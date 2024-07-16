import React from 'react'
import { useRouteLoaderData } from 'react-router-dom';

const Main = () => {
  
  const userData = useRouteLoaderData('user-data');
  console.log(userData);
  return (
    <>
      <h2>{userData.email}님 환영합니다.</h2>
      <h3>현재 권한: [ {userData.role} ]</h3>
      <button>Logout</button>
    </>
  )
}

export default Main