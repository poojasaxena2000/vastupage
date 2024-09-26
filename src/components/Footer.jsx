import { RiFacebookFill, RiLinkedinFill, RiTwitterFill } from '@remixicon/react'
import React from 'react'

const Footer = () => {
  return (
  <footer className='max-w-7xl mx-auto'>
    <div className='flex flex-col md:flex-row justify-between items-center border-t-2 py-4'>

        <div className='flex space-x-6 mb-2'>
            <a href="https//www.facebook.com" target='_blank' rel='noopener noreferrer' aria-label='vissit our Facebook page'>
            <RiFacebookFill/>
            
            </a>

            <a href="https//www.twitter.com" target='_blank' rel='noopener noreferrer' aria-label='vissit our Twitter page'>
            <RiTwitterFill/>
            
            </a>


            <a href="https//www.linkedin.com" target='_blank' rel='noopener noreferrer' aria-label='vissit our Linkedin page'>
            <RiLinkedinFill/>
            
            </a>

        </div>

        <div>
            <p className='text-sm'>&copy 2024 vastuSpaze.All right reserved</p>
        </div>
    </div>

  </footer>
  )
}

export default Footer
