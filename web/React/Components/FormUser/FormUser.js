const { Componente, useState, useEffect } = React

function FormUser(props) {

    function Submit() {
        var User = {
            "nombre": document.getElementById("nombre").value,
            "email": document.getElementById("email").value,
            "password": document.getElementById("password").value,
            "id_institucional": document.getElementById("id_institucional").value,
            "id_ciudadania": document.getElementById("id_ciudadania").value,
            "role": document.getElementById("role").value
        };
        props.Put ? Object.assign(User, { "id_db": props.User.id_db }) : null;
        props.Action(User);
        return false;
    }

    return (
        <form onSubmit={Submit.bind(this)} action="javascript:;" method="POST">
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="text" placeholder="Nombre" required defaultValue={props.User.nombre} id="nombre" />
                    <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Email" required defaultValue={props.User.email} id="email" />
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control has-icons-left">
                    <input class="input" type="password" placeholder="Contraseña" required defaultValue={props.User.password} id="password" />
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="text" placeholder="Id Institucional" required defaultValue={props.User.id_institucional} id="id_institucional" />
                    <span class="icon is-small is-left">
                        <i class="fas fa-id-badge"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="text" placeholder="Cedula" required defaultValue={props.User.id_ciudadania} id="id_ciudadania" />
                    <span class="icon is-small is-left">
                        <i class="fas fa-id-card"></i>
                    </span>
                </p>
            </div>

            <div class="field">
                <p class="control has-icons-left">
                    <span class="select is-fullwidth">
                        <select required id="role" defaultValue={props.User.role}>
                            <option selected={props.User.role == "user"} value="user">Usuario</option>
                            <option selected={props.User.role == "admin"} value="admin">Administrador</option>
                        </select>
                    </span>
                    <span class="icon is-small is-left">
                        <i class="fas fa-user-tag"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control">
                    <button class="button is-success is-fullwidth" type="submit">{props.TextAction}</button>
                </p>
            </div>
        </form>
    );
}