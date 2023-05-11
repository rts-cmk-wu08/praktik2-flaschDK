import {useLoaderData, Link} from 'react-router-dom'
const Home = () => {
    const homes = useLoaderData().result
    console.log(homes)
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