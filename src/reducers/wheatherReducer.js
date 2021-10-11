
const initialState = {
    data: {}
}

function reducer(state = initialState, action){
    switch (action.type){        
        case "FETCH_DATA_SUCCESS":
            return {
                ...state,              
                error: false
            };
        case "FETCH_DATA_ERROR":
            return {
                ...state,                
                error: true,                
            };
        default:
            return state
    }
}

export default reducer;