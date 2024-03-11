import {
    createDomElements
} from "./constantes.js";
import { loadData } from "./crud.js";

export const loadDataPersonas = () => {
    loadData('personas', {
        "id": document.querySelector('#input-id').value,
        "nombre": document.querySelector('#input-nombre').value,
        "apellido": document.querySelector('#input-apellido').value,
        "cedula": document.querySelector('#input-cedula').value,
        "telefono": document.querySelector('#input-telefono').value,
        "correo": document.querySelector('#input-correo').value
    });
}
document.getElementById('buscarPersonas').addEventListener('click', (e)=>{
    createDomElements('buscar', 'personas');
});
document.getElementById('editarPersonas').addEventListener('click', () => {
    createDomElements('editar', 'personas');
});