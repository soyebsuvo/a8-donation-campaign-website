import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import CategoryCard from "../CategoryCard/CategoryCard";
import { useEffect, useState } from "react";

export default function Home() {
    const [display , setDisplay ] =useState([]);
    const [value , setValue ] = useState("");
    const categories = useLoaderData();
    const handleValue = value => {
        setValue(value);
    }
    useEffect(()=>{
        const filteredCategory = categories.filter(category=> category.category.toLowerCase() === value.toLowerCase());
        setDisplay(filteredCategory);
    },[categories , value])
  return (
    <div>
      <Banner handleValue={handleValue} ></Banner>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-4">
        {
            display.length > 0 ? display.map(category => <CategoryCard key={category.id} categoryy={category}></CategoryCard>) :
            categories.map(category => <CategoryCard key={category.id} categoryy={category}></CategoryCard>)
        }
      </div>
    </div>
  )
}
