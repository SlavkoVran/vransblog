import React, { useContext, FC, useState } from 'react'
import { DataContext } from "../../contexts/DataContext"
import { HelloTextI } from '../../store/interfaces/dataInterface'
import PostCard from './PostCard'
import Search from '../search/Search'
import "./posts.css"

const Posts: FC<HelloTextI> = ({
    helloText
}: HelloTextI) => {

    helloText('Posts')

    const { postsWithUsers, loading } = useContext(DataContext)
    const [searchInput, setSearchInput] = useState<string>('')

    const onSearch = (e: any) => {
        setSearchInput(e.target.value)
    }

    return (
        <div className='container'>
            <Search
                helloText={helloText}
                handleSearch={onSearch}
            />
            {
                loading ? <div className='loading'>Loading...</div> : (postsWithUsers?.filter((val: any) => {
                    if (searchInput === '') {
                        return val
                    } else if (val.user.username.toLowerCase().includes(searchInput?.toLowerCase())) {
                        return val
                    }
                }).map((post) => {
                    return (
                        <PostCard
                            post={post}
                            helloText={helloText}
                            users={post.user?.username}
                            key={post.id}
                        />
                    )
                }))
            }
        </div>
    );
}

export default Posts;