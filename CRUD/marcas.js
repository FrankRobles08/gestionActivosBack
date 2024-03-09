import { loadAgregar } from "./crud.js";
import {
    data,
    createInputs
} from "./variables.js";

document.getElementById('marcas').addEventListener('click', () => {
    createInputs('marcas');
    document.getElementById('form-marcas').style.display = 'flex'
    document.getElementById('submit-marcas').addEventListener('click', function (e){
        e.preventDefault();
        e.stopImmediatePropagation();
        loadAgregar('marcas', {
            "id": document.querySelector('#input-idMarca').value,
            "nombre": document.querySelector('#input-nombreMarca').value
        });
    });
});