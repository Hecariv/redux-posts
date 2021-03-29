import * as actionTypes from "./actionTypes"

export const fetchCommentsSuccess = (comments) => {
    return {
        type: actionTypes.FETCH_COMMENTS_SUCCESS,
        comments: comments
    }
}

export const fetchComments = () => {
    return async (dispatch) => {
        const response = await fetch("http://localhost:8082/api/comments")
        const json = await response.json()
        dispatch(fetchCommentsSuccess(json))
    }
}




