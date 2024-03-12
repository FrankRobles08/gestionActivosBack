import {
    createDomElements
} from "./constantes.js";
import { 
    loadData,
    updateData 
} from "./crud.js";

export const loadDataMarcas = (action, id) => {
    const newDict = {
        "id": document.querySelector('#input-id').value,
        "nombre": document.querySelector('#input-nombre').value
    };
    switch (action){
        case 'agregar':
            loadData('marcas', newDict);
            break;
        case 'editar':
            updateData('marcas', id, newDict);
            break;
    }
}

document.getElementById('agregarMarcas').addEventListener('click', (e)=>{
    createDomElements('agregar', 'marcas');
});
document.getElementById('buscarMarcas').addEventListener('click', (e)=>{
    createDomElements('buscar', 'marcas');
});
document.getElementById('editarMarcas').addEventListener('click', () => {
    createDomElements('editar', 'marcas');
});
document.getElementById('eliminarMarcas').addEventListener('click', () => {
    createDomElements('eliminar', 'marcas');
});