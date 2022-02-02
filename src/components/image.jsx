import {React} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'



const Image = ({src, alt, linkImage, linkPhotographer, photographer,color}) => {
    
    const style = {
        backgroundColor: color,
    }

    return (
        <figure style={style}>
            <img src={src} alt={alt} />
            <figcaption>
                <a href={linkPhotographer} target="_blank" rel="noopener noreferrer">{photographer}</a>
                <a href={linkImage} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEye} />
                </a>
            </figcaption>
        </figure>
    )
}

Image.propsTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    linkImage: PropTypes.string,
    linkPhotographer: PropTypes.string,
    photographer: PropTypes.string,
    color: PropTypes.string

} 

export default Image