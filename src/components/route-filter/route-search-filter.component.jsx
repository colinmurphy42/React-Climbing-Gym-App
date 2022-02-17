import React from 'react'
import './route-filter.styles.scss'


const RouteSearchFilter = ({placeholder, handleChange}) => {
    return(
        <input
            className='search'
            type='search' 
            placeholder={placeholder}
            onChange={handleChange}
        />
    );
}

export default RouteSearchFilter