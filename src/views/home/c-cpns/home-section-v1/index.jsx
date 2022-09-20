import PropTypes from 'prop-types'
import React, { memo, useState, useEffect, useCallback } from 'react'
import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'
import { SectionV1Wrapper } from './style'

const HomeSectionV1 = memo((props) => {
  const { infoData } = props
  const { dest_address = [], dest_list = {} } = infoData
  const destNames = dest_address.map(item => item.name)
  const [roomList, setRoomList] = useState([])
  const [name, setName] = useState("")

  /**第一次的设置值 */
  useEffect(() => {
    const name = Object.keys(infoData.dest_list??{})[0]
    if (!name) return
    const roomList = infoData.dest_list[name]
    setRoomList(roomList)
    setName(name)
  }, [infoData.dest_list])

  /** 事件监听 */
  const tabClickHandle = useCallback(function(index, name) {
    setRoomList(dest_list[name])
    setName(name)
  }, [dest_list])

  return (
    <SectionV1Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <SectionTabs tabNames={destNames} tabClick={tabClickHandle}/>
      <SectionRooms roomList={roomList}/>
      <SectionFooter name={name}/>
    </SectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV1