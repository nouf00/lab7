
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Del() {
    const [state, setState] = useState([]);

    let url = "https://636242667521369cd068e2ba.mockapi.io/ToDo"
  
    useEffect(() => {
      axios.get(url).then((res) => {
        setState(res.data)
  
  
      })
    }, [])
  
    const ontDelete = (id) => {
      console.log(id);
      axios.delete(`https://636242667521369cd068e2ba.mockapi.io/ToDo${id}`).then(res => {
        console.log(res);
        setState(state.filter(del => {
          return del.id != id;
        }))
      })
  
  
      // axios.delete("https://6362424d66f75177ea2a99c0.mockapi.io/toDo", {
  
      // }).then((res) => {
      //   console.log(res);
      // })
  
    }
  
  
  
    return (
      <div>
  
  
  
        {state.map(Items => {
          return (
            <div >
              <p> Frist name: {Items.Post}</p>
              <p> Last Name:{Items.Postl}</p>
              <button onClick={() => { ontDelete(Items.id) }}> Delete </button>
           
  
            </div>
          )
        }
        )
        }
      </div>
  
  
  
    )
  }

export default Del