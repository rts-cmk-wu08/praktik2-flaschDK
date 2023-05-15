import {useLoaderData, Link} from 'react-router-dom'
import { useContext, useEffect } from 'react'
import {UserContext} from '../App'
import {Container} from '../components/styled/Home.styled'
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
        <Container>
        <h1>Hjæmmeside</h1>
        <ul>
            {homes.map((home) => <li key={home.id}><Link to={"/propertydetails/"+home.id}>{home.id}</Link>  </li>)}
        </ul>
        </Container>
        </>
     );
}
 
export default Home;