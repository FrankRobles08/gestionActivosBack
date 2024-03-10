import { loadAgregar } from "./crud.js";
import {
    data,
    createDomElements
} from "./constantes.js";

document.getElementById('agregarPersonas').addEventListener('click', (e)=>{
    createDomElements('agregar', 'personas');
    document.getElementById('agregar-personas').style.display = 'flex'
    document.getElementById('submit-personas').addEventListener('click', function (e){
        e.preventDefault();
        e.stopImmediatePropagation();
        loadAgregar('personas', {
            "tipoDocumento": document.querySelector('#input-tipoDocumento').value,
            "id": document.querySelector('#input-id').value,
            "nit": document.querySelector('#input-nit').value,
            "nombre": document.querySelector('#input-nombre').value,
            "email": document.querySelector('#input-email').value,
            "tipoPersona": document.querySelector('#input-tipoPersona').value,
        });
    });
});
document.getElementById('buscarPersonas').addEventListener('click', (e)=>{
    createDomElements('buscar', 'personas');
});