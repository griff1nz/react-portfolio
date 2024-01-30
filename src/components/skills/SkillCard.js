function SkillCard(props) {

    return <div className='flex flex-col mx-6 justify-center align-center w-[60px]'><img src={props.image} alt={props.desc} className='h-[60px] w-[60px] object-scale-down mb-2' />
        <div className='mx-auto'>
            <span className='text-center text-color'>{props.desc}</span>
        </div>
    </div>

}
export default SkillCard;