const { Component } = React;

const { HashRouter, Route, Link } = ReactRouterDOM;

function App() {
  return (
    <HashRouter>
      <div class="full">
        <Route exact path="/Home" component={Home} />
        <Route path="*" component={Home} />
        {/* <Route path="/createproduct" component={ProductCreate} /> */}
      </div>
    </HashRouter>
  );
}
