import { loadAgregar } from "./crud.js";
import {
    data,
    createInputs
} from "./variables.js";

document.getElementById('personas').addEventListener('click', (e)=>{
    createInputs('personas');
    document.getElementById('form-personas').style.display = 'flex'
    document.getElementById('submit-personas').addEventListener('click', function (e){
        e.preventDefault();
        e.stopImmediatePropagation();
        loadAgregar('personas', {
            "tipoDocumento": document.querySelector('#input-tipoDocumento').value,
            "id": document.querySelector('#input-idPersonas').value,
            "nit": document.querySelector('#input-nitPersonas').value,
            "nombre": document.querySelector('#input-nombrePersonas').value,
            "email": document.querySelector('#input-email').value,
            "tipoPersona": document.querySelector('#input-tipoPersona').value,
        });
    });
});