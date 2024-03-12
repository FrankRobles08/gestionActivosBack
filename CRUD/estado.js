import {
    createDomElements
} from "./constantes.js";
import { 
    loadData,
    updateData 
} from "./crud.js";


export const loadDataEstados = (action, id) => {
    const newDict = {
        "id": document.querySelector('#input-id').value,
        "nombre": document.querySelector('#input-nombre').value
    };
    switch (action){
        case 'agregar':
            loadData('estados', newDict);
            break;
        case 'editar':
            updateData('estados', id, newDict);
            break;
    }
};
document.getElementById('agregarEstados').addEventListener('click', ()=>{
    createDomElements('agregar', 'estados');
});
document.getElementById('buscarEstado').addEventListener('click', ()=>{
    createDomElements('buscar', 'estados');
});
document.getElementById('editarEstados').addEventListener('click', () => {
    createDomElements('editar', 'estados');
});
document.getElementById('eliminarEstados').addEventListener('click', () => {
    createDomElements('eliminar', 'estados');
});