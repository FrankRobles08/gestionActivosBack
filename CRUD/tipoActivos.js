import { loadAgregar } from "./crud.js";
import {
    data,
    createDomElements
} from "./constantes.js";

document.getElementById('agregarTipoActivos').addEventListener('click', () => {
    createDomElements('agregar', 'tipoActivos');
    document.getElementById('agregar-tipoActivos').style.display = 'flex'
    document.getElementById('submit-tipoActivos').addEventListener('click', function (e){
        e.preventDefault();
        e.stopImmediatePropagation();
        loadAgregar('tipoActivos', {
            "id": document.querySelector('#input-id').value,
            "nombre": document.querySelector('#input-nombre').value,
            "email": document.querySelector('#input-email').value
        });
    });
});
document.getElementById('buscarTipoActivos').addEventListener('click', (e)=>{
    createDomElements('buscar', 'tipoActivos');
});