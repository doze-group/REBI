const { Component, useState } = React;

function FormFile(props) {

    const [Tags, setTags] = useState([]);

    function Submit() {

    }

    return (
        <form action="javascript:;" onSubmit={Submit.bind(this)} method="POST">
            <div class="field">
                <p class="control">
                    <input class="input" type="text" placeholder="Titulo del documento" required id="titulo" />
                </p>
            </div>
            <div class="field">
                <div class="control">
                    <textarea class="textarea" placeholder="Descripción del documento"></textarea>
                </div>
            </div>
            <div class="field has-addons">
                <div class="control">
                    <input class="input" type="text" placeholder="Tag" />
                </div>
                <div class="control">
                    <a class="button is-info">
                        Agregar
                    </a>
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <div class="tags">
                        {
                            Tags.map((item, i) => {
                                return (
                                    <span class="tag is-success">
                                        {item}
                                        <button class="delete is-small"></button>
                                    </span>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div class="field">
                <p class="control">
                    <button class="button is-success is-fullwidth" type="submit">Subir Documento</button>
                </p>
            </div>
        </form>
    );
}