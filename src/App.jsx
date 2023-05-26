import { createContext, useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./util/theme";
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
import Footer from "./components/Footer"
import InitUser from "./components/InitUser";

import { getAllHomes, getSomeHomes, getHomeDetails, getHomesCount, getAllAgents, getAgentDetails } from "./util/api";

export const UserContext = createContext({});
const homesCount = await getHomesCount()

function App() {
  const [user, setUser] = useState("guest");
  const [favList, setFavList] = useState([])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} loader={getSomeHomes} />
        <Route path="/agents" element={<Agents />} loader={getAllAgents}/>
        <Route path="/agentdetails/:id" element={<AgentDetails />} loader={({ params }) => {
            return getAgentDetails(params.id);
          }}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/propertylist" element={<PropertyList />} loader={getAllHomes}/>
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
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{ user, setUser, homesCount, favList, setFavList }}>
      <InitUser/>
      <Header />
        <RouterProvider router={router} />
        <Footer />
      </UserContext.Provider>
    </ThemeProvider>
    </>
  );
}

export default App;
