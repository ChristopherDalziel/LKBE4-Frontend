export const gameReducer = (state, action) => {
    switch (action.type) {
        case 'loading': {
            return { status: 'loading', games: [], error: null }
        }
        case 'resolved': {
            return { status: 'resolved', games: action.data, error: null }
        }
        case 'rejected': {
            return { status: 'rejected', games: [], error: action.error }
        }
        default:
            return state;
    }
};

