import './Product.css'
function Product(props){
    const ProductName = props.ProductName;
    return (
       <p>{props.ProductName}</p>
    )
}
export default Product;