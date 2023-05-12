import {useLoaderData, Link} from 'react-router-dom'
import { useContext, useEffect } from 'react'
import {UserContext} from '../App'
const Home = () => {
    const homes = useLoaderData().result
    console.log(homes)

            const user = useContext(UserContext).user;
            console.log(user)
             const {setUser} = useContext(UserContext)
             useEffect(() => setUser("partycrasher"),[])
             
           console.log(user)
    
    return ( 
        <>
        Hjæmmeside
        <ul>
            {homes.map((home) => <li key={home.id}><Link to={"/propertylist/"+home.id}>{home.id}</Link>  </li>)}
        </ul>
        </>
     );
}
 
export default Home;