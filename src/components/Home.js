import { useEffect, useState } from "react";

import { getAllCars } from "../service/api";
function Home(){
    const[cars, setCars]=useState([]);
    useEffect(()=>{


        getAll();

    },[]);
    let  getAll= async ()=>{
       let carsResp= await getAllCars();
       setCars(carsResp);

    }




    return (
     <div className="Home">
      <button >Adauga Masina Noua</button>
        <h1>Lista de masini</h1>
    <table>
        <thead>
            <tr>
                <th>Marca</th>
                <th>Model</th>
                <th>Pret</th>
            </tr>
        </thead>
        <tbody>

            

            {

            
            
                cars.length>0 &&(
                    cars.map(car=>{
                        return (
                         <tr>
                            <td>{car.marca}</td>
                            <td>{car.model}</td>
                            <td>{car.pret}</td>
                          </tr>
                        )
                    })
    )
        
}
        </tbody>
        </table>
        </div>   
     );
}

export default Home;
