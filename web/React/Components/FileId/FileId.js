const { Component } = React;

function FileId(props) {

  const { FileDownload, View } = Messages();
  const [File, setFile] = useState({ tags: [] });
  const [Load, setLoad] = useState(false);
  const [Init, setInit] = useState(true);
  const [User, setUser] = useState({});

  useEffect(() => {
    if (Init) {
      getFilesId(props.match.params.id, 'getbyId').then(Data => {
        setFile(Data[0]);
        getUser(Data[0].id_db_user).then(user => {
          setUser(user[0]);
          setLoad(true);
        });
      }).catch(err => { setLoad(true); });
    }
    setInit(false);
  });

  return (
    <div class="hero is-fullheight">
      <div class="hero-head">
        <NavBar props={props} />
      </div>
      {
        Load ? <div class="hero-body">
          <div class="columns" style={{ width: '100%' }}>
            <div class="column is-3 is-vertical-center User Scroll" >
              <div class="card">
                <header class="card-header color gradient">
                  <p class="card-header-title has-text-white is-horizontal-center">
                    {File.titulo}
                  </p>
                </header>
                <div class="card-content">
                  <div class="content">
                    {File.descripcion}
                    <br></br>
                    <br></br>
                    Subido Por: {User.nombre}
                    <br></br>
                    <br></br>
                    <div class="tags">
                      {
                        File.tags.map((item, i) => {
                          return (
                            <span class="tag is-info">
                              {item}
                            </span>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
                <footer class="card-footer">
                  <a class="card-footer-item" download href={File.link_download}>
                    <span class="icon">
                      <i class="fas fa-download" aria-hidden="true"></i>
                    </span>
                    {FileDownload}
                  </a>
                </footer>
              </div>
            </div>
            <div class="column User Scroll">
              <p class="border is-size-4 has-text-link" style={{ marginBottom: '10px', }}>{View}</p>
              <iframe src={File.link_view} type="application/*" width="100%" class="Profile" allowfullscreen webkitallowfullscreen />
            </div>
          </div>
        </div>
          :
          <div class="hero-body is-horizontal-center is-vertical-center">
            <Loader />
          </div>
      }
    </div>
  );

}