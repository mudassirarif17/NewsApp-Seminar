import React from 'react'
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
  <div className='sticky-top'>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="#">iNewsApp</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">General<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/science">Science</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/technology">Technology</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/sports">Sports</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/health">Health</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/business">Business</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/entertainment">Entertainment</Link>
      </li>
    </ul>
    
      {!localStorage.getItem('token')?<form className="form-inline my-2 my-lg-0"><Link to="/login" role="button"className="btn btn-outline-primary my-2 mx-1 my-sm-0" type="submit">LogIn</Link>
      <Link to="/signin" role="button" className="btn btn-outline-primary my-2 mx-1 my-sm-0" type="submit">SignIn</Link></form>:
      <Link to="/logout" className="btn btn-outline-primary my-2 mx-1 my-sm-0" type="submit">LogOut</Link>
    }
  </div>
</nav>
    </div>
  )
}

export default Navbar
