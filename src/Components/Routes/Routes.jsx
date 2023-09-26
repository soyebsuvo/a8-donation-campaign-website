import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Donations from "../Donations/Donations";
import CategoryDetails from "../CategoryDetails/CategoryDetails";
import PieChartPage from "../PieChartPage/PieChartPage";
// import PieChartSmall from "../PieChartSmall/PieChartSamll";


    const router = createBrowserRouter([
        {
          path: "/",
          element: <MainLayout></MainLayout>,
          children: [
            {
                path : "/",
                element : <Home></Home>,
                loader : () => fetch(`./category.json`)
            },
            {
                path : "/donations",
                element : <Donations></Donations>,
                loader : ()=> fetch("/category.json")
            },
            {
                path : "/category/:id",
                element : <CategoryDetails></CategoryDetails>,
                loader : ()=> fetch(`/category.json`)
            },
            {
                path : "/statistics",
                element : <PieChartPage></PieChartPage>
            }
          ]
        },
      ]);
  
export default router;
