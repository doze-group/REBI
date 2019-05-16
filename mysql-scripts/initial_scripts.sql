create database if not exists rebi_tc;

use rebi_tc;

/*
 private int Id;
    private String Name;
    private String ImageURL;
    private double Price;

*/


CREATE TABLE IF NOT EXISTS usuarios
(
id int auto_increment PRIMARY KEY,
nombre VARCHAR(30) not null, 
password VARCHAR(30) not null,
email VARCHAR(30) not null,
id_ciudadania VARCHAR(30) not null,
id_estudiantil VARCHAR(30) not null 
);

#ALTER TABLE usuarios CHANGE id_estudiantil id_institucional VARCHAR(30);
#ALTER TABLE usuarios add column role VARCHAR(30);

select * from rebi_tc.usuarios;

truncate table usuarios;

/*
Product product2 = new Product(2, "Queso Campesino Alpina", "https://images.rappi.com/products/599875-1534181942.png?d=150x150&e=webp", 5850);
Product product3 = new Product(3, "Jamon de Cerdo Pietran", "https://images.rappi.com/products/342208-1532483068.png?d=150x150&e=webp", 7050);
*/

insert into rebi_tc.usuarios (nombre, password, email, id_ciudadania, id_institucional, role) 
values (
"Fernando Araujo", "12345", "fercho@clandestine.com", "a123", "b123", "admin");

