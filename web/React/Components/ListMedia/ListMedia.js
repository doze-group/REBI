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
                                        <img src="http://www.iconarchive.com/download/i60041/mattahan/ultrabuuf/Comics-Spiderman-Cam.ico" />
                                    </p>
                                </figure>
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                            <a>Este Articulo es de ciencia</a> <small>@Fernando Araujo</small>
                                            <br />
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                                    </p>
                                    </div>
                                    <nav class="level is-mobile">
                                        <div class="level-left">
                                            <a class="level-item">
                                                <span class="icon is-small"><i class="fas fa-reply"></i></span>
                                            </a>
                                            <a class="level-item">
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