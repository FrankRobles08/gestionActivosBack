import { loadAgregar } from "./crud.js";
import {
    data,
    createDomElements
} from "./constantes.js";

document.getElementById('agregarMarcas').addEventListener('click', () => {
    createDomElements('agregar', 'marcas');
    document.getElementById('agregar-marcas').style.display = 'flex'
    document.getElementById('submit-marcas').addEventListener('click', function (e){
        e.preventDefault();
        e.stopImmediatePropagation();
        loadAgregar('marcas', {
            "id": document.querySelector('#input-id').value,
            "nombre": document.querySelector('#input-nombre').value
        });
    });
});
document.getElementById('buscarMarcas').addEventListener('click', (e)=>{
    createDomElements('buscar', 'marcas');
});