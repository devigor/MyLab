const initialState = []

export default (state = initialState, action) => {
  // eslint-disable-next-line
  switch(action.type) {
    case 'ADD_COUNTER': return state.concat(0)
    case 'REMOVE_COUNTER': return state.filter((_, i) => i !== action.i)
    case 'INCREMENT': return state.map((c, i) => i === action.i ? c + 1 : c)
    case 'DECREMENT': return state.map((c, i) => i === action.i ? c - 1 : c)
  }
  return state
}