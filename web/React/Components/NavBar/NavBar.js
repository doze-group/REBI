const { Component } = React;

function NavBar(props) {
    return (
        <nav class="navbar level has-background-light">
            <div class="level-left Logo">
                <div class="level-item">
                    <img src="https://tecnologicocomfenalco.edu.co/sites/default/files/Logo.png" alt="Logo" />
                </div>
            </div>
            <div class="level-right">
                <div class="level-item NavDrop is-hidden-mobile">
                    {localStorage.getItem('User') != null ?
                        <div>
                            <div class="dropdown is-hoverable is-left">
                                <div class="dropdown-trigger">
                                    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                                        <span class="image is-24x24">
                                            <figure>
                                                <img src="http://www.iconarchive.com/download/i60041/mattahan/ultrabuuf/Comics-Spiderman-Cam.ico" />
                                            </figure>
                                        </span>
                                        <span class="Nombre">Fernando Araujo</span>
                                        <span class="icon is-small">
                                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                                        </span>
                                    </button>
                                </div>
                                {SelectBox(props.props)}
                            </div>
                        </div>
                        : <button class="button is-link is-fullwidth">
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
            Function: () => { }
        },
        {
            Title: 'Tus Archivos',
            Icon: 'fa-file-archive',
            Function: () => { }
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
        Function: () => { }
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