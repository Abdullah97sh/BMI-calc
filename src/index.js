import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DidMount from "./didMount";
import WillUpdate from "./willUpdate";
import DidUpdate from "./didUpdate";
import reportWebVitals from "./reportWebVitals";
import WillUnmount from "./willUnmount";
// import Form from "./BMI/form";   // BMI Class
import Form from "./BMI_function/Form";  // BMI_function
import Mapping from "./MAP/mapping";
import Filter from "./MAP/filter";
import Use_State from "./MAP/use_State";
import UnstyledTable from "./MAP/pagination";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    {/* <DidMount />
    <WillUpdate />
    <DidUpdate />
    <WillUnmount /> */}

    <Form />

    {/* <UnstyledTable/> */}

    {/* <Mapping />
    <Filter />
    <Use_State /> */}
  </React.StrictMode>
);

// class Car extends React.Component {
//   render() {
//     return <h2>Hi, I am a Car!</h2>;
//   }
// }

// root.render(<Car />, document.getElementById('root'));

// state & setState
// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       brand: "Ford",
//       model: "Mustang",
//       color: "red",
//       year: 1964
//     };
//   }
//   changeColor = () => {
//     this.setState({color: "Green"});
//   }
//   render() {
//     return (
//       <div>
//         <h1>My {this.state.brand}</h1>
//         <p>
//           It is a {this.state.color}
//           {this.state.model}
//           from {this.state.year}.
//         </p>
//         <button
//           type="button"
//           onClick={this.changeColor}
//         >Change color</button>
//       </div>
//     );
//   }
// }

// root.render(<Car />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
