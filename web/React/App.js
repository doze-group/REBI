const { Component } = React;

const { Switch, Route, Link, HashRouter, Redirect } = ReactRouterDOM;

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/AdminUser" component={AdminUser} />
        <Route exact path="**" render={() => (<Redirect to="Home" />)} />
      </Switch>
    </HashRouter>
  );
}
