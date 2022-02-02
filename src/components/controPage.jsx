import {React, memo} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const goTop = () => {
    window.scrollTo(0,0);
}

const ControlPage = ({page,setPage,limitPage}) => {
    return (
        <div className="controlPage">
            {(page > 1) && <button className='prevButton' onClick={() => {setPage(page - 1); goTop()}}> <FontAwesomeIcon icon={faChevronLeft} /> </button>}
            <h4>{page}</h4>
            {(limitPage && page < limitPage) && <button className='nextButton' onClick={() => {setPage(page + 1); goTop()}}> <FontAwesomeIcon icon={faChevronRight} /> </button>}
            
        </div>
    )
}

ControlPage.propTypes = {
    page : PropTypes.number,
    setPage: PropTypes.func,
    limitPage: PropTypes.number
} 

export default memo(ControlPage);