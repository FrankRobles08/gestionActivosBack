import {
    getOptions,
    getData,
    loadData
} from './crud.js';
import { loadDataActivos } from './activos.js';
import { loadDataEstados } from './estado.js';
import { loadDataMarcas } from './marcas.js';
import { loadDataPersonas } from './personas.js';
import { loadDataTipoActivos } from './tipoActivos.js';
import { loadDataTipoMovAct } from './tipoMovAct.js';
import { loadDataTipoPersona } from './tipoPersona.js';
let name, text, number, select, label, container, div, search, searchInput, openBtn, input, button, box, submit, dialog, closeBtn;

const info = {
    "activos":{
        "activos": ['name'],
        "id": ['text', 'ID'],
        "nombre": ['text', 'Nombre'],
        "transaccion": ['text', 'Código de transacción'],
        "formulario": ['text', 'Número de formulario'],
        "marcas": ['select', 'ID marca'],             
        "categorias": ['select', 'ID categoría'],
        "tipos": ['select', 'ID tipo'],
        "valorUnitario": ['number', 'Valor unitario'],
        "proveedor": ['text', 'ID proveedor'],
        "nroSerial": ['text', 'Número serial'],
        "empresaResponsable": ['text', 'ID empresa responsable'],
        "estados": ['select', 'ID estado']
    },
    "marcas": {
        "marcas": ['name'],
        "id": ['text', 'ID'],
        "nombre": ['text', 'Nombre']
    },
    "personas": {
        "personas": ['name'],
        "tipoDocumento": ['select', 'Tipo de documento'],
        "id": ['number', 'ID'],
        "nit": ['number', 'NIT'],
        "nombre": ['text', 'Nombre'],
        "email": ['text', 'Email'],
        "tipoPersona": ['select', 'Tipo de persona']
    },
    "estados": {
        "estados": ['name'],
        "id": ['text', 'ID'],
        "nombre": ['text', 'Nombre']
    },
    "tipoPersona": {
        "tipos de personas": ['name'],
        "id": ['text', 'ID'],
        "nombre": ['text', 'Nombre']
    },
    "tipoMovAct": {
        "tipos de movimientos del activo": ['name'],
        "id": ['text', 'ID'],
        "nombre": ['text', 'Nombre']
    },
    "tipoActivos": {
        "tipos de activos": ['name'],
        "id": ['text', 'ID'],
        "nombre": ['text', 'Nombre'],
        "email": ['text', 'Email'],
    },
}

// const createDict = (cat) => {
//     debugger
//     // for (let i in newDict){
//     //     if (newDict[i].length === 0){
//     //         correct = false
//     //         alert('Debes llenar toda la información para continuar')
//     //         break;
//     //     } else{
//     //         correct = true
//     //     }
//     // }
//     const newData = {
//         "activos": {
//             "id": document.querySelector('#input-id').value,
//             "nombre": document.querySelector('#input-nombre').value,
//             "codTransaccion": document.querySelector('#input-transaccion').value,
//             "nroFormulario": document.querySelector('#input-formulario').value,
//             "idMarca": document.querySelector('#input-marcas').value,            
//             "idCategoria": document.querySelector('#input-categorias').value,
//             "idTipo": document.querySelector('#input-tipos').value,
//             "valorUnitario": document.querySelector('#input-valorUnitario').value,
//             "idProveedor": document.querySelector('#input-proveedor').value,
//             "nroSerial": document.querySelector('#input-nroSerial').value,
//             "idEmpresaResponsable": document.querySelector('#input-empresaResponsable').value,
//             "idEstado": document.querySelector('#input-estados').value
//         },
//         "marcas": {
//             "id": document.querySelector('#input-id').value,
//             "nombre": document.querySelector('#input-nombre').value
//         },
//         "personas": {
//             "tipoDocumento": document.querySelector('#input-tipoDocumento').value,
//             "id": document.querySelector('#input-id').value,
//             "nit": document.querySelector('#input-nit').value,
//             "nombre": document.querySelector('#input-nombre').value,
//             "email": document.querySelector('#input-email').value,
//             "tipoPersona": document.querySelector('#input-tipoPersona').value,
//         },
//         "estados": {
//             "id": document.querySelector('#input-id').value,
//             "nombre": document.querySelector('#input-nombre').value
//         },
//         "tipoPersona": {
//             "id": document.querySelector('#input-id').value,
//             "nombre": document.querySelector('#input-nombre').value
//         },
//         "tipoMovAct": {
//             "id": document.querySelector('#input-id').value,
//             "nombre": document.querySelector('#input-nombre').value
//         },
//         "tipoActivos": {
//             "id": document.querySelector('#input-id').value,
//             "nombre": document.querySelector('#input-nombre').value,
//             "email": document.querySelector('#input-email').value
//         }
//     }
//     loadData(cat, newData[cat]);
// }

const whichFunction = (cat) => {
    switch (cat) {
        case 'activos':
            loadDataActivos();
        case 'marcas':
            loadDataMarcas();
        case 'personas':
            loadDataPersonas();
        case 'estados':
            loadDataEstados();
        case 'tipoPersona':
            loadDataTipoPersona();
        case 'tipoMovAct':
            loadDataTipoMovAct();
        case 'tipoActivos':
            loadDataTipoActivos();
    }
}

const removeElements = () => {
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        container.remove();
    });
}

const createDialog = (action, element, cat) => {
    dialog = document.createElement('dialog');
    dialog.classList.add('container', `modal-${element.id}`);
    name = document.createElement('h1');
    name.textContent = action[0].toUpperCase()+action.slice(1)+' '+element.nombre[0].toLowerCase()+element.nombre.slice(1);
    closeBtn = document.createElement('i');
    closeBtn.classList.add('bx', 'bx-x');
    closeBtn.addEventListener('click', () => {
        dialog.remove();
    });
    dialog.append(closeBtn, name);
    const arrayInfo = Object.values(info[cat]);
    const arrayElement = Object.values(element);

    switch (action){
        case 'editar':
            createFormElements(action, dialog, arrayElement, cat);
            submit = document.createElement('button');
            submit.classList.add('submit-button', `submit-${cat}`);
            submit.setAttribute('type', 'submit')
            submit.innerHTML = '+';
            submit.addEventListener('click', whichFunction(cat));
            dialog.appendChild(submit);
            break;
        case 'eliminar':
            box.innerHTML += `<i class="bx bxs-circle"></i> ${arrayInfo[j][1]}: ${arrayElement[j-1]}`;
            dialog.appendChild(box);
            break;                
        case 'buscar':
            for (let j = 1; j < arrayInfo.length; j++){
                box = document.createElement('div');
                box.classList.add('text-container');
                box.innerHTML += `<i class="bx bxs-circle"></i> ${arrayInfo[j][1]}: ${arrayElement[j-1]}`;
                dialog.appendChild(box);
            }
            break;
    }
    document.body.append(dialog);
    dialog.showModal();
}

const createSearchElements = (cat, action) => {
    container = document.createElement('div');
    container.classList.add('container');
    container.id = `${action}-${cat}`;
    search = document.createElement('div');
    search.classList.add('search-bar');
    input = document.createElement('input');
    input.id = action+'-input-'+cat;
    input.classList.add('search-input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Introduce la información de búsqueda...');
    button = document.createElement('button');
    button.id = 'search-button';
    button.innerHTML = '<i class="bx bx-search"></i>';
    div = document.createElement('div');
    div.classList.add('search-results');
    search.append(input, button);
    container.append(search, div);
    document.querySelector('#content').append(container);

    getData(cat).then(data => {
        data.forEach((element, i) => {
            let box = document.createElement('div');
            box.id = `box-${cat+'_'+i}`;
            box.classList.add('info-container');
            switch (cat) {
                case 'activos':
                    box.innerHTML = `${element.id}  -  ${element.nombre} - ${element.idEstado}`;
                    break;
                case 'personas':
                case 'tipoActivos':
                    box.innerHTML = `${element.id}  -  ${element.nombre} - ${element.email}`;
                    break;
                default:
                    box.innerHTML = `${element.id}  -  ${element.nombre}`;
                    break;
            }
            openBtn = document.createElement('i');
            openBtn.classList.add('bx', 'bx-dots-horizontal-rounded');
            openBtn.id = `iconOpen-${cat+'_'+i}`;
            box.append(openBtn);
            div.append(box);
            openBtn.addEventListener('click', () => {
                createDialog(action, element, cat);
            });
        });
        searchInput = document.getElementById(action+'-input-'+cat);
        searchInput.addEventListener('input', () => {
            let searchValue = searchInput.value.toLowerCase();
            let infoContainers = document.querySelectorAll('.info-container');
            infoContainers.forEach(container => {
                let containerText = container.textContent.toLowerCase();
                if (containerText.includes(searchValue)) {
                    container.style.display = 'flex';
                } else {
                    container.style.display = 'none';
                }
            });
        });
    });
}

const createDomElements = (action, cat) => {

    switch (action) {
        case 'agregar':
            removeElements();
            container = document.createElement('form');
            container.classList.add('container');
            container.id = `${action}-${cat}`;
            name = document.createElement('h1');
            name.textContent = action[0].toUpperCase()+action.slice(1)+' '+cat[0].toUpperCase()+cat.slice(1);
            container.appendChild(name);
            createFormElements(action, container, '', cat);
            submit = document.createElement('button');
            submit.classList.add('submit-button', `submit-${cat}`);
            submit.setAttribute('type', 'submit')
            submit.innerHTML = '+'
            container.appendChild(submit);   
            document.querySelector('#content').append(container);  
            submit.addEventListener('click', createDict(cat));
            break;
        case 'buscar':
            removeElements();
            createSearchElements(cat, action);
            break;
        case 'editar':
            removeElements();
            createSearchElements(cat, action);
            break;
        case 'eliminar':
            removeElements();
            break;
    }
}

const createFormElements = (action, container, arrayElement, cat) => {
    let j = -1;
    for (let i in info[cat]){
        box = document.createElement('div');
        box.classList.add('box');
        box.id = `box-${i}`;
        label = document.createElement('label');
        label.innerHTML = `${info[cat][i][1]}: `;
        switch (info[cat][i][0]) {
            case 'text':
                text = document.createElement('input');
                text.setAttribute('type', 'text');
                text.id = `input-${i}`;
                text.value = action === 'editar' ? arrayElement[j] : '';
                label.setAttribute('for', text.id);
                box.append(label, text);
                break;
            case 'number':
                number = document.createElement('input');
                number.setAttribute('type', 'number');
                number.id = `input-${i}`;
                number.value = action === 'editar' ? arrayElement[j] : '';
                label.setAttribute('for', number.id);
                box.append(label, number);
                break;
            case 'select':
                select = document.createElement('select');
                select.id = `input-${i}`;
                let selected = action === 'editar' ? arrayElement[j] : '';
                getOptions(i, select, selected);
                label.setAttribute('for', select.id);
                box.append(label, select);
                break;
            default:
                break;
        }
        container.appendChild(box);
        j++;
    }

}

export {
    createDomElements,
    createFormElements
}; 