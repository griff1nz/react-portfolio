import Link from 'react'
import classes from './ProjectCard.css';

function ProjectCard(props) {
    return <li className='w-10/12 p-5'>
        <div className='ml-4 mb-4'>
            <h3 className='text-color text-6xl underline'>{props.title}</h3>
            <p className='mt-6 text-color text-xl'>{props.description}</p>
            <p className='mt-3 text-color text-xl'>My Role: {props.role}</p>

        </div>
        <div className='place-content-center grid'>
            <img src={props.image} alt={props.title} className='project-image'></img>
            <a href={props.app} target='_blank'><img src='https://static.thenounproject.com/png/1483687-200.png' className='h-[40px] w-[40px] mr-4'/></a>
            <a href={props.repo} target='_blank'><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' target='_blank' className='h-[40px] w-[40px]' /></a>
        </div>
        <div className='flex justify-betweenw-6/12 md:w-full '>
            <p className='mt-6 text-color md:text-xl text-md'>Technologies: {props.technologies}</p>
        </div>

        <hr className='w-full m-auto mt-8 hr'></hr>
    </li>
}

export default ProjectCard