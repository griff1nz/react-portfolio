import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import classes from './MainNav.css';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
const linkdata = [
    {
        id: 'bruh1',
        name: 'Home',
        destination: '/',
    },
    {
        id: 'bruh2',
        name: 'About Me',
        destination: '/about',
    },
    {
        id: 'bruh3',
        name: 'Projects',
        destination: '/projects',
    },
    {
        id: 'bruh4',
        name: 'Contact',
        destination: '/contact'
    }
];

function MainNav(props) {
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
    const [dropDown, showDropDown] = useState(false);


    const handleClick = () => {
        showDropDown((curr) => (curr == false ? true : false));    
    }

    // const isMobile = window.screen.width > 600
    return <header className='sticky top-0 border-b border-black'>
        <nav className="backdrop-blur-lg p-2">
            <div className="w-11/12 flex mx-auto p-4 justify-center justify-between items-center">
                <div className='w-3/12'>
                    {props.passedComponent}
                </div>
                <div className='w-3/12 flex justify-center'>
                    <Link to='/' className=''>
                        <img id='logo' src='../../logo.svg' className='hover:animate-[spin_0.5s]'></img>
                    </Link>
                </div>
                {showMenu && <div className="hidden w-auto md:block w-3/12" id="navbar-solid-bg">
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 flex justify-end">
                        {linkdata.map((data, i) => <li key={i}>
                            <NavLink to={data.destination} className="navlinks rounded transition ease-in-out duration-300 p-1">{data.name}</NavLink>
                        </li>)}
                    </ul>
                </div>
                }
                {!showMenu && <div className="md:block w-3/12 flex justify-end relative" id="navbar-solid-bg">
                    <button className='float-right mr-4' onClick={handleClick}>
                        <img src='https://cdn4.iconfinder.com/data/icons/interface-essential-vol-1/24/navigation-menu-1--button-parallel-vertical-lines-menu-navigation-three-hamburger-512.png' alt='collapsible' className='w-[25px] h-[25px]' />
                    </button>
                    {dropDown && <div className='absolute top-10 right-0 smallnav w-[150px] border-2 border rounded-md p-2 shadow-[10px_10px_30px_-15px_rgba(0,0,0,1)]'>
                        <ul>
                            {linkdata.map((data, i) => <li key={i} className='my-3'>
                                <NavLink to={data.destination} className="navlinks rounded transition ease-in-out duration-300 p-2 text-xl font-semibold">{data.name}</NavLink>
                            </li>)}
                        </ul>
                    </div>}
                </div>}
            </div>
        </nav>


    </header >
}
export default MainNav;