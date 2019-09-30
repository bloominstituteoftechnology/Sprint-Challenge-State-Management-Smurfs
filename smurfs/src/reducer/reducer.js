//import actions here

export const initialState = {

}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "DEFAULT_ACTION":
            return {
                ...state
            }
        
        default: 
            return state


    }

}

export default reducer