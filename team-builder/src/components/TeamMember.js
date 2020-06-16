import React from 'react'

const TeamMember = props => {
    const { details } = props

    return (
        <div className='Members'>
            <h2> {details.name} </h2>
            <p> {details.email} </p>
            <p> {details.role} </p>
        </div>
    )
}

export default TeamMember