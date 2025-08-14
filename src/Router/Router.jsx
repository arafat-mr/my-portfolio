import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import App from "../App";
import ProjectDetails from "../Components/ProjectDetails";
import Home from "../Components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
   children:[
    {
      index:true,
      Component:Home
    },
    {
    path:'/projects/:id',
    Component:ProjectDetails,
     loader: async () => {
      const res = await fetch("/data.json");
      if (!res.ok) throw new Error("Failed to fetch projects");
      return res.json(); 
    },
  }
   
   ]
  },
   
  
]);

export default router