// import { headers } from 'next/headers'
// import React from 'react'
// import './Navbar.tsx'

// const Navbar = () => {
 
//   return (

//     <>
//     <header className='header'>
//   <a href="/" className='logo'>SHAHBAZ</a>
//   <nav className='navbar'>
//     <a href='/'>HOME</a>
//     <a href="/">ABOUT</a>
//     <a href="/">SKILL</a>

//   </nav>
//     </header>
//   </>)
// }

// export default Navbar



import React from 'react';
import './Navbar.tsx';

const Navbar = () => {
  return (
    <header className='header'>
      <a href="/" className='logo'>SHAHBAZ</a>
      <nav className='navbar'>
        <a href='/' className='nav-link'>HOME</a>
        <a href='/about' className='nav-link'>ABOUT</a>
        <a href='/skills' className='nav-link'>SKILLS</a>
      </nav>
    </header>
  );
}

export default Navbar;
