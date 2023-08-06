import React from 'react'
import {Image} from '../Image/Image'
import LOGO from '../../assets/images/logo-weather.svg'
import { BoxCenter } from '../Box/Box.style'
import { BoxAuth, StackAuth } from './CardAuth.style'
import { TextAuth } from '../../features/auth/TexAuth/TextAuth'
import { TextLogin } from '../../features/auth/TexAuth/TextLogin'

interface CardAuthProps{
    children:React.ReactNode;
}
export const CardAuth = ({children}:CardAuthProps) => {
  return (
    <BoxCenter height={'100vh'} sx={{flexDirection:'column'}} >
    <BoxAuth>
    <StackAuth>
        <Image alt='' height={'120px'} src={LOGO} width={'120px'}  />
        {children}

    </StackAuth>
    <TextLogin />
    <TextAuth />
    </BoxAuth>
    </BoxCenter>
  )
}

