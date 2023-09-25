import { Link } from "react-router-dom"

export default function CategoryCard({ categoryy }) {
    const { id, image, title, category, text_color, primary_color, secondary_color } = categoryy || {}
    console.log(text_color, primary_color, secondary_color)
    return (
        <Link to={`/category/${id}`}>
            <div>
                <div style={{backgroundColor:`${primary_color}`}} className={`card shadow-xl`}>
                    <figure><img src={image} className="w-full h-[170px]" alt="Shoes" /></figure>
                    <div className="p-4 space-y-3">
                        <h2 style={{backgroundColor:`${secondary_color}`,color:`${text_color}`}} className={`border px-3 py-1 rounded w-2/5 text-center`}>{category}</h2>
                        <p style={{color:`${text_color}`}} className={`text-xl font-bold`}>{title}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
