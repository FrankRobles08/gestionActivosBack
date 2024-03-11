import {
    createDomElements
} from "./constantes.js";
import { loadData } from "./crud.js";


export const loadDataTipoMovAct = (
    loadData('tipoMovAct', {
        "id": document.querySelector('#input-id').value,
        "nombre": document.querySelector('#input-nombre').value
    })
);
document.getElementById('buscarTipoMovAct').addEventListener('click', (e)=>{
    createDomElements('buscar', 'tipoMovAct');
});
document.getElementById('editarTipoMovAct').addEventListener('click', () => {
    createDomElements('editar', 'tipoMovAct');
});