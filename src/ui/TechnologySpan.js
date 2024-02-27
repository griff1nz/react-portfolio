import classes from './TechnologySpan.css';

function TechnologySpan(props) {
    return <span className={props.color}>{props.children}</span>
}
export default TechnologySpan;