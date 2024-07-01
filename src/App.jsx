import { Link } from 'react-router-dom'
import React from 'react'

function App() {
  return (
    <>
     <nav>
        <ul>  
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/contacto'>Contacto</Link>
          </li>
          <li>
            <Link to='/notFound'></Link>
          </li>
        </ul>
     </nav>
     <div>
      Inicio
     </div>
    </>
  )
}
export default App
