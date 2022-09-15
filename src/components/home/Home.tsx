import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import { HelloTextI } from '../../store/interfaces/dataInterface';
import "./home.css"

const Home: FC<HelloTextI> = ({
    helloText
}) => {
    helloText('Home')
    return (
        <Link to='/posts' className="homeLink">
            Show All posts
        </Link>
    );
}

export default Home;