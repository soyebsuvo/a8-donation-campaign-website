import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Donations from "../Donations/Donations";


    const router = createBrowserRouter([
        {
          path: "/",
          element: <MainLayout></MainLayout>,
          children: [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/donations",
                element : <Donations></Donations>
            }
          ]
        },
      ]);
  
export default router;
