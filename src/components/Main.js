import React from 'react'
import { Form, useNavigate, useRouteLoaderData } from 'react-router-dom';
import { AUTH_URL } from '../config/host-config';

const Main = () => {

  const navigate = useNavigate();
  
  const userData = useRouteLoaderData('user-data');

  // 등급업 핸들러
  const promoteHandler = async (e) => {

    const response = await fetch(`${AUTH_URL}/promote`, {
      method: 'PUT',
      headers: { 'Authorization': 'Bearer ' + userData.token }
    });

    if (!response.ok) {
      alert('올바르지 않은 요청입니다.');
      return;
    }

    const responseData = await response.json();

    // 등급업 후에 토큰 재발급
    localStorage.setItem('userData', JSON.stringify(responseData));

    alert('프리미엄 회원이 되신 것을 환영합니다.');
    navigate('/');
  };
  return (
    <>
      <h2>{userData.email}님 환영합니다.</h2>
      <h3>현재 권한: [ {userData.role} ]</h3>


      {
        userData.role === 'COMMON' &&
        <button
          style={{
            background: 'orangered',
            color: 'white'
          }}
          onClick={promoteHandler}
        >
          Go To Premium 
        </button>
      }
       
      {/* 다른 라우트의 액션을 트리거하는 방법 */}
      <Form action='/logout' method='POST'>
        <button>Logout</button>
      </Form>
    </>
  )
}

export default Main