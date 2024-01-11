import ProjectList from '../components/Project/ProjectList';
const DUMMY_DATA = [
    {
        id: 'p1',
        title: 'Test Project',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png',
        description: 'le troll'
    },
    {
        id: 'p1',
        title: 'Test Project',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png',
        description: 'le troll'
    },
    {
        id: 'p1',
        title: 'Test Project',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png',
        description: 'le troll'
    },
    {
        id: 'p1',
        title: 'Test Project',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png',
        description: 'le troll'
    },

]

function Projects() {

    return <div className='height85'>
        <h1 className='text-8xl font-semibold text-white text-center'>My Projects</h1>
        <div>
            <ProjectList projects={DUMMY_DATA} />
        </div>
    </div>
}

export default Projects;