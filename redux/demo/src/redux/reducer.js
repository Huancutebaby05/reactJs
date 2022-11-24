import { INCREASE, DECREASE, } from "./ActionConstant";
import { combineReducers } from "redux"

const initState = {
    count: 0, 
    greeting: ""
};


const reducers = (state = initState, actions) => {
    switch (actions.type) {
        case INCREASE:
            return {
                ...state, count: state.count + 1, greeting:state.greeting+="Plus"
            }
        case DECREASE:
            return {
                ...state, count: state.count - 1,greeting:state.greeting+="Sub"
            }
        default:
            return state
    }
}
const rootReducer = combineReducers({
    initChange: reducers
})
export default rootReducer
