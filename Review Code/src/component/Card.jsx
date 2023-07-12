import React, { useContext } from 'react'
import './card.scss'

const Card = ({ user }) => {

    const clickHandler = () => {
        alert(`${user.first_name} ${user.last_name}`)
    }

    return (
        <>
            <div className='card' >
                <div>
                    <img src={user.avatar} className='card__img' />
                </div>

                <h2 className='card__h2'>{`${user.first_name} ${user.last_name}`}</h2>
                <h3 className='card_h3'>{user.email}</h3>
                <button
                    className='card__button--contact'
                    onClick={clickHandler}
                >
                    Contact Me
                </button>
            </div>
        </>

    )
}

export default Card