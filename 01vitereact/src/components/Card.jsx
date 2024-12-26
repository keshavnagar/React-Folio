import './Card.css';

function Card(props){
    const children = props.children;
    return (
        <div className='Card' >
            {children}
        </div>
    )
}

export default Card;