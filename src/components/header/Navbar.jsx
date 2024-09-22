import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
//   var tl = new TimelineMax({repeat: -1, repeatDelay:-1,yoyo:true});
// tl.to("#spritetarget", 1.5,{backgroundPosition:"-4900px 0",  ease:SteppedEase.config(10)},"x");
// tl.set("#spritetarget", {backgroundPosition:"0 0"});
// tl.to("#spritetarget", 1.5,{backgroundPosition:"-4900px 0", ease:SteppedEase.config(10)});
  return (
    <div className='nav flex flex-row justify-center items-center top-0 fixed w-full h-[50px] md:h-[80px] p-1 bg-transparent shadow-lg shadow-lime-100 backdrop-blur-lg'>
      <div className='flex flex-row justify-center items-center w-full h-full bg-transparent' >
      <Link to="/" className='flex flex-row justify-center items-center w-full h-full bg-transparent decoration-transparent' >
        <img className='w-[50px] h-[45px] md:w-[70px] md:h-[70px] bg-transparent' src="https://www.gstatic.com/android/keyboard/emojikitchen/20240530/u2604-ufe0f/u2604-ufe0f_u1f372.png" alt="img" />
      </Link>
      {/* <div id='spritetarget' className='w-[50px] h-[45px] md:w-[70px] md:h-[70px] bg-fixed m-auto relative' style={{"background-image": "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/56901/sprite.png)", "background-repeat": "repeat-x"}}></div> */}
      </div>
    </div>
  )
}

export default Navbar
