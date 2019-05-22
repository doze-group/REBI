const { Component } = React;

function Login(props) {

    function Submit() {
        document.getElementById('login').classList.add('is-loading');
        setTimeout(function () {
            if (LoginUser(document.getElementById('email').value, document.getElementById('password').value)) {
                window.location.reload();
            } else {
                Swal.fire(
                    'Error de autenticación',
                    'Emaial y/o contraseña invalidos',
                    'error'
                );
            }
            document.getElementById('login').classList.remove('is-loading');
        }, 5000);
    }

    return (
        <div class="hero is-fullheight">
            <div class="hero-head">
                <NavBar props={props} />
            </div>
            <div class="hero-body is-horizontal-center is-vertical-center">
                <div class="columns">
                    <div class="column">
                        <div class="card has-text-centered equal-height" >
                            <div class="card-content is-horizontal-center is-paddingless">
                                <div class="rows">
                                    <div class="row is-horizontal-center is-vertical-center gradient" style={{ padding: '20px', }}>
                                        <img
                                            src="https://tecnologicocomfenalco.edu.co/sites/default/files/Logo.png"
                                            alt="Placeholder image"
                                        />
                                    </div>
                                    <div class="row" style={{ padding: '20px' }}>
                                        <form action="javascript:;" onSubmit={Submit.bind(this)} method="POST">
                                            <div class="field">
                                                <p class="control has-icons-left has-icons-right">
                                                    <input class="input" type="email" placeholder="Email" required id="email" />
                                                    <span class="icon is-small is-left">
                                                        <i class="fas fa-at"></i>
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="field">
                                                <p class="control has-icons-left">
                                                    <input class="input" type="password" placeholder="Contraseña" required id="password" />
                                                    <span class="icon is-small is-left">
                                                        <i class="fas fa-lock"></i>
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="field">
                                                <p class="control">
                                                    <button class="button is-link is-fullwidth" type="submit" id="login">
                                                        <span class="icon is-small">
                                                            <i class="fas fa-sign-in-alt"></i>
                                                        </span>
                                                        <span>Login</span>
                                                    </button>
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}