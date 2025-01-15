import './Card.css'
function Card(props){

    function clickHandler(){
        
        alert("button clicked")
    }
    return (
        <div className="Card" >
            <button onClick={clickHandler} >Click me </button>
            {props.children}
        </div>
    )
}

export default Card;