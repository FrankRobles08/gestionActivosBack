import {
    createDomElements
} from "./constantes.js";
import { 
    loadData,
    updateData 
} from "./crud.js";

export const loadDataPersonas = (action, id) => {
    const newDict = {
        "id": document.querySelector('#input-id').value,
        "nombre": document.querySelector('#input-nombre').value,
        "email": document.querySelector('#input-email').value,
        "tipoPersona": document.querySelector('#input-tipoPersona').value,
    };
    switch (action){
        case 'agregar':
            loadData('personas', newDict);
            break;
        case 'editar':
            updateData('personas', id, newDict);
            break;
    }
}
document.getElementById('agregarPersonas').addEventListener('click', (e)=>{
    createDomElements('agregar', 'personas');
});
document.getElementById('buscarPersonas').addEventListener('click', (e)=>{
    createDomElements('buscar', 'personas');
});
document.getElementById('editarPersonas').addEventListener('click', () => {
    createDomElements('editar', 'personas');
});
document.getElementById('eliminarPersonas').addEventListener('click', () => {
    createDomElements('eliminar', 'personas');
});