import { changeHeaderConfigAction } from '@/store/features/main'
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DetailPictures from './c-cpns/detail-pictures'
import DetailInfos from './c-cpns/detail-infos'
import { DetailWrapper } from './style'

const Detail = memo((props) => {
  const detailInfo = useSelector((state) => state.detail.detailInfo)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, isHome: false }))
  }, [dispatch])

  return (
    <DetailWrapper>
      <DetailPictures pictureUrls={detailInfo.picture_urls}/>
      <DetailInfos detailInfo={detailInfo}/>
    </DetailWrapper>
  )
})

Detail.propTypes = {}

export default Detail
