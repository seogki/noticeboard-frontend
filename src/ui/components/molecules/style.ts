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

export const CalendarLayoutContainer = styled.div`
  width: 100%;
  height: 100%;
`
export const CalendarTable = styled.table`
  width: 90%;
  margin-left: 5%;
  height: 60%;
  table-layout: fixed;
  border-collapse: collapse;
`

const sevenDaySize = css`
  width: calc(100% / 7);
`
interface TdProps {
  today: boolean
}

export const CalendarWeekDayTd = styled.td<TdProps>`
  width: ${sevenDaySize};
  box-sizing: border-box;
  border: 1px solid #eee;
  ${({ today }) => {
    return today ? `background-color : rgba(255,255,255,0.5)` : null
  }}
`
export const CalendarWeekEndTd = styled.td<TdProps>`
  width: ${sevenDaySize};
  box-sizing: border-box;
  border: 1px solid #eee;
  ${({ today }) => {
    return today
      ? `background-color : rgba(255,255,255,0.5); color: white;`
      : `background-color: rgba(253,231,21,0.8); color: black`
  }}
`
export const CalendarEmptyTd = styled.td`
  width: ${sevenDaySize};
  box-sizing: border-box;
  border: 1px solid #eee;
`

export const CalendarWeekDay = styled.div`
  height: 92%;
  margin: 8% 0 0 8%;
  font-size: 0.7rem;
  font-weight: bold;
  color: white;
`
export const CalendarWeekEnd = styled.div`
  height: 92%;
  margin: 8% 0 0 8%;
  font-size: 0.7rem;
  font-weight: bold;
  /* color: white; */
  /* color: ${V.G_SECONDARY_COLOR}; */
`
