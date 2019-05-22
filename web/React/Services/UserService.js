function getUsers() {
    return http_get('api/user?type=getall');
}

function AddUser(user) {
    return http_post('api/user', user);
}

function DeleteUser(Id) {
    return http_delete('api/user', Id);
}

function UpdateUser(User) {
    return http_put('api/user', User)
}
