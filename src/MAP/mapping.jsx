import React from "react";
// import "../App.css";
import Users from "./list";
import Info from "./Info";

function Mapping() {
    // const sorting = Users.sort((a,b)=>b.rollNo - a.rollNo);

  return (
    <div style={{ margin: "40px" }}>
      <h1 style={{ color: "green" }}> Geeks For Geeks </h1>

      <p> Mapping Data to component in React js. </p>

      {Users.map((e) => {
        return <Info name={e.name} rollNo={e.rollNo} />;
      })}
    </div>
  );
 

}
export default Mapping;
