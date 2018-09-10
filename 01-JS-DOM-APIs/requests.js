function getJoke(){
    const jokeSpan = document.getElementById('joke');
    const url = 'http://api.icndb.com/jokes/random';

    fetch(url)
        .then((resp) => resp.json())
            .then(function(data){
                let jokeResult = data.value.joke;               
                jokeSpan.innerHTML = jokeResult;               
            })
        .catch((error) => console.log(error));
}

function getES6Promise(config){
    const url = config.url;
    const elementId= config.elementId;
    const color = config.color;

    fetch(url)    
    .catch((error) => changeColor(elementId, color));
}

function changeColor(elementId, newColor){
    let element = document.getElementById(elementId);
    element.color = newColor;    
}

function getRepositories(filter){    
    let url = `https://api.github.com/search/repositories?q=${filter}`;
    const ul = document.getElementById('repository');    

    fetch(url)
    .then((resp) => resp.json())
    .then(function(data){
        let items = data.items;
        return items.map(function(item){
            let li = createNode('li');
            let span = createNode('span');

            span.innerHTML = item.full_name;
            li.appendChild(span);
            ul.appendChild(li);
        })
    })
    .catch((error) => console.log(error));
}

function createNode(element){
    return document.createElement(element);
}