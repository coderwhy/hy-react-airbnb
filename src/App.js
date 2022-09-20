import React, { memo } from 'react'
import { useRoutes } from "react-router-dom"
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import { useScrollTop } from './hooks'
import routes from './router'

const App = memo((props) => {
  useScrollTop() // 回到顶部

  return (
    <div>
      <AppHeader/>
      <div>{useRoutes(routes)}</div>
      <AppFooter/>
    </div>
  )
})

export default App
