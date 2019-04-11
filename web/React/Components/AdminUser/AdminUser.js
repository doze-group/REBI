const { Component, useState } = React;

function AdminUser() {

    const [Load, setLoad] = useState(false);
    const [Users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(Data => {
            console.log(Data);
            setUsers(Data);
            setLoad(true);
        }).catch(err => { setLoad(true); });
    })

    var Items = <tr>
        <th>Nombre</th>
        <th>Email</th>
        <th>Id Institucional</th>
        <th>Id Ciudadania</th>
        <th>Rol</th>
        <th>Contraseña</th>
        <th>Acciones</th>
    </tr>

    if (Load) {
        return (
            <div class="container">
                <div class="rows full">
                    <div class="row is-flex is-horizontal-center is-vertical-center is-multiline">

                        <div class="field has-addons">
                            <div class="control">
                                <input class="input" type="text" placeholder="Buscar por nombre" />
                            </div>
                            <div class="control">
                                <a class="button is-info">
                                    Buscar
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="row full is-multiline Overflow">
                        <table class="table is-fullwidth">
                            <thead>
                                <tr><th colspan="7" class="has-text-centered">Usuarios</th></tr>
                                {Items}
                            </thead>
                            <tbody>
                                {
                                    Users.map((Item, i) => {
                                        return (
                                            <tr>
                                                <td>{Item.nombre}</td>
                                                <td>{Item.email}</td>
                                                <td>{Item.id_institucional}</td>
                                                <td>{Item.id_ciudadania}</td>
                                                <td>{Item.role}</td>
                                                <td>{Item.password}</td>
                                                <td>
                                                    <div class="buttons">
                                                        <a class="button is-primary is-outlined">Actualizar</a>
                                                        <a class="button is-danger is-outlined">Eliminar</a>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                            <tfoot>{Items}</tfoot>
                        </table>
                    </div>
                    <a class="button is-primary float" onClick={Add.bind(this)}><i class="fa fa-plus my-float"></i></a>
                </div>
            </div>
        );
    } else {
        return (
            <div class="container full is-fullhd">
                <div class="columns full">
                    <div class="column is-flex is-horizontal-center is-vertical-center">
                        <img src="https://loading.io/spinners/liquid/lg.liquid-fill-preloader.gif" />
                    </div>
                </div>
            </div>
        );
    }
}

function Add() {
    const MySwal = sweetalert2ReactContent(Swal)
    const initUser = {
        id_db: null,
        password: '',
        nombre: '',
        id_institucional: '',
        email: '',
        image: '',
        role: 'user',
        id_ciudadania: ''
    }
    MySwal.fire({
        title: "Agregar Usuario",
        html: <FormUser TextAction="Agregar" User={initUser} Action={AddUser} />,
        showCloseButton: true,
        showConfirmButton: false
    });
}

function AddUser() {
    console.log("Hola")
}