import { loadAgregar } from "./crud.js";
import {
    data,
    createInputs
} from "./variables.js";

document.getElementById('tipoActivos').addEventListener('click', () => {
    createInputs('tipoActivos');
    document.getElementById('form-tipoActivos').style.display = 'flex'
    document.getElementById('submit-tipoActivos').addEventListener('click', function (e){
        e.preventDefault();
        e.stopImmediatePropagation();
        loadAgregar('tipoActivos', {
            "id": document.querySelector('#input-idTipoActivos').value,
            "nombre": document.querySelector('#input-nombreTipoActivos').value
        });
    });
});