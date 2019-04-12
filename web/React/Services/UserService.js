var Usuarios = [];

for (let i = 0; i < 100; i++) {
    Usuarios.push({
        "id_db": 1,
        "nombre": "Fernando Araujo",
        "email": "12345",
        "password": "fercho@clandestine.com",
        "id_institucional": "b123",
        "id_ciudadania": "a123",
        "role": "admin"
    })
}

function getUsers() {
    console.log(Usuarios);
    return Usuarios;
  //  return http_get('api/user?type=getall');
}

function AddUser(user) {
    return http_post('api/user', user);
}

