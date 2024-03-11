import { getDict } from './crud.js';
const data = {
    "activos":{
        "id": ['text', 'ID'],
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
        "idMarca": ['text', 'ID'],
        "nombreMarca": ['text', 'Nombre']
    },
    "personas": {
        "tipoDocumento": ['select', 'Tipo de documento'],
        "idPersonas": ['number', 'ID'],
        "nitPersonas": ['number', 'NIT'],
        "nombrePersonas": ['text', 'Nombre'],
        "email": ['text', 'Email'],
        "tipoPersona": ['select', 'Tipo de persona']
    },
    "estados": {
        "idEstado": ['text', 'ID'],
        "nombreEstado": ['text', 'Nombre']
    },
    "tipoPersona": {
        "idTipoPersona": ['text', 'ID'],
        "nombreTipoPersona": ['text', 'Nombre']
    },
    "tipoMovAct": {
        "idTipoMovAct": ['text', 'ID'],
        "nombreTipoMovAct": ['text', 'Nombre']
    },
    "tipoActivos": {
        "idTipoActivos": ['text', 'ID'],
        "nombreTipoActivos": ['text', 'Nombre'],
        "email": ['text', 'Email'],
    },
}

const displayStyle = () => {
    const elements = {
        "agregarActivos": document.getElementById('form-activos'),
        "agregarMarcas": document.getElementById('form-marcas'),
        "agregarPersonas": document.getElementById('form-personas'),
        "agregarEstados": document.getElementById('form-estados'),
        "agregarTipoPersona": document.getElementById('form-tipoPersona'),
        "agregarTipoMovAct": document.getElementById('form-tipoMovAct'),
        "agregarTipoActivos": document.getElementById('form-tipoActivos'),
    }
    for (let i in elements){
        if (elements[i] !== null){
            elements[i].style.display = 'none'
        }
    }
}

let text, number, select, label, form, submit;

const createInputs = (dict) => {
    form = document.createElement('form');
    form.id = `form-${dict}`;
    form.style.display = 'none';
    submit = document.createElement('button');
    submit.setAttribute('type', 'submit')
    submit.id = `submit-${dict}`;
    submit.innerHTML = '+'
    
    for (let i in data[dict]){
        
        let box = document.createElement('div')
        box.classList.add('box')
        box.id = `box-${i}`
        label = document.createElement('label')
        label.innerHTML = `${data[dict][i][1]}: `
        
        switch (data[dict][i][0]) {
            case 'text':
                text = document.createElement('input');
                text.setAttribute('type', 'text');
                text.id = `input-${i}`;
                label.setAttribute('for', text.id);
                box.append(label, text);
                break;
            case 'number':
                number = document.createElement('input');
                number.setAttribute('type', 'number');
                number.id = `input-${i}`;
                label.setAttribute('for', number.id);
                box.append(label, number);
                break;
            case 'select':
                select = document.createElement('select');
                select.id = `input-${i}`;
                getDict(`${i}`, select);
                label.setAttribute('for', select.id);
                box.append(label, select);
                break;
            }
        form.appendChild(box);
    }
    form.appendChild(submit);
    document.querySelector('#content').append(form);
    displayStyle();
}

export { 
    data,
    createInputs
}; 