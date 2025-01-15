import { useState } from "react";
import "./App.css";
import Example2 from "./components/Example2";

function App() {
  return (
    //props are used to pass data one component to another component

    //  <Example/>
    <div>
      <Example2 name="rajat" job="frontend" />
      <Example2 name="raj" job="backend" />
      <Example2 name="harsh" job="full stack " />
      <Example2 name="rajat" job="frontend" />
      <Example2 name="raj" job="backend" />
      <Example2 name="harsh" job="full stack " />
      <Example2 name="rajat" job="frontend" />
      <Example2 name="raj" job="backend" />
      <Example2 name="harsh" job="full stack " />
    </div>
  );
}


// const Example = () =>{
//   return (
//     <div>
//       <div>
//         <h2>Name : rahul</h2>
//         <h2>Front End Dev</h2>
//         <br /><hr />
//       </div>
//       <div>
//       <h2>Name : rajat</h2>
//       <h2>Back end dev</h2>
//       <br /><hr />
//       </div>
//       <div>
//       <h2>Name : keshav</h2>
//       <h2>Full stack dev</h2>
//       <br /><hr />
//       </div>
//     </div>
//   )
// } so this hard code is bad thing so we apply props concept here to decline hard code

export default App;
