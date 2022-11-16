import React from 'react';
import './HeaderStyle.css';
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <div className="navbar">
       <div className='logo'>
           <h2>Food.||.<span>hub</span></h2>
       </div>
       <div className="search">
           <input type="text" placeholder="search"/>
       </div>
       <div className='classlists'>
           <li><Link to="/" className='x'>Home</Link></li>
           <li><Link to="/service" className='x'>Service</Link></li>
           <li><Link to="/recipe" className='x'>Recipe</Link></li>
           <li><Link to="/feedback" className='x'>Feedback</Link></li>
       </div>
       <div className='buttons'>
           <button className='login'>Login</button>
           <button className='sign'>SignUp</button>
       </div>
    </div>
  )
}

export default Header;
