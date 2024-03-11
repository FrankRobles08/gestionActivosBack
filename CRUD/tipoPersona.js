import {
    createDomElements
} from "./constantes.js";
import { 
    loadData,
    updateData 
} from "./crud.js";


export const loadDataTipoPersona = (action, id) => {
    const newData = {
        "id": document.querySelector('#input-id').value,
        "nombre": document.querySelector('#input-nombre').value
    };
    switch (action){
        case 'agregar':
            loadData('tipoPersona', newData);
            break;
        case 'editar':
            updateData('tipoPersona', id, newData);
            break;
    }
};
document.getElementById('buscarTipoPersona').addEventListener('click', (e)=>{
    createDomElements('buscar', 'tipoPersona');
});
document.getElementById('editarTipoPersona').addEventListener('click', () => {
    createDomElements('editar', 'tipoPersona');
});