import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeHotRecommendData, getHomeLongforData, getHomePlusData } from '@/services/modules/home'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const fetchHomeAllDataAction = createAsyncThunk("fetchData", (payload, { dispatch }) => {
  // 1.发送第一个网络请求
  getHomeDiscountData().then(res => {
    dispatch(changeDiscountInfoAction(res))
  })

  getHomeHotRecommendData().then(res => {
    dispatch(changeHotRecommendInfoAction(res))
  })

  getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreInfoAction(res))
  })

  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfoAction(res))
  })

  getHomePlusData().then(res => {
    dispatch(changePlusInfoAction(res))
  })

  getHomeLongforData().then(res => {
    dispatch(changeLongforInfoAction(res))
  })
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    discountInfo: {},
    hotRecommendInfo: {},
    highScoreInfo: {},
    goodPriceInfo: {},
    plusInfo: {},
    longForInfo: {}
  },
  reducers: {
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeHotRecommendInfoAction(state, { payload }) {
      state.hotRecommendInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload
    },
    changeLongforInfoAction(state, { payload }) {
      state.longForInfo = payload
    }
  }
})

export default homeSlice.reducer
export const { 
  changeDiscountInfoAction, 
  changeHotRecommendInfoAction, 
  changeHighScoreInfoAction ,
  changeGoodPriceInfoAction,
  changePlusInfoAction,
  changeLongforInfoAction
} = homeSlice.actions
export { fetchHomeAllDataAction }
