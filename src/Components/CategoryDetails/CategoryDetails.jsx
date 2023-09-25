import { useLoaderData, useParams } from "react-router-dom"

export default function CategoryDetails() {
    const categories = useLoaderData();
    const params = useParams();
    const category = categories?.find(category => category.id == params.id);
    const {image , price , details , text_color } = category;
  return (
    <div>
      <div className="relative h-[650px]">
        <img className="w-full py-10  h-full" src={image} alt="" />
        <div className="absolute bottom-10 bg-slate-700 bg-opacity-60 w-full py-5 px-24">
        <button style={{backgroundColor:`${text_color}`}} className="btn text-white">Donate ${price}</button>
        </div>
      </div>
      <div>
        <p>
            {details}
        </p>
      </div>

    </div>
  )
}
