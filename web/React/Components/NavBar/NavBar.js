const { Component } = React;
const { Redirect } = ReactRouterDOM;

function NavBar() {
    return (
        <nav class="navbar is-fixed-top is-white">
            <div class="navbar-brand">
                <a class="navbar-item">
                    <img alt="Tecnológico Comfenalco" src="https://tecnologicocomfenalco.edu.co/sites/default/files/Logo.png" width="112" height="28"></img>
                </a>
            </div>
            <div class="navbar-menu" id="navMenu">
                <div class="navbar-end">
                    <div class="navbar-item is-expanded">
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navabar-link">
                                <div class="icon is-medium">
                                    <i class="fas fa-user-circle fa-2x"></i>
                                </div>
                            </a>
                            <div class="navbar-dropdown">
                                <a class="navbar-item">
                                    About
                                </a>
                                <a class="navbar-item">
                                    Jobs
                                </a>
                                <a class="navbar-item">
                                    Contact
                                </a>
                                <hr class="navbar-divider" />
                                <a class="navbar-item">
                                    Report an issue
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}