import hyRequest from "..";

export function getHomeDiscountData() {
  return hyRequest.get({
    url: "/home/discount"
  })
}

export function getHomeHotRecommendData() {
  return hyRequest.get({
    url: "/home/hotrecommenddest"
  })
}

export function getHomeHighScoreData() {
  return hyRequest.get({
    url: "/home/highscore"
  })
}

export function getHomeGoodPriceData() {
  return hyRequest.get({
    url: "/home/goodprice"
  })
}

export function getHomePlusData() {
  return hyRequest.get({
    url: "/home/plus"
  })
}

export function getHomeLongforData() {
  return hyRequest.get({
    url: "/home/longfor"
  })
}
