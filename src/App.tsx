import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router/routes'

export default function App() {
  // TODO 权限后路由逻辑
  console.log(routes)

  const element = useRoutes(routes)

  return (
    <>
      {element}
    </>
  )
}
