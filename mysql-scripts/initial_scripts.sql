
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
id_institucional VARCHAR(30) not null,
role VARCHAR(30)
);

#ALTER TABLE usuarios CHANGE id_estudiantil id_institucional VARCHAR(30);
#ALTER TABLE usuarios add column role VARCHAR(30);
                 
select * from rebi_tc.usuarios;

truncate table usuarios;


insert into rebi_tc.usuarios (nombre, password, email, id_ciudadania, id_institucional, role) 
values (
"Fernando Araujo", "12345", "fercho@clandestine.com", "a123", "b123", "admin");
 
 

