const { Component, useState, useEffect } = React;

function AdminUser(props) {

    const [Load, setLoad] = useState(false);
    const [Update, setUpdate] = useState(false);
    const [Init, setInit] = useState(true);
    const [Users, setUsers] = useState([]);
    const { UserTitle, Search, UserHead, DeleteTitle, DeleteUserMessage, CreateUserMessage } = Messages();
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
            title: DeleteTitle,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Si, Eliminar'
        }).then((result) => {
            if (result.value) {
                setLoad(false);
                DeleteUser(User.id_db).then(user => {
                    console.log(user);
                    Swal.fire(DeleteUserMessage, '', 'success');
                    setUpdate(true);
                }).catch(err => {
                    Swal.fire('Error', err.toString(), 'error');
                })
            }
        });
    }

    function AddUserForm(User) {
        setLoad(false);
        AddUser(User).then(user => {
            Swal.fire(CreateUserMessage, '', 'success');
            setUpdate(true);
        }).catch(err => {
            Swal.fire('Error', err.toString(), 'error');
        });
    }

    function UpdateUserForm(User) {
        setLoad(false);
        UpdateUser(User).then(user => {
            Swal.fire(UpdateUserMessage, '', 'success');
            setUpdate(true);
        }).catch(err => {
            Swal.fire('Error', err.toString(), 'error');
        });
    }

    if (Load) {
        return (
            <div class="hero is-fullheight">
                <div class="hero-head">
                    <NavBar props={props} />
                </div>
                <div class="hero-body">
                    <div class="rows" style={{ width: '100%' }}>
                        <div class="row is-horizontal-center is-vertical-center is-multiline">
                            <div class="field has-addons">
                                <div class="control">
                                    <input class="input" type="text" placeholder="Buscar por nombre" />
                                </div>
                                <div class="control">
                                    <a class="button is-info">
                                        {Search}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="row Scroll User" style={{ paddingTop: '10px' }}>
                            <div class="card CardTable">
                                <div class="card-content is-paddingless">
                                    <header class="card-header gradient">
                                        <p class="card-header-title has-text-white is-horizontal-center">{UserTitle}</p>
                                    </header>
                                    <table class="table is-fullwidth">
                                        <thead>
                                            {
                                                UserHead.map((item, i) => {
                                                    return (
                                                        <th class="has-text-centered">{item}</th>
                                                    )
                                                })
                                            }
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
                                                                <div class="buttons is-horizontal-center">
                                                                    <a class="button is-info is-outlined" onClick={Form.bind(this, 'Actualizar', Item, UpdateUserForm, true)}>
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
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="button is-info float" onClick={Form.bind(this, 'Agregar', initUser, AddUserForm, false)}><i class="fa fa-user-plus"></i></a>
            </div>
        );
    } else {
        return (
            <div class="hero is-fullheight">
                <div class="hero-head">
                    <NavBar props={props} />
                </div>
                <div class="hero-body is-horizontal-center is-vertical-center">
                    <Loader />
                </div>
            </div>
        );
    }
}
