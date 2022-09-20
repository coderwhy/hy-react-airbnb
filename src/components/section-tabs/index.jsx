import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import classNames from 'classnames'
import { TabsWrapper } from './style'
import ScrollView from '@/base-ui/scroll-view'

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  
  function itemClickHandle(index, name) {
    setCurrentIndex(index)
    tabClick(index, name)
  }

  return (
    <TabsWrapper>
      <ScrollView>
        {
          tabNames.map((item, index) => {
            return (
              <div 
                key={item} 
                className={classNames("item", {active: currentIndex === index})}
                onClick={e => itemClickHandle(index, item)}
              >
                {item}
              </div>
            )
          })
        }
      </ScrollView>
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array
}

export default SectionTabs