function Card(props) {
    return <div className='container sm:w-8/12 w-11/12 p-4 mx-auto mb-4 border rounded-md'>{props.children}</div>
}
export default Card;