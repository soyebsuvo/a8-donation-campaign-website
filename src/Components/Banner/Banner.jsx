import "./banner.css"
export default function Banner() {
  return (
    <div className="h-[70vh] for-bg bg-slate-100 bg-blend-overlay">
      <div className=" h-full flex gap-10 flex-col items-center justify-center">
        <h2 className="text-4xl text-center font-bold">I Grow By Helping People In Need</h2>
        <div className="relative w-7/12 mx-auto">
        <input type="text" placeholder="Search..." className="input input-bordered w-full pr-16" /> 
        <button className="btn bg-[#FF444A] text-white absolute top-0 right-0 rounded-l-none">Search</button>
      </div>
      </div>

    </div>
  )
}
