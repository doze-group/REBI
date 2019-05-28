CREATE PROCEDURE createUser ( 
nombre VARCHAR(30) , 
password VARCHAR(30) ,
email VARCHAR(30) ,
id_ciudadania VARCHAR(30) ,
id_institucional VARCHAR(30) ,
role VARCHAR(30))
	insert into usuarios (nombre, password, email, id_ciudadania, id_institucional, role) 
values (nombre, password, email, id_ciudadania, id_institucional, role);

call createUser("Roberto Batty", "12345", "batty@clandestine.com", "b433", "c345", "admin")
