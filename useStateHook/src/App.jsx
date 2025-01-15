import { useState } from 'react'

import './App.css'



function App() {

  const [name, setname] = useState('kratik');

const HandleClick = () => {
  setname ('raj');
}
 return (
           <div className="home">
            <h1>Home page</h1>
            <button onClick={HandleClick} >Click</button>
            <p>{name}</p>
           </div>   
  );
}

export default App
