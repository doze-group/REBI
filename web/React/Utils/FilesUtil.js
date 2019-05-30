'use strict';

function http_postUpload(url, formData) {
    return fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.o-referrer, *client
        body: formData, // body data type must match "Content-Type" header
    }).then(response => response.json()); // parses JSON response into native Javascript objects
}