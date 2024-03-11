const URL_API = "http://localhost:3000/"

const getOptions = (endPoint, select, selected) => {
    fetch(`${URL_API + endPoint}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            let dict = data;
            dict.forEach(item => {
                let option = document.createElement('option');
                option.value = item.id;
                option.innerHTML = item.nombre;
                select.append(option);
                option.selected = selected === item.id ? true : false;
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

const getData = (endPoint) => {
    return fetch(`${URL_API + endPoint}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

const loadData = (endPoint, newDict) => {
    let correct;
    for (let i in newDict){
        if (newDict[i].length === 0){
            correct = false
            alert('Debes llenar toda la información para continuar')
            break;
        } else{
            correct = true
        }
    }
    if (correct){
        const myHeaders = new Headers({
            "Content-Type": "application/json"
        });
        fetch(`${URL_API + endPoint}`, {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify(newDict),
            })
            .then(response => response.json())
            .then(data => console.log('Success:', data))
            .catch((error) => console.error('Error:', error));
    }
}

export {
    getOptions,
    getData,
    loadData
}