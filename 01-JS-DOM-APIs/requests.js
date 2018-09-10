const getJoke = () => {
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

const getResponse = (config) => {
    let url = config.url;
    let method = config.method;    
    let parameter = config.parameter;
    if(parameter != ''){
        url = `${url}?${parameter}`;        
    }
    
    return fetch(url)
    .then((resp) => {
        if(resp.status >= 200 && resp.status < 300){
            return Promise.resolve(resp);
        }
        else{
            return Promise.reject(new Error(resp.statusText));
        }
    } )
    .then((resp) => resp.json())    
    .catch((error) => console.log(error));
}

const getResponsePOST = () => {
    const url = 'https://api.github.com/search/repositories';
    //let url = config.url;
    // let method = config.method;    
    // let parameter = config.parameter;
    
    let requestInit = {
        method: 'POST',
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: queryString.stringify({q:'Javascript'})
        // JSON.stringify({
        //     q: 'Javascript'
        //})
    };
    
    return fetch(url, requestInit)
    .then((resp) => {
        if(resp.status >= 200 && resp.status < 300){
            return Promise.resolve(resp);
        }
        else{
            return Promise.reject(new Error(resp.statusText));
        }
    } )
    .then((resp) => resp.json())
    .then((data) => console.log(data))    
    .catch((error) => console.log(error));
}

const getJokes = () => {
    const jokeSpan = document.getElementById('joke');
    const config = {
        url : 'http://api.icndb.com/jokes/random',
        method : 'get',
        parameter: ''
    };
        
    getResponse(config)    
    .then(function(data){
        let jokeResult = data.value.joke;               
        jokeSpan.innerHTML = jokeResult;               
    })
    .catch((error) => console.log(error));
}

function changeColor(elementId, newColor){
    let element = document.getElementById(elementId);
    element.color = newColor;    
}

function getRepositories(filter){        
    const ul = document.getElementById('repository');    
    if(filter != ''){
        const config = {
            url: 'https://api.github.com/search/repositories',
            method: 'get',
            parameter: `q=${filter}`
        };

        getResponse(config)
        //.then((resp) => resp.json())
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
    else{
        alert('You must enter a word');
    }    
}

function createNode(element){
    return document.createElement(element);
}

const clearList = (ulId) => {
    let ul = document.getElementById(ulId);
    
    while(ul.firstChild) ul.removeChild(ul.firstChild);
}