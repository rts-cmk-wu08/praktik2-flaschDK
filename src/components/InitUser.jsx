import {useContext, useEffect} from 'react'
import {UserContext} from '../App'

async function getUser () {
    
}

const InitUser = () => {
    const user = useContext(UserContext).user;
     const {setUser} = useContext(UserContext)
     useEffect(() => setUser("partycrasher"),[])
    return ( 
        <>
        <h3>Halløj {user}</h3>
        </>
     );
}
 
export default InitUser;