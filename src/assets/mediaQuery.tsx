import { useMediaQuery } from 'react-responsive'

export const Desktop = ({
  children,
}: {
  children: JSX.Element | null
}): JSX.Element | null => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
export const Tablet = ({
  children,
}: {
  children: JSX.Element | null
}): JSX.Element | null => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
export const Mobile = ({
  children,
}: {
  children: JSX.Element | null
}): JSX.Element | null => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
export const Default = ({
  children,
}: {
  children: JSX.Element | null
}): JSX.Element | null => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}
