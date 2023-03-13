import styled, { css } from 'styled-components'
import * as V from '@assets/styled/variable'
export const FormInputContainer = styled.div`
  margin-left: 8%;
  label {
    margin-top: 8px;
    margin-bottom: 8px;
    display: block;
  }
  input {
    height: 24px;
    width: 85.5%;
  }
`
export const FormButtonContainer = styled.div`
  margin-left: 8%;
  margin-top: 16px;
  width: 84%;
  height: 36px;
`
export const CalendarTable = styled.table`
  width: 90%;
  margin-left: 5%;
  height: 60%;
  table-layout: fixed;
  border-collapse: collapse;

  tr th {
    /* color: white; */
    padding: 2%;
  }
`

const blueColor = css`
  color: #89cff0;
`
const redColor = css`
  color: #e30b5c;
`

export const SatTh = styled.th`
  ${blueColor};
`
export const SunTh = styled.th`
  ${redColor};
`

const sevenDaySize = css`
  width: calc(100% / 7);
`

const hlightColor = css`
  /* color: black; */
  color: #00ff7f;
`
const hlightBgColor = css`
  background-color: #00ff7f;
`
interface TdProps {
  isToday: boolean
  dayOfWeekKor?: string
}

export const CalendarWeekDayTd = styled.td<TdProps>`
  width: ${sevenDaySize};
  box-sizing: border-box;

  ${({ isToday }) => {
    return isToday ? `${hlightColor}` : undefined
  }}
`
export const CalendarWeekEndTd = styled.td<TdProps>`
  width: ${sevenDaySize};
  box-sizing: border-box;

  ${({ dayOfWeekKor, isToday }) => {
    return isToday
      ? `${hlightColor}`
      : dayOfWeekKor === '일'
      ? `${redColor}`
      : `${blueColor}`
  }}
`
export const CalendarEmptyTd = styled.td`
  width: ${sevenDaySize};
  box-sizing: border-box;
`

interface MyDivProps {
  isToday: boolean
}

export const CalendarWeekDay = styled.div<MyDivProps>`
  /* height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  /* ${({ isToday }) => {
    return isToday
      ? `${hlightBgColor}; border-radius: 50%;width: 4vmin;
      height: 4vmin;
      margin: auto;`
      : undefined
  }} */
`
export const CalendarWeekEnd = styled.div<MyDivProps>`
  /* height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  /* ${({ isToday }) => {
    return isToday
      ? `${hlightBgColor}; border-radius: 50%; width: 4vmin;
      height: 4vmin;
      margin: auto;`
      : undefined
  }} */
`
