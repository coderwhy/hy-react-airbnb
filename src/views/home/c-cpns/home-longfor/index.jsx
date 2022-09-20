import ScrollView from '@/base-ui/scroll-view'
import LongforItem from '@/components/longfor-item'
import SectionHeader from '@/components/section-header'
import React, { memo } from 'react'
import { LongForWrapper } from './style'

const HomeLongFor = memo((props) => {
  const { title, subtitle, list: longforList = [] } = props.infoData

  return (
    <LongForWrapper>
      <SectionHeader title={title} subtitle={subtitle}/>
      <div className='longfor-list'>
        <ScrollView>
          {
            longforList.map(item => {
              return (<LongforItem itemData={item} key={item.city}/>)
            })
          }
        </ScrollView>
      </div>
    </LongForWrapper>
  )
})

export default HomeLongFor