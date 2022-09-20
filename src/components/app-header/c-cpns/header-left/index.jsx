import React, { memo } from 'react'
import IconLogo from '@/assets/svg/icon_logo'
import { LeftWrapper } from './style'
import { useNavigate } from 'react-router-dom'

const HeaderLeft = memo(() => {
  const navigate = useNavigate()
  function logoClickHandle() {
    navigate("/home")
  }

  return (
    <LeftWrapper>
      <span onClick={logoClickHandle}><IconLogo/></span>
    </LeftWrapper>
  )
})

export default HeaderLeft