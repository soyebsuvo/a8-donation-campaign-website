import { useLoaderData, useParams } from "react-router-dom"
import swal from "sweetalert";
import { getDataFromLocalStorage, saveDataToLocalStorage } from "../LocalStorage/LocalStorage";
import { useState } from "react";

export default function CategoryDetails() {

    const [datas , setDatas ] = useState([])
    const categories = useLoaderData();
    const params = useParams();
    const category = categories?.find(category => category.id == params.id);
    const { image, price, details, text_color , title} = category;
    const handleDonateBtn = () => {
        const storedDatas = getDataFromLocalStorage();
        // console.log(getDataFromLocalStorage())
        setDatas(storedDatas)
        console.log(datas)
        const isExist = storedDatas.find(item => item == params.id);
        console.log(isExist)
        if (isExist) {
            swal("Error!", "Already Donated!", "error");
        } else {
            saveDataToLocalStorage(params)
            swal("Thank You!", "Successfully Donated!", "success");
        }

    }
    return (
        <div className="md:pb-16 p-4 md:p-0">
            <div className="relative h-[340px] md:h-[480px] lg:h-[650px]">
                <img className="w-full py-10  h-full" src={image} alt="" />
                <div className="absolute bottom-10 bg-slate-700 bg-opacity-60 w-full py-5 px-8">
                    <button onClick={handleDonateBtn} style={{ backgroundColor: `${text_color}` }} className="btn text-white">Donate ${price}</button>
                </div>
            </div>
            <div className="space-y-5">
                <h2 className="text-4xl font-bold">{title}</h2>
                <p>
                    {details}
                </p>
            </div>

        </div>
    )
}
