export function bookOne(state={book: null, isLoading: false}, action) {
    switch (action.type){
        case 'GET_ONE_BOOK_PENDING':
            state = {...state, isLoading: true};
            break;
        case 'GET_ONE_BOOK_FULFILLED': {
            state = {...state, isLoading: false, book: action.payload.data};
            break;
        }
        case 'GET_ONE_BOOK_REJECTED': {
            state = {...state, isLoading: false, message: action.payload.message};
            break;
        }

    }
    return state;
}