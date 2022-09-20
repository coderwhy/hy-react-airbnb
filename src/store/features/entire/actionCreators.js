import { getEntireRoomList } from "@/services/modules/entire";
import * as actionTypes from "./constants";

export const changeLoadingAction = (isLoading) => ({
  type: actionTypes.CHANGE_LOADING,
  isLoading
})

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
})

export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList
})


export const fetchEntireDataAction = (page = 0) => {
  return async dispatch => {
    // 设置isLoading
    dispatch(changeLoadingAction(true))

    const res = await getEntireRoomList(page * 20)
    dispatch(changeLoadingAction(false))
    // 保存数据
    dispatch(changeCurrentPageAction(page))
    dispatch(changeTotalCountAction(res.totalCount))
    dispatch(changeRoomListAction(res.list))
  }
}
