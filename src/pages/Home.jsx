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
    console.log(agents)
    
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
        {homes.map((home) => 
        <article key={home.id}>
     <img key={home.id} src={home.images[0].url}/>
     <p>{home.adress1}</p>
     <p>{home.city}</p>
     <p>{home.type}</p>
     <p>{home.netto}</p>
     <p>{home.energylabel}</p>
     <p>{home.rooms}</p>
     <p>{home.livingspace}</p>
     <p>{home.price}</p>
     </article>
        )}
         {agents.map((agent) => 
  <article key={agent.id}>
     <img key={agent.id} src={agent.image.url}/>
     <p>{agent.name}</p>
     <p>{agent.title}</p>
     <p>{agent.email}</p>
     </article>
         )}
        </HomeStyle>
        </>
     );
}
 
export default Home;