import { useScrollPosition } from '@/hooks/useScrollPosition'
import { ThemeProvider } from "styled-components"
import classNames from 'classnames'
import React, { memo, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'
import { HeaderWrapper, SearchAreaPlaceholder } from './style'

const AppHeader = memo((props) => {
  const [isSearch, setIsSearch] = useState(false)

  /** redux中获取数据 */
  const headerConfig = useSelector((state) => state.main.headerConfig)
  const { isFixed, isHome } = headerConfig

  /** 其他hooks的逻辑 */
  const { scrollY } = useScrollPosition()

  // Keep route/scroll transitions in effects so rendering stays pure.
  useEffect(() => {
    setIsSearch(isHome && scrollY === 0)
  }, [isHome, scrollY])

  const prevY = useRef(scrollY)
  useEffect(() => {
    if (!isSearch) {
      prevY.current = scrollY
      return
    }

    if (Math.abs(prevY.current - scrollY) > 30) {
      setIsSearch(false)
    }
  }, [isSearch, scrollY])

  const isAlpha = isHome && isSearch && scrollY === 0

  /** 事件处理逻辑 */
  function searchBarClickHandle() {
    setIsSearch(true)
  }

  return (
    <ThemeProvider theme={{isAlpha: isAlpha}}>
      <HeaderWrapper className={classNames({fixed: isFixed})}>
        <div className='content'>
          <div className='top'>
            <HeaderLeft/>
            <HeaderCenter isSearch={isSearch} searchBarClick={searchBarClickHandle}/>
            <HeaderRight/>
          </div>
          <SearchAreaPlaceholder isSearch={isSearch}/>
        </div>
        { isSearch && !isAlpha && <div className='cover' onClick={() => setIsSearch(false)}></div> }
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader
