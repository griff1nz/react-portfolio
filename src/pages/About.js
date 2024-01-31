import AboutCard from '../ui/AboutCard'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function About() {
    const [twoDivs, setTwoDivs] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 900) {
                setTwoDivs(false);
            }
            else {
                setTwoDivs(true);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3, ease: 'easeOut' }} 
    exit={{ opacity: 0 }}
    className='height85 my-4'>
        <h1 className='text-color text-center text-5xl font-semibold mb-4'>About Me</h1>
        {twoDivs && <div className='flex'>
            <div className='grid grid-cols-1 place-items-center items-start'>
                <AboutCard>
                    <img src='../../images/about-me.jpg' alt='Placeholder' className='m-auto object-right mb-3' id='portrait' />
                    <p className='text-color text-3xl  font-semibold'>👋 Hello, my name is Zion Griffin.</p>
                    <p className='text-color text-xl my-2'>Embarking on my journey as a web developer, I am enthusiastic about creating impactful digital experiences. Eager to contribute and learn, I bring a fresh perspective, a passion for coding, and a dedication to mastering the art of web development.</p>
                </AboutCard>
                <AboutCard>
                    <p className='text-color text-3xl  font-semibold mt-3'>🖥️ Passion for Coding</p>
                    <p className='text-color text-xl my-2'>What drives me in the world of web development is the ability to turn ideas into reality through code. I am passionate about creating user-friendly interfaces and solving problems with creative solutions. Every line of code I write is a step towards building a better digital experience.</p>
                </AboutCard>
                <AboutCard>
                    <p className='text-color text-3xl  font-semibold mt-3'>📖 Learning Journey</p>
                    <p className='text-color text-xl my-2'>As an entry-level developer, I am committed to continuous learning. I actively seek out opportunities to expand my skill set through online courses, tutorials, and hands-on projects. I am eager to delve deeper into both front-end and back-end development to broaden my understanding of web development.</p>
                </AboutCard>
            </div>
            <div className='grid grid-cols-1 place-items-center items-start'>
                    <AboutCard>
                        <p className='text-color text-3xl  font-semibold mt-3'>🎓 Educational Background</p>
                        <p className='text-color text-xl my-2'>As of March 2024, I will have graduated with a certificate in Full-Stack Web Development from University of Pennsylvania. During my academic journey, I developed a strong foundation in programming languages such as HTML, CSS, and JavaScript, and gained hands-on experience in building responsive and dynamic web applications.
                            Prior to that, I passed AP Computer Science A and achieved an exam score of 5 before graduating from Emmaus High School in Emmaus, PA.</p>
                    </AboutCard>
                <AboutCard>
                    <p className='text-color text-3xl  font-semibold mt-3'>🎶 Beyond the Screen</p>
                    <p className='text-color text-xl my-2'>Outside of coding, I'm an avid learner and enjoy trying new activities. When not immersed in lines of code, you'll find me playing the saxophone or cello, working out at the gym, cooking, or spending time outside.</p>
                    <img src='../../images/saxophone.jpg' alt='Saxophone playing' className='w-3/4 m-auto h-[400px] object-cover'></img>
                </AboutCard>
                <AboutCard>
                    <p className='text-color text-3xl  font-semibold mt-3'>✉️ Connect with Me</p>
                    <p className='text-color text-xl my-2'>I am excited about the prospect of contributing to innovative projects and expanding my skills in a dynamic work environment. Explore my portfolio to see my projects and fill out the form on the <a href='/contact' className='underline'>Contacts</a> page, or connect with me on <a href='https://www.linkedin.com/in/zion-griffin-9aa245243/' className='underline' target='_blank'>LinkedIn</a>. I am eager to connect with fellow developers, mentors, and potential collaborators.</p>
                </AboutCard>
            </div>
        </div>
        }
        {!twoDivs && <div className='grid grid-cols-1 place-items-center items-start'>
                <AboutCard>
                    <img src='../../images/about-me.jpg' alt='Placeholder' className='m-auto object-right mb-3' id='portrait' />
                    <p className='text-color text-3xl  font-semibold'>👋 Hello, my name is Zion Griffin.</p>
                    <p className='text-color text-xl my-2'>Embarking on my journey as a web developer, I am enthusiastic about creating impactful digital experiences. Eager to contribute and learn, I bring a fresh perspective, a passion for coding, and a dedication to mastering the art of web development.</p>
                </AboutCard>
                <AboutCard>
                    <p className='text-color text-3xl  font-semibold mt-3'>🎓 Educational Background</p>
                    <p className='text-color text-xl my-2'>As of March 2024, I will have graduated with a certificate in Full-Stack Web Development from University of Pennsylvania. During my academic journey, I developed a strong foundation in programming languages such as HTML, CSS, and JavaScript, and gained hands-on experience in building responsive and dynamic web applications.
                            Prior to that, I passed AP Computer Science A and achieved an exam score of 5 before graduating from Emmaus High School in Emmaus, PA.</p>
                </AboutCard>
                <AboutCard>
                    <p className='text-color text-3xl  font-semibold mt-3'>🖥️ Passion for Coding</p>
                    <p className='text-color text-xl my-2'>What drives me in the world of web development is the ability to turn ideas into reality through code. I am passionate about creating user-friendly interfaces and solving problems with creative solutions. Every line of code I write is a step towards building a better digital experience.</p>
                </AboutCard>
                <AboutCard>
                    <p className='text-color text-3xl  font-semibold mt-3'>📖 Learning Journey</p>
                    <p className='text-color text-xl my-2'>As an entry-level developer, I am committed to continuous learning. I actively seek out opportunities to expand my skill set through online courses, tutorials, and hands-on projects. I am eager to delve deeper into both front-end and back-end development to broaden my understanding of web development.</p>
                </AboutCard>
                <AboutCard>
                    <p className='text-color text-3xl  font-semibold mt-3'>🎶 Beyond the Screen</p>
                    <p className='text-color text-xl my-2'>Outside of coding, I'm an avid learner and enjoy trying new activities. When not immersed in lines of code, you'll find me playing the saxophone or cello, working out at the gym, cooking, or spending time outside.</p>
                    <img src='../../images/saxophone.jpg' alt='Saxophone playing' className='w-3/4 m-auto h-[400px] object-cover'></img>
                </AboutCard>
                <AboutCard>
                    <p className='text-color text-3xl  font-semibold mt-3'>✉️ Connect with Me</p>
                    <p className='text-color text-xl my-2'>I am excited about the prospect of contributing to innovative projects and expanding my skills in a dynamic work environment. Explore my portfolio to see my projects and fill out the form on the <a href='/contact' className='underline'>Contacts</a> page, or connect with me on <a href='https://www.linkedin.com/in/zion-griffin-9aa245243/' className='underline' target='_blank'>LinkedIn</a>. I am eager to connect with fellow developers, mentors, and potential collaborators.</p>
                </AboutCard>
            </div>}
    </motion.div>
}

export default About;