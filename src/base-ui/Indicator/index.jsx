import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const { selectIndex } = props
  const scrollRef = useRef()

  useEffect(() => {
    const selectItemEl = scrollRef.current.children[selectIndex]
    const selectItemWidth = selectItemEl.clientWidth
    const selectItemOffset = selectItemEl.offsetLeft

    const scrollElWidth = scrollRef.current.clientWidth
    const scrollElScroll = scrollRef.current.scrollWidth

    let distance = selectItemWidth * 0.5 + selectItemOffset - scrollElWidth * 0.5
    if (distance < 0) distance = 0
    if (distance > scrollElScroll - scrollElWidth) distance = scrollElScroll - scrollElWidth
    scrollRef.current.style.transform = `translate(${-distance}px)`
  }, [selectIndex])

  return (
    <IndicatorWrapper>
      <div className="scroll" ref={scrollRef}>
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {}

export default Indicator