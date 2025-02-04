import React from 'react'
import { ReactTyped,Typed } from "react-typed";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Hero = () => {
  
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my:20'>
        <div className='flex flex-col md:flex-row md:justify-between'>
          <div className='md:w-1/2 md:mt-20 space-y-2 order-2 md:order-1'>
            <span className='text-xl'>Welcome to my portfolio</span>
            <div className='flex space-x-1 text-2xl md:4xl'>
              <h1 className='mt-1 md:mt-2'>Hi 👋 I'm </h1>
              {/* <span className='text-blue-600 font-bold'>Developer</span> */}
              <ReactTyped
                className='mt-1 md:mt-2 text-xl md:text-2xl text-blue-400 font-semibold'
                strings={["Muhammad Usman", "Web Developer", "Programmer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className='text-sm md:text-md text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum corrupti autem, aspernatur officiis dolores ab consequatur ipsum ducimus deserunt laboriosam maiores minima, nemo quia iusto sint nostrum! Voluptas, nihil culpa.</p>
            <br />
            {/* Social Media Buttons */}
            <div className='space-y-2'>
              <h1 className='font-semibold'>Available on:</h1>
              <ul className='flex space-x-5'>
                <li><a href="" target='_blank'><FontAwesomeIcon icon={['fab', 'linkedin']} className='text-xl cursor-pointer'/></a></li>
                <li><a href="" target='_blank'><FontAwesomeIcon icon={['fab', 'github']} className='text-xl cursor-pointer'/></a></li>
                <li><a href="" target='_blank'><FontAwesomeIcon icon={['fab', 'youtube']} className='text-xl cursor-pointer'/></a></li>
                <li><a href="" target='_blank'><FontAwesomeIcon icon={['fab', 'instagram']} className='text-xl cursor-pointer'/></a></li>
                <li><a href="" target='_blank'><FontAwesomeIcon icon={['fab', 'facebook']} className='text-xl cursor-pointer'/></a></li>
                <li><a href="" target='_blank'><FontAwesomeIcon icon={['fab', 'twitter']} className='text-xl cursor-pointer'/></a></li>
              </ul> 
            </div>                                                                                 
          </div>

          <div className='md:w-1/2 md:ml-50 md:mt-0 space-y-2 md:align-right order-1 md:order-'>
            <img className='rounded-full md:w-[430px] md:h-[430px]' src="src/assets/Usman Trans Circle Profile Avatar 500x500px .png" alt="M Usman Profile Avatar for Hero Section" />
          </div>

        </div>
      </div>
    </>  )
}

export default Hero
