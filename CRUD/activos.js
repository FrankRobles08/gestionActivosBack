import {
    createDomElements
} from "./constantes.js";
import { loadData } from "./crud.js";

loadDataActivos = () => {
    loadData('activos', {
        "id": document.querySelector('#input-id').value,
        "nombre": document.querySelector('#input-nombre').value,
        "codTransaccion": document.querySelector('#input-transaccion').value,
        "nroFormulario": document.querySelector('#input-formulario').value,
        "idMarca": document.querySelector('#input-marcas').value,            
        "idCategoria": document.querySelector('#input-categorias').value,
        "idTipo": document.querySelector('#input-tipos').value,
        "valorUnitario": document.querySelector('#input-valorUnitario').value,
        "idProveedor": document.querySelector('#input-proveedor').value,
        "nroSerial": document.querySelector('#input-nroSerial').value,
        "idEmpresaResponsable": document.querySelector('#input-empresaResponsable').value,
        "idEstado": document.querySelector('#input-estados').value
    })
};

document.getElementById('agregarActivos').addEventListener('click', (e)=>{
    createDomElements('agregar', 'activos');
    addEventListeners();
});
document.getElementById('buscarActivos').addEventListener('click', (e)=>{
    createDomElements('buscar', 'activos');
});
document.getElementById('editarActivos').addEventListener('click', (e)=>{
    createDomElements('editar', 'activos');
    addEventListeners();
});
// document.getElementById('eliminarActivos').addEventListener('click', (e)=>{
    // createDomElements('eliminar', 'activos');
// });