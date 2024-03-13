import React from 'react'
import Card from './Card'
import  '../styles/Books.css'

function Recomended({details}) {
  return (
    <>
    <div className='heading'> <h2>Recomended List</h2></div>
    <div className='conatiner'>
            {
                    <div className='books-body'>
                        <div className='books'>
                            {
                                details.map((ele, i) => {
                                    return (
                                        // <div key={ele.id + i}>{ele?.volumeInfo?.title}</div>
                                        <Card key={ele.id + i} volumeInfo={ele.volumeInfo}/>
                                    )
                                })
                            }
                            
                        </div>
                    </div>
            }
            {/* {!isLoading && <div className='load-more' onClick={handleLodeMore}>LoadMore</div>} */}

        </div></>
  )
}

export default Recomended