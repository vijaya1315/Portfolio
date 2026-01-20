import { createBrowserRouter, RouterProvider } from "react-router"; // Combined import
import { routes } from './routes';
import './App.css';
import Header from "./components/Header";

const router = createBrowserRouter(routes, {
  basename: "/Portfolio", 
});

function App() {
  return <>
    <Header /> 
    <RouterProvider router={router} />
</>
}

export default App;