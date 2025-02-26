import React, { useState } from 'react'; // Importing React and useState hook for managing state
import { navItems } from '../constants'; // Importing navigation items from a constants file
import { Menu, X } from 'lucide-react'; // Importing icons for the mobile menu

// Defining the Navbar component
function Navbar() {
    // useState is a React Hook that allows us to add state to a function component.
    // Here, 'mobileDrawerOpen' is a state variable that tracks whether the mobile menu is open or closed.
    // 'setMobileDrawerOpen' is a function to update this state.
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    // Function to toggle the mobile drawer state
    // When called, it sets 'mobileDrawerOpen' to its opposite value (true -> false, false -> true)
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <div>
            {/* Navbar container with sticky positioning, blur effect, and bottom border */}
            <nav className='sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-700/80'>
                <div className='container px-4 mx-auto relative lg:text-sm'>
                    <div className='flex justify-between items-center'>
                        {/* Logo Section - Displays the app name */}
                        <div className='flex items-center flex-shrink-0'>
                            <h2 className='text-2xl font-bold'>Sahayog</h2>
                        </div>
                       
                        {/* Desktop Navigation Menu - Visible only on large screens */}
                        <ul className='hidden lg:flex ml-14 space-x-12'>
                            {navItems.map((item, index) => (
                                <li key={index}> {/* Each menu item has a unique key (React optimization) */}
                                    <a href={item.href}>{item.label}</a> {/* Navigation Links */}
                                </li>
                            ))}
                        </ul>
                       
                        {/* Desktop Sign In Buttons - Visible only on large screens */}
                        <div className='hidden lg:flex justify-center space-x-6 items-center'>
                            <a href="#" className='py-2 px-3 border rounded-md'>Sign In</a>
                            {/* Button with gradient background for Sign Up */}
                            <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Sign Up</a>
                        </div>

                        {/* Mobile Menu Button - Displays menu icon for mobile users */}
                        <div className='lg:hidden md:flex flex-col justify-end'>
                            <button onClick={toggleNavbar}> {/* Clicking toggles mobile menu */}
                                {/* If 'mobileDrawerOpen' is true, show 'X' icon; otherwise, show 'Menu' icon */}
                                {mobileDrawerOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>
                   
                    {/* Mobile Drawer - Displays navigation menu when mobile menu is open */}
                    {mobileDrawerOpen && (
                        <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
                            {/* Mobile Navigation Menu */}
                            <ul>
                                {navItems.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href}>{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                           
                            {/* Mobile Sign In Buttons */}
                            <div className='flex space-x-6'>
                                <a href="#" className='py-2 px-3 border rounded-md'>Sign In</a>
                                <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Sign Up</a>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
}

export default Navbar; 
