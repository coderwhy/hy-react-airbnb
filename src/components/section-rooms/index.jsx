import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from '../room-item'
import { RoomWrapper } from './style'

const SectionRooms = memo((props) => {
  const { roomList, itemWidth } = props

  return (
    <RoomWrapper>
      {
        roomList.map(item => {
          return <RoomItem key={item.id} itemData={item} itemWidth={itemWidth}/>
        })
      }
    </RoomWrapper>
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.array
}

export default SectionRooms