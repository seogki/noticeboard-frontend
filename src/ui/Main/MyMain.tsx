import dayjs from 'dayjs'
import React, { useState } from 'react'
import './MyMain.scoped.scss'
function MyMain() {
  const today: string = dayjs().format('YYYY년 MM월 DD일')
  const days: number = dayjs().daysInMonth()

  return (
    <main className="layout-main">
      <h3 className="tac">{today}</h3>
      <section className="calendar">
        {(() => {
          let divs = []
          for (let i = 0; i < days; i++) {
            divs.push(
              <div className={'flex-center day day-' + (i + 1)}>{i}</div>
            )
          }
          return divs
        })()}
      </section>
    </main>
  )
}

export default MyMain
