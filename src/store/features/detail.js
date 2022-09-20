import { createSlice } from "@reduxjs/toolkit"

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    detailInfo: {
      "_id": "63043046432f9033d454117e",
      "id": "47961247",
      "picture_url": "https://z1.muscache.cn/im/pictures/c70bced4-e764-4967-bfd0-ab30f013278b.jpg?aki_policy=large",
      "picture_urls": [
        "https://z1.muscache.cn/im/pictures/c70bced4-e764-4967-bfd0-ab30f013278b.jpg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/ac22a9c3-84b3-405c-84d5-f37d73927a03.jpg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/ca927574-cfdf-4c7e-a8f2-c07bb89bd397.jpg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/8eebbae5-16a2-48c0-8796-469b2cf88779.jpg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/af00929d-7b8f-442b-ba23-fe98e122e6bb.jpg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/f6ee473c-bcb7-4327-a10f-8b2226c39b10.jpg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/bc52d349-05ba-487b-8480-1b6c8138a327.jpg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/a719057c-c675-428e-8f91-818cbe242d5f.jpg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/4533b0fa-3e03-424f-8829-24d70df74ca1.jpg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/49652a6c-9c35-4b1c-b9e3-de8a9303d0ed.jpg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/a9abc305-5f70-47db-8f4f-a01c9715e954.jpg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/9774321c-f3fb-44be-b58a-908cd2eb3e6d.jpg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/a8a4ee46-75a4-44a6-8633-ac222d04e992.jpg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/aee52e41-cb3d-4db7-b1c8-7b2eb489869d.jpg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/0e608f8e-5ece-4893-9449-d8da72e28ae1.jpg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/da7b67b3-3402-4bd8-8010-58bd6d937208.jpg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/a718197a-2b2b-469b-9581-abec3b88c333.jpg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/f2712cce-f725-4939-bc66-99f39f895fa4.jpg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/0ad7619f-af93-436a-ab14-db49d1f6a8bd.jpg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/93014d7a-e0ca-4393-8279-c8da7354be34.jpg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/23476730-e127-4d12-a78b-ea28b3dcbf05.jpg?aki_policy=large"
      ],
      "verify_info": {
        "messages": [
          "整套公寓型住宅",
          "1室1卫1床"
        ],
        "text_color": "#767676"
      },
      "name": "【大浴缸投影房】北京路步行街/6号线地铁",
      "price": 426,
      "price_format": "￥426",
      "star_rating": 5,
      "star_rating_color": "#FF5A5F",
      "reviews_count": 50,
      "reviews": [
        {
          "comments": "民宿位置很好，出去转个弯就是北京路商业街，很方便。房间的投影是有会员的，可以看很多影片！ps.一定要记得关好门窗！不然晚上有蚊子骚扰😭",
          "created_at": "2022-05-27T00:00:00Z",
          "is_translated": false,
          "localized_date": "2022年5月",
          "reviewer_image_url": "https://a0.muscache.com/im/pictures/user/1f61f128-ac6a-4b4c-b936-1ea12a7d8491.jpg?aki_policy=x_medium",
          "review_id": 635694717024855900
        }
      ],
      "bottom_info": null,
      "lat": 23.12157,
      "lng": 113.27195,
      "image_url": "/moreitems/d57fab90263f0d681e3cb6b2c9cf8001.jpg"
    }
  },
  reducers: {
    changeDetailInfoActon(state, { payload }) {
      state.detailInfo = payload
    }
  }
})

export const { changeDetailInfoActon } = detailSlice.actions
export default detailSlice.reducer
