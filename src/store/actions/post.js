import * as actionTypes from "./actionTypes"

export const addNewPostSuccess = (postData) => {
    return {
        type: actionTypes.ADD_NEW_POST,
        payload: postData,
    }
};

export const addNewPost = (postData) => {
    return async (dispatch) => {
        const response = await fetch("http://localhost:8082/api/posts", {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        });
        console.log(response)
        dispatch(addNewPostSuccess(postData))
    }
}

export const fetchPostsSuccess = (posts) => {
    return {
        type: actionTypes.FETCH_POSTS_SUCCESS,
        posts: posts,
    }
}

export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await fetch("http://localhost:8082/api/posts")
        const json = await response.json()
        dispatch(fetchPostsSuccess(json))
    }
}

export const patchIncrementVotes = (post) => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:8082/api/posts/vote/increase/${post.id}`)
        console.log(response)
        dispatch(incrementVotes(post.id))
    }
}

export const incrementVotes = (id) => {
    return {
        type: "INCREMENT_VOTES",
        id: id
    }
}

