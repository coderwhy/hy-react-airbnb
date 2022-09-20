import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import React, { memo } from 'react'
import { SectionV2Wrapper } from './style'

const HomeSectionV2 = memo((props) => {
  const { infoData } = props
  const { title, subtitle, list: roomList = [] } = infoData

  return (
    <SectionV2Wrapper>
      <SectionHeader title={title} subtitle={subtitle}/>
      <SectionRooms roomList={roomList.slice(0, 8)} itemWidth={"25%"}/>
      <SectionFooter/>
    </SectionV2Wrapper>
  )
})

export default HomeSectionV2