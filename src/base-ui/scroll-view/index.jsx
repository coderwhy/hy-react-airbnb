import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollWrapper } from './style'

const ScrollView = memo((props) => {
  /** 记录正在显示的是哪一个 */
  const [posIndex, setPosIndex] = useState(0)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(true)

  /** 滚动区域的值 */
  const scrollRef = useRef()
  const totalDistanceRef = useRef(0)
  useEffect(() => {
    const scrollWidth = scrollRef.current.scrollWidth
    const clientWidth = scrollRef.current.clientWidth
    totalDistanceRef.current = scrollWidth - clientWidth
    setShowRight(totalDistanceRef.current > 0)
  }, [props.children])

  /** 事件处理 */
  function leftClickHandle() {
    scrollPosition(posIndex-1)
  }

  function rightClickHandle() {
    scrollPosition(posIndex + 1)
  }

  function scrollPosition(index) {
    const scrollLeft = scrollRef.current.children[index].offsetLeft
    scrollRef.current.style.transform = `translate(-${scrollLeft}px)`
    setPosIndex(index)
    if (scrollLeft > totalDistanceRef.current) {
      setShowRight(false)
    }
    setShowRight(totalDistanceRef.current > scrollLeft)
    setShowLeft(scrollLeft > 0)
  }

  return (
    <ScrollWrapper>
      {showLeft && (
        <div className='control left' onClick={leftClickHandle}>
          <IconArrowLeft/>
        </div>
      )}
      {showRight && (
        <div className='control right' onClick={rightClickHandle}>
          <IconArrowRight/>
        </div>
      )}
      <div className='content'>
        <div className='scroll' ref={scrollRef}>
          {props.children}
        </div>
      </div>
    </ScrollWrapper>
  )
})


export default ScrollView