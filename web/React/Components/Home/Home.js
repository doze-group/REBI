const { Component } = React;
const { Redirect } = ReactRouterDOM;

function Home() {
  return (
    <div class="container full">
      <NavBar></NavBar>
      <div class="columns full is-flex is-horizontal-center">
        <div class="column is-3">
          <div class="card has-text-centered equal-height animated infinite delay-2s pulse">
            <div class="card-image is-flex is-horizontal-center">
              <figure class="image is-128x128">
                <img src="https://image.flaticon.com/icons/svg/145/145843.svg" alt="Placeholder image" />
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
        </div>
      </div>
    </div>
  );
}
