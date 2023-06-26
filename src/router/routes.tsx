import React from 'react'
import type { RouteObject } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import AppLayout from '../layout'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]

export default routes
