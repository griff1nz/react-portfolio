import classes from './ProjectCard.css';

function ProjectCard(props) {
    return <li className='w-10/12 p-5'>
        <div className='ml-4 mb-4'>
            <h3 className='text-white text-6xl underline'>{props.title}</h3>
            <p className='mt-6 text-white text-xl'>{props.description}</p>
            <p className='mt-3 text-white text-xl'>My Role: {props.role}</p>

        </div>
        <div className='place-content-center grid '>
            <img src={props.image} alt={props.title} className='project-image'/>
        </div>
            <p className='mt-6 text-white text-xl'>Technologies: {props.technologies}</p>
        <hr className='w-full m-auto mt-8'></hr>
    </li>
}

export default ProjectCard