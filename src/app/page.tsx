


// import { About } from '@/components/About'
// import Navbar from '@/components/Navbar'
// import { Skills } from '@/components/Skills'
// import React from 'react'

// const page = () => {
 
 
//   return (
//     <>
//   <Navbar/>
//   <div id="img">
//     <img id='photo'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8M0Py25M1Yo2t6RNEoHvHEJjKdhSmL4yffg&s" ></img>
    
//     <br />
//     <br />

//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
// <br />
// <br />
// <br />
// <br />
// <br />


//     <About/>
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
// <Skills/>
//     <br />

//   <br />
//   <br />
//   <br />
//   <br />
//   <br />

//   </div>




// </> ) 
// }

// export default page




import { About } from '@/components/About';
import Navbar from '@/components/Navbar';
import { Skills } from '@/components/Skills';
import React from 'react';

const Page = () => {
  return (
    <>
      <Navbar />
      <div>
      <img 
  id="photo" 
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8M0Py25M1Yo2t6RNEoHvHEJjKdhSmL4yffg&s" 
  alt="MY porfile" 
  className="h-100 w-100" 
/>

        <About />
        
        <Skills />
      </div>
    </>
  );
}

export default Page;
