const { Component } = React;
const { Redirect } = ReactRouterDOM;

function NavBar() {
    return (
        <nav class="navbar is-fixed-top level is-fixed-top is-white">
            <div class="level-left Logo">
                <div class="level-item">
                    <img src="https://tecnologicocomfenalco.edu.co/sites/default/files/Logo.png" alt="Logo" />
                </div>
            </div>
            <div class="level-right">
                <div class="level-item">
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
                        <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                            <div class="dropdown-content">
                                <a class="dropdown-item has-text-centered is-paddingless">
                                    <span class="icon is-medium has-text-info">
                                        <i class="fas fa-user-circle fa-2x"></i>
                                    </span>
                                    <p>
                                        Tu Perfil
                                    </p>
                                </a>
                                <hr class="dropdown-divider" />
                                <a class="dropdown-item has-text-centered is-paddingless">
                                    <span class="icon is-medium has-text-info">
                                        <i class="fas fa-file-archive fa-2x"></i>
                                    </span>
                                    <p>
                                        Tus Archivos
                                    </p>
                                </a>
                                <hr class="dropdown-divider" />
                                <a class="dropdown-item has-text-centered is-paddingless">
                                    <span class="icon is-medium has-text-info">
                                        <i class="fas fa-home fa-2x"></i>
                                    </span>
                                    <p>
                                        Inicio
                                    </p>
                                </a>
                                <hr class="dropdown-divider" />
                                <a class="dropdown-item has-text-centered is-paddingless">
                                    <span class="icon is-medium has-text-info">
                                        <i class="fas fa-cogs fa-2x"></i>
                                    </span>
                                    <p>
                                        Configuración
                                    </p>
                                </a>
                                <hr class="dropdown-divider" />
                                <a class="dropdown-item has-text-centered is-paddingless">
                                    <span class="icon is-medium has-text-danger">
                                        <i class="fas fa-sign-out-alt fa-2x"></i>
                                    </span>
                                    <p>
                                        Salir
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}