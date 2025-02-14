import  { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
    const navLinks = ['Home', 'About' ,'Portfolio', 'Experience','contact']
    const links = navLinks.map((navlink , index) => ({
        link:navlink,
        id:index+1,
    }))
        
    const[nav , setNav] = useState(false)
     
  return (
    <div className='flex justify-between items-center w-full text-white fixed py-3  bg-black'> 
    <div>
    <h1 className='text-3xl font-signature ml-2'>Josiah-Ok</h1>
    </div>

    <ul className=' hidden md:flex'>
        {links.map((eachLink) => 
         <li key={eachLink.id}className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>

            <Link to={eachLink.link} smooth duration={500}>{eachLink.link}</Link>
         </li>
        )}
    </ul>

    <div onClick={(e) =>  {e.preventDefault(); setNav(!nav)}} className='z-10 md:hidden ' > 
        {nav ? <FaTimes size={30} className='cursor-pointer pr-4 text-text '/> : <FaBars size={30} className='cursor-pointer pr-4 md:hidden  text-text'/> }
    </div>
    

    {
        nav && 

        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 '>
    {links.map((eachLink) => 
         <li key={eachLink.id}className='text-4xl py-4 cursor-pointer capitalize  text-gray-500 '>{eachLink.link}</li>
        )}
    </ul>
    }
    

    </div>
  );
}

export default Navbar;
