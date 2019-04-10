const { Component } = React;

const { Switch, Route, Link, HashRouter } = ReactRouterDOM;

function App() {
  return (
    <div class="full router">
      <NavBar />
      <HashRouter>
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/User" component={HomeUser} />
          <Route exact path="**" render={() => (<Redirect to="Home" />)} />
        </Switch>
      </HashRouter>
    </div>
  );
}
