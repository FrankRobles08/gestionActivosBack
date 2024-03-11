import {
    createDomElements
} from "./constantes.js";
import { 
    loadData,
    updateData 
} from "./crud.js";


export const loadDataTipoMovAct = (action, id) => {
    const newData = {
        "id": document.querySelector('#input-id').value,
        "nombre": document.querySelector('#input-nombre').value
    };
    switch (action){
        case 'agregar':
            loadData('tipoMovAct', newData);
            break;
        case 'editar':
            updateData('tipoMovAct', id, newData);
            break;
    }
};
document.getElementById('buscarTipoMovAct').addEventListener('click', (e)=>{
    createDomElements('buscar', 'tipoMovAct');
});
document.getElementById('editarTipoMovAct').addEventListener('click', () => {
    createDomElements('editar', 'tipoMovAct');
});