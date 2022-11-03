import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



function Updata2() {
    const navigate = useNavigate();
    const[Post, setPost]=useState('')
    const[Postl, setPostl]=useState('')
    const [id, setId] = useState("");



    useEffect(() => {
        setId(localStorage.getItem("id"));
        setPost(localStorage.getItem("firs-tName"));
        setPostl(localStorage.getItem("last-Name"));
  }, []);

    const updateData = ()=>{
          axios.Upatad(`https://636242667521369cd068e2ba.mockapi.io/ToDo${id}`,{
          Post,
          Postl,
    
        }).then(res => {
          console.log(res.id);
          navigate("/Read");
      }).catch(err => {
          console.log(err);
      })
  
       
    
    }
  return (
    <div className='contener'>
    <label>Frist Name:</label>
   <input type={"text"} placeholder="Frist Name" onChange={e=> {setPost(e.target.value)}}></input><br/>
   <label>Last Name:</label>
   <input type={"text"} placeholder="Last Name" onChange={e=> {setPostl(e.target.value)}} ></input><br/>
   <button onClick={updateData}>Ubdate</button>
  
 
   
 </div>
  )
}
export default Updata2