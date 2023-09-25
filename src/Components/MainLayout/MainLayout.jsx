import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export default function MainLayout() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}
