import React from 'react';
import aboutImage from "../assets/about.webp"

const About = () => {
  return (
   <section className='max-w-7xl mx-auto border-b-2 mt-20'id='about'>
    <h1 className='text-xl lg:text-3xl tracking-tight text-center uppercase mb-12 mx-4'>About</h1>
    <div className='flex flex-col items-center lg:space-x-8 mx-4 mb-20'>
        <div className='mb-8 lg:mb-0'>
            <img src={aboutImage} alt="about vastuSpaze" className='w-full' />

        </div>
        <p className='text-lg lg:text-3xl font-light text-center lg:text-left max-w-5xl mx-auto mt-8'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui dolor, recusandae unde officiis ab nostrum aperiam expedita aliquam ratione 
        est pariatur quasi reprehenderit quo quos natus reiciendis, fugiat totam nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vero quasi nemo sit nisi! Perspiciatis quasi blanditiis,
         exercitationem accusantium, excepturi sit et consectetur ipsum placeat sequi ullam, magnam rem corporis.
        </p>

    </div>

   </section>
  )
}

export default About
