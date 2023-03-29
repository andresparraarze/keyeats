import React, {useState} from 'react'
import Logo from '../assets/placeholder-logo.png'
import{Link} from 'react-scroll'
import {FaBars, FaTimes} from 'react-icons/fa'


function Navbar() {

  //nav-bar
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
  <div className='fixed w-full h-[90px] flex justify-between items-center px-4 bg-[#a3a3a6] text-white'>
    {/*Logo*/}
    <div>
      <img style={{width: '138px'}} src={Logo} alt="Logo KeyEatsTO" />
    </div>

    {/*Buttons nav bar */}
    <ul className='hidden md:flex hover:cursor-pointer hover:text-gray-100'>
      <li>
        <Link to="homemain" smooth={true} offset={50} duration={500}>
          New
        </Link>
      </li>
      <li>
        <Link to="about" smooth={true} offset={50} duration={500}>
          Map
        </Link>
      </li>
      <li>
        <Link to="skills" smooth={true} offset={50} duration={500}>
          Categories
        </Link>
      </li>
      <li>
        <Link to="what-we-do" smooth={true} offset={50} duration={500}>
          What We Do
        </Link>
      </li>
      <li>
        <Link to="contact-form" smooth={true} offset={50} duration={500}>
          Contact us
        </Link>
      </li>
    </ul>

    {/*Nav bar icon */}
    <div onClick={handleClick} className='md:hidden z-10'>
      {!nav ? <FaBars/> : <FaTimes/> }
    </div>

    {/*Menu mobile version made */}
    <ul className={ !nav ? 'hidden' : 'absolute top-0 left-0 w-full bg-[#a3a3a6] h-screen flex flex-col justify-center items-center'}>
      <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to="homemain" smooth={true} offset={50} duration={500}>
          New
        </Link>
      </li>
      <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to="about" smooth={true} offset={50} duration={500}>
          Map
        </Link>
      </li>
      <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to="skills" smooth={true} offset={50} duration={500}>
          Categories
        </Link>
      </li>
      <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to="projects" smooth={true} offset={50} duration={500}>
          What We Do
        </Link>
      </li>
      <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to="contact-form" smooth={true} offset={50} duration={500}>
          Contact us
        </Link>
      </li>
    </ul>
  </div>
  )
}

export default Navbar