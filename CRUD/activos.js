import { loadAgregar } from "./crud.js";
import {
    data,
    createInputs
} from "./variables.js";

document.getElementById('activos').addEventListener('click', (e)=>{
    createInputs('activos');
    document.getElementById('form-activos').style.display = 'flex'
    document.getElementById('submit-activos').addEventListener('click', function (e){
        e.preventDefault();
        e.stopImmediatePropagation();
        loadAgregar('activos', {
            "id": document.querySelector('#input-id').value,
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
        });
    });
});