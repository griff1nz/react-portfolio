import ProjectList from '../components/Project/ProjectList';
import classes from './TechSpan.css';
import { motion } from 'framer-motion';

const project_data = [
    {
        id: 'p1',
        title: 'Gods and Beasts Game',
        image: '../../images/Godsandbeasts.png',
        description: 'An online card game! Face off against a computer player using a set of ten cards.',
        role: 'Backend Developer',
        repo: 'https://github.com/ashleyh5440/gods-beasts-game',
        app: 'https://gods-and-beasts-game-15c8c3fec868.herokuapp.com/',
        technologies: <><span className='techspan border-2 border-orange-500'>Handlebars</span><span className='techspan border-2 border-yellow-300'>JavaScript</span><span className='techspan border-2 border-pink-400'>MySQL</span><span className='techspan border-2 border-green-500'>Node.js</span></>
        // 'Handlebars, JavaScript, Node.js, Express, MySQL'
    },
    {
        id: 'p2',
        title: 'Dog Breeds For You',
        image: '../../images/Dogs.png',
        description: 'Search a dog breed to see its stats as well as an image!',
        role: 'Backend Developer',
        repo: 'https://github.com/Lychnian/dog-breeds-for-you',
        app: 'https://lychnian.github.io/dog-breeds-for-you/',
        technologies: <><span className='techspan border-2 border-orange-600'>HTML</span><span className='techspan border-2 border-yellow-300'>JavaScript | jQuery</span></>
    },
    {
        id: 'p3',
        title: 'Baby Steps',
        image: '../../images/babysteps.png',
        description: 'Create journal entries and upload images to track your pregnancy journey.',
        role: 'Frontend Developer',
        repo: 'https://github.com/jeffch19/Baby-Steps',
        app: 'https://baby-steps.onrender.com/',
        technologies: <><span className='techspan border-2 border-sky-300'>React</span><span className='techspan border-2 border-lime-600'>MongoDB</span><span className='techspan border-2 border-[#E632AD]'>GraphQL</span><span className='techspan border-2 border-[#38BDF8]'>Tailwind CSS</span></>
    },
    {
        id: 'p4',
        title: 'Note Taker',
        image: '../../images/note.png',
        description: 'Write, edit, and delete notes in an easy to use application.',
        role: 'Sole Author',
        repo: 'https://github.com/griff1nz/note-taker',
        app: 'https://zion-note-taker-aedc66c4768d.herokuapp.com/',
        technologies: <><span className='techspan border-2 border-slate-500'>ExpressJS</span><span className='techspan border-2 border-yellow-300'>JavaScript</span><span className='techspan border-2 border-green-500'>Node.js</span></>
        // 'JavaScript, Express, Node.js'
    },
    {
        id: 'p5',
        title: 'Tech Blog',
        image: '../../images/mvc-blog.png',
        description: 'Create, view, and comment on posts about technology.',
        role: 'Sole Author',
        repo: 'https://github.com/griff1nz/tech-blog',
        app: 'https://hbs-tech-blog-59b7f5e6f9b6.herokuapp.com/',
        technologies: <><span className='techspan border-2 border-pink-400'>MySQL</span><span className='techspan border-2 border-yellow-300'>JavaScript</span><span className='techspan border-2 border-green-500'>Node.js</span></>
    }

]
function Projects() {

    return <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3, ease: 'easeOut' }}
    exit={{opacity: 0}} className='height85 my-4'>
        <h1 className='text-5xl font-semibold text-color text-center'>My Projects</h1>
        <div>
            <ProjectList projects={project_data} />
        </div>
    </motion.div>
}

export default Projects;