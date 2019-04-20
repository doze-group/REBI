const { Component, useState, useEffect } = React;

function AdminUser(props) {

    const [Load, setLoad] = useState(false);
    const [Update, setUpdate] = useState(false);
    const [Init, setInit] = useState(true)
    const [Users, setUsers] = useState([]);
    const initUser = {
        id_db: null,
        password: '',
        nombre: '',
        id_institucional: '',
        email: '',
        image: '',
        role: 'admin',
        id_ciudadania: ''
    };

    useEffect(() => {
        if (Update || Init) {
            getUsers().then(Data => {
                setUsers(Data);
                setLoad(true);
            }).catch(err => { setLoad(true); });
            setUpdate(false);
        }
        setInit(false);
    })

    function Form(TextAction, User, Action, Put) {
        const MySwal = sweetalert2ReactContent(Swal)
        MySwal.fire({
            title: TextAction,
            html: <FormUser TextAction={TextAction} User={User} Action={Action} Put={Put} />,
            showCloseButton: true,
            showConfirmButton: false
        });
    }

    function Delete(User) {
        Swal.fire({
            title: '¿Esta seguro de eliminar este usuario?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Si, Eliminar'
        }).then((result) => {
            if (result.value) {
                setLoad(false);
                DeleteUser({ id: User.id_db }).then(user => {
                    Swal.fire('Usuario Eliminado', '', 'success');
                    setUpdate(true);
                }).catch(err => {
                    Swal.fire('err', err.toString(), 'error');
                })
            }
        })
    }

    function AddUserForm(User) {
        setLoad(false);
        AddUser(User).then(user => {
            Swal.fire('Usuario Creado', '', 'success');
            setUpdate(true);
        }).catch(err => {
            Swal.fire('err', err.toString(), 'error');
        });
    }

    function UpdateUserForm(User) {
        setLoad(false);
        UpdateUser(User).then(user => {
            Swal.fire('Usuario Modificado', '', 'success');
            setUpdate(true);
        }).catch(err => {
            Swal.fire('err', err.toString(), 'error');
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
                <div class="row Overflow Table">
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
                                                    <a class="button is-primary is-outlined" onClick={Form.bind(this, 'Actualizar', Item, UpdateUserForm, true)}>
                                                        <span class="icon">
                                                            <i class="fas fa-user-cog"></i>
                                                        </span>
                                                    </a>
                                                    <a class="button is-danger is-outlined" onClick={Delete.bind(this, Item)}>
                                                        <span class="icon">
                                                            <i class="fas fa-user-times"></i>
                                                        </span>
                                                    </a>
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
                <a class="button is-primary float" onClick={Form.bind(this, 'Agregar', initUser, AddUserForm, false)}><i class="fa fa-plus my-float"></i></a>
            </div>
        );
    } else {
        return (
            <div class="full">
                <NavBar props={props} />
                <Loader />
            </div>
        );
    }
}
