const { Component } = React;

function Profile(props) {
    const User = JSON.parse(localStorage.getItem('User'));
    const [Load, setLoad] = useState(true);
    return (
        <div class="hero is-fullheight">
            <div class="hero-head">
                <NavBar props={props} />
            </div>
            {Load ?
                <div class="hero-body Scroll is-fullheight">
                    <div class="columns is-fullheight" style={{ Width: '100%' }}>
                        <div class="column is-4 is-narrow">
                            <div class="card is-fullwidth">
                                <header class="card-header gradient">
                                    <p class="card-header-title has-text-white is-horizontal-center">{User.nombre}</p>
                                </header>
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img src={User.img} alt="Placeholder image" onError={(e) => e.target.src = "https://coparmexmetropolitano.mx/themes/websiteV2/uploads/candidatos/alcaldias/jorge-martinez.png"} />
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div class="content">
                                        Aqui puede ir una descripción
                                        <br />
                                        <time datetime="2016-1-1">Fecha de creacion: 2016-1-1</time>
                                    </div>
                                </div>
                                <footer class="card-footer">
                                    <a class="card-footer-item">Ediitar perfil</a>
                                </footer>
                            </div>
                        </div>
                        <div class="column is-fullwidth is-horizontal-center is-vcentered">
                            <div class="tabs is-centered is-boxed">
                                <ul>
                                    <li class="is-active">
                                        <a>
                                            <span class="icon is-small"><i class="fas fa-download" aria-hidden="true"></i></span>
                                            <span>Descargados</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <span class="icon is-small"><i class="fas fa-heart" aria-hidden="true"></i></span>
                                            <span>Favoritos</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <span class="icon is-chart-line"><i class="fas fa-heart" aria-hidden="true"></i></span>
                                            <span>Actividad</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="tabs-content">
                                <div class="tab-content is-active">
                                    <p>Content 1</p>
                                </div>
                                <div class="tab-content is-hidden">
                                    <p>Content 2</p>
                                </div>
                                <div class="tab-content is-hidden">
                                    <p>Content 2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> :
                <div class="hero-body is-horizontal-center is-vertical-center">
                    <Loader />
                </div>
            }
        </div>
    );
}