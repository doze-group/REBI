const { Component } = React;

function Login(props) {
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
                                        <div class="field">
                                            <p class="control has-icons-left has-icons-right">
                                                <input class="input" type="email" placeholder="Usuario" required />
                                                <span class="icon is-small is-left">
                                                    <i class="fas fa-user"></i>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="row" style={{ padding: '20px' }}>
                                        <div class="field">
                                            <p class="control has-icons-left">
                                                <input class="input" type="password" placeholder="Contraseña" required />
                                                <span class="icon is-small is-left">
                                                    <i class="fas fa-lock"></i>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="row" style={{ padding: '20px' }}>
                                        <div class="field">
                                            <p class="control">
                                                <button class="button is-link is-fullwidth" onClick={Submit.bind(this, props)}>
                                                    <span class="icon is-small">
                                                        <i class="fas fa-sign-in-alt"></i>
                                                    </span>
                                                    <span>Login</span>
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

function Submit(props) {
    localStorage.setItem('User', 'Item');
    console.log(props);
    props.history.push('/Home');
}