//import { Component } from 'react';

import Add from "./components/Add";
import Greetings from "./components/Greetings";

//To show the component
// class App extends Component{
//     render () {
//     return <h1>Welcome to React component</h1>
//     }
// }

// function App() {
//   return (
//     <h1>Welcome to React Function</h1>
//   );
// }

// function App() {
//     return (
//         <section>
//             <h1> Hello my name is Djalma</h1>
//             <p>This some content :)</p>
//         </section>
//     );
// }

// function App() {
//     return (
//         <form>
//             <input type="text" name="input" placeholder="Enter your name"/>
//         </form>
//     );
// }

// function App() {
//   return (
//     <div>
//       <section>Section Tag</section>
//       <article>Section Article</article>
//       <h1 className="title-class">Title</h1>
//       <label htmlFor="name">Name</label>
//       <input type="text" id="name" />
//     </div>
//   );

// function App() {
//   return <Add/>;
// }

function App() {
  return (
    <>
      <Greetings />
      <Add />
    </>
  );
}

export default App;
