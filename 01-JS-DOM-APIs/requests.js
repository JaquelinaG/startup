// var xhr = new XMLHttpRequest();

// function handler(){
//     if (xhr.readyState === 4){
//         if (xhr.status === 200){
//             console.log(xhr.response);
//         }
//     }
// }

// xhr.open('GET', 'http://api.icndb.com/jokes/random', true);
// xhr.onreadystatechange = handler;
// xhr.send();
function createNode(element){
    return document.createElement(element);
}

const paragraph = document.getElementById('joke');
const url = 'http://api.icndb.com/jokes/random';

// fetch(url)
//     .then((resp) => resp.json())
//     .then(function(data){
//         let jokeResult = data.results;
//         return jokeResult.map(function(joke){         
//             paragraph.innerHTML = '${joke.value.joke}';            
//         })
//     })
//     .catch(function(error){
//         console.log(error);
//     });

fetch(url).then(data => {return data.json()}).then(resp => {console.log(resp)});