
// 로그인한 유저의 정보 가져오기
export const getUserData = () => {
  const userDataJson = localStorage.getItem('userData');
  const userData = JSON.parse(userDataJson); // json -> js객체로 변경

  return userData;
};

// 인증 토큰만 가져오기
export const getUserToken = () => {
  return getUserData().token;
};

// 로그인 회원정보를 불러오는 loader
export const userDataLoader = () => {
  console.log('userDataLoader call');
  return getUserData();
};