import * as types from "./actionTypes"

const sState = {
    title:"",
}

const searchReducer = (state=sState,action)=>{
    switch(action.type){
        case types.SET_SEARCH_TITLE:
            return {
                ...state,
                title:action.payload
            }
        default :
            return state;
    }
}

export default searchReducer;