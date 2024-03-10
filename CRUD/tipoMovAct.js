import { loadAgregar } from "./crud.js";
import {
    data,
    createDomElements
} from "./constantes.js";

document.getElementById('agregarTipoMovAct').addEventListener('click', () => {
    createDomElements('agregar', 'tipoMovAct');
    document.getElementById('agregar-tipoMovAct').style.display = 'flex'
    document.getElementById('submit-tipoMovAct').addEventListener('click', function (e){
        e.preventDefault();
        e.stopImmediatePropagation();
        loadAgregar('tipoMovAct', {
            "id": document.querySelector('#input-id').value,
            "nombre": document.querySelector('#input-nombre').value
        });
    });
});
document.getElementById('buscarTipoMovAct').addEventListener('click', (e)=>{
    createDomElements('buscar', 'tipoMovAct');
});