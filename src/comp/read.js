import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Read() {
  const [state, setState] = useState([]);

 

  useEffect(() => {
    axios.get('https://636242667521369cd068e2ba.mockapi.io/ToDo').
    then((res) => {
      console.log(res.data)
      setState(res.data)


    })
  }, [])

  


  



  return (
    <div>



      {state.map(Items => {
        return (
          <div >
            <p> Frist name: {Items.Post}</p>
            <p> Last Name:{Items.Post1}</p>
        </div>
        )
      }
      )
      }
    </div>



  )
}

export default Read