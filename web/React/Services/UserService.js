var Usuarios = [];

/*for (let i = 0; i < 100; i++) {
    Usuarios.push({
        User: 'Alexito',
        Password: 'BienChikyLucky',
        Nombre: 'Alex Osorio',
        Id: '000xxx000xxx00xx',
        Email: 'Email@Email.com',
        Image: 'http://www.iconarchive.com/download/i60041/mattahan/ultrabuuf/Comics-Spiderman-Cam.ico',
        Rol: true
    })
} */

function getUsers() {
    return http_get('api/user?type=getall');
}

