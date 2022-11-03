import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Upatad() {
  
  return (
    <div className='contener'>
   <Link to="/Updata2"><button  >Update</button></Link>
   <Link to="/Del"><button >Delete</button></Link> 
 
   
 </div>
  )
}

export default Upatad