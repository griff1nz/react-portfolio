import Link from 'react'
import classes from './ProjectCard.css';


function ProjectCard(props) {
    return <li className='sm:w-10/12 p-5'>
        <div className='ml-4 mb-4'>
            <h3 className='text-color text-4xl font-semibold'>{props.title}</h3>
            <p className='mt-6 text-color text-xl'>{props.description}</p>
            <p className='mt-3 text-color text-xl'>My Role: {props.role}</p>

        </div>
        <div className='place-content-center grid'>
            <img src={props.image} alt={props.title} className='project-image'></img>
        </div>
        <div className='flex justify-between'>
            <p className='mt-6 text-color md:text-xl text-sm'>{props.technologies}</p>
            <div className='flex mt-4'>
                <a href={props.app} target='_blank'><img src='https://static.thenounproject.com/png/1483687-200.png' className='sm:h-[40px] sm:w-[40px] w-[20px] h-[20px] mr-4' /></a>
                <a href={props.repo} target='_blank'><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' target='_blank' className='sm:h-[40px] sm:w-[40px]w-[20px] h-[20px]' /></a>
            </div>
        </div>

        <hr className='w-full m-auto mt-8 hr'></hr>
    </li>
}

export default ProjectCard