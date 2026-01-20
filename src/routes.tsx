import { type RouteObject } from "react-router";
import Hero from "./pages/Hero";
import Referance from "./pages/Referance";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Hero />,
    // Optional: v7 features like loaders
    loader: async () => {
      return { message: "Welcome to React Router 7" };
    }
  },
  {
    path: "/ref",
    element: <Referance />
  }
];
