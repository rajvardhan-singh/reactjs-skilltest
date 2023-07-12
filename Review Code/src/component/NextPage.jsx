import React from 'react'
import './nextpage.scss'

const NextPage = ({ setPage }) => {

    const changePage = (value) => {
        setPage(value)
    }
    return (
        <>
            <div className='pagination-div'>
                <button className='pagination-div__button' onClick={() => changePage(1)} >1</button>
                <button className='pagination-div__button' onClick={() => changePage(2)}>2</button>
            </div>
        </>
    )
}

export default NextPage