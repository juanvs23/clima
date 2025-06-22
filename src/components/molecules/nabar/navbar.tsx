import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Style from './styles.module.css'
import { headerLinks } from '@/src/constants/proyects';
import HeaderLinks from '../../atoms/headerLinks/headerLinks';

const Navbar = ({isTop}:{isTop:boolean}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    
    <nav className=" top-0 left-0">
      
        <div className="flex items-center justify-between h-16">
          {/* Logo */}

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-8">
            <HeaderLinks links={headerLinks} isTopColor={isTop} isMobile={false} />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <Menu color="#ffffff" />
              
            </button>
          </div>
        </div>
     

      {/* Mobile Menu */}
    </nav>
   
       <div className={`lg:none ${Style.slice} ${isOpen?Style.sliceOpen:''} w-[250px] min-h-[100vh] fixed top-0 right-0 bottom-0`}>

       <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg min-h-[100vh]">
         <button onClick={toggleMenu} >
         <X />
         </button>
         <HeaderLinks links={headerLinks} isTopColor={false} isMobile={true} />
       </div>
     </div>
  
     
    </>
  );
};

export default Navbar;
