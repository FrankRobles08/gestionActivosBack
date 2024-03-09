import { loadAgregar } from "./crud.js";
import {
    data,
    createInputs
} from "./variables.js";

document.getElementById('tipoMovAct').addEventListener('click', () => {
    createInputs('tipoMovAct');
    document.getElementById('form-tipoMovAct').style.display = 'flex'
    document.getElementById('submit-tipoMovAct').addEventListener('click', function (e){
        e.preventDefault();
        e.stopImmediatePropagation();
        loadAgregar('tipoMovAct', {
            "id": document.querySelector('#input-idTipoMovAct').value,
            "nombre": document.querySelector('#input-nombreTipoMovAct').value
        });
    });
});