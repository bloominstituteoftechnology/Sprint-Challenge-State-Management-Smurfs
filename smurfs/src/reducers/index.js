const initialState = {
    value: 'no value yet',
    suit: 'no suit yet',
    imgSrc: 'no image source yet',
    isGetting: false
};

export const reducer = (state = initialState, action) => {
    switch (action.type){
        default:
            return state;
    }
}