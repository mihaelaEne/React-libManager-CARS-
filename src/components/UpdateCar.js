import { useState } from "react";
import { deleteCarr, updateMasina } from "../service/api";

function UpdateCar() {
  const id = 303;

  const [marca, setMarca] = useState("");
  const [model, setModel] = useState("");
  const [pret, setPret] = useState("");

  const update = async () => {
    const updatedCar = {
        id,
      marca,
      model,
      pret
    };

    try{
         await updateMasina(updatedCar);
        alert("Masina a fost actualizata in baza de date");

    }catch(err){
        alert(err);

    }
   
  };


  const deleteCar = async () => {
   
   try{
    await deleteCarr(id);
    alert("Masina a fost eliminata din baza de date");

   }
   catch(err){
    alert(err);

}
    
  };

  return (
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
          <button type="button" id="updBtn" onClick={update}>
            Update Car
          </button>
        </p>
        <p>
          <button
            type="button"
            id="backBtn"
            onClick={() => alert("Inapoi la lista de masini")}
          >
            Inapoi la lista de masini
          </button>
        </p>

        <p>
          <button type="button" id="delBtn" onClick={deleteCar}>
            Delete Car
          </button>
        </p>
      </form>
    </div>
  );
}
export default UpdateCar;
