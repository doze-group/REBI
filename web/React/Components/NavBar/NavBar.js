const { Component } = React;

function NavBar(props) {

    const User = JSON.parse(localStorage.getItem('User'));

    return (
        <nav class="navbar level">
            <div class="level-left Logo">
                <a class="level-item" onClick={() => props.props.history.push('/Home')}>
                    <img src="./React/Images/Logo.png" alt="Logo"/>
                </a>
            </div>
            <div class="level-right">
                <div class="level-item NavDrop is-hidden-mobile">
                    {User != null ?
                        <div>
                            <div class="dropdown is-hoverable is-left">
                                <div class="dropdown-trigger">
                                    <button class="button is-transparent has-text-white" aria-haspopup="true" aria-controls="dropdown-menu3">
                                        <span class="image is-24x24">
                                            <figure>
                                                <img src={User.img} onError={(e) => e.target.src = "https://coparmexmetropolitano.mx/themes/websiteV2/uploads/candidatos/alcaldias/jorge-martinez.png"} />
                                            </figure>
                                        </span>
                                        <span class="Nombre">{User.nombre}</span>
                                        <span class="icon is-small">
                                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                                        </span>
                                    </button>
                                </div>
                                {SelectBox(props.props)}
                            </div>
                        </div>
                        : <button class="button is-link is-fullwidth" onClick={() => props.props.history.push('/Login')}>
                            <span class="icon is-small">
                                <i class="fas fa-sign-in-alt"></i>
                            </span>
                            <span>Login</span>
                        </button>}
                </div>
            </div>
        </nav>
    );
}

function SelectBox(props) {
    const Items = [
        {
            Title: 'Tu Perfil',
            Icon: 'fa-user-circle',
            Function: () => props.history.push('/Profile')
        },
        {
            Title: 'Tus Archivos',
            Icon: 'fa-file-archive',
            Function: () => props.history.push('/Files')
        },
        {
            Title: 'Inicio',
            Icon: 'fa-home',
            Function: () => props.history.push('/Home')
        },
        {
            Title: 'Configuración',
            Icon: 'fa-cogs',
            Function: () => { }
        }
    ];

    if (JSON.parse(localStorage.getItem('User')).role == 'admin') {
        Items.push({
            Title: 'Administrar Usuarios',
            Icon: 'fa-users',
            Function: () => props.history.push('/AdminUser')

        });
    }

    Items.push({
        Title: 'Salir',
        Icon: 'fa-sign-out-alt',
        Function: Logout
    });

    return (
        <div class="dropdown-menu" id="dropdown-menu3" role="menu">
            <div class="dropdown-content">
                {
                    Items.map((item, i) => {
                        return (
                            <div>
                                {i !== 0 ? <hr class="dropdown-divider" /> : null}
                                <a class="dropdown-item has-text-centered is-paddingless" onClick={item.Function.bind(this)}>
                                    <span class="icon is-medium has-text-info">
                                        <i class={"fas " + item.Icon + " fa-2x"}></i>
                                    </span>
                                    <p>
                                        {item.Title}
                                    </p>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}