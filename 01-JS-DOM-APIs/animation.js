const fadeIn = (elem) =>{
    if (elem.classList.contains('is-paused')){
        elem.classList.remove('is-paused');
    }
}

const showAlert = () => { alert('You clicked me!');}

function createTable(array){
    let table = createNode('table');
    let tableBody = createNode('tbody');
    let tableHead = createNode('thead');

    for(let i = 0; i < array.length; i++ ){
        let persona = array[i];
        let tr = createNode('tr');

        for(let j = 0; j < persona.length; j++){            
            let td = createNode('td');
            let value = document.createTextNode(persona[j]);
            td.appendChild(value);
            tr.appendChild(td);            
        }

        tableBody.appendChild(tr);        

        var columns = persona.length;
    }

    let trHead = createNode('tr');
    for(let c = 0; c < columns; c++){
        let th = createNode('th');
        let col = `Column${c}`; 
        let value = document.createTextNode(col);
        th.appendChild(value);
        trHead.appendChild(th);        
    }
    tableHead.appendChild(trHead);        
    
    table.appendChild(tableHead);
    table.appendChild(tableBody);
    
    return table;
}

function createNode(element){
    return document.createElement(element);
}