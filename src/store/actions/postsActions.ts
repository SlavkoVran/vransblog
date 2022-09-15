import {
    GetPostsStartAction,
    GetPostsSuccessAction,
    GetPostsFailAction,
} from '../interfaces/postInterface'
import * as actionTypes from '../actions/actionTypes'

export const getPostsStart = (): GetPostsStartAction => {
    return {
        type: actionTypes.GET_POSTS_START
    }
}

export const getPostsSuccess = (posts: Array<any>): GetPostsSuccessAction => {
    return {
        type: actionTypes.GET_POSTS_SUCCESS,
        posts: posts
    }
}
export const getPostsFail = (error: any): GetPostsFailAction => {
    return {
        type: actionTypes.GET_POSTS_FAIL,
        error: error
    }
}