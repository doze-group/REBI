CREATE PROCEDURE createUser ( 
nombre VARCHAR(30) , 
password VARCHAR(30) ,
email VARCHAR(30) ,
id_ciudadania VARCHAR(30) ,
id_institucional VARCHAR(30) ,
role VARCHAR(30))
	insert into usuarios (nombre, password, email, id_ciudadania, id_institucional, role) 
values (nombre, password, email, id_ciudadania, id_institucional, role);

call createUser("Roberto Batty", "12345", "batty@clandestine.com", "b433", "c345", "admin");

CREATE PROCEDURE editUser ( 
id_ int,
nombre_ VARCHAR(30) , 
password_ VARCHAR(30) ,
email_ VARCHAR(30) ,
id_ciudadania_ VARCHAR(30) ,
id_institucional_ VARCHAR(30) ,
role_ VARCHAR(30))
	update usuarios set nombre=nombre_, password=password_, email=email_, id_ciudadania=id_ciudadania_, id_institucional=id_institucional_, role=role_ where id=id_;

call editUser(1, "Roberto Batty123", "12345", "batty@clandestine.com", "b433", "c345", "admin");