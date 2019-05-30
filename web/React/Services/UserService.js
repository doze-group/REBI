const { UrlTomcat } = Messages();

function getUsers() {
    return http_get(UrlTomcat + 'api/user?type=getall');
}

function getUser(id) {
    return http_get(UrlTomcat + 'api/user?type=getbyId&id=' + id);
}

function AddUser(user) {
    return http_post(UrlTomcat + 'api/user', user);
}

function DeleteUser(Id) {
    return http_delete(UrlTomcat + 'api/user?id=' + Id);
}

function UpdateUser(User) {
    return http_put(UrlTomcat + 'api/user', User)
}

function LoginUser(email, password) {
    return http_get(UrlTomcat + 'api/user?type=login&email=' + email + '&password=' + password);
}

function Logout() {
    localStorage.removeItem('User');
    window.location.reload();
}