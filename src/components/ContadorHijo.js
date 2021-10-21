import { memo,useMemo } from "react";


const ContadorHijo =({contador, sumar, restar})=>{
    /*let superNumero=0;
    for (let i = 0; i < 100000000000; i++) {
        superNumero++;     
    }
     hace que la aplicacion se vuelva mas lenta con la funcion para hacerlo veloz 
     vamos usar useMemo*/

     const superNumero= useMemo(()=>{
        let superNumero=0;
        for (let i = 0; i < 100000; i++) {
            superNumero++;     
        } 
        return superNumero;

     },[])
    console.log("hijo contador se esta ejecutando");

    return(
        
        <div style={{border: "thin solid #000", margin: "1rem", padding:"1rem"}}>
            <h2>Hijo del contador</h2>
            <h3>{contador}</h3>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>

        </div>
    );
};
 export default memo (ContadorHijo);