import {
    getOptions,
    getData
} from './crud.js';
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

const displayNone = () => {
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        container.style.display = 'none';
    });
}

let name, text, number, select, label, container, div, search, input, button, box, submit, dialog, close;

const createDomElements = (action, cat) => {

    switch (action) {
        case 'agregar':
            displayNone();
            container = document.createElement('form');
            container.classList.add('container');
            container.id = `${action}-${cat}`;
            container.style.display = 'none';
            submit = document.createElement('button');
            submit.setAttribute('type', 'submit')
            submit.id = `submit-${cat}`;
            submit.innerHTML = '+'
            document.querySelector('#content').append(container);
            for (let i in info[cat]){
                
                box = document.createElement('div')
                box.classList.add('box')
                box.id = `box-${i}`
                label = document.createElement('label')
                label.innerHTML = `${info[cat][i][1]}: `
                
                switch (info[cat][i][0]) {
                    case 'name':
                        name = document.createElement('h1');
                        name.id = `name-${cat}`;
                        name.innerHTML = `${action[0].toUpperCase()+action.slice(1)} ${i}`;
                        container.appendChild(name);
                        break;
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
                        getOptions(i, select);
                        label.setAttribute('for', select.id);
                        box.append(label, select);
                        break;
                    }
                container.appendChild(box);
            }
            container.appendChild(submit);

            break;
        case 'buscar':
            displayNone();
            container = document.createElement('div');
            container.id = `${action}-${cat}`;
            container.classList.add('container');
            search = document.createElement('div');
            search.classList.add('search-bar');
            input = document.createElement('input');
            input.id = 'search-input';
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
                    box = document.createElement('div');
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
                    box.innerHTML += `<i class='bx bx-dots-horizontal-rounded' id='iconOpen-${cat+'_'+i}'></i>`;
                    div.append(box);
                    document.getElementById(`iconOpen-${cat+'_'+i}`).addEventListener('click', () => {
                        dialog = document.createElement('dialog');
                        dialog.classList.add('container', `modal-${element.id}`);
                        close = document.createElement('i');
                        close.classList.add('bx', 'bx-x');
                        close.id = `iconClose-${i}`;
                        name = document.createElement('h1');
                        name.innerHTML = element.nombre[0].toUpperCase()+element.nombre.slice(1);
                        dialog.append(close, name);
                        const arrayInfo = Object.values(info[cat]);
                        const arrayElement = Object.values(element);
                        for (let j = 1; j < arrayInfo.length; j++){
                            box = document.createElement('div');
                            box.classList.add('text-container');
                            box.innerHTML += `<i class="bx bxs-circle"></i> ${arrayInfo[j][1]}: ${arrayElement[j-1]}`;
                            dialog.appendChild(box);
                        }
                        document.querySelector('#content').append(dialog);
                        dialog.showModal();
                        close.addEventListener('click', () => {
                            dialog.close();
                            dialog.style.display = 'none';
                        });
                    });
                });
                let searchInput = document.getElementById('search-input');
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

            }).catch(error => {
                console.error('Error:', error);
            });
            break;
        case 'editar':
            displayNone();
            document.getElementById(`form-${cat}`).style.display = 'block';
            break;
        case 'eliminar':
            displayNone();
            document.getElementById(`form-${cat}`).style.display = 'block';
            break;
    }
}

export { 
    info as data,
    createDomElements
}; 