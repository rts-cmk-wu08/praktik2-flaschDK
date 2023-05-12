import {useLoaderData, Outlet} from 'react-router-dom'
const PropertyList = () => {
    const homeData = useLoaderData().result
    return ( 
        <>
        Det er et dejligt hus med mange værelser og en fin have.
        <ul>
            <li>{homeData.description}</li>
        </ul>
<Outlet/>
        </>
     );
}
 
export default PropertyList;