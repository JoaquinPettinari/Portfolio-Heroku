
const initialState = {
    data: {},
    error: false
}

function reducer(state = initialState, action){
    switch (action.type){        
        case "FETCH_DATA_SUCCESS":
            const { daily } = action.data;

            return {
                ...state,
                data: daily[0].temp,
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