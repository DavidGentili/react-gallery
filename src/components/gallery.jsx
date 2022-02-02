import {React} from 'react';

import NavSearch from './navSearch';
import Image from './image';
import Loading from './loading';
import ControlPage from './controPage';

import useGallery from '../hooks/useGallery.js';

import './gallery.css'


const Gallery = (props) => {

    const [images, query, setQuery, page, setPage, loading, limitPage] = useGallery()

    return(
        <>
            <NavSearch query={query} setQuery={setQuery}/>
            <div className={loading ? 'loadingPanel' : 'imagesPanel'}>
                {loading ? <Loading/> : images.map(img => <Image key={img.id} src={img.src.large} alt={img.alt} linkImage={img.url} linkPhotographer={img.photographer_url} photographer={img.photographer} color={img.avg_color}/>)}
            </div>
            
            {limitPage !== 0 && <ControlPage page={page} setPage={setPage} limitPage={limitPage}/>}

            <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer">
                <p>Photos provided by</p>
                <img src="https://images.pexels.com/lib/api/pexels.png" alt='Pexels.com' />
                
            </a>
        </>
    )
}

export default Gallery;