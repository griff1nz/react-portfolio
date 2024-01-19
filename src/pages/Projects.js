import ProjectList from '../components/Project/ProjectList';
const project_data = [
    {
        id: 'p1',
        title: 'Gods and Beasts Game',
        image: '../../images/Godsandbeasts.png',
        description: 'An online card game! Face off against a computer player using a set of ten cards.',
        role: 'Backend Developer',
        repo: 'https://github.com/ashleyh5440/gods-beasts-game',
        app: 'https://gods-and-beasts-game-15c8c3fec868.herokuapp.com/',
        technologies: 'Handlebars, JavaScript, Node.js, Express, MySQL'
    },
    {
        id: 'p2',
        title: 'Dog Breeds For You',
        image: '../../images/Dogs.png',
        description: 'Search a dog breed to see its stats as well as an image!',
        role: 'Backend Developer',
        repo: 'https://github.com/Lychnian/dog-breeds-for-you',
        app: 'https://lychnian.github.io/dog-breeds-for-you/',
        technologies: 'Handlebars, JavaScript'
    },
    {
        id: 'p3',
        title: 'Weather Dashboard',
        image: '../../images/Weather.png',
        description: 'Search for an area and view the weather there. Uses OpenWeatherMap\'s API.',
        role: 'Sole Author',
        repo: 'https://github.com/griff1nz',
        app: 'https://griff1nz.github.io/weather-dashboard/',
        technologies: 'HTML, JavaScript, jQuery'
    },
    {
        id: 'p4',
        title: 'Note Taker',
        image: '../../images/note.png',
        description: 'Write, edit, and delete notes in an easy to use application.',
        role: 'Sole Author',
        repo: 'https://github.com/griff1nz/note-taker',
        app: 'https://zion-note-taker-aedc66c4768d.herokuapp.com/',
        technologies: 'JavaScript, Express, Node.js'
    },
    {
        id: 'p5',
        title: 'Employee Tracker',
        image: '../../images/employee.png',
        description: 'Easily manage a database containing a group of employees for a company.',
        role: 'Sole Author',
        repo: 'https://github.com/griff1nz/employee-tracker',
        app: 'https://drive.google.com/file/d/1TjG6dRq4q2AlsC5r6ISaN6Yk4Rwj2eVQ/view',
        technologies: 'MySQL, JavaScript, Node.js'
    }

]

function Projects() {

    return <div className='height85'>
        <h1 className='text-8xl font-semibold text-white text-center'>My Projects</h1>
        <div>
            <ProjectList projects={project_data} />
        </div>
    </div>
}

export default Projects;