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



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
     <>
<Route path="/" element={<Home />} />
<Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/propertylist" element={<PropertyList />} />
        <Route path="*" element={<ErrorPage />} />
     </>
    )
  );

  return (
      <RouterProvider router={router} />
  );
}

export default App;
