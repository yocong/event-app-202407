
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import RootLayout from '../layout/RootLayout';
import ErrorPage from '../pages/ErrorPage';
import Events from '../pages/Events';
import EventDetail, 
  { loader as eventDetailLoader, action as deleteAction } 
from '../pages/EventDetail';
import EventLayout from '../layout/EventLayout';
import NewEvent from '../pages/NewEvent';
import EditPage from '../pages/EditPage';
import { action as manipulateAction } 
  from '../components/EventForm';
import WelcomePage from '../pages/WelcomePage';
import SignUpPage from '../pages/SignUpPage';
import { loginAction } from '../components/auth/LoginForm';
import { authCheckLoader, userDataLoader } from './auth';
import { logoutAction } from '../pages/Logout';
import EventProvider from '../components/context/EventProvider';


// 라우터 설정
const eventsRouter = [
  { 
    index: true, 
    element: <Events />,
    // loader: eventListLoader, // loader는 최초 1번만 실행 (무한스크롤시 사용못함)
  },
  { 
    path: ':eventId', 
    loader: eventDetailLoader,
    // element: <EventDetail />,
    // loader가 children에게 직접적으로 연결되지 않아
    // EventDetail에서 loader를 사용하지 못하고 있음.
    id: 'event-detail', // loader에게 ID 부여
    children: [
      { 
        index: true, 
        element: <EventDetail />,
        action: deleteAction
       },
      { 
        path: 'edit',
        element: <EditPage />,
        action: manipulateAction 
      },
    ]
  },
  { 
    path: 'new', 
    element: <NewEvent />,
    // 서버에 갱신데이터요청을 보낼 때 트리거
    action: manipulateAction
  },
];

const homeRouter = [

  {
    index: true,
    element: <WelcomePage />,
    action: loginAction
  }, // 웰컴 페이지 (로그인화면 or 로그인완료화면)
  {
    path: 'sign-up',
    element: <SignUpPage />
  }, // 회원가입 페이지
  {
    path: 'logout',
    action: logoutAction
  }
];

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: userDataLoader,
    id: 'user-data', // 꼭대기에 걸었으므로 id를 통해 children까지 (homeRouter, eventsRouter) loader를 사용가능
    children: [
      { 
        path: '/', 
        element: <Home />,
        children: homeRouter
      },
      {
        path: 'events',
        element: ( // EventLayout와 eventsRouter(자식들)은 EventProvider에 있는 값들을 사용가능
          <EventProvider>
            <EventLayout /> 
          </EventProvider>
        ),
        loader: authCheckLoader, // eventsRouter에 대해 로그인 조건을 걺
        children: eventsRouter
      },
    ]
  },
]);
