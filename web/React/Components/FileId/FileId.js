const { Component } = React;

function FileId(props) {

  const [Load, setLoad] = useState(true);
  const { FileDownload, View } = Messages();

  return (
    <div class="hero is-fullheight">
      <div class="hero-head">
        <NavBar props={props} />
      </div>
      {
        Load ?
          <div class="hero-body">
            <div class="columns" style={{ width: '100%' }}>
              <div class="column is-3 is-vertical-center User Scroll" >
                <div class="card">
                  <header class="card-header color gradient">
                    <p class="card-header-title has-text-white is-horizontal-center">
                      Nombre del archivo
                    </p>
                  </header>
                  <div class="card-content">
                    <div class="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                    </div>
                  </div>
                  <footer class="card-footer">
                    <a class="card-footer-item" download href="https://firebasestorage.googleapis.com/v0/b/rober-firebase.appspot.com/o/REBI-TC%2FFILES%2FHklkEIOj64%2F1559098918641?alt=media&token=r114U_s64">
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
                <iframe src="https://docs.google.com/gview?url=gs://crud-pearson.appspot.com/REBI-TC_FILES_SJxrmQQ26V_1559143196805.docx" type="application/*" width="100%" class="Profile" allowfullscreen webkitallowfullscreen />
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