import IconSearchBar from '@/assets/svg/icon-search-bar'
import React, { memo, useRef, useState } from 'react'
import { CSSTransition } from "react-transition-group"
import { CenterWrapper } from './style'
import searchTitles from "@/assets/data/search_titles.json"
import SearchTabs from './c-cpns/search-tabs'
import SearchSections from './c-cpns/search-sections'

const HeaderCenter = memo((props) => {
  const { isSearch, searchBarClick } = props
  const [currentTab, setCurrentTab] = useState(0)
  const barRef = useRef(null)
  const detailRef = useRef(null)

  /** 过滤数据 */
  const titles = searchTitles.map(item => item.title)

  /** 事件处理 */
  function tabClickHandle(index) {
    setCurrentTab(index)
  }

  return (
    <CenterWrapper>
      <CSSTransition
        nodeRef={barRef}
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
      >
        <div ref={barRef} className='search-bar' onClick={() => searchBarClick()}>
          <div className='text'>搜索房源和体验</div>
          <span className='icon'>
            <IconSearchBar/>
          </span>
        </div>
      </CSSTransition>
      <CSSTransition
        nodeRef={detailRef}
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
      >
        <div ref={detailRef} className='search-detail'>
          <SearchTabs titles={titles} tabClick={tabClickHandle}/>
          <div className='infos'>
            <SearchSections searchInfos={searchTitles[currentTab].searchInfos}/>
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

export default HeaderCenter
