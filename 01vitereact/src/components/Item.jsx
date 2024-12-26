import './Item.css'


function Item (props){

    const output = props.itemName;

    return (<p className='nirma'>{output}</p>);

}

export default Item;