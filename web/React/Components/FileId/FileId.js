const { Component } = React;

function FileId(props) {

  const [Load, setLoad] = useState(true);

  return (
    <div class="hero is-fullheight">
      <div class="hero-head">
        <NavBar props={props} />
      </div>
      {
        Load ?
          <div class="hero-body">
            <div class="columns" style={{ width: '100%' }}>
              <div class="column is-3" >
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
                    <a class="card-footer-item">
                      <span class="icon">
                        <i class="fas fa-download" aria-hidden="true"></i>
                      </span>
                      Descargar
                    </a>
                  </footer>
                </div>
              </div>
              <div class="column">
                <p class="is-fullwidth"></p>
                <iframe src="https://www.fdi.ucm.es/profesor/luis/fp/FP.pdf" type="application/*" width="100%" class="Profile" allowfullscreen webkitallowfullscreen/>
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