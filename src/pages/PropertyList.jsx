import {useLoaderData, Outlet} from 'react-router-dom'
const PropertyList = () => {
    const homeData = useLoaderData()
    return ( 
        <>
        <h1>Boliger til salg</h1>
        <ul>
            {homeData.map((home) => 
                <article key={home.id}>
     <img src={home.images[0].url}/>
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
            
        </ul>
<Outlet/>
        </>
     );
}
 
export default PropertyList;