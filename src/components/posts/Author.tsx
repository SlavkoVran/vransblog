import React, { FC } from 'react'
import { HelloTextI } from '../../store/interfaces/dataInterface'
import './author.css'

type AuthorI = {
    author: any
}

const Author: FC<AuthorI & HelloTextI> = ({
    author,
    helloText,
}: AuthorI & HelloTextI) => {

    helloText('Author')

    return (
        <div className="authorContainer">
            <p className='author'>Aurhor: {author}</p>
        </div>
    );

}

export default Author;