function Upload(file) {
    var form = new FormData();
    form.append('file', file, file.name);
    return http_postUpload('https://rebi-tc-upload-service.herokuapp.com/upload', form);
}

function getFiles() {
    return http_get('https://rebi-tc-upload-service.herokuapp.com/files');
}