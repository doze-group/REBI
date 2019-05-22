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
        var temp = [];
        for (let index = 0; index < 100; index++) {
            temp.push({ titulo: 'Alguno', descripcion: 'alguna', tags: ['a', 'a'], });
        }
        setDocuments(temp);
    }

    if (Load) {
        return (
            <div class="hero is-fullheight">
                <div class="hero-head">
                    <NavBar props={props} />
                </div>
                <div class="hero-body" style={{ alignItems: 'start', }}>
                    <div class="rows" style={{ width: '100%' }}>
                        <div class="row is-horizontal-center is-vertical-center is-multiline">
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
                        <div class="row Scroll Files" style={{ paddingTop: '10px' }}>
                            <div class="card CardTable">
                                <header class="card-header gradient">
                                    <p class="card-header-title has-text-white is-horizontal-center">Documentos</p>
                                </header>
                                <div class="card-content is-paddingless">
                                    <table class="table is-fullwidth">
                                        <thead>
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
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="button is-primary float" onClick={Form.bind(this)}><i class="fa fa-file-upload"></i></a>
            </div>
        );
    } else {
        return (
            <div class="hero is-fullheight">
                <div class="hero-head">
                    <NavBar props={props} />
                </div>
                <div class="hero-body is-horizontal-center is-vertical-center">
                    <Loader />
                </div>
            </div>
        );
    }
}