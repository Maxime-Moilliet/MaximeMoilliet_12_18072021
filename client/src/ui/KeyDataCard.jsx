import React from 'react'
import PropTypes from 'prop-types'
import BoxIcon from './BoxIcon'

function KeyDataCard({ value, name, background, iconUrl, iconAlt }) {
    return (
        <article className="keyDataCard">
            <BoxIcon iconUrl={iconUrl} iconAlt={iconAlt} background={background}/>
            <div className="keyDataCard__content">
                <h3 className="keyDataCard__content-value">{value}</h3>
                <h3 className="keyDataCard__content-name">{name}</h3>
            </div>
        </article>
    )
}

KeyDataCard.propTypes = {
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    background: PropTypes.string,
    iconUrl: PropTypes.string.isRequired,
    iconAlt: PropTypes.string.isRequired
}

export default KeyDataCard

