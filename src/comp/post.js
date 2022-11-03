
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Post() {
    const[Post, setPost]=useState()
    const[Postl, setPostl]=useState()
    const nav=useNavigate()
  

    const Postdata = ()=>{
          axios.post("https://636242667521369cd068e2ba.mockapi.io/ToDo",{
          Post,
          Postl,
    
        }).then(res => {
            console.log(res)})
       
    
    }
  return (
    <div >
     <div className='contener'>
    <label>Frist Name:</label>
   <input type={"text"} placeholder="Frist Name" onChange={e=> {setPost(e.target.value)}}></input><br/>
   <label>Last Name:</label>
   <input type={"text"} placeholder="Last Name" onChange={e=> {setPostl(e.target.value)}} ></input><br/>
   </div>
   <button onClick={Postdata}>Submited</button>
   <Link to="/Read"> <button >Review</button></Link>
  <Link to="/Upatad"> <button >Update</button></Link>
   
 </div>
  )
}

export default Post