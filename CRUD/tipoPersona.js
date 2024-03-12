import {
    createDomElements
} from "./constantes.js";
import { 
    loadData,
    updateData 
} from "./crud.js";


export const loadDataTipoPersona = (action, id) => {
    const newDict = {
        "id": document.querySelector('#input-id').value,
        "nombre": document.querySelector('#input-nombre').value
    };
    switch (action){
        case 'agregar':
            loadData('tipoPersona', newDict);
            break;
        case 'editar':
            updateData('tipoPersona', id, newDict);
            break;
    }
};
document.getElementById('agregarTipoPersona').addEventListener('click', (e)=>{
    createDomElements('agregar', 'tipoPersona');
});
document.getElementById('buscarTipoPersona').addEventListener('click', (e)=>{
    createDomElements('buscar', 'tipoPersona');
});
document.getElementById('editarTipoPersona').addEventListener('click', () => {
    createDomElements('editar', 'tipoPersona');
});
document.getElementById('eliminarTipoPersona').addEventListener('click', () => {
    createDomElements('eliminar', 'tipoPersona');
});