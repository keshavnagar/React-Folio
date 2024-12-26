import './ItemDate.css'

function ItemDate(props) {
    const date = props.date;
    const montth = props.montth
    const year = props.year;
    return (
        // here we use directly value like 20 june 2024 , but its wrong , we should use the the variable with the value of date , month and year 

        <div>
            <div className='date' >
                <span>{date}</span>
                <span>{montth}</span>
                <span>{year}</span>
            </div>
            {props.children};
        </div>


    )
}

export default ItemDate; 