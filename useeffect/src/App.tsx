import React from "react";
import { useEffect } from "react";
import Alerta from "./Alerta";
import Count from "./Count";
import Apis from "./Apis";

const App: React.FC = () =>{
  useEffect (() => {
    console.log("Estamos usando useEffect");
  },
  [])
  return(
    <div>
      <Alerta></Alerta>
      <Count></Count>
      <Apis></Apis>
    </div>
  )
}
  


export default App
