const { Component } = React;

function Home(props) {
    const { LastAdd, Search, SearchA, SerachOpc } = Messages();
    return (
        <div class="hero is-fullheight">
            <div class="hero-head">
                <NavBar props={props} />
            </div>
            <div class="hero-body">
                <div class="columns">
                    <div class="column is-3 is-hidden-mobile" style={{ height: '84.5%' }}>
                        <div class="card has-text-centered is-fullwidth" >
                            <nav class="panel is-paddingless">
                                <p class="panel-heading gradient has-text-white">{SearchA}</p>
                                <div class="panel-block">
                                    <div class="field has-addons">
                                        <div class="control">
                                            <input class="input" type="text" placeholder="Buscar" />
                                        </div>
                                        <div class="control">
                                            <a class="button is-info">
                                                {Search}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {
                                    SerachOpc.map((item, i) => {
                                        var valid = i == (SerachOpc.length - 1);
                                        return (
                                            <a class="panel-block is-active" style={{ borderBottomLeftRadius: valid ? '10px' : null, borderBottomRightRadius: valid ? '10px' : null, }}>
                                                <span class="panel-icon">
                                                    <i class="fas fa-book" aria-hidden="true"></i>
                                                </span>
                                                {item}
                                            </a>
                                        )
                                    })
                                }
                            </nav>
                        </div>
                    </div>
                    <div class="column is-fullheight Scroll User">
                        <p class="border is-size-4 has-text-link" style={{ marginBottom: '10px', }}>{LastAdd}</p>
                        <ListMedia Array={SerachOpc} />
                    </div>
                </div>
            </div>
        </div >
    );
}