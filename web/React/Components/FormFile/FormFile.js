const { Component, useState } = React;

function FormFile(props) {

    const [Tags, setTags] = useState([]);

    function Submit() {

    }

    function AddTag() {
        var tag = document.getElementById('tag').value;
        if (tag != '' && tag != undefined && tag != null) {
            if (!Tags.includes(tag)) {
                var temp = Tags.slice(0);
                temp.push(tag);
                setTags(temp);
            }
            document.getElementById('tag').value = '';
        }
    }

    function RemoveTag(index) {
        var temp = Tags.slice(0);
        temp.splice(index, 1);
        setTags(temp);
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
                    <input class="input" type="text" placeholder="Tag" id="tag" />
                </div>
                <div class="control">
                    <a class="button is-info" onClick={AddTag.bind(this)}>
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
                                        <a class="delete is-small" onClick={RemoveTag.bind(this, i)}></a>
                                    </span>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <div class="file has-name is-boxed">
                        <label class="file-label">
                            <input class="file-input" type="file" name="resume" />
                            <span class="file-cta">
                                <span class="file-icon">
                                    <i class="fas fa-upload"></i>
                                </span>
                                <span class="file-label">
                                    Buscar Archivo
                                </span>
                            </span>
                            <span class="file-name">
                                Screen Shot 2017-07-29 at 15.54.25.png
                            </span>
                        </label>
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