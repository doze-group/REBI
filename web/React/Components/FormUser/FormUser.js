const { Componente, useState, useEffect } = React

const [User, setUser] = useState({});

function FormUser(props) {
    setUser(props.User);
    return (
        <form onSubmit={() => Submit.bind(this)}>
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Email" required value={User.email} onChange={e => setUser({ email: e.target.value })} />
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control has-icons-left">
                    <input class="input" type="password" placeholder="Contraseña" required value={User.password} onChange={e => setUser({ password: e.target.value })} />
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="text" placeholder="Id Institucional" required disabled={props.Put} value={User.id_institucional} onChange={e => setUser({ id_institucional: e.target.value })} />
                    <span class="icon is-small is-left">
                        <i class="fas fa-id-badge"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="text" placeholder="Cedula" required disabled={props.Put} value={User.id_ciudadania} onChange={e => setUser({ id_ciudadania: e.target.value })} />
                    <span class="icon is-small is-left">
                        <i class="fas fa-id-card"></i>
                    </span>
                </p>
            </div>

            <div class="field">
                <p class="control has-icons-left">
                    <span class="select">
                        <select onChange={e => setUser({ role: e.target.value })} value={User.role}>
                            <option selected={User.role == "user"} value="user">Usuario</option>
                            <option selected={User.role == "admin"} value="admin">Administrado</option>
                        </select>
                    </span>
                    <span class="icon is-small is-left">
                        <i class="fas fa-user-tag"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control">
                    <input class="button is-success is-fullwidth" type="submit" />
                </p>
            </div>
        </form>
    );
}

function Submit() {
    console.log(User)
    props.Action();
}