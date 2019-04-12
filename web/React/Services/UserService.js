var Usuarios = [];

function getUsers() {
    return http_get('api/user?type=getall');
}

function AddUser(user) {
    return http_post('api/user', user);
}

