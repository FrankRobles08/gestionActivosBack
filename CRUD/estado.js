import {
    createDomElements
} from "./constantes.js";
import { 
    loadData,
    updateData 
} from "./crud.js";


export const loadDataEstados = (action, id) => {
    const newData = {
        "id": document.querySelector('#input-id').value,
        "nombre": document.querySelector('#input-nombre').value
    };
    switch (action){
        case 'agregar':
            loadData('estados', newData);
            break;
        case 'editar':
            updateData('estados', id, newData);
            break;
    }
}

document.getElementById('buscarEstado').addEventListener('click', ()=>{
    createDomElements('buscar', 'estados');
});
document.getElementById('editarEstados').addEventListener('click', () => {
    createDomElements('editar', 'estados');
});