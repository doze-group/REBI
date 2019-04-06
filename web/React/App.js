const { Component } = React;

const { HashRouter, Route, Link } = ReactRouterDOM;

function App() {
  return (
    <HashRouter>
      <div class="Todo">
        <Route exact path="/Home" component={Home} />
        <Route path="*" component={Home} />
        {/* <Route path="/createproduct" component={ProductCreate} /> */}
      </div>
    </HashRouter>
  );
}
