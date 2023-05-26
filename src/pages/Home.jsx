import {useLoaderData, Link} from 'react-router-dom'
import { useContext, useEffect } from 'react'
import {UserContext} from '../App'
import {HomeStyle} from '../components/styled/Home.styled'
import {getSomeAgents} from '../util/api'

let agents = await getSomeAgents()


const Home = () => {
    const homes = useLoaderData()
    const homesCount = useContext(UserContext).homesCount
    console.log(homes)
    
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
        {homes.map((home) => <img key={home.id} src={home.images[0].url}/> )}
        </HomeStyle>
        </>
     );
}
 
export default Home;