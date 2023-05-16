import {useLoaderData, Link} from 'react-router-dom'
import { useContext, useEffect } from 'react'
import {UserContext} from '../App'
import {HomeStyle} from '../components/styled/Home.styled'
const Home = () => {
    const homes = useLoaderData()
    console.log(homes)

            const user = useContext(UserContext).user;
            console.log(user)
             const {setUser} = useContext(UserContext)
             useEffect(() => setUser("partycrasher"),[])
             
           console.log(user)
    
    return ( 
        <>
        <HomeStyle>
        <h1>Hjæmmeside</h1>
        <ul>
            {homes.map((home) => <li key={home.id}><Link to={"/propertydetails/"+home.id}>{home.id}</Link>  </li>)}
        </ul>
        </HomeStyle>
        </>
     );
}
 
export default Home;