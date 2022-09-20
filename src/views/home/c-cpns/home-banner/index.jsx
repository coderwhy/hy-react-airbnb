import React, { memo } from 'react'
import { BannerWrapper } from './style'

const HomeBanner = memo(() => {
  return (
    <BannerWrapper>
      <div className='cover'></div>
    </BannerWrapper>
  )
})

export default HomeBanner
