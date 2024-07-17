import { createContext } from "react";

// 컨텍스트 생성: 매개변수에 전역상태 관리할 객체의 기본값 (껍데기)
// 컨텍스트 = 인터페이스
const EventContext = createContext({
  totalEventCount: 0,
  changeTotalEventCount: (count) => {}
});

export default EventContext;