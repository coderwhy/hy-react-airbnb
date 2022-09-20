import { fetchEntireDataAction } from '@/store/features/entire/actionCreators'
import { changeHeaderConfigAction } from '@/store/features/main'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRooms from './c-cpns/entire-rooms'
import { EntireWrapper } from './style'

const Entire = memo((props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchEntireDataAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, isHome: false }))
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter/>
      <EntireRooms/>
      <EntirePagination/>
    </EntireWrapper>
  )
})

Entire.propTypes = {}

export default Entire
