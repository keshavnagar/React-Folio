import './ItemDate.css';
function ItemDate(props){
    return (
        
            <>
            {/* <span className='span' >{props.Date}-</span>
            <span className='span'>{props.Month}-</span>
            <span className='span' >{props.Year}</span> */}
            <span className='span' >{props.Date}-{props.Month}-{props.Year}</span>
            </>                  
    )
}
export default ItemDate;
