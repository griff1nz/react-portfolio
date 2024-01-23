import { Link } from 'react-router-dom';
import classes from './Footer.css';
function Footer() {
    return <footer>
        <div className='flex justify-between p-2'>
            <div>
                <p className='mt-1 text-center text-white sm:mx-4 mx-2 text-xs sm:text-base'>©2024 Zion Griffin. <Link to='https://github.com/griff1nz/react-portfolio' target='_blank' className='underline'>View the code</Link></p>
            </div>
            <div className='flex'>
                <Link to='https://github.com/griff1nz' target='_blank'><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='GitHub' className='sm:h-[35px] sm:w-[35px] h-[30px] w-[30px] sm:mx-4 mx-1 p-1 hover:bg-white rounded-md ease-in-out duration-150'></img></Link>
                <Link to='https://www.linkedin.com/in/zion-griffin-9aa245243/' target='_blank'><img src='https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_linkedin-512.png' alt='LinkedIn' className='sm:h-[35px] sm:w-[35px] h-[30px] w-[30px] sm:mx-4 mx-1 p-1 hover:bg-white rounded-md ease-in-out duration-150'></img></Link>
                <Link to='mailto:contact@ziongriffin.com' target='_blank'><img src='https://cdn-icons-png.flaticon.com/512/542/542689.png' alt='Email' className='sm:h-[35px] sm:w-[35px] h-[30px] w-[30px] sm:mx-4 mx-1 p-1 hover:bg-white rounded-md ease-in-out duration-150'></img></Link>
                <Link to='tel:4844252044'><img src='https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png' alt='Phone' className='sm:h-[35px] sm:w-[35px] h-[30px] w-[30px] sm:mx-4 mx-1 p-1 hover:bg-white rounded-md ease-in-out duration-150'></img></Link>
            </div>
        </div>
    </footer>
}
export default Footer;