import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SectionHeader from '@/components/section-header'
import { SectionV3Wrapper } from './style'
import ScrollView from '@/base-ui/scroll-view'
import RoomItem from '@/components/room-item'

const HomeSectionV3 = memo((props) => {
  const { infoData } = props
  const { title, subtitle, list: roomList = [] } = infoData

  return (
    <SectionV3Wrapper>
      <SectionHeader title={title} subtitle={subtitle}/>
      <div className='room-list'>
        <ScrollView>
          {
            roomList.map(item => {
              return <RoomItem itemData={item} key={item.id} itemWidth="20%"/>
            })
          }
        </ScrollView>
      </div>
    </SectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV3