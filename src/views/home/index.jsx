import { fetchHomeAllDataAction } from '@/store/features/home'
import { changeHeaderConfigAction } from '@/store/features/main'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import HomeBanner from './c-cpns/home-banner'
import HomeLongFor from './c-cpns/home-longfor'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeSectionV3 from './c-cpns/home-section-v3'
import { HomeWrapper } from './style'

const Home = memo((props) => {

  /** 从redux中获取数据 */
  const { discountInfo, hotRecommendInfo, highScoreInfo, goodPriceInfo, plusInfo, longForInfo } = useSelector((state) => ({
    discountInfo: state.home.discountInfo,
    hotRecommendInfo: state.home.hotRecommendInfo,
    highScoreInfo: state.home.highScoreInfo,
    goodPriceInfo: state.home.goodPriceInfo,
    plusInfo: state.home.plusInfo,
    longForInfo: state.home.longForInfo
  }), shallowEqual)

  /** 派发事件,发送网络请求 */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeAllDataAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, isHome: true }))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className='content'>
        <HomeSectionV1 infoData={discountInfo}/>
        <HomeSectionV1 infoData={hotRecommendInfo}/>
        <HomeLongFor infoData={longForInfo}/>
        <HomeSectionV2 infoData={highScoreInfo}/>
        <HomeSectionV2 infoData={goodPriceInfo}/>
        <HomeSectionV3 infoData={plusInfo}/>
      </div>
    </HomeWrapper>
  )
})

Home.propTypes = {}

export default Home