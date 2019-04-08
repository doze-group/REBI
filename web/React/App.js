const { Component } = React;

const { HashRouter, Route, Link } = ReactRouterDOM;

function App() {
  return (
    <div class="full router">
      <NavBar />
      <HashRouter>
        <div class="full">
          <Route exact path="/Home" component={Home} />
          <Route exact path="/User" component={HomeUser} />
          {/* <Route path="/createproduct" component={ProductCreate} /> */}
        </div>
      </HashRouter>
    </div>
  );
}
