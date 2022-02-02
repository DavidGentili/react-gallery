import {React, useRef, memo} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import './navSearch.css';


const NavSearch = ({query ,setQuery}) => {

    const input = useRef(null)

    const handlerSearch = (e) => {
        e.preventDefault();
        setQuery(input.current.value);
    }

    return(
        <div className='navSearch'>
            <form  onSubmit={handlerSearch}>
                <input ref={input} placeholder='Search' type="text"/>
                <button onClick={(e) => {handlerSearch(e);}}>
                    <FontAwesomeIcon icon={faSearch}/>
                </button>
            </form>
            {query.length !== 0 && <button onClick={(e) => {setQuery(''); input.current.value = ''}}><FontAwesomeIcon icon={faHome}/></button>}
        </div>
    )
}

NavSearch.propTypes = {
    query: PropTypes.string,
    setQuery : PropTypes.func
} 

export default memo(NavSearch)