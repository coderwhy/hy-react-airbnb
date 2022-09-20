import RoomItem from '@/components/room-item'
import { changeDetailInfoActon } from '@/store/features/detail'
import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RoomsWrapper } from './style'

const EntireRooms = memo(() => {
  const { roomList, isLoading } = useSelector((state) => ({
    roomList: state.entire.roomList,
    isLoading: state.entire.isLoading
  }), shallowEqual)

  const navitate = useNavigate()
  const dispatch = useDispatch()
  function handleItemClick(item) {
    navitate("/detail")
    dispatch(changeDetailInfoActon(item))
  }

  return (
    <RoomsWrapper>
      <div className='list'>
        {
          roomList.map((item, index) => {
            return (
              <RoomItem 
                itemData={item} 
                itemWidth="20%" 
                key={item._id} 
                itemClick={e => handleItemClick(item)}
              />
            )
          })
        }
      </div>
      { isLoading && <div className="cover"></div> }
    </RoomsWrapper>
  )
})

export default EntireRooms
