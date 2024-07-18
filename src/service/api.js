export  async function  getAllCars(){
    let data = await api("allMasini");

    return  data.json();
}


export async function addCar(car){


let data= await api("createMasina","POST",car);


 return  data.json();

}



export async function updateMasina(car){
   
const method="PUT";
const body=car;
 const response=await api("updateMasina", method, body);

 console.log(response);


 if(response.status==400){
    let data = await response.json();
    throw new Error(data.message)
 }

 return response.json();
 
}



export async function getMasinaById(id){
    let data=await api(`masinaById?id=${id}`);
    return data.json();
}


export async function deleteCarr(carId) {
    const response = await api(`delete/${carId}`, 'DELETE');
    return response.json();  

}


function api(path, method = "GET", body = null) {

        const url = "http://localhost:8080/api/v1/masina/" + path;
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'X-Requested-With': 'XMLHttpRequest',
            }
        }
        if (body != null) {
            options.body = JSON.stringify(body);
        }
        
        return fetch(url, options);
}






