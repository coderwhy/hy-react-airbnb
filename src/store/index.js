import { configureStore } from "@reduxjs/toolkit"
import homeReducer from "./features/home"
// import entireRedducer from "./features/entire"
import entireReducer from "./features/entire/index"
import detailReducer from "./features/detail"
import mainReducer from "./features/main"

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
    detail: detailReducer,
    main: mainReducer
  }
})

export default store
