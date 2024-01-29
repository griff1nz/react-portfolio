import SkillCard from './SkillCard';
import classes from './Carousel.css';
function SkillList(props) {
    return <div className='flex mb-4 carousel-track h-[90px]'>
        {props.skills.map(skill => <SkillCard key={skill.id} image={skill.image} desc={skill.desc}/>)}
    </div>
}
export default SkillList;