import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div className='align-element'>
            <h1 className='font-bold'>404 not found</h1>
            <button className='btn btn-primary'>
                <Link to="/">back to home</Link>
            </button>
        </div>
    )
}

export default Error