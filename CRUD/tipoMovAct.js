import {
    createDomElements
} from "./constantes.js";
import { 
    loadData,
    updateData 
} from "./crud.js";


export const loadDataTipoMovAct = (action, id) => {
    const newDict = {
        "id": document.querySelector('#input-id').value,
        "nombre": document.querySelector('#input-nombre').value
    };
    switch (action){
        case 'agregar':
            loadData('tipoMovAct', newDict);
            break;
        case 'editar':
            updateData('tipoMovAct', id, newDict);
            break;
    }
};
document.getElementById('agregarTipoMovAct').addEventListener('click', (e)=>{
    createDomElements('agregar', 'tipoMovAct');
});
document.getElementById('buscarTipoMovAct').addEventListener('click', (e)=>{
    createDomElements('buscar', 'tipoMovAct');
});
document.getElementById('editarTipoMovAct').addEventListener('click', () => {
    createDomElements('editar', 'tipoMovAct');
});
document.getElementById('eliminarTipoMovAct').addEventListener('click', () => {
    createDomElements('eliminar', 'tipoMovAct');
});