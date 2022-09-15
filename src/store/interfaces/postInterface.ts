

export interface GetPostsStartAction {
    type: 'GET_POSTS_START'
}

export interface GetPostsSuccessAction {
    type: 'GET_POSTS_SUCCESS'
    posts: Array<any>
}

export interface GetPostsFailAction {
    type: 'GET_POSTS_FAIL'
    error: string | null | undefined
}

export interface GetUsersAction {
    type: 'GET_USERS'
    users: Array<any>
}

export interface GetCommentsAction {
    type: 'GET_COMMENTS'
    comments: Array<any>
}

export interface GetPostsWithUsersAction {
    type: 'GET_POSTS_WITH_USERS'
    postsWithUsers: Array<any>
}