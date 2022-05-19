import { UserContext } from "../../../shared-components/user/user.context"
import {useContext} from 'react'

function ComponentB() {

    const [user] = useContext(UserContext)
    return <div style={{border:'1px solid red', height:'100px'}}>
        <p>{user.name}</p>
    </div>
}

export default ComponentB