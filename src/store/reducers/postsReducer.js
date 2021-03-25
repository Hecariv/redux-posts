const initialState = {
    posts: []
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "POST":
            console.log("hi from reducer")
            return {
                ...state,
                posts: state.posts.concat(action.payload)
            }
        default:
            return state
    }
}

export default postsReducer