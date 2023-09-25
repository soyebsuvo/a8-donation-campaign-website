const getDataFromLocalStorage = () => {
    const storedData = localStorage.getItem("donations");
    if(storedData){
        return JSON.parse(storedData);
    }
    return [];
}

const saveDataToLocalStorage = (params) => {
    const storedData = getDataFromLocalStorage();
    const isExist = storedData.find(item => item == params.id)
    if(!isExist){
        storedData.push(params.id)
        localStorage.setItem("donations" , JSON.stringify(storedData));
    }
}

export {getDataFromLocalStorage , saveDataToLocalStorage} ;