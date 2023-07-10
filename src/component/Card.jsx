import React from 'react'

const Card = ({ user, key }) => {
    return (
        <div className='card-div'>
            <img src={user.avatar} style={{
                height: 80,
                width: 80,
                borderRadius: '50%'
            }} />
            <h2 >{`${user.first_name} ${user.last_name}`}</h2>
            <h2>{user.email}</h2>
            <button
                style={{ backgroundColor: '#2E8A99', color: 'white', border: 'none', fontSize: '20px', marginTop: '10px', padding: '5px' }}
                onClick={() => {
                    alert(`${user.first_name} ${user.last_name}`)
                }}
            >
                Contact Me
            </button>
        </div>
    )
}

export default Card