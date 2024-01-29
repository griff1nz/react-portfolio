function SkillCard(props) {
    
    return <div className='flex flex-col mx-10'><img src={props.image} alt={props.desc} className='h-[60px] w-[60px] object-scale-down' />
        <p className='text-center text-color'>{props.desc}</p>
    </div>

}
export default SkillCard;