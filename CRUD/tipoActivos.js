import {
    createDomElements
} from "./constantes.js";
import { 
    loadData,
    updateData 
} from "./crud.js";


export const loadDataTipoActivos = (action, id) => {
    const newData = {
        "id": document.querySelector('#input-id').value,
        "nombre": document.querySelector('#input-nombre').value
    };
    switch (action){
        case 'agregar':
            loadData('tipoActivos', newData);
            break;
        case 'editar':
            updateData('tipoActivos', id, newData);
            break;
    }
}
document.getElementById('buscarTipoActivos').addEventListener('click', (e)=>{
    createDomElements('buscar', 'tipoActivos');
});
document.getElementById('editarTipoActivos').addEventListener('click', () => {
    createDomElements('editar', 'tipoActivos');
});