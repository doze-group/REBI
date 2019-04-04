const { Component } = React;
const { Redirect } = ReactRouterDOM;
const { NavBar } = NavBar;

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
    <NavBar></NavBar>
  );
}
