import {
    createDomElements
} from "./constantes.js";
import { loadData } from "./crud.js";

export const loadDataMarcas = () => {
    loadData('marcas', {
        "id": document.querySelector('#input-id').value,
        "nombre": document.querySelector('#input-nombre').value
    });
}
document.getElementById('buscarMarcas').addEventListener('click', (e)=>{
    createDomElements('buscar', 'marcas');
});
document.getElementById('editarMarcas').addEventListener('click', () => {
    createDomElements('editar', 'marcas');
});