import React from 'react'
import { Outlet } from 'react-router-dom'
import { StackLayout } from '../../stack/StackLayout'
import { CardAuth } from '../../Card/CardAuth'

export const AuthLayout = () => {
  return (
    <StackLayout >
    <CardAuth >
    <Outlet />
    </CardAuth>
    </StackLayout>
  )
}

