import { useEffect, useState } from "react";

const Count: React.FC = () =>{
const [count, setCount ]= useState<number>(0);
useEffect (()=>{
    console.log(count);
},[count]);
    return(
        <div>
            <p>Has hecho clik {count} veces</p>
            <button onClick={()=> setCount (count+1)}>Contador</button>
        </div>
    )
}
export default Count;