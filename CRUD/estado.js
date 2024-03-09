import { loadAgregar } from "./crud.js";
import {
    data,
    createInputs
} from "./variables.js";

document.getElementById('estados').addEventListener('click', () => {
    createInputs('estados');
    document.getElementById('form-estados').style.display = 'flex'
    document.getElementById('submit-estados').addEventListener('click', function (e){
        e.preventDefault();
        e.stopImmediatePropagation();
        loadAgregar('estados', {
            "id": document.querySelector('#input-idEstados').value,
            "nombre": document.querySelector('#input-nombreEstados').value
        });
    });
});