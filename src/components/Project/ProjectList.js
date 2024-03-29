import ProjectCard from './ProjectCard';

function ProjectList(props) {
    return <ul className='grid place-items-center mt-10'>
        {props.projects.map(project => <ProjectCard key={project.id} id={project.id} image={project.image} title={project.title} description={project.description} technologies={project.technologies} role={project.role} repo={project.repo} app={project.app}/>)}
    </ul>
}
export default ProjectList;