import { Link, LinkProps } from '@mui/material'
import { FC } from 'react'

const MuiLink: FC<LinkProps> = (props: LinkProps) => {
  return (
    <>
      <Link {...props}></Link>
    </>
  )
}

export default MuiLink
