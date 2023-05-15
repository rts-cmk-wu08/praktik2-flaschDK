import { createContext, useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Agents from "./pages/Agents"
import AgentDetails from "./pages/AgentDetails";
import Contact from "./pages/Contact";
import Favorites from "./pages/Favorites";
import PropertyList from "./pages/PropertyList";
import PropertyDetails from "./pages/PropertyDetails";
import ErrorPage from "./pages/ErrorPage";
import Gallery from "./pages/Gallery";
import Floorplan from "./pages/Floorplan";
import Map from "./pages/Map";
import "./App.css";
import Header from "./components/Header";
import { getAllHomes, getHomeDetails } from "./util/api";

export const UserContext = createContext({});

function App() {
  const [user, setUser] = useState("guest");

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} loader={getAllHomes} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/agentdetails/:id" element={<AgentDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/propertylist" element={<PropertyList />} />
        <Route
          path="/propertydetails/:id"
          element={<PropertyDetails />}
          loader={({ params }) => {
            return getHomeDetails(params.id);
          }}
        >
          <Route path="gallery" element={<Gallery />} />
          <Route path="floorplan" element={<Floorplan />} />
          <Route path="map" element={<Map />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </>
    )
  );

  return (
    <>
      <Header />
      <UserContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </>
  );
}

export default App;
