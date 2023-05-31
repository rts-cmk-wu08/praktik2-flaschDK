import { useLoaderData, Outlet } from "react-router-dom";
import Agent from "../components/Agent"

const PropertyDetails = () => {
  const home = useLoaderData();
  console.log(home);
  return (
    <>
      <p>Gad vide hvem der bor her?</p>
      <article key={home.id}>
        <img key={home.id} src={home.images[0].url} />
        <p>{home.adress1}</p>
        <p>{home.postalcode} {" "} {home.city}</p>
        <p>{home.price}</p>
        <p>
          {Math.floor(Math.cos(home.long) * Math.cos(home.lat) * 10000000000)}
        </p>
        <p>{home.livingspace}</p>
        <p>{home.lotsize}</p>
        <p>{home.rooms}</p>
        <p>1</p>
        <p>{home.basement}</p>
        <p>{home.built}</p>
        <p>{home.remodel}</p>
        <p>{home.energylabel}</p>
        <p>{home.payment}</p>
        <p>{home.gross}</p>
        <p>{home.netto}</p>
        <p>{home.cost}</p>
      </article>
      <Agent agent={home.agent}/>
      <Outlet />
    </>
  );
};

export default PropertyDetails;
