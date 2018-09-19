const saveLocal = (text) => {
    if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("txtArea", text);
    // Retrieve
    document.getElementById("textSaved").innerHTML = localStorage.getItem("txtArea");
    document.getElementById("txtArea").innerHTML = '';
} else {
    document.getElementById("textSaved").innerHTML = "Sorry, your browser does not support Web Storage...";
}}

const clearLocal = (element) => {
    localStorage.removeItem(element);
    document.getElementById('textSaved').innerHTML = '';
}

const dbName = 'APIDatabase';

const saveDb = (text) => {
    if (!window.indexedDB) {
        window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
    }
    else{        
        let request = window.indexedDB.open(dbName);
        
        const textDB = { key: 'txtArea', content: `${text}`}
       
        request.onerror = (event) => {console.log(`${request.errorCode}`)};
        
        request.onupgradeneeded = function(event) {
            let db = event.target.result;
          
            // Create an objectStore to hold information about our customers.
            let objectStore = db.createObjectStore("text", { keyPath: "key" });

            // Use transaction oncomplete to make sure the objectStore creation is 
            // finished before adding data into it.
            objectStore.transaction.oncomplete = function(event) {
              // Store values in the newly created objectStore.
              let textObjectStore = db.transaction("text", "readwrite").objectStore("text");
              textObjectStore.add(textDB);  
            };
        };          
    }
}

const clearDb = (element) => {
    let request = window.indexedDB.open(dbName);
       
    request.onerror = (event) => {console.log(`${request.errorCode}`)};
        
    request.onsuccess = function(event){
        let db = event.target.result;
        
        let textObjectDeleted = db.transaction(["text"], "readwrite").objectStore("text").delete("txtArea");

        alert('Text deleted from DB');
    }    
}