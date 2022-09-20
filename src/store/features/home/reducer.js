const initialState = {
  counter: 100
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return {...state, counter: state.counter + 1}
    default:
      return state
  }
}


export default reducer
