import {useEffect, useState} from 'react';

const config = {
    method: 'GET',
    mode: 'cors',
    headers: {
        'Authorization' : "563492ad6f917000010000015e7f2deb3d224e31991c9206f8f4c542"
    }
}

const useGallery = () => {
    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [limitPage, setLimitPage] = useState(0);
    const [loading, setLoading] = useState(true);

    const getImages = async (page = 1 , query = '') => {
        const range = 10;
        const url = `https://api.pexels.com/v1/${(query.length === 0) ? `curated?` : `search?query=${query}&`}page=${page}&per_page=${range}`
        const res = await fetch(url,config);
        if(res.status === 200){
            const data = await res.json();
            return {
                photos: data.photos,
                limit: Math.ceil(data.total_results / range),
            };
        } else 
            return {
                photos: [],
                limit: 0
            }
    }

    useEffect(() => {
        getImages()
        .then(data => {
            setImages(data.photos)  
            setLimitPage(data.limit)
            setLoading(false);
        });
    },[]);

    useEffect(() => {
        setLoading(true);
        setPage(1);
        getImages(1, query)
        .then(data => {
            setImages(data.photos);
            setLimitPage(data.limit)
            setLoading(false);
        })
    },[query,])

    useEffect(() => {
        setLoading(true);
        getImages(page, query)
        .then(data =>{
            setImages(data.photos);
            setLoading(false);
        })
    }, [page,])

    return [images, query, setQuery, page, setPage, loading, limitPage];
}

export default useGallery;