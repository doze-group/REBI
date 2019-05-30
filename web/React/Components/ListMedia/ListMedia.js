const { Componet } = React;

function ListMedia(props) {

    return (
        <div class="list is-hoverable">
            {
                props.Array.map((item, i) => {
                    return (
                        <div class="list-item">
                            <article class="media">
                                <figure class="media-left">
                                    <p class="image is-64x64">
                                        <img src="https://www.novoprint.es/wp-content/uploads/2019/01/PDF_LOGO.png" />
                                    </p>
                                </figure>
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                            <a onClick={() => props.history.push({
                                                pathname: 'File/' + item.id_db,
                                                state: item
                                            })}>{item.titulo}</a>
                                            <br />
                                            {item.descripcion}
                                        </p>
                                    </div>
                                    <nav class="level is-mobile">
                                        <div class="level-left">
                                            <a class="level-item">
                                                <span class="icon is-small"><i class="fas fa-reply"></i></span>
                                            </a>
                                            <a class="level-item" download href={item.link_download}>
                                                <span class="icon is-small"><i class="fas fa-download"></i></span>
                                            </a>
                                            <a class="level-item">
                                                <span class="icon is-small"><i class="fas fa-heart"></i></span>
                                            </a>
                                        </div>
                                    </nav>
                                </div>
                            </article>
                        </div>
                    )
                })
            }
        </div>
    );

}