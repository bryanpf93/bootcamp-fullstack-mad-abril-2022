import { UserContext } from "../../../shared-components/user/user.context";
import {useContext} from 'react'

function ComponentA({children}) {
    const [,updateUser] = useContext(UserContext)
    return (
        <div style={{border:'1px solid blue', height:'100px'}}>
        <p>{children}</p>
        <button onClick={() => updateUser({name: 'Nombre Cambiado desde otro componente'})} >Actualizar Context</button>
    </div>
    )
}

export default ComponentA;