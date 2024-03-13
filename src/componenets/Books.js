import React, { useEffect, useRef, useState } from 'react'
import Card from './Card'
import '../styles/Books.css'

const Books = ({searchs,recData={},getBooksData}) => {
    const [details, setDetails] = useState([])
    const search = searchs ? searchs : 'flowers'
    const [isLoading, setIsLoading] = useState(true)
    const newDataTopRef = useRef(null);
    const [loadMoreClicked, setLoadMoreClicked] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            let responce = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyAS8V-r8Tb5ZYrQYo1ockkEn0tOYDYL4Cs&maxResults=9`)
            const respnceData = await responce.json()
            setDetails(respnceData.items)
            setIsLoading(false);
        }
        fetchData()
    }, [search])

    useEffect(() => {
        if (loadMoreClicked && newDataTopRef.current) {
            newDataTopRef.current.scrollIntoView({ behavior: 'smooth' });
            setLoadMoreClicked(false);
        }
    }, [details,loadMoreClicked]);
    useEffect(()=>{
        getBooksData(details)
    },[recData])
    const handleLodeMore = async () => {
        let responce = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyAS8V-r8Tb5ZYrQYo1ockkEn0tOYDYL4Cs&maxResults=9&startIndex=${details.length}`)
        const nextData = await responce.json()
        setDetails((prev) => [...prev, ...nextData.items])
        setLoadMoreClicked(true);
    }

    return (
        <>
        <div className='conatiner'>
            {
                isLoading ? (<div className='loading'>...Loading</div>) :
                    (<div className='books-body'>
                        <div className='books'>
                            {
                                details.map((ele, i) => {
                                    return (
                                        // <div key={ele.id + i}>{ele?.volumeInfo?.title}</div>
                                        <Card key={ele.id + i} volumeInfo={ele.volumeInfo}/>
                                    )
                                })
                            }<div ref={newDataTopRef}></div>
                            
                        </div>
                    </div>)
            }
            {/* {!isLoading && <div className='load-more' onClick={handleLodeMore}>LoadMore</div>} */}

        </div>
        {!isLoading && <div className='load-more' onClick={handleLodeMore}>LoadMore</div>}
        </>
    )
}

export default Books