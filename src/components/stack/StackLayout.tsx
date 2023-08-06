import React from 'react'
import { StackStyled } from './StackLayout.style'

interface StackLayoutProps{
    children:React.ReactNode;
}
export const StackLayout = ({children}:StackLayoutProps) => {
  return (
    <StackStyled >
{children}

    </StackStyled>
  )
} 