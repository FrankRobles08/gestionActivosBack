import {
    createDomElements
} from "./constantes.js";
import { 
    loadData,
    updateData 
} from "./crud.js";

export const loadDataMarcas = (action, id) => {
    const newData = {
        "id": document.querySelector('#input-id').value,
        "nombre": document.querySelector('#input-nombre').value
    };
    switch (action){
        case 'agregar':
            loadData('marcas', newData);
            break;
        case 'editar':
            updateData('marcas', id, newData);
            break;
    }
}
document.getElementById('buscarMarcas').addEventListener('click', (e)=>{
    createDomElements('buscar', 'marcas');
});
document.getElementById('editarMarcas').addEventListener('click', () => {
    createDomElements('editar', 'marcas');
});