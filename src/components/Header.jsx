import React, { useState, useEffect } from 'react';

import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';

function Header() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(
    window.innerWidth <= 991 // Adjust the breakpoint as needed
  );

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setIsMobileOrTablet(window.innerWidth <= 991); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return (
    <>
      <div>
        {isMobileOrTablet ? (
          // Component to show on mobile or tablet
          <>
          <NavbarMobile/>
        
          </>) : (
          // Component to show on laptop or large screens
          <>
          <Navbar/>
          </>
        )}
      </div>
    </>
  );
}

export default Header;
