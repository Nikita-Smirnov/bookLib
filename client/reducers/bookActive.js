export function bookActive(state={books: [], isLoading: false}, action) {
    switch (action.type){

        case 'GET_BOOKS_PENDING':
            state = {...state, isLoading: true};
            break;
        case 'GET_BOOKS_FULFILLED': {
            state = {...state, isLoading: false, books: action.payload.data};
            break;
        }
        case 'GET_BOOKS_REJECTED': {
            state = {...state, isLoading: false, message: action.payload.message};
            break;
        }

    }
    return state;
}