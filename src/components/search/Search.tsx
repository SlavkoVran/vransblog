import React, { FC } from 'react'
import { HelloTextI } from '../../store/interfaces/dataInterface';
import './search.css'

type SearchI = {
    handleSearch: (e: any) => void
}

const Search: FC<HelloTextI & SearchI> = ({
    helloText,
    handleSearch
}: HelloTextI & SearchI) => {
    helloText('Search')

    return (
        <div className='searchContainer row'>
            <input
                className='search'
                type="text"
                placeholder="Enter username"
                onChange={handleSearch}
            />
        </div>
    );
}

export default Search;