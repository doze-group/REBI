const { Component, useState } = React;

function Files(props) {

    const [Documents, setDocuments] = useState([{ titulo: 'Alguno', descripcion: 'alguna', tags: ['a', 'a'], }]);
    const [Load, setLoad] = useState(true);

    var Items = <tr>
        <th class="has-text-centered">Titulo</th>
        <th class="has-text-centered">Descripción</th>
        <th class="has-text-centered">Tags</th>
        <th class="has-text-centered">Acciones</th>
    </tr>

    function Form() {
        const MySwal = sweetalert2ReactContent(Swal)
        MySwal.fire({
            title: 'Agregar',
            html: <FormFile Action={() => console.log('hola')} />,
            showCloseButton: true,
            showConfirmButton: false
        });
    }

    if (Load) {
        return (
            <div class="container full is-fullhd">
                <NavBar props={props} />
                <div class="row is-flex is-horizontal-center is-vertical-center is-multiline">
                    <div class="field has-addons">
                        <div class="control">
                            <input class="input" type="text" placeholder="Buscar por titulo" />
                        </div>
                        <div class="control">
                            <a class="button is-info">
                                Buscar
                            </a>
                        </div>
                    </div>
                </div>
                <div class="row Overflow Table">
                    <table class="table is-fullwidth">
                        <thead>
                            <tr><th colspan="4" class="has-text-centered">Documentos</th></tr>
                            {Items}
                        </thead>
                        <tbody>
                            {
                                Documents.map((Item, i) => {
                                    return (
                                        <tr>
                                            <td class="has-text-centered">{Item.titulo}</td>
                                            <td class="has-text-centered">{Item.descripcion}</td>
                                            <td class="has-text-centered">
                                                <div class="tags is-horizontal-center">
                                                    {
                                                        Item.tags.map((item, i) => {
                                                            return (
                                                                <span class="tag is-success">
                                                                    {item}
                                                                </span>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </td>
                                            <td class="has-text-centered">
                                                <div class="buttons has-text-centered is-horizontal-center">
                                                    <a class="button is-primary is-outlined">
                                                        <span class="icon">
                                                            <i class="fas fa-file-signature"></i>
                                                        </span>
                                                    </a>
                                                    <a class="button is-danger is-outlined">
                                                        <span class="icon">
                                                            <i class="fas fa-file-excel"></i>
                                                        </span>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                        <tfoot>{Items}</tfoot>
                    </table>
                </div>
                <a class="button is-primary float" onClick={Form.bind(this)}><i class="fa fa-file-upload"></i></a>
            </div>
        );
    } else {
        return (
            <div class="full">
                <NavBar props={props} />
                <Loader />
            </div>
        );
    }
}