function SkillCard(props) {
    
    return <div className='flex flex-col'><img src={props.image} alt={props.desc} className='h-[60px] w-[60px] m-2 mx-6 object-scale-down' />
        <p className='text-center text-white'>{props.desc}</p>
    </div>

}
export default SkillCard;