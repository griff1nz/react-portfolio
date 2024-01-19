import { Link } from 'react-router-dom';
import classes from './Footer.css';
function Footer() {
    return <footer>
        <div className='items-center flex justify-between p-2'>
            <p className='text-center text-white mx-4'>Zion Griffin ©2024.</p>
            <ul className='flex'>
                <Link to='https://github.com/griff1nz' target='_blank'><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='GitHub' className='h-[30px] w-[30px] mx-4'></img></Link>
                <Link to='https://www.linkedin.com/in/zion-griffin-9aa245243/' target='_blank'><img src='https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_linkedin-512.png' alt='LinkedIn' className='h-[30px] w-[30px] mx-4'></img></Link>
                <Link to='mailto:contact@ziongriffin.com' target='_blank'><img src='https://cdn-icons-png.flaticon.com/512/542/542689.png' alt='Email' className='h-[30px] w-[30px] mx-4'></img></Link>
                <Link to='tel:4844252044'><img src='https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png' alt='Phone' className='h-[30px] w-[30px] mx-4'></img></Link>
            </ul>
        </div>
    </footer>
}
export default Footer;