const { Component } = React;

const { Switch, Route, Link, HashRouter, Redirect } = ReactRouterDOM;

function App() {
  const User = JSON.parse(localStorage.getItem('User'));
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/File/:id" component={FileId} />
        {User != null ? <Route exact path="/Profile" component={Profile}></Route> : null}
        {User != null ? <Route exact path="/Files" component={Files}></Route> : null}
        {User != null && User.role == 'admin' ? <Route exact path="/AdminUser" component={AdminUser} /> : null}
        <Route exact path="**" render={() => (<Redirect to="Home" />)} />
      </Switch>
    </HashRouter>
  );
}
