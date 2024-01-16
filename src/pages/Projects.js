import ProjectList from '../components/Project/ProjectList';
const DUMMY_DATA = [
    {
        id: 'p1',
        title: 'Gods and Beasts Game',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png',
        description: 'An online card game! Select ten gods or beasts to put in your deck, then face off against a computer.',
        role: 'Backend Developer',
        technologies: 'Handlebars, JavaScript, Node.js, Express'
    },
    {
        id: 'p2',
        title: 'Weather Dashboard',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png',
        description: 'Search for an area and view the weather there. Uses OpenWeatherMap\'s API.',
        role: 'Sole Author',
        technologies: 'HTML, JavaScript, jQuery'
    },
    {
        id: 'p3',
        title: 'Note Taker',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png',
        description: 'Write, edit, and delete notes in an easy to use application.',
        role: 'Sole Author',
        technologies: 'JavaScript, Express, Node.js'
    },
    {
        id: 'p4',
        title: 'Dog Breeds For You',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png',
        description: 'Search a dog breed to see its stats as well as an image!',
        role: 'Backend Developer',
        technologies: 'Handlebars, JavaScript'
    },
    {
        id: 'p5',
        title: 'Employee Tracker',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png',
        description: 'Easily manage a database containing a group of employees for a company.',
        role: 'Sole Author',
        technologies: 'MySQL, JavaScript, Node.js'
    }

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