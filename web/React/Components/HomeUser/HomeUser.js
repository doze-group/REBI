const { Component } = React;
const { Redirect } = ReactRouterDOM;

function HomeUser() {
  return (
    <div class="container is-fluid full Pad">
      <div class="columns full is-flex is-horizontal-center is-vertical-center is-multiline">
        <div class="column is-6">
          <a>
            <div class="card has-text-centered equal-height">
              <div class="card-image is-flex is-horizontal-center">
                <figure class="image is-128x128">
                  <img
                    src="https://image.flaticon.com/icons/svg/701/701997.svg"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="card-content is-flex is-horizontal-center">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Perfil</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="column is-6">
          <a>
            <div class="card has-text-centered equal-height">
              <div class="card-image is-flex is-horizontal-center">
                <figure class="image is-128x128">
                  <img
                    src="https://image.flaticon.com/icons/svg/272/272344.svg"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="card-content is-flex is-horizontal-center">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Tus Archivos</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="column is-6">
          <a>
            <div class="card has-text-centered equal-height">
              <div class="card-image is-flex is-horizontal-center">
                <figure class="image is-128x128">
                  <img
                    src="https://image.flaticon.com/icons/svg/1201/1201498.svg"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="card-content is-flex is-horizontal-center">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Buscar Archivos</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="column is-6">
          <a>
            <div class="card has-text-centered equal-height">
              <div class="card-image is-flex is-horizontal-center">
                <figure class="image is-128x128">
                  <img
                    src="https://image.flaticon.com/icons/svg/1542/1542126.svg"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="card-content is-flex is-horizontal-center">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Configuraciones</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
