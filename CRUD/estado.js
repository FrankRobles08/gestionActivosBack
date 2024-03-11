import {
    createDomElements
} from "./constantes.js";
import { loadData } from "./crud.js";

export const loadDataEstados = () => {
    loadData('estados', {
        "id": document.querySelector('#input-id').value,
        "nombre": document.querySelector('#input-nombre').value
    });
}

document.getElementById('buscarEstado').addEventListener('click', (e)=>{
    createDomElements('buscar', 'estados');
});
document.getElementById('editarEstados').addEventListener('click', () => {
    createDomElements('editar', 'estados');
});