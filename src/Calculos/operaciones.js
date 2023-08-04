import big from "big.js";
import operadores from "../Calculos/operadores";
import numeros from "../Calculos/numeros";


export default function operaciones(estado,nombredeBoton){

    if(nombredeBoton==="AC"){
        return{
            total:null,
            siguiente:null,
            operador:null
        }
    }

    if (numeros(nombredeBoton)){

        if (nombredeBoton==="0" && estado.siguiente==="0") return {}
        
        if (estado.operador) {

            if (estado.siguiente) return {siguiente:estado.siguiente+nombredeBoton}

            return{siguiente: nombredeBoton}
        
        
        }
        if (estado.siguiente){

            const siguiente = estado.siguiente ==="0" ? nombredeBoton: estado.siguiente + nombredeBoton
            return{siguiente, total:null}
            
        }
        return {siguiente: nombredeBoton, total:null}
    
    
    }

    if (nombredeBoton==="/"){

        if (estado.operador && estado.siguiente){
            const result= operadores(estado.total,estado.siguiente,estado.operador)
            return{total: big(result).div(big("100").toString()),siguiente:null, operador:null}
        }
        if(estado.siguiente){
            return{siguiente:big(estado.siguiente).div(big("100").tostring())}
        }
        return {}
    }

    if (nombredeBoton==="."){

        if (estado.siguiente) {
            if (estado.siguiente.include("."))return {}

            return {siguiente: estado.siguiente + "."}
        }
        return {siguiente: "0."}
    }

    if (nombredeBoton === "=") {
  
        if (estado.siguiente && estado.operador) {
    
          return {
            total: operadores(estado.total, estado.siguiente, estado.operador),
            siguiente: null,
            operador: null,
          }
    
        } else return {}
    
      }
    
      if (nombredeBoton === "+/-") {
    
        if (estado.siguiente) return { siguiente: (-1 * parseFloat(estado.siguiente)).toString() }
    
        if (estado.total) return { total: (-1 * parseFloat(estado.total)).toString() }
    
        return {}
    
      }
    
      if (estado.operador) {
    
        return {
          total: operadores(estado.total, estado.siguiente, estado.operador),
          siguiente: null,
          operador: nombredeBoton,
        }
    
      }
    
      if (!estado.siguiente) return { operador: nombredeBoton }
      
      return {
        total: estado.siguiente,
        siguiente: null,
        operador: nombredeBoton,
      }


    
}