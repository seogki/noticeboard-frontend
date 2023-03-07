import styled from 'styled-components'
import * as V from '@assets/styled/variable'

export const FormInputContainer = styled.form`
  background-color: ${V.G_CONTAINER_BG};

  @media (min-width: ${V.G_BREAKPOINT_MOBILE}) and (max-width: calc(${V.G_BREAKPOINT_TABLET}-1px)) {
    /* margin-bottom: 40%; */
    max-width: 400px;
  }

  @media screen and (min-width: ${V.G_BREAKPOINT_DESKTOP}) {
    margin-bottom: 10%;
    max-width: 600px;
  }
  width: 90%;
  height: 45%;
  margin: 0 auto 40% auto;
  border-radius: ${V.G_BORDER_RADIUS};
  position: relative;

  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`

export const CalendarTableContainer = styled.div`
  width: 100%;
  height: 95%;
`
