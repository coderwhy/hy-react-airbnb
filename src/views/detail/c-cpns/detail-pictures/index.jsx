import PictureBrowser from '@/base-ui/picture-browser'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { PicturesWrapper } from './style'

const DetailPictures = memo((props) => {
  const { pictureUrls } = props
  const [showBrowser, setShowBrowser] = useState(false)

  function showBrowserHandle() {
    setShowBrowser(true)
  }

  function handleCloseClick() {
    setShowBrowser(false)
  }

  return (
    <PicturesWrapper>
      <div className="top">
        <div className='left'>
          <div className='item' onClick={showBrowserHandle}>
            <img src={pictureUrls?.[0]} alt="" />
            <div className='cover'></div>
          </div>
        </div>
        <div className='right'>
          {
            pictureUrls?.slice(1, 5).map((item, index) => {
              return (
                <div className='item' key={item} onClick={showBrowserHandle}>
                  <img src={item} alt=""/>
                  <div className='cover'></div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='show-btn' onClick={showBrowserHandle}>查看照片</div>
      { showBrowser && <PictureBrowser pictureUrls={pictureUrls} closeClick={handleCloseClick}/> }
    </PicturesWrapper>
  )
})

DetailPictures.propTypes = {
  pictureUrls: PropTypes.array
}

export default DetailPictures