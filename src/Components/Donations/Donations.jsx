import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom"
import { getDataFromLocalStorage } from "../LocalStorage/LocalStorage";
import Donation from "../Donation/Donation";

export default function Donations() {
    const [isShow , setIsShow ] = useState(0)
    const [storedData, setStoredData] = useState(false)
    const [display, setDisplay] = useState([]);
    const categories = useLoaderData();
    // console.log(categories)
    useEffect(() => {
        const storedDatas = getDataFromLocalStorage();
        setIsShow(storedDatas.length);
        const filteredData = categories.filter(category => storedDatas.includes((category.id).toString()));
        setDisplay(filteredData);
    }, [categories, storedData , isShow])
    console.log(storedData)

    return (
        <>
            {display.length > 0 ? <div className="grid grid-cols-1 w-72 mx-auto md:w-full md:grid-cols-2 gap-8 py-5">
                {
                    storedData === true ? display.map(item => <Donation key={item.id} item={item}></Donation>) :
                        display.slice(0, 4).map(item => <Donation key={item.id} item={item}></Donation>)
                }

            </div> : <div className="flex justify-center items-center h-[80vh]">
                    <h2 className="text-4xl">No Donation Here</h2>
                </div>}
            {
                isShow > 4 && <div className="flex justify-center py-3"><button onClick={() => setStoredData(!storedData)} className={`btn bg-green-600 text-white ${storedData && "hidden"}`}>See All</button></div>
            }

        </>
    )
}
