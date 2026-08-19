import Rating from '@mui/material/Rating'
import React, { memo } from 'react'
import { InfoWrapper } from './style'

const DetailInfos = memo(({ detailInfo = {} }) => {
  const messages = detailInfo?.verify_info?.messages || []
  const rating = Number(detailInfo?.star_rating || 0)
  const reviewsCount = Number(detailInfo?.reviews_count || 0)
  const price = detailInfo?.price_format || (detailInfo?.price ? `￥${detailInfo.price}` : '价格待定')

  const infoItems = [
    { label: '房源类型', value: messages[0] || '暂未提供' },
    { label: '房间与床位', value: messages[1] || '暂未提供' },
    { label: '评分', value: rating ? `${rating.toFixed(1)} / 5` : '暂无评分' },
    { label: '评价数量', value: reviewsCount ? `${reviewsCount} 条` : '暂无评价' }
  ]

  return (
    <InfoWrapper>
      <div className="info-content">
        <div className="eyebrow">{messages.join(' · ') || '房源信息'}</div>
        <h1>{detailInfo?.name || '房源详情'}</h1>
        <div className="rating-row">
          <Rating
            aria-label={rating ? `评分 ${rating} 分` : '暂无评分'}
            precision={0.1}
            readOnly
            size="small"
            value={rating}
          />
          <span>{rating ? rating.toFixed(1) : '暂无评分'}</span>
          <span className="dot">·</span>
          <span>{reviewsCount ? `${reviewsCount} 条评价` : '暂无评价'}</span>
        </div>

        <div className="info-grid">
          {infoItems.map((item) => (
            <div className="info-item" key={item.label}>
              <div className="label">{item.label}</div>
              <div className="value">{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      <aside className="price-card">
        <div className="price">
          <strong>{price}</strong>
          <span> / 晚</span>
        </div>
        <div className="price-note">价格仅作课程演示</div>
        <div className="demo-note">
          当前版本支持浏览房源信息和图片。收藏、登录、评论及其他交互功能将在后续接入真实服务后添加。
        </div>
      </aside>
    </InfoWrapper>
  )
})

export default DetailInfos
