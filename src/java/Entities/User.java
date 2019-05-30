/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Entities;

/**
 *
 * @author Rober19
 */
public class User {

    private int id_db;
    private String nombre;
    private String email;
    private String password;
    private String id_institucional;
    private String id_ciudadania;
    private String role = "user";
    private String descripcion;
    private String ubicacion;

    public User(String nombre, String email, String password, String id_institucional, String id_ciudadania) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.id_institucional = id_institucional;
        this.id_ciudadania = id_ciudadania;
    }

    public User(String nombre, String email, String password, String id_institucional, String id_ciudadania, String descripcion, String ubicacion) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.id_institucional = id_institucional;
        this.id_ciudadania = id_ciudadania;
        this.descripcion = descripcion;
        this.ubicacion = ubicacion;
    }
    
    public User(int id_db, String nombre, String email, String password, String id_institucional, String id_ciudadania) {
        this.id_db = id_db;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.id_institucional = id_institucional;
        this.id_ciudadania = id_ciudadania;
    }
 

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    
    
    public int getId_db() {
        return id_db;
    }    

    public void setId_db(int id_db) {
        this.id_db = id_db;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getId_institucional() {
        return id_institucional;
    }

    public void setId_institucional(String id_institucional) {
        this.id_institucional = id_institucional;
    }

    public String getId_ciudadania() {
        return id_ciudadania;
    }

    public void setId_ciudadania(String id_ciudadania) {
        this.id_ciudadania = id_ciudadania;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }

    
}
