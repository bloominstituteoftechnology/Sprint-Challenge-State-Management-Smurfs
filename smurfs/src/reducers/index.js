// [{ name: 'Brainey', age: 200, height: '5cm', id: 0 }];
const initialState = {
    info: [],
    isFetching: false,
    error: '',
};
export const infoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_INFO_START':
            return {
                ...state,
                isFetching: true,
            };
        case 'FETCH_INFO_SUCCESS':
            return {
                ...state,
                isFetching: false,
                error: '',
                info: action.payload,
            };
        case 'FETCH_INFO_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
