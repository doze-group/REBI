CREATE PROCEDURE createUser ( 
nombre VARCHAR(30) , 
password VARCHAR(30) ,
email VARCHAR(30) ,
id_ciudadania VARCHAR(30) ,
id_institucional VARCHAR(30) ,
role VARCHAR(30),
descripcion varchar(100),
ubicacion varchar(50),
img varchar(2000)
)
	insert into usuarios (nombre, password, email, id_ciudadania, id_institucional, role, descripcion, ubicacion, img) 
values (nombre, password, email, id_ciudadania, id_institucional, role, descripcion, ubicacion, img);

call createUser(
"Roberto Batty", "12345", "batty@clandestine.com", "b433", "c345", "admin",
 "full stack", "cartagena",
 "https://isabela.iweb.co.uk/resize/ZT0xMjA5NjAwJmg9NTAwJnE9NzUmdD1vdXRib3VuZCZ1cmw9aHR0cHMlM0ElMkYlMkZzdGF0aWMubXltZW1vcnkuY28udWslMkZtZWRpYSUyRmNhdGFsb2clMkZwcm9kdWN0JTJGVCUyRkQlMkZUREstMTZHQi1sYW5kc2NhcGUtMzQ0Mzc1LmpwZyZ3PTUwMA==/"
 );

CREATE PROCEDURE editUser ( 
nombre_ VARCHAR(30) , 
password_ VARCHAR(30) ,
email_ VARCHAR(30) ,
id_ciudadania_ VARCHAR(30) ,
id_institucional_ VARCHAR(30) ,
role_ VARCHAR(30),
id_ int,
descripcion_ varchar(100),
ubicacion_ varchar(50),
img_ varchar(2000)
)
	update usuarios set nombre=nombre_, password=password_, email=email_, id_ciudadania=id_ciudadania_, id_institucional=id_institucional_, role=role_, descripcion=descripcion_, ubicacion=ubicacion_, img=img_ where id=id_;

call editUser(
"Roberto Batty123", "12345", "batty@clandestine.com", "b433", "c345", "admin", 1,
"full stack", "cartagena",
 "https://isabela.iweb.co.uk/resize/ZT0xMjA5NjAwJmg9NTAwJnE9NzUmdD1vdXRib3VuZCZ1cmw9aHR0cHMlM0ElMkYlMkZzdGF0aWMubXltZW1vcnkuY28udWslMkZtZWRpYSUyRmNhdGFsb2clMkZwcm9kdWN0JTJGVCUyRkQlMkZUREstMTZHQi1sYW5kc2NhcGUtMzQ0Mzc1LmpwZyZ3PTUwMA==/"
 );