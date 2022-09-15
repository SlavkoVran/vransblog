import React, { FC } from 'react'
import { HelloTextI } from '../../store/interfaces/dataInterface'
import './commentList.css'


type CommentListI = {
    commentList?: Array<any>
    postId: number
}

const CommentList: FC<CommentListI & HelloTextI> = ({
    helloText,
    commentList,
}: CommentListI & HelloTextI) => {

    helloText('CommentList')

    return (
        <div className="containerCommentList">
            <h1 className='commentTitle' >  Comments </h1>
            {
                commentList && commentList.map((comment: any) => {
                    return (
                        <div className='commentContainer' key={comment.id}>
                            <p className='commentBody'> <span className='commentName'> {comment.name} </span> {comment.body} </p>
                            <div className='actBtn'>
                                <p>Like</p>
                                <p className='btnReplay'>Replay</p>
                            </div>

                        </div>
                    )

                })
            }
        </div>
    );

}
CommentList.displayName = 'CommentList'
export default CommentList;