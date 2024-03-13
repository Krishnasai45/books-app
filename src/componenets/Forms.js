import React, { useState } from 'react'

function RecomendationForms({handleRecSubmit}) {
    const [title,setTitle] = useState('')
    const [author,setAuthor] = useState('')
  return (
    <div className='rec-form'>
        <form onSubmit={(e)=>handleRecSubmit(e,title,author)}>
            <div><label>Book Name</label> <br/> <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Book Name' /></div>
            <div><label>Author</label> <br/> <input type='text' value={author} onChange={(e)=>setAuthor(e.target.value)} placeholder='Author' /></div>
            <div><input type='submit' value='Submit'/></div>
        </form>
    </div>
  )
}



// function LoginForms() {
//     const [name,setname] = useState('')
//     const [email,setEmail] = useState('')
//     return (
//       <div className='login-form'>
//         <form>
//             <div><label>Name</label> <input type='text' value={name} onChange={(e)=>setname(e.target.value)} /></div>
//             <div><label>Email</label> <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} /></div>
//             <div><input type='submit' value='Submit'/></div>
//         </form>

//       </div>
//     )
//   }

export {RecomendationForms}