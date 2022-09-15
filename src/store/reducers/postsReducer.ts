import {
    DataI,
} from '../interfaces/dataInterface'
import * as actionTypes from '../actions/actionTypes'
import {
    GetPostsStartAction,
    GetPostsSuccessAction,
    GetPostsFailAction,
    GetUsersAction,
    GetCommentsAction,
    GetPostsWithUsersAction,
} from '../interfaces/postInterface'

type Action =
    | GetPostsStartAction
    | GetPostsSuccessAction
    | GetPostsFailAction
    | GetUsersAction
    | GetCommentsAction
    | GetPostsWithUsersAction


export const initialState: DataI = {
    posts: [],
    comments: [],
    users: [],
    loading: false,
    error: '',
    postsWithUsers: []
}

const getPostsStart = (state: DataI, action: GetPostsStartAction) => {
    return {
        ...state,
        loading: true
    }
}

const getPostsSuccess = (state: DataI, action: GetPostsSuccessAction) => {
    return {
        ...state,
        posts: action.posts,
        loading: false
    }
}

const getPostsFail = (state: DataI, action: GetPostsFailAction) => {
    return {
        ...state,
        error: action.error
    }
}

const getUsers = (state: DataI, action: GetUsersAction) => {
    return {
        ...state,
        users: action.users
    }
}

const getComments = (state: DataI, action: GetCommentsAction) => {
    return {
        ...state,
        comments: action.comments
    }
}

const getPostsWithUsers = (state: DataI, action: GetPostsWithUsersAction) => {
    return {
        ...state,
        postsWithUsers: action.postsWithUsers
    }
}

const postsReducer = (state: DataI = initialState, action: Action) => {
    switch (action.type) {
        case actionTypes.GET_POSTS_START:
            return getPostsStart(state, action)
        case actionTypes.GET_POSTS_SUCCESS:
            return getPostsSuccess(state, action)
        case actionTypes.GET_POSTS_FAIL:
            return getPostsFail(state, action)
        case actionTypes.GET_USERS:
            return getUsers(state, action)
        case actionTypes.GET_COMMENTS:
            return getComments(state, action)
        case actionTypes.GET_POSTS_WITH_USERS:
            return getPostsWithUsers(state, action)
        default:
            return state
    }
}

export default postsReducer