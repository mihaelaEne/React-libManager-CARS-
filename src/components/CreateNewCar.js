import { useState } from "react";
import { addCar } from "../service/api";

function CreateNewCar() {
    const [marca, setMarca] = useState("");
    const [model, setModel] = useState("");
    const [pret, setPret] = useState("");
    const [errors, setErrors] = useState([]);

    const create = async () => {
        let validationErrors = [];

        if (!marca) {
            validationErrors.push("Marca este necompletată.");
        } else if (!/^[a-zA-Z]+$/.test(marca)) {
            validationErrors.push("Marca trebuie să conțină doar litere.");
        }

        if (!model) {
            validationErrors.push("Modelul este necompletat.");
        } else if (!/^\d+$/.test(model)) {
            validationErrors.push("Modelul reprezintă anul, astfel trebuie să conțină doar cifre.");
        }

        if (!pret) {
            validationErrors.push("Prețul este necompletat.");
        } else if (!/^\d+$/.test(pret)) {
            validationErrors.push("Prețul trebuie să conțină doar cifre.");
        }

        if (validationErrors.length > 0) {
            setErrors(validationErrors);
            return;
        }

        const newCar = {
            marca,
            model,
            pret
        };

        const carResp = await addCar(newCar);
        if (carResp) {
            setMarca("");
            setModel("");
            setPret("");
            setErrors([]);
            alert("S-a adăugat în baza de date!");
        } else {
            alert("Nu s-a adăugat în baza de date.");
        }
    };

    return (
        <div className="CreateNewCar">
            <h1>New Car</h1>
            {errors.length > 0 && (
                <ul id="error-list" className="error" style={{ color: 'red' }}>
                    <h2 className="error">Ooops!</h2>
                    {errors.map((error, index) => (
                        <li key={index}>{error}</li>
                    ))}
                </ul>
            )}
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
                        id="submitBtn"
                        onClick={create}
                    >
                        Create New Car
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

export default CreateNewCar;