import './Product.css'
import ItemDate from './itemDate';
import Card from './Card';

function Product(props) {
    // const ProductName = props.ProductName;
    const Date = 8;
    const Month = 1;
    const Year = 2022;
    return (
        <Card>
            
            <div className='Data'>
            <ItemDate Date={Date} Month={Month} Year={Year} ></ItemDate>
                <p>{props.ProductsArray[0].Name}</p>
                <p>{props.ProductsArray[0].age}</p>
                <p>{props.ProductsArray[0].city}</p>
            </div>

            <div className='Data'>
            <ItemDate Date={Date} Month={Month} Year={Year} ></ItemDate>
                <p>{props.ProductsArray[1].Name}</p>
                <p>{props.ProductsArray[1].age}</p>
                <p>{props.ProductsArray[1].city}</p>
            </div>



            <div className='Data' >
            <ItemDate Date={Date} Month={Month} Year={Year} ></ItemDate>
                 <p>{props.ProductsArray[2].Name}</p>
                <p>{props.ProductsArray[2].age}</p>
                <p>{props.ProductsArray[2].city}</p></div>

            <div className='Data' >
            <ItemDate Date={Date} Month={Month} Year={Year} ></ItemDate>
                <p>{props.ProductsArray[3].Name}</p>
                <p>{props.ProductsArray[3].age}</p>
                <p>{props.ProductsArray[3].city}</p>
            </div>



        </Card>

    )
}
export default Product;