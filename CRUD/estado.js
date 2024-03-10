import { loadAgregar } from "./crud.js";
import {
    data,
    createDomElements
} from "./constantes.js";

document.getElementById('agregarEstados').addEventListener('click', () => {
    createDomElements('agregar', 'estados');
    document.getElementById('agregar-estados').style.display = 'flex'
    document.getElementById('submit-estados').addEventListener('click', function (e){
        e.preventDefault();
        e.stopImmediatePropagation();
        loadAgregar('estados', {
            "id": document.querySelector('#input-id').value,
            "nombre": document.querySelector('#input-nombre').value
        });
    });
});
document.getElementById('buscarEstado').addEventListener('click', (e)=>{
    createDomElements('buscar', 'estados');
});