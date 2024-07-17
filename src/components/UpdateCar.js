import { useState } from "react";
import { updateMasina } from "../service/api";

function UpdateCar(){


    const id=2;

    //masina cu id 2

    

    const [marca, setMarca]=useState("");
    const [model, setModel]=useState("");
    const [pret, setPret]=useState("");

    const update=async()=>{
        const updatedCar={
            marca,
            model,
            pret
        };
         const carResp=await updateMasina(updatedCar);

         if(carResp){
            alert("Masina a fost actualizata in baza de date");
         }else{
            alert("Update-ul nu a fost efectat-Eroare ")
         }


    }








return(
<div className="UpdateCar">

<h1>Update Car</h1>

<form>
                <p>
                    <label>Marca</label>
                    <input
                        name="marca"
                        type="text"
                        id="marca"
                        value={marca}
                        onInput={(e) => setMarca(e.target.value)}
                    />
                </p>
                <p>
                    <label>Model-an</label>
                    <input
                        name="model"
                        type="text"
                        id="model"
                        value={model}
                        onInput={(e) => setModel(e.target.value)}
                    />
                </p>
                <p>
                    <label>Pret</label>
                    <input
                        name="pret"
                        type="text"
                        id="pret"
                        value={pret}
                        onInput={(e) => setPret(e.target.value)}
                    />
                </p>
                <p>
                    <button
                        type="button"
                        id="updBtn"
                        onClick={update}
                    >
                        Update  Car
                    </button>
                </p>
                <p>
                    <button 
                        type="button" 
                        id="backBtn"
                        onClick={() => alert("Inapoi la lista de masini")}>
                        Inapoi la lista de masini
                    </button>
                </p>
            </form>
    

   
</div>
);

}
export default UpdateCar;