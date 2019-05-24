const { Component } = React;

function Profile(props) {
    const User = JSON.parse(localStorage.getItem('User'));
    const [Load, setLoad] = useState(true);
    const { EditProfile, Activity, Download, Favorites } = Messages();

    function ChartCanvas() {
        var ctx = document.getElementById('Chart').getContext('2d');
        var chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Descargado', 'Favorito', 'Visto'],
                datasets: [{
                    label: 'La vida de ella',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [0, 10, 5]
                }, {
                    label: 'La vida en la perimetral',
                    backgroundColor: 'rgb(22, 11, 22)',
                    borderColor: 'rgb(12, 32, 12)',
                    data: [2, 20, 15]
                }]
            },

            // Configuration options go here
            options: {}
        });
    }

    function TabsActive(id, idsHidden) {
        ChartCanvas.bind(window)();
        idsHidden.map((item, i) => {
            document.getElementById(item).classList.remove('is-active');
            document.getElementById(item + '-Content').classList.add('is-hidden');
        });
        document.getElementById(id).classList.add('is-active');
        document.getElementById(id + '-Content').classList.add('is-active');
        document.getElementById(id + '-Content').classList.remove('is-hidden');
    }

    return (
        <div class="hero is-fullheight">
            <div class="hero-head">
                <NavBar props={props} />
            </div>
            {Load ?
                <div class="hero-body is-fullheight">
                    <div class="columns Profile" style={{ width: '100%' }}>
                        <div class="column is-3 Scroll is-hidden-mobile">
                            <div class="card">
                                <header class="card-header gradient">
                                    <p class="card-header-title has-text-white is-horizontal-center">{User.nombre}</p>
                                </header>
                                <div class="card-image is-vertical-center is-horizontal-center">
                                    <figure class="image is-128x128">
                                        <img src={User.img} alt="Placeholder image" onError={(e) => e.target.src = "https://coparmexmetropolitano.mx/themes/websiteV2/uploads/candidatos/alcaldias/jorge-martinez.png"} />
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div class="content">
                                        Como we mi tio esto se altera 4x4 sin tembladera duro pa duro para todas las nenas mi tio por la perimetral
                                        <br />
                                        <br />
                                        <time datetime="2016-1-1">Fecha de creacion: 2016-1-1</time>
                                        <br />
                                        <br />
                                        <span class="icon is-small"><i class="fas fa-street-view" aria-hidden="true"></i></span>
                                        Cartagena, Colombia
                                    </div>
                                </div>
                                <footer class="card-footer">
                                    <a class="card-footer-item" onClick={ChartCanvas}>{EditProfile}</a>
                                </footer>
                            </div>
                        </div>
                        <div class="column is-fullwidth">
                            <div class="tabs is-centered is-boxed border">
                                <ul>
                                    <li class="is-active" onClick={() => TabsActive('Downloads', ['Favorites', 'Activity'])} id="Downloads">
                                        <a>
                                            <span class="icon is-small"><i class="fas fa-download" aria-hidden="true"></i></span>
                                            <span>{Download}</span>
                                        </a>
                                    </li>
                                    <li class="" onClick={() => TabsActive('Favorites', ['Downloads', 'Activity'])} id="Favorites">
                                        <a>
                                            <span class="icon is-small"><i class="fas fa-heart" aria-hidden="true"></i></span>
                                            <span>{Favorites}</span>
                                        </a>
                                    </li>
                                    <li class="" onClick={() => TabsActive('Activity', ['Favorites', 'Downloads'])} id="Activity">
                                        <a>
                                            <span class="icon is-small"><i class="fas fa-chart-line" aria-hidden="true"></i></span>
                                            <span>{Activity}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="tabs-content Scroll">
                                <div class="tab-content is-active" id="Downloads-Content">
                                    <ListMedia Array={[1, 2, 3, 5, 6]} />
                                </div>
                                <div class="tab-content is-hidden" id="Favorites-Content">
                                    <ListMedia Array={[1, 2, 3, 5, 6]} />
                                </div>
                                <div class="tab-content is-hidden" id="Activity-Content">
                                    <canvas id="Chart" class="is-fullwidth is-fullheigth"></canvas>
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