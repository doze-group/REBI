const { UrlTomcat } = Messages();

function Upload(file, id) {
    var form = new FormData();
    form.append('file', file, file.name);
    return http_postUpload('https://rebi-tc-upload-service.herokuapp.com/upload/' + id, form);
}

function getFiles() {
    return http_get(UrlTomcat + 'api/file?type=getall');
}

function getFilesId(id, query) {
    return http_get(UrlTomcat + 'api/file?type=' + query + '&id=' + id);
}

function toSQL(file) {
    return http_post(UrlTomcat + 'api/file', file);
}