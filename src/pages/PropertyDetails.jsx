import { useLoaderData, Outlet } from "react-router-dom";
import Agent from "../components/Agent"

const PropertyDetails = () => {
  const home = useLoaderData();
  console.log(home);
  return (
    <>
      <p>Gad vide hvem der bor her?</p>
      <section key={home.id}>
        <img key={home.id} src={home.images[0].url} />
        <article>
        <p>{home.adress1}</p>
        <p>{home.postalcode} {" "} {home.city}</p>
        <p>{home.price}</p>
        </article>
       <article>
       <p>
          {Math.floor(Math.cos(home.long) * Math.cos(home.lat) * 10000000000)}
        </p>
        <p>{home.livingspace}</p>
        <p>{home.lotsize}</p>
        <p>{home.rooms}</p>
        <p>1</p>
       </article>
       <article>
       <p>{home.basement}</p>
        <p>{home.built}</p>
        <p>{home.remodel}</p>
        <p>{home.energylabel}</p>
       </article>
       <article>
       <p>{home.payment}</p>
        <p>{home.gross}</p>
        <p>{home.netto}</p>
        <p>{home.cost}</p>
       </article>
       <article>
        <h3>Beskrivelse</h3>
       <p>{home.description}</p>
       </article>
       <article>
        <h3>Ansvarlig mægler</h3>
       <Agent agent={home.agent}/>
       </article>
      </section>
      <Outlet />
    </>
  );
};

export default PropertyDetails;
