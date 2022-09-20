import React, { memo } from 'react'
import Pagination from '@mui/material/Pagination';

import { PaginationWrapper } from './style'
import { useDispatch, useSelector } from 'react-redux';
import { fetchEntireDataAction } from '@/store/features/entire/actionCreators';

const EntirePagination = memo(() => {
  const { currentPage, totalCount } = useSelector((state) => ({
    currentPage: state.entire.currentPage,
    totalCount: state.entire.totalCount
  }))

  const count = Math.ceil(totalCount / 20)
  const start = currentPage * 20 + 1
  const end = (currentPage + 1) * 20

  const dispatch = useDispatch()
  function pageChangeHandle(event, newPage) {
    window.scrollTo(0, 0)
    dispatch(fetchEntireDataAction(newPage-1))
  }

  return (
    <PaginationWrapper>
      <div className='page-info'>
        <Pagination count={count} onChange={pageChangeHandle}/>
        <div className='info'>
          第 {start} - {end} 个房源, 共超过 {totalCount} 个
        </div>
      </div>
    </PaginationWrapper>
  )
})

export default EntirePagination