import classes from './ProjectCard.css';

function ProjectCard(props) {
    return <li className='w-10/12 p-5 border-2 border-white-700 mb-3'>
        <div className='ml-4 mb-4'>
            <h3 className='text-white text-6xl underline'>{props.title}</h3>
            <p className='mt-6 text-white text-xl'>{props.description}</p>
        </div>
        <div className='place-content-center grid '>
            <img src={props.image} alt={props.title} className='project-image'/>
        </div>
    </li>
}

export default ProjectCard