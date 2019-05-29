const { Component, useState } = React;

function Files(props) {

    const [Documents, setDocuments] = useState([]);
    const { DocumentsTitle, Search, DocumentsHead, DeleteDocumentMessage, UpdateDocumentMessage, CreateDocumentMessage } = Messages();
    const [Load, setLoad] = useState(false);
    const [Update, setUpdate] = useState(false);
    const [Init, setInit] = useState(true);
    const User = JSON.parse(localStorage.getItem('User'));

    function Form() {
        const MySwal = sweetalert2ReactContent(Swal)
        MySwal.fire({
            title: 'Agregar',
            html: <FormFile Action={UploadFile} />,
            showCloseButton: true,
            showConfirmButton: false
        });
    }

    useEffect(() => {
        if (Update || Init) {
            getFilesId(User.id_db).then(Data => {
                setDocuments(Data);
                setLoad(true);
            }).catch(err => { setLoad(true); });
            setUpdate(false);
        }
        setInit(false);
    });


    async function UploadFile(File) {
        setLoad(false);
        await Upload(File).then(file => {
            Swal.fire(CreateDocumentMessage, '', 'success');
            setUpdate(true);
        }).catch(err => {
            Swal.fire('Error', err.toString(), 'error');
        });
        setLoad(true);
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
                                        {Search}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="row Scroll Files" style={{ paddingTop: '10px' }}>
                            <div class="card CardTable">
                                <header class="card-header gradient">
                                    <p class="card-header-title has-text-white is-horizontal-center">{DocumentsTitle}</p>
                                </header>
                                <div class="card-content is-paddingless">
                                    <table class="table is-fullwidth">
                                        <thead>
                                            {
                                                DocumentsHead.map((item, i) => {
                                                    return (
                                                        <th class="has-text-centered">{item}</th>
                                                    )
                                                })
                                            }
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
                                                                                <span class="tag is-info">
                                                                                    {item}
                                                                                </span>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                            </td>
                                                            <td class="has-text-centered">
                                                                <div class="buttons has-text-centered is-horizontal-center">
                                                                    <a class="button is-info is-outlined">
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
                <a class="button is-info float" onClick={Form.bind(this)}><i class="fa fa-file-upload"></i></a>
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