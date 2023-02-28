import { useState } from "react"


export default function Contador(){
    const [count, setCount] = useState(0);


const aumentarContador = () => {
    setCount(count + 1);
        console.log(count);
}
const disminuirContador = ()=> {
    setCount(count - 1);
        console.log(count);
}
      

    return(
        <div>
            <h1>Contador</h1>
            <button onClick={aumentarContador}>Incrementar</button> 
            <button onClick={disminuirContador}>Decrementar</button>   
    <p>El contador vale {count} veces</p>
            
        </div>
    )
    }

                   
  



