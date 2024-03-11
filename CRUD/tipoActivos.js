import {
    createDomElements
} from "./constantes.js";
import { loadData } from "./crud.js";


export const loadDataTipoActivos = () => {
    loadData('tipoActivos', {
        "id": document.querySelector('#input-id').value,
        "nombre": document.querySelector('#input-nombre').value
    });
}
document.getElementById('buscarTipoActivos').addEventListener('click', (e)=>{
    createDomElements('buscar', 'tipoActivos');
});
document.getElementById('editarTipoActivos').addEventListener('click', () => {
    createDomElements('editar', 'tipoActivos');
});