
import { Routes , Route } from 'react-router-dom';
import Post from './post';
import Upatad from './upatad';
import Read from './read';
import Del from './del';
import Updata2 from './Updata2';
function Rout() {
    return (
        <div >

<Routes>
<Route  path='/' element={<Post/>}></Route>
<Route path='/Read' element={<Read/>}></Route>
<Route path='/Upatad' element={<Upatad/>}></Route>
<Route path='/Updata2' element={<Updata2/>}></Route>
<Route path='/Del' element={<Del/>}></Route>
</Routes>

{/* <Read></Read> */}



        </div>
  )
}

export default Rout