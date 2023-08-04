import "../Componentes/Boton.css"

export default function Boton({clickhandle,name,gray, orange, wide, green}){

    const handleclick=()=> clickhandle(name)

    const className = [
        "component-button",
        orange ? "orange" : "",
        wide ? "wide" : "",
        green ? "green" : "",
        gray ? "gray" : "",
      ]
    return(
        <div className={className.join(" ").trim()}>
            <button className="btn" onClick={handleclick}>{name}</button>
        </div>
    )
}

