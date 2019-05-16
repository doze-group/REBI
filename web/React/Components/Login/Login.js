const { Component } = React;

function Login(props) {
    return (
        <div class="container full is-fullhd">
            <NavBar props={props} />
            <div class="columns Scroll">
                <div class="column is-flex is-horizontal-center is-vertical-center is-multiline">
                    <div class="rows" style={{ marginTops: '-20px' }}>
                        <div class="row is-flex is-horizontal-center is-vertical-center">
                            <img
                                src="https://tecnologicocomfenalco.edu.co/sites/default/files/Logo.png"
                                alt="Placeholder image"
                            />
                        </div>
                        <div class="row" style={{ paddingTop: '20px' }}>
                            <div class="card has-text-centered equal-height">
                                <div class="card-content is-flex is-horizontal-center">
                                    <div class="rows">
                                        <div class="row">
                                            <div class="field">
                                                <p class="control has-icons-left has-icons-right">
                                                    <input class="input" type="email" placeholder="Usuario" required />
                                                    <span class="icon is-small is-left">
                                                        <i class="fas fa-user"></i>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row" style={{ paddingTop: '20px' }}>
                                            <div class="field">
                                                <p class="control has-icons-left">
                                                    <input class="input" type="password" placeholder="Contraseña" required />
                                                    <span class="icon is-small is-left">
                                                        <i class="fas fa-lock"></i>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row" style={{ paddingTop: '20px' }}>
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
            </div>
        </div >
    );
}

function Submit(props) {
    localStorage.setItem('User', 'Item');
    console.log(props);
    props.history.push('/Home');
}