import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/Home";
function App() {
  const message = "welcome to my website";
  const visit = 90;
  // const object = {
  //   key : "ro",
  //   date : "8-9-8"
  // }
  const link = "https://chatgpt.com/c/6787b556-3cf0-8007-9bcc-7d6ca3ad8776";
  return (
    <div className="App">
      <Navbar />
      <div className="content"></div>
      <Home />
      <h1>{message}</h1>
      <p>{visit} visitors in this month</p>
      {/* <h1>welcome to my home</h1> */}
     <p>{89}</p>
     <p>{"class"}</p>
     {/* <p>{object}</p> we do not do this thing beccause of not use to print object and array  */}
     <p>{[1,2,3,4,5]}</p>
     <p>{ Math.random()*10}</p>
     <p><a target="_blank" href={link}>google</a></p>
    </div>
  );
}

export default App;
