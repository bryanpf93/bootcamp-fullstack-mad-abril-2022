
import { UserContext } from './user.context';
import {useState} from 'react'

// paso 2 : crear el provider
//  a. Importar el contexto creado
//  b. Utiliza el componente xxxContext.Provider
//  c. Meter todos los hijos dentro
//  d. Darle el valor que queremos a la propiedad value de XXXContext
//

function UserProvider({children}){


    const userState = useState({name : 'Alex'})

    return(
        <UserContext.Provider value={userState}>
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider;