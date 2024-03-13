import React, { useEffect, useState } from 'react'
import Books from './Books'
import { RecomendationForms } from './Forms';
import Recomended from './Recomended';
import FormModel from './FormModel';
import '../styles/Home.css'

const HomePage = () => {
    const [text, setText] = useState("");
    const [search, setSearch] = useState('')
    const [recomend,setRecomend] = useState({})
    const [bookData,setBookData] = useState([])
    const [recomendeList,setRecomendedList] = useState([])
    const [showRec,setShowRec] = useState(false)
    const [modalOpen, setModalOpen] = useState(false);

    const recommended = bookData.filter((ele,index)=> ele.volumeInfo.title == recomend.title )

    const getBooksData=(data)=>{
        setBookData(data)
    }


    useEffect(()=>{
        setRecomendedList((prev)=>[...prev, ...recommended])
    },[bookData])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text != '') {
            setSearch(text);
        } else {
            setSearch('');
        }
    };

    const onChangevalue = (e) => {
        e.preventDefault();
        setTimeout(() => {
            setText(e.target.value);
        }, 500)
    };
    const handleRecSubmit=(e,name,author)=>{
        e.preventDefault();
        const obj = {
            title:name,
            author:author
        }
        setRecomend(obj)
    }

    const handelOpen =(e)=>{
        e.preventDefault()
        setModalOpen(true)
    }
    const handelClose =()=>{
        setModalOpen(false)
    }
    const handleRecomendOpen =()=>{
        if(recomendeList.length<0){
            alert('Hello, this is an alert!');
        }
        if(recomendeList.length>0)setShowRec(true)

    }
    return (
        <div>
            <div className='Nav-link'>
            <div onClick={()=>setShowRec(false)} className='home'>show HomePage</div>
            <div onClick={(e)=>handelOpen(e)} className='recomend'>Recomend</div>
            {/* <div>
                <RecomendationForms handleRecSubmit={handleRecSubmit} />
            </div> */}
            <div onClick={handleRecomendOpen} className='new-books'>show recomended</div>
            
            <div className='search'>
                <form
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        placeholder="author or book"
                        onChange={onChangevalue}
                    />
                </form>
            </div>
            </div>
            {
              modalOpen && <FormModel closeModal ={handelClose} >
                <RecomendationForms handleRecSubmit={handleRecSubmit} />
              </FormModel>  
            }
            {showRec && recomendeList.length>0 ? <Recomended details={recomendeList}/> : <Books searchs={search} recData={recomend} getBooksData={getBooksData}/>}
        </div>
    )
}

export default HomePage