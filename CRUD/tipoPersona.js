import {
    createDomElements
} from "./constantes.js";
import { loadData } from "./crud.js";


export const loadDataTipoPersona = (
    loadData('tipoPersona', {
        "id": document.querySelector('#input-id').value,
        "nombre": document.querySelector('#input-nombre').value
    })
);
document.getElementById('buscarTipoPersona').addEventListener('click', (e)=>{
    createDomElements('buscar', 'tipoPersona');
});
document.getElementById('editarTipoPersona').addEventListener('click', () => {
    createDomElements('editar', 'tipoPersona');
});