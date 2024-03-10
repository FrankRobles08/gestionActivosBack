import { loadAgregar } from "./crud.js";
import {
    data,
    createDomElements
} from "./constantes.js";

document.getElementById('agregarTipoPersona').addEventListener('click', () => {
    createDomElements('agregar', 'tipoPersona');
    document.getElementById('agregar-tipoPersona').style.display = 'flex'
    document.getElementById('submit-tipoPersona').addEventListener('click', function (e){
        e.preventDefault();
        e.stopImmediatePropagation();
        loadAgregar('tipoPersona', {
            "id": document.querySelector('#input-id').value,
            "nombre": document.querySelector('#input-nombre').value
        });
    });
});
document.getElementById('buscarTipoPersona').addEventListener('click', (e)=>{
    createDomElements('buscar', 'tipoPersona');
});