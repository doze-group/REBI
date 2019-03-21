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
    <div className="container mt-5">
      <div>
        <img src="https://www.teamknowhow.com/content/dam/tkh/services/fix-it/expert-repair/scene-expert-repair-xs.gif" />
      </div>
    </div>
  );
}
