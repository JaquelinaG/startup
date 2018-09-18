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

const saveDb = () => {
    if (!window.indexedDB) {
        window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
    }
    else{
        const dbName = 'APIDatabase';
        var request = window.indexedDB.open(dbName);
        
        const customerData = [
            { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
            { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" }
          ];

        request.onerror = (event) => {console.log(`${request.errorCode}`)};
        // request.onsuccess = function(event) {
        //     db = event.target.result;
        //   };
        
        request.onupgradeneeded = function(event) {
            var db = event.target.result;
          
            // Create an objectStore to hold information about our customers.
            var objectStore = db.createObjectStore("customers", { keyPath: "ssn" });
          
            // Create an index to search customers by name. We may have duplicates.
            objectStore.createIndex("name", "name", { unique: false });
          
            // Create an index to search customers by email. Unique index.
            objectStore.createIndex("email", "email", { unique: true });
          
            // Use transaction oncomplete to make sure the objectStore creation is 
            // finished before adding data into it.
            objectStore.transaction.oncomplete = function(event) {
              // Store values in the newly created objectStore.
              var customerObjectStore = db.transaction("customers", "readwrite").objectStore("customers");
              customerData.forEach(function(customer) {
                customerObjectStore.add(customer);
              });
            };
          };

        //Otra forma:
        // request.onsuccess = function(event){
        //     let db = event.target.result;
        // }       

    }
} 