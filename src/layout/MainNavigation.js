import React from 'react';
import { NavLink, useLoaderData, useRouteLoaderData } from 'react-router-dom';
import styles from './MainNavigation.module.scss';

const MainNavigation = () => {

  // 로그인 시에만 로그아웃 버튼 뜨게함
  // route-config에서 꼭대기에 id걸어놓은것을 통해 loader를 useRouteLoaderData로 불러오면
  // 로그인한 회원의 정보 모든 페이지에서 활용가능
  const userData = useRouteLoaderData('user-data');
  const data = useLoaderData();

  const activeFn = ({ isActive }) => {
    // NavLink 컴포넌트에 className프롭스에 함수를 전달하면
    // 첫번째 파라미터에 어떤 객체정보를 준다.
    // console.log(aa);
    return isActive ? styles.active : undefined;
  };

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink to='' className={activeFn} end>Home</NavLink>
          </li>
          <li>
            <NavLink to='events' className={activeFn}>Events</NavLink>
          </li>

          {
            userData && (<li>
              <button style={{width: '100%'}}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation