import {
    createDomElements
} from "./constantes.js";
import { 
    loadData,
    updateData 
} from "./crud.js";

export const loadDataActivos = (action, id) => {
    const newDict = {
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
    };
    switch (action){
        case 'agregar':
            loadData('activos', newDict);
            break;
        case 'editar':
            updateData('activos', id, newDict);
            break;
    }
};

document.getElementById('agregarActivos').addEventListener('click', ()=>{
    createDomElements('agregar', 'activos');
});
document.getElementById('buscarActivos').addEventListener('click', ()=>{
    createDomElements('buscar', 'activos');
});
document.getElementById('editarActivos').addEventListener('click', ()=>{
    createDomElements('editar', 'activos');
});
document.getElementById('eliminarActivos').addEventListener('click', ()=>{
    createDomElements('eliminar', 'activos');
});