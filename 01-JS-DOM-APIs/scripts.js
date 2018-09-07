function fadeIn(elem){
    
    if (elem.classList.contains('is-paused')){
        elem.classList.remove('is-paused');
    }   
}

function showAlert(){
    alert('You clicked me!');
} 