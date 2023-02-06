import { useState } from 'react';
import NavbarMobileButton from './NavbarMobileButton';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    'Home',
    'PPV',
    'Dynamite',
    'Rampage',
    'Dark / Dark Elevation',
  ];
  return (
    <nav className='flex items-center justify-between bg-yellow-700 py-9'>
      <div className='mx-12'>
        <img
          src='https://res.cloudinary.com/buraiyen/image/upload/v1675282964/All_Elite_Network/aew-logo_fpfxqw.png'
          loading='lazy'
          className='w-[125px]'
          alt='AEW Logo'
        />
      </div>
      <div className='hidden md:block'>
        <ul>
          {navLinks.map((link, i) => (
            <li className='inline mx-4 text-lg font-bold' key={i}>
              {link}
            </li>
          ))}
        </ul>
      </div>
      <div className='mr-12 absolute right-0 flex md:hidden'>
        <NavbarMobileButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className='md:hidden'>
        {isOpen && (
          <ul className='z-10 bg-yellow-700 absolute left-0 top-24 flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {navLinks.map((link, i) => (
              <li className='mx-4 w-screen text-lg font-bold' key={i}>
                {link}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
