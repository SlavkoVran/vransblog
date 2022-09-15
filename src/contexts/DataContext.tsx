import { createContext, useEffect, useReducer } from 'react'
import postsReducer, { initialState } from "../store/reducers/postsReducer"
import { getPostsApi, getCommentsApi, getUsersApi } from '../services/post';
import * as postsActions from '../store/actions/postsActions'

type DataContextProviderProps = {
    children: React.ReactNode
}

export const DataContext = createContext(initialState)

export const DataContextProvider = ({
    children,
}: DataContextProviderProps) => {
    const [state, dispatch] = useReducer(postsReducer, initialState)

    const getPosts = () => {
        dispatch(postsActions.getPostsStart())
        setTimeout(() => {
            getPostsApi()
                .then((posts) => {
                    dispatch(postsActions.getPostsSuccess(posts))
                })
                .catch((err) => {
                    dispatch(postsActions.getPostsFail(err))
                })
        }, 1000)
    }

    const getComments = () => {
        getCommentsApi()
            .then((comments) => {
                dispatch({ type: "GET_COMMENTS", comments })
            })
        // TO DO
        // .catch(err)
    }

    const getUsers = () => {
        getUsersApi()
            .then((users) => {
                dispatch({ type: "GET_USERS", users })
            })
        // TO DO
        // .catch(err)
    }

    useEffect(() => {
        getPosts()
        getUsers()
        getComments()
    }, [])

    useEffect(() => {
        const usersMap = state.users?.reduce((acc: any, item: any) => {
            acc[item.id] = item
            return acc
        }, {})

        const postsWithUsers = state.posts?.reduce((acc: any, item: any) => {
            acc.push({ ...item, user: usersMap[item.userId] })
            return acc
        }, [])

        if (postsWithUsers && usersMap) {
            dispatch({ type: "GET_POSTS_WITH_USERS", postsWithUsers })
        }

    }, [state.users, state.posts])

    const value = {
        posts: state.posts,
        comments: state.comments,
        users: state.users,
        postsWithUsers: state.postsWithUsers,
        loading: state.loading
    }

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}