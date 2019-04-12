const { Component, useState } = React;

function AdminUser(props) {

    const [Load, setLoad] = useState(false);
    const [Update, setUpdate] = useState(false);
    const [Init, setInit] = useState(true)
    const [Users, setUsers] = useState(getUsers());

    useEffect(() => {
        if (Update || Init) {
            setUsers(getUsers());
            /*getUsers().then(Data => {
                console.log(Data);
                setUsers(Data);
                setLoad(true);
            }).catch(err => { setLoad(true); }); */
            setLoad(true);
            setUpdate(false);
        }
        setInit(false);
    })

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

    var Items = <tr>
        <th class="has-text-centered">Nombre</th>
        <th class="has-text-centered">Email</th>
        <th class="has-text-centered">Id Institucional</th>
        <th class="has-text-centered">Id Ciudadania</th>
        <th class="has-text-centered">Rol</th>
        <th class="has-text-centered">Contraseña</th>
        <th class="has-text-centered">Acciones</th>
    </tr>

    if (Load) {
        return (
            <div class="container full is-fullhd">
                <NavBar props={props} />
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
                <div class="row Overflow Table Scroll">
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
                                            <td class="has-text-centered">{Item.nombre}</td>
                                            <td class="has-text-centered">{Item.email}</td>
                                            <td class="has-text-centered">{Item.id_institucional}</td>
                                            <td class="has-text-centered">{Item.id_ciudadania}</td>
                                            <td class="has-text-centered">{Item.role}</td>
                                            <td class="has-text-centered">{Item.password}</td>
                                            <td class="has-text-centered">
                                                <div class="buttons is-flex is-horizontal-center">
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
        );
    } else {
        return (
            <div class="full">
                <NavBar props={props} />
                <div class="container full is-fullhd">
                    <div class="columns full">
                        <div class="column is-flex is-horizontal-center is-vertical-center">
                            <img src="https://loading.io/spinners/liquid/lg.liquid-fill-preloader.gif" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


function AddUser() {
    console.log("Hola")
}