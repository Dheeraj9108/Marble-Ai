import * as types from "./actionTypes"

const iState = {
    lang:"en",
}

const sReducer = (state=iState,action)=>{
    switch(action.type){
        case types.SET_LAN:
            return {
                ...state,
                lang:action.payload
            }
        default :
            return state;
    }
}

export default sReducer;