import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import classes from './MainNav.css';
import { useState, useEffect } from 'react';

function MainNav() {
    const [showMenu, setShowMenu] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 900) {
                setShowMenu(false);
            }
            else {
                setShowMenu(true);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const setDarkMode = () => {
        document.querySelector('body').setAttribute('theme', 'dark');
    };
    const setLightMode = () => {
        document.querySelector('body').setAttribute('theme', 'light');
    };
    const toggleTheme = (e) => {
        if (document.querySelector('body').getAttribute('theme') === 'dark') {
            setLightMode();
        }
        else {
            setDarkMode();
        }
    }
    // const isMobile = window.screen.width > 600
    return <header className='sticky top-0 border-b border-black'>
        <nav className="backdrop-blur-lg p-2">
            <div className="w-11/12 flex mx-auto p-4 justify-center justify-between items-center">
                <div className='w-3/12'>
                    <button className='rounded-sm hover:bg-white hover:scale-95 p-2 transition ease-in-out duration-300' onClick={toggleTheme}><img src='https://cdn-icons-png.flaticon.com/512/6714/6714978.png' alt='Dark Mode' className='h-[30px] w-[30px]'></img></button>
                </div>
                <div className='w-3/12 flex justify-center'>
                    <Link to='/' className=''>
                        <img id='logo' src='../../logo.svg' className='hover:animate-[spin_0.5s]'></img>
                    </Link>
                </div>
                {showMenu && <div className="hidden w-auto md:block w-3/12" id="navbar-solid-bg">
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 flex justify-end">
                        <li>
                            <NavLink to="/" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent hover:text-blue-500 hover:bg-gray-700 transition ease-in-out duration-300" aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent hover:text-blue-500 hover:bg-gray-700 transition ease-in-out duration-300">About Me</NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent hover:text-blue-500 hover:bg-gray-700 transition ease-in-out duration-300">Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent hover:text-blue-500 hover:bg-gray-700 transition ease-in-out duration-300">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                }
                {!showMenu && <div className="w-auto md:block w-3/12 flex justify-end" id="navbar-solid-bg">
                    <button className='bg-slate-600 rounded-lg'>
                        <img src='https://cdn4.iconfinder.com/data/icons/interface-essential-vol-1/24/navigation-menu-1--button-parallel-vertical-lines-menu-navigation-three-hamburger-512.png' alt='collapsible' />
                    </button>
                </div>}
            </div>
        </nav>


    </header>
}
export default MainNav;