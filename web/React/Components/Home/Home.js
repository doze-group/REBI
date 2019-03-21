const { Component } = React;
const { Redirect } = ReactRouterDOM;

function Home() {
  //   function AddProduct(e) {
  //     e.preventDefault();
  //     const { Id, Name, ImageURL, Price } = e.target;

  //     const product = {
  //       Name: Name.value,
  //       ImageURL: ImageURL.value,
  //       Price: Price.value,
  //     };

  //     fetch('/jsp-servlets-react/product', {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       method: 'post',
  //       body: JSON.stringify(product),
  //     })
  //       .then(res => res.json())
  //       .then(res => {
  //         alert(JSON.stringify(res));
  //         document.getElementById('return').click();
  //       })
  //       .catch(err => alert(err));

  //     e.target.reset();
  //   }

  return (
    <header>
      <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src="http://aulavirtual.tecnologicocomfenalcovirtual.edu.co/ferrum/theme/image.php/adaptable/theme/1552317524/favicon" alt="Bulma Admin Template logo" />
          </a>
          <a className="navbar-item is-tab is-hidden-mobile is-active">
            <span className="icon is-medium">
              <i className="fa fa-home" />
            </span>
            Home
          </a>
          <a className="navbar-item is-tab is-hidden-mobile">Features</a>
          <a className="navbar-item is-tab is-hidden-mobile">Pricing</a>
          <a className="navbar-item is-tab is-hidden-mobile">About</a>

          <button className="button navbar-burger" data-target="navMenu">
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className="navbar-menu navbar-end" id="navMenu">
          <a className="navbar-item is-tab is-hidden-tablet is-active">Home</a>
          <a className="navbar-item is-tab is-hidden-tablet">Features</a>
          <a className="navbar-item is-tab is-hidden-tablet">Pricing</a>
          <a className="navbar-item is-tab is-hidden-tablet">About</a>
          <a className="navbar-item nav-tag">
            <span className="icon is-small">
              <i className="fa fa-envelope-o" />
            </span>
            <span className="tag is-primary tag-notif">6</span>
          </a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              <figure className="image is-32x32" Style="margin-right:.5em;">
                <img src="https://avatars1.githubusercontent.com/u/7221389?v=4&s=32" />
              </figure>
              mazipan
            </a>

            <div className="navbar-dropdown is-right">
              <a className="navbar-item">
                <span className="icon is-small">
                  <i className="fa fa-user-o" />
                </span>
                Profile
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item">
                <span className="icon is-small">
                  <i className="fa fa-power-off" />
                </span>
                Logout
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="level">
          <div className="level-left">
            <div className="level-item">            
              <div className="title">Dashboard</div>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <button type="button" className="button is-small">
                __dsd
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
