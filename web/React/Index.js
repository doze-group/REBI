const { render } = ReactDOM;
localStorage.setItem('User', JSON.stringify({
    "id_db": 1,
    "nombre": "Fernando Araujo",
    "email": "12345",
    "password": "fercho@clandestine.com",
    "id_institucional": "b123",
    "id_ciudadania": "a123",
    "role": "admin"
}));
render(<App />, document.getElementById('root'));
