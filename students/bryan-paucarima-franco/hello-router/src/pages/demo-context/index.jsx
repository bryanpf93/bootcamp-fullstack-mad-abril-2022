// sirve para pasar informacion entre paginas
// creamos un context para cada funcion
// i18n multiidiona >> Internationalization
// l10n multiregion >> Localization
// g11n >> Globalization
// EL contexto es una variable que me ayuda a guardar informacion para que otros componentes puedan cosultarla
// y reaccionar a sus cambios, es decir, si un componente A (este donde este en la web) modifica el context,
// el componente B (que escucha el contexto), se refresca con el nuevo valor.
// 
// 1. Crear una variable de contexto con la funcion de REact llamada createContext(_initial-value_)
//    Esto lo solemos crear en un archivo propio llamado xxx.context.js y exportar esa varialbe 
//    Este archivo se crea en la entidad xxx (en una carpeta xxx) dentro de shard, src
//    xxx --> Representa la entidad de la informacion que queremos almacenar y compartir
//        ej: ShoppingCart, i18n, l10n, Theming o ...
// 2. Creamos un componente que se llama 'xxxProvider', es un componente de react que utiliza el Provider
//    de un contexto. Este Provider de un contexto es un componente que proporciona react para darle valor 
//    a ese contexto (asginacion del valor). Todo componente que esta como hijo de este Provider puede 
//    recuperar el valor de este contexto en su fincion del componente
//    Para crear este componente debemos saber que TODOS los componentes que creamos de react tienen una prop
//    que hasta ahora no conociamos. Su nombre es 'children' que represente el DOM hijo que tinee ese componente.
//    Utilizar este componente:
//      1. Si la informacion se comparte entre paginas, el Provider debe envolver
//      2. Si la informacion solo se debe 
// 3. El componente que quiere obtener el valor del contexto tiene que usar un hook llamado 'useContext()'
//    Este hook recibe como input la variable del punto 1 (que tendremos que importar de su archivo)
//    Este hook como output devuelve el valor actual del context
//          
//    function MyComponente(){
//      const theme = useContext(themeContext) theme tendra el valor del provider(punto2) mas cercano
//       }
// 4. Modificar el componente Provider (punto2) para añadir un state interno (useState) y pasar como value
//    tanto el valor como la funcion de actualizacion para que asi cuando se haga un useContext tenga una funcion
//    que actualice el context.
//

import ComponentA from "./componente-a"
import ComponentB from "./componente-b"
import UserProvider from "../../shared-components/user/user.provider"


function DemoContext() {
    return (
        <>
            <main>
                <ComponentA>
                    <a target='_blank' href="https://google.com" rel="noreferrer" >Hola Bootcamp</a>
                </ComponentA>
                <ComponentA>Adios Bootcamp</ComponentA>
                <ComponentB>
                </ComponentB>
            </main>
        </>
    )

}

export default DemoContext