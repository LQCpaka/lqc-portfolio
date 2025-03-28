import { Separator } from '@radix-ui/react-separator';
import React from 'react'

const Footer = () => {
    return (
      <footer className="py-10 flex flex-col items-center w-full align-middle">
        <Separator className='bg-white w-full h-[1px]' />
        <div className="container mx-auto text-center">
          <p className="mb-2">© 2025 Your Website. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="/about" className="text-gray-400 hover:text-white transition duration-300">
              About
            </a>
            <a href="/contact" className="text-gray-400 hover:text-white transition duration-300">
              Contact
            </a>
            <a href="/privacy" className="text-gray-400 hover:text-white transition duration-300">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  