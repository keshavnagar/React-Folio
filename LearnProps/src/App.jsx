import './App.css'
import Product from './components/Product'

function App() {
  const ProductsArray = [
    {
      Name: "rahul",
      // age: 89,
      // city: "delhi"

    }, {
      Name: "VideoEncoder",
      // age: 90,
      // city: "mumbai"
    }, {
      Name: "rohit",
      // age: 89,
      // city: "Navimumbai"
    }, {
      Name: "ActiveXObject",
      // age: 78,
      // city: "pune"
    }
  ]

  const ProductsArray1 = [
    {
      Name: "palash",
      // age: 89,
      // city: "delhi"

    }, {
      Name: "yash",
      // age: 90,
      // city: "mumbai"
    }, {
      Name: "vijay",
      // age: 89,
      // city: "Navimumbai"
    }, {
      Name: "shubh",
      // age: 78,
      // city: "pune"
    }
  ]

  const ProductsArray2 = [
    {
      Name: "Ajay",
      // age: 89,
      // city: "delhi"

    }, {
      Name: "vinod",
      // age: 90,
      // city: "mumbai"
    }, {
      Name: "rohit",
      // age: 89,
      // city: "Navimumbai"
    }, {
      Name: "sunil",
      // age: 78,
      // city: "pune"
    }
  ]

  const ProductsArray3 = [
    {
      Name: "ajit",
      // age: 89,
      // city: "delhi"

    }, {
      Name: "kalash",
      // age: 90,
      // city: "mumbai"
    }, {
      Name: "ankit",
      // age: 89,
      // city: "Navimumbai"
    }, {
      Name: "rajat",
      // age: 78,
      // city: "pune"
    }
  ]

  return (
    <div className='App'>
      <div><Product ProductsArray={ProductsArray} ><button>Clicke me </button></Product></div>
      <div><Product ProductsArray={ProductsArray1}><button>Clicke me </button></Product></div>
    </div>

  )
}

export default App
