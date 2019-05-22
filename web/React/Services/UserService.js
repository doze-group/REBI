var Users = [
    {
        'id_db': 1,
        'nombre': 'Fernando Araujo',
        'email': 'fercho@clandestine.com',
        'password': '12345',
        'id_institucional': '19381938',
        'id_ciudadania': 'a123535235r233',
        'img': 'http://www.iconarchive.com/download/i60041/mattahan/ultrabuuf/Comics-Spiderman-Cam.ico',
        'role': 'admin'
    },
    {
        'id_db': 2,
        'nombre': 'Roberto Batty',
        'email': 'robert@perimetral.com',
        'password': '12345',
        'id_institucional': '35325125',
        'id_ciudadania': '5325325235',
        'img': '',
        'role': 'admin'
    },
    {
        'id_db': 3,
        'nombre': 'Melvin Martinez',
        'email': 'melvin@arjona.com',
        'password': '12345',
        'id_institucional': '46463223',
        'img': '',
        'id_ciudadania': '353241',
        'role': 'user'
    }
]

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

function LoginUser(email, password) {
    var log = false;
    for (let index = 0; index < Users.length; index++) {
        if (Users[index].email == email && Users[index].password == password) {
            localStorage.setItem('User', JSON.stringify(Users[index]));
            return true;
        }
    }
    return log;
}

function Logout() {
    localStorage.removeItem('User');
    window.location.reload();
}