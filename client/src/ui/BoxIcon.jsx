import React from 'react'
import PropTypes from 'prop-types'

function BoxIcon({ background, iconUrl, iconAlt, size }) {
    return (
        <div className={size === 'xl' ? 'boxIcon xl' : 'boxIcon'} style={{ backgroundColor: background ? background : '#ffffff'}}>
            <img className='boxIcon__icon' src={iconUrl} alt={iconAlt}/>
        </div>
    )
}

BoxIcon.propTypes = {
    background: PropTypes.string,
    iconUrl: PropTypes.string.isRequired,
    iconAlt: PropTypes.string.isRequired,
    size: PropTypes.string
}

export default BoxIcon

