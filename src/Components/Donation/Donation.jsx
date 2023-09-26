import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default function Donation({item}) {
    const {id , image , category , price , text_color , primary_color , secondary_color , title} = item;
  return (
    <div style={{backgroundColor:`${primary_color}`}} className="card flex-col md:card-side border">
                <figure className="flex-1"><img className="w-[350px] h-full" src={image} alt="Movie" /></figure>
                <div className="card-body flex-1">
                    <h2  style={{backgroundColor:`${secondary_color}`,color:`${text_color}`}} className={`border px-3 py-1 rounded w-2/5 text-center`}>{category}</h2>
                    <h2 className="text-2xl font-semibold">{title}</h2>
                    <p style={{color:`${text_color}`, fontWeight:"bold"}}>${price}</p>
                    <Link to={`/category/${id}`}>
                    <div className="card-actions">
                        <button style={{backgroundColor:`${text_color}`}} className="btn text-white">Show Details</button>
                    </div>
                    </Link>
                </div>
            </div>
  )
}

Donation.propTypes = {
    item:PropTypes.object.isRequired
}

