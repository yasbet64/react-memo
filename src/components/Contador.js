import { useState , useCallback } from "react";

import ContadorHijo from "./ContadorHijo";
const Contador =()=>{
    const [contador, setContador] = useState(0);
    const [input, setInput] = useState("");

    //const sumar=()=>{ setContador(contador+1)} es para memorizar las funciones
    const sumar= useCallback(()=>setContador(contador+1),[contador]);
    
    //const restar=()=>{setContador(contador-1)}
    const restar= useCallback(()=>setContador(contador-1),[contador]);

    const handleInput=(e)=>{setInput(e.target.value)}

    return(
        <div className="Fondo" style={{textAlign:"center"} }>
            <img className="ImgFondo" src="https://placeimg.com/400/400/animals"/>
            <h2>Contador</h2>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
            <h3>{contador}</h3>
            <input type="text" onChange={handleInput} value={input} />
            <ContadorHijo contador={contador} sumar={sumar} restar={restar} />
        </div>
    );
};

export default Contador;