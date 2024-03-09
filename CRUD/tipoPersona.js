import { loadAgregar } from "./crud.js";
import {
    data,
    createInputs
} from "./variables.js";

document.getElementById('tipoPersona').addEventListener('click', () => {
    createInputs('tipoPersona');
    document.getElementById('form-tipoPersona').style.display = 'flex'
    document.getElementById('submit-tipoPersona').addEventListener('click', function (e){
        e.preventDefault();
        e.stopImmediatePropagation();
        loadAgregar('tipoPersona', {
            "id": document.querySelector('#input-idTipoPersona').value,
            "nombre": document.querySelector('#input-nombreTipoPersona').value
        });
    });
});