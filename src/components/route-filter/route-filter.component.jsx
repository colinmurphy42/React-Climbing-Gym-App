import React from 'react'
import './route-filter.styles.css'

const RouteFilter = ({placeholder, handleChange}) => {
    return(
        <input
            className='search'
            type='search' 
            placeholder={placeholder}
            onChange={handleChange}
        />
    );
}

export default RouteFilter