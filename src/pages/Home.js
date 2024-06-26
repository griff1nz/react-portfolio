import SkillList from '../components/skills/SkillList';
import { useState, useEffect } from 'react';
import { useInView, motion } from 'framer-motion';
import { ReactTyped } from 'react-typed'

const skillData = [
    {
        id: 'i1',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png',
        desc: 'JavaScript'
    },
    {
        id: 'i2',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png',
        desc: "HTML",
    },
    {
        id: 'i3',
        image: 'https://pngimg.com/d/mysql_PNG29.png',
        desc: "MySQL",
    },
    {
        id: 'i4',
        image: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/handlebars_original_wordmark_logo_icon_146484.png',
        desc: "Handlebars",
    },
    {
        id: 'i5',
        image: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png',
        desc: "Node.js",
    },
    {
        id: 'i6',
        image: 'https://youteam.io/blog/wp-content/uploads/2022/04/expressjs_logo.png',
        desc: "ExpressJS",
    },
    {
        id: 'i7',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png',
        desc: "CSS",
    },
    {
        id: 'i8',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
        desc: "React",
    },
    {
        id: 'i9',
        image: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
        desc: "Git",
    },
    {
        id: 'i10',
        image: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png',
        desc: "Java",
    },
    {
        id: 'i11',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png',
        desc: "Tailwind CSS",
    },
    {
        id: 'i12',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png',
        desc: "Bootstrap",
    },
    {
        id: 'i13',
        image: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/mongodb_logo_icon_170943.png',
        desc: 'MongoDB'
    },
    {
        id: 'i14',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png',
        desc: 'GraphQL'
    },
    {
        id: 'i15',
        image: 'https://miro.medium.com/v2/resize:fit:600/1*i2skbfmDsHayHhqPfwt6pA.png',
        desc: 'Go'
    }

]
function Home() {
    return <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, duration: 0.3 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
    >
        <div className='height85 mt-4'>
            <div className='container mx-auto mb-16'>
                <div className='pt-4 flex flex-wrap'>

                    <div
                        className='text-center my-auto mx-auto'>
                        <h1 className='text-8xl text-color text-center font-semibold mb-10'>Hi, I'm <span className='text-sky-300'>Zion</span>.</h1>
                        <p className='text-color text-center text-xl mb-6'>{' '}
                        <ReactTyped strings={['Full Stack Developer', 'Musician', 'Gym Rat']} typeSpeed={100} backSpeed={50} loop/></p>
                    </div>
                    <img src='../../images/portfolio-homepage.jpg' alt='Placeholder' className='m-auto' id='portrait' />
                </div>
            </div>
            <div className='my-4'>
                <h1 className='text-center text-2xl text-color font-semibold my-4'>Summary</h1>
                <p className='text-center text-xl text-color'>A budding software developer holding a Full-Stack Web Development certificate from University of Pennsylvania, skilled in both frontend and backend development.</p>
            </div>
            <hr className='w-8/12 m-auto hr' />
            <h1 className='text-center text-2xl text-color font-semibold my-4'>Skills</h1>
            <div className='w-[55vw] p-4 mx-auto overflow-hidden h-[90px] flex whitespace-nowrap'>
                <SkillList skills={skillData} />
                <SkillList skills={skillData} />
            </div>
        </div>
    </motion.div>
}

export default Home;