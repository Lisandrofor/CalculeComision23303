import Button from "../Componentes/Boton"
import "../Componentes/PaneldeBotones"


export default function PaneldeBotones ({clickHandle}){

const handleclick= nombredeBoton => {clickHandle(nombredeBoton)}

return (
<div>
    <div>
    <Button name="AC" clickhandle={handleclick}/>
    <Button name="+/-" clickhandle={handleclick}/>
    <Button name="%" clickhandle={handleclick}/>
    <Button name="/" clickhandle={handleclick}/>
    </div>
    <div>
    <Button name="7" clickhandle={handleclick}/>
    <Button name="8" clickhandle={handleclick}/>
    <Button name="9" clickhandle={handleclick}/>
    <Button name="x" clickhandle={handleclick}/>
    </div>
    <div>
    <Button name="4" clickhandle={handleclick}/>
    <Button name="5" clickhandle={handleclick}/>
    <Button name="6" clickhandle={handleclick}/>
    <Button name="-" clickhandle={handleclick}/>
    </div>
    <div>
    <Button name="1" clickhandle={handleclick}/>
    <Button name="2" clickhandle={handleclick}/>
    <Button name="3" clickhandle={handleclick}/>
    <Button name="+" clickhandle={handleclick}/>
    </div>
    <div>
    <Button name="0" clickhandle={handleclick}/>
    <Button name="." clickhandle={handleclick}/>
    <Button name="=" clickhandle={handleclick}/>
    
    </div>
</div>

)

}