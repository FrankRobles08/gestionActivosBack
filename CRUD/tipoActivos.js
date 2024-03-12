import {
    createDomElements
} from "./constantes.js";
import { 
    loadData,
    updateData 
} from "./crud.js";


export const loadDataTipoActivos = (action, id) => {
    const newDict = {
        "id": document.querySelector('#input-id').value,
        "nombre": document.querySelector('#input-nombre').value
    };
    switch (action){
        case 'agregar':
            loadData('tipoActivos', newDict);
            break;
        case 'editar':
            updateData('tipoActivos', id, newDict);
            break;
    }
}
document.getElementById('buscarTipoActivos').addEventListener('click', (e)=>{
    createDomElements('buscar', 'tipoActivos');
});
document.getElementById('editarTipoActivos').addEventListener('click', () => {
    createDomElements('editar', 'tipoActivos');
});
document.getElementById('eliminarTipoActivos').addEventListener('click', () => {
    createDomElements('eliminar', 'tipoActivos');
});