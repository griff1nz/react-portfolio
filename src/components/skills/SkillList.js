import SkillCard from './SkillCard';
function SkillList(props) {
    return <div className='flex justify-center flex-wrap mb-4'>
        {props.skills.map(skill => <SkillCard key={skill.id} image={skill.image} desc={skill.desc}/>)}
    </div>
}
export default SkillList;