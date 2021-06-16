const LOADING='LOADING'


let intialState = {
    loading:true,

}

const Login_reducer = (state = intialState, action) => {
    switch (action.type) {
        case LOADING: {
            return {
                ...state,loading:action.item
            }
        }

        default:
            return state
    }
}

export default Login_reducer;

export const Loading = (item) => {
    
    return {
        type: LOADING,
        item
    }
}
