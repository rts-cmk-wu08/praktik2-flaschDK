import { useLoaderData, Outlet } from "react-router-dom";
import {BsHeartFill} from 'react-icons/Bs'
const PropertyList = () => {
  const homeData = useLoaderData();
  const toggleFav = () => {
    console.log("klik!!!!")
  }
  return (
    <>
      <h1>Boliger til salg</h1>
      <ul>
        {homeData.map((home) => (
          <article key={home.id}>
            <img src={home.images[0].url} />
            <div onClick={toggleFav}
              style={{
                width: "1em",
                height: "1em",
                color: "white",
                background: "red",
                padding: "0.5em",
                borderRadius: "100%",
              }}
            >
              <BsHeartFill />
            </div>
            <p>{home.adress1}</p>
            <p>{home.city}</p>
            <p>{home.type}</p>
            <p>{home.netto}</p>
            <p>{home.energylabel}</p>
            <p>{home.rooms}</p>
            <p>{home.livingspace}</p>
            <p>{home.price}</p>
          </article>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default PropertyList;
