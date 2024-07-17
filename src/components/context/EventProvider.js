import React, { useState } from 'react'
import EventContext from './event-context'

// 상태관리할 컨텍스트의 실제 값을 넣어줌
// value에 있는 실제 값들은 useContext로 어디든 갖다 쓸 수 있음
const EventProvider = ({ children }) => {

  const [totalEventCount, setTotalEventCount] = useState(0);

  return (
    <EventContext.Provider
      value={{
      totalEventCount: totalEventCount,
      changeTotalEventCount: (count) => setTotalEventCount(count)
    }}
    >
      {children}
    </EventContext.Provider>
  )
} 

export default EventProvider