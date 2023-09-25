import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import CategoryCard from "../CategoryCard/CategoryCard";

export default function Home() {

    const categories = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-4">
        {
            categories.map(category => <CategoryCard key={category.id} categoryy={category}></CategoryCard>)
        }
      </div>
    </div>
  )
}
