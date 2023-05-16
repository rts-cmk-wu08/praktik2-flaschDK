import {useLoaderData, Link} from 'react-router-dom'
import { useContext, useEffect } from 'react'
import {UserContext} from '../App'
import {HomeStyle} from '../components/styled/Home.styled'
import {getSomeAgents} from '../util/api'

let agents = await getSomeAgents()

const Home = () => {
    const homes = useLoaderData()
    console.log(homes)

            const user = useContext(UserContext).user;
            const homesCount = useContext(UserContext).homesCount
             const {setUser} = useContext(UserContext)
             useEffect(() => setUser("partycrasher"),[])
    
    return ( 
        <>
        <HomeStyle>
        <h1>Hjæmmeside for {homesCount} huse.</h1>
        <ul>
            {homes.map((home) => <li key={home.id}><Link to={"/propertydetails/"+home.id}>{home.id}</Link>  </li>)}
        </ul>
        <ul>
        {agents.map((agent) => <li key={agent.id}><Link to={"/agentdetails/"+agent.id}>{agent.id}</Link>  </li>)}
        </ul>
        </HomeStyle>
        </>
     );
}
 
export default Home;