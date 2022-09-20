import hyRequest from "..";

export function getEntireRoomList(offset, size = 20) {
  return hyRequest.get({
    url: "/entire/list",
    params: {
      offset,
      size
    }
  })
}
