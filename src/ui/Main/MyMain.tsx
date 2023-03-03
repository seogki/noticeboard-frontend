import dayjs from 'dayjs'
import React, { useState } from 'react'
import './MyMain.scoped.scss'
function MyMain() {
  const today: string = dayjs().format('YYYY년 MM월 DD일')
  const days: number = dayjs().daysInMonth()
  const list: number[] = []
  const splitList: number[][] = []
  const init = () => {
    for (let i = 0; i < days; i++) {
      list.push(i + 1)
    }
    for (let i = 0; i < list.length; i += 5) {
      splitList.push(list.slice(i, i + 5))
    }
  }
  init()
  return (
    <main>
      <h3 className="tac">{today}</h3>
      <table className="calendar">
        <tbody>
          {splitList.map((list) => (
            <>
              <tr className="day">
                {list.map((data) => (
                  <>
                    <td className="tac">{data}</td>
                  </>
                ))}
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default MyMain
