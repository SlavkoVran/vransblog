import React, { useContext, FC } from 'react'
import { HelloTextI } from '../../store/interfaces/dataInterface'
import CommentList from '../comments/CommentList'
import { DataContext } from '../../contexts/DataContext'
import { Link } from 'react-router-dom';
import "./postCard.css"
import Author from './Author'

type PostCardI = {
    post: any
    users: any
}

const PostCard: FC<PostCardI & HelloTextI> = ({
    post,
    users,
    helloText,
}: PostCardI & HelloTextI) => {

    helloText('PostCard')

    const { comments } = useContext(DataContext)

    const commentList = comments?.filter((commentList) => {
        return commentList.postId === post.id
    })

    return (
        <Link to={`/posts/${post.id}`} >
            <div className="containerCard">
                <div className='headerCard'>
                    <h1 className='cardTitle' > {post.title} #{post.id} </h1>
                    <div className='line' ></div>
                    <p className='cardBody'>{post.body}</p>
                    <Author
                        helloText={helloText}
                        author={users}
                        key={post.id}
                    />
                </div>
                <CommentList
                    postId={post.id}
                    helloText={helloText}
                    commentList={commentList}
                />
            </div>
        </Link>
    );
}

export default PostCard;