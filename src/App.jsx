import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PropertyList from "./pages/PropertyList";
import ErrorPage from "./pages/ErrorPage";
import "./App.css";
import Header from "./components/Header";
import { getAllHomes, getHomeDetails } from "./util/api";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} loader={getAllHomes} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/propertylist/:id" element={<PropertyList />} loader={({ params }) => {
      return getHomeDetails(params.id)}}/>
        <Route path="*" element={<ErrorPage />} />
      </>
    )
  );

  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
