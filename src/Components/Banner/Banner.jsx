import { useState } from "react"
import "./banner.css"
import PropTypes from 'prop-types';

export default function Banner({handleValue}) {
    const [value , setValue ] = useState("");
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handleSubmit = () => {
        handleValue(value)
    }
  return (
    <div className="h-[70vh] for-bg bg-slate-100 bg-blend-overlay">
      <div className=" h-full flex gap-10 flex-col items-center justify-center">
        <h2 className="text-4xl text-center font-bold">I Grow By Helping People In Need</h2>
        <div className="relative w-7/12 mx-auto">
        <input onChange={handleChange} type="text" value={value} placeholder="Search..." className="input input-bordered w-full pr-16" /> 
        <button onClick={handleSubmit} className="btn bg-[#FF444A] text-white absolute top-0 right-0 rounded-l-none">Search</button>
      </div>
      </div>

    </div>
  )
}
Banner.propTypes = {
    handleValue:PropTypes.func.isRequired
}