const { Component } = React;

function Login(props) {

    const { LoginTitle, LoginTitleMessageError, LoginMessageError } = Messages();

    function Submit() {
        document.getElementById('login').classList.add('is-loading');
        LoginUser(document.getElementById('email').value, document.getElementById('password').value).then(user => {
            localStorage.setItem('User', JSON.stringify(user));
            window.location.reload();
        }).catch(err => {
            Swal.fire(
                LoginTitleMessageError,
                LoginMessageError,
                'error'
            );
            document.getElementById('login').classList.remove('is-loading');
        });
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
                                        <img src="./React/Images/Logo.png" alt="Logo" />
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
                                                        <span>{LoginTitle}</span>
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