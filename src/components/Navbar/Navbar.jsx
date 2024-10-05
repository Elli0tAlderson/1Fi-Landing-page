import React  , {useState} from 'react'
import './navbar.css'
import formsvg from '../../../public/form1.svg'
import logo from '../../../public/logo.png'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleClose = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>

      <nav>
        <div className='nav-container'>
          <div className="nav-left">
            <a href="#">Home</a>
            <a href="#">Why 1FI</a>
            <a href="#">how it works</a>
          </div>
          <div className="logo">
            <img src={logo} alt="Logo" className='logo-img' />
          </div>
          <div className="nav-right">
            <a href="#">faq</a>
            <a href="#">connect with us</a>
            <button className='nav-button'><p>Apply Now</p></button>
          </div>
          <div className="hamburger-container" onClick={handleClick}>
            <svg className='hamburger' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
              <path d="M20,14H4c-1.105,0-2-0.895-2-2v0c0-1.105,0.895-2,2-2h16c1.105,0,2,0.895,2,2v0	C22,13.105,21.105,14,20,14z" opacity=".35"></path><path d="M20,7H4C2.895,7,2,6.105,2,5v0c0-1.105,0.895-2,2-2h16c1.105,0,2,0.895,2,2v0C22,6.105,21.105,7,20,7z"></path><path d="M20,21H4c-1.105,0-2-0.895-2-2v0c0-1.105,0.895-2,2-2h16c1.105,0,2,0.895,2,2v0C22,20.105,21.105,21,20,21z"></path>
            </svg>
          </div>
        </div>
      </nav>

      <div className={`overlay ${isOpen?'overlay--active':''}`}>
        <a className="close" onClick={handleClose}>&times;</a>
        <div className="overlay-content">
          <li><a href="#">Home</a></li>
          <li><a href="#">Why 1FI</a></li>
          <li><a href="#">how it works</a></li>
          <li><a href="#">faq</a></li>
          <li><a href="#">connect with us</a></li>
        </div>
      </div>

    </>

  )
}

export default Navbar