import React, { memo } from 'react'
import IconLogo from '@/assets/svg/icon_logo'
import { LeftWrapper } from './style'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeHeaderConfigAction } from '@/store/features/main'

const HeaderLeft = memo(() => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  function logoClickHandle() {
    dispatch(changeHeaderConfigAction({ isFixed: true, isHome: true }))
    navigate("/home")
  }

  return (
    <LeftWrapper>
      <span onClick={logoClickHandle}><IconLogo/></span>
    </LeftWrapper>
  )
})

export default HeaderLeft