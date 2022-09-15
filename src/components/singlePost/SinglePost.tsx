import React, { FC, useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { HelloTextI } from '../../store/interfaces/dataInterface'
import CommentList from '../comments/CommentList'
import { DataContext } from '../../contexts/DataContext'
import Author from '../posts/Author'
import { getSinglePostApi, getCommentsForSinglePostApi } from '../../services/post';
import back from "../../assets/back.png"
import "./singlePost.css"
import { Link } from 'react-router-dom';

const SinglePost: FC<HelloTextI> = ({
    helloText,
}: HelloTextI) => {
    helloText('SinglePost')

    const { users } = useContext(DataContext)
    const { id } = useParams()

    const [post, setPost] = useState<any>('')
    const [commentList, setCommentList] = useState<any>('')

    useEffect(() => {
       getSinglePostApi(id)
            .then(data => setPost(data))
            .catch((err) => console.log(err))
    }, [id])

    useEffect(() => {
        getCommentsForSinglePostApi(id)
            .then(data => setCommentList(data))
            .catch((err) => console.log(err))
    }, [id])

    const author = users?.find((user: any) => {
        return user.id === post.userId
    })

    return (
        <div className='container'>
            <Link to="/posts">
            <img src={back} alt="" />
            </Link>
            <button className='btn'>
               
            </button>
            <div className="containerCard">
                <div className='headerCard'>
                    <h1 className='cardTitle' > {post.title} #{post.id} </h1>
                    <div className='line' ></div>
                    <p>{post.body}</p>
                    <Author
                        helloText={helloText}
                        author={author?.username}
                        key={post.id}
                    />
                </div>
                <CommentList
                    postId={post.id}
                    helloText={helloText}
                    commentList={commentList}
                />
            </div>
        </div>
    );
}

export default SinglePost;