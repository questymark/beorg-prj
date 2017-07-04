
export const SET_CURRENT_ROUTE = 'SET_CURRENT_ROUTE';

export function setCurrentRoute(currRoute) {
    return { type: SET_CURRENT_ROUTE, currRoute }
}

const initialState = {
    currRoute: '/'
};

export default function (state = initialState, action) {

    switch (action.type) {

        case SET_CURRENT_ROUTE:
            return {
                ...state,
                currRoute: action.currRoute
            }

        default:
            return state;
    }

}