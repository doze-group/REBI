const { Component } = React;

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = { Login }
    }

    SelectBox() {
        const Items = [
            {
                Title: 'Tu Perfil',
                icon: 'fa-user-circle'
            },
            {
                Title: 'Tus Archivos',
                icon: 'fa-file-archive'
            },
            {
                Title: 'Inicio',
                icon: 'fa-home'
            },
            {
                Title: 'Configuración',
                icon: 'fa-cogs'
            },
            {
                Title: 'Salir',
                icon: 'fa-sign-out-alt'
            }
        ];

        return (
            <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                <div class="dropdown-content">
                    {
                        Items.map((item, i) => {
                            return (
                                <div>
                                    {i !== 0 ? <hr class="dropdown-divider" /> : null}
                                    <a class="dropdown-item has-text-centered is-paddingless">
                                        <span class="icon is-medium has-text-info">
                                            <i class={"fas " + item.icon + " fa-2x"}></i>
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

    render() {
        return (
            <nav class="navbar is-fixed-top level is-fixed-top has-background-light">
                <div class="level-left Logo">
                    <div class="level-item">
                        <img src="https://tecnologicocomfenalco.edu.co/sites/default/files/Logo.png" alt="Logo" />
                    </div>
                </div>
                <div class="level-right">
                    <div class="level-item NavDrop">
                        {this.state.Login != null ?
                            <div>
                                <div class="dropdown is-hoverable is-left is-hidden-mobile">
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
                                    {this.SelectBox()}
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
}