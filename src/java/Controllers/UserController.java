/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controllers;

import Entities.User;
import Util.DaoUtil;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

/**
 *
 * @author Rober19
 */
public class UserController {

    PreparedStatement ps;

    String TblParams = "nombre, password,"
            + " email, id_ciudadania, id_institucional,"
            + " role, descripcion, ubicacion, img ";

    public ArrayList<User> GetUsers() {
        ArrayList<User> Users = new ArrayList<>();
        GetMySQL(Users);
        return Users;
    }

    public void getUsersByFilter() {

    }

    public void getUserByFilter() {

    }

    public ArrayList<User> getUserById(String id) {
        ArrayList<User> Users = new ArrayList<>();
        GetByIdMySQL(Users, id);
        return Users;
    }

    public User LoginUser(User user) {
        return logingMySQL(user);
    }

    public void AddUser(User user) {
        postMySQL(user);
    }

    public void DeleteUser(String id) throws Exception {
        deleteMySQL(id);
    }

    public void UpdateUser(User user) {
        updateMySQL(user);
    }

    protected void GetMySQL(ArrayList<User> arr) {
        try {
            String query = "SELECT * FROM usuarios";

            // create the java statement
            Statement st = DaoUtil.getConnection().createStatement();

            // execute the query, and get a java resultset
            ResultSet rs = st.executeQuery(query);

            // iterate through the java resultset
            while (rs.next()) {

                int id_db = rs.getInt("id");
                String nombre = rs.getString("nombre");
                String password = rs.getString("password");
                String email = rs.getString("email");
                String id_institucional = rs.getString("id_institucional");
                String id_ciudadania = rs.getString("id_ciudadania");
                String role = rs.getString("role");
                String desc = rs.getString("descripcion");
                String ubic = rs.getString("ubicacion");
                String img = rs.getString("img");

                System.out.println(nombre);
                User p1 = new User(nombre, email, password, id_institucional, id_ciudadania, desc, ubic, img);
                p1.setId_db(id_db);
                p1.setRole(role);

                arr.add(p1);
            }

        } catch (java.sql.SQLIntegrityConstraintViolationException e) {
            System.err.println(e);
        } catch (java.sql.SQLSyntaxErrorException e) {
            System.err.println(e);
            e.printStackTrace();
        } catch (SQLException e) {
            System.err.println(e);
            e.printStackTrace();
        } catch (Exception e) {
            System.err.println(e);
            e.printStackTrace();
        }

    }
    
    protected void GetByIdMySQL(ArrayList<User> arr, String id) {
        try {
            String query = "SELECT * FROM usuarios where id = "+id;

            // create the java statement
            Statement st = DaoUtil.getConnection().createStatement();

            // execute the query, and get a java resultset
            ResultSet rs = st.executeQuery(query);

            // iterate through the java resultset
            while (rs.next()) {

                int id_db = rs.getInt("id");
                String nombre = rs.getString("nombre");
                String password = rs.getString("password");
                String email = rs.getString("email");
                String id_institucional = rs.getString("id_institucional");
                String id_ciudadania = rs.getString("id_ciudadania");
                String role = rs.getString("role");
                String desc = rs.getString("descripcion");
                String ubic = rs.getString("ubicacion");
                String img = rs.getString("img");

                System.out.println(nombre);
                User p1 = new User(nombre, email, password, id_institucional, id_ciudadania, desc, ubic, img);
                p1.setId_db(id_db);
                p1.setRole(role);

                arr.add(p1);
            }

        } catch (java.sql.SQLIntegrityConstraintViolationException e) {
            System.err.println(e);
        } catch (java.sql.SQLSyntaxErrorException e) {
            System.err.println(e);
            e.printStackTrace();
        } catch (SQLException e) {
            System.err.println(e);
            e.printStackTrace();
        } catch (Exception e) {
            System.err.println(e);
            e.printStackTrace();
        }

    }

    protected void postMySQL(User user) {
        try {

            ps = DaoUtil.getConnection()
                    .prepareStatement(
                            "call createUser("
                            + DaoUtil.Fields_Query(TblParams)
                            + ");"
                    );
            // Parameters start with 1
            ps.setString(1, user.getNombre());
            ps.setString(2, user.getPassword());
            ps.setString(3, user.getEmail());
            ps.setString(4, user.getId_ciudadania());
            ps.setString(5, user.getId_institucional());
            ps.setString(6, user.getRole());
            ps.setString(7, user.getDescripcion());
            ps.setString(8, user.getUbicacion());
            ps.setString(9, user.getImg());

            ps.executeUpdate();

        } catch (java.sql.SQLIntegrityConstraintViolationException e) {
            System.err.println(e);
        } catch (java.sql.SQLSyntaxErrorException e) {
            System.err.println(e);
            e.printStackTrace();
        } catch (SQLException e) {
            System.err.println(e);
            e.printStackTrace();
        } catch (Exception e) {
            System.err.println(e);
            e.printStackTrace();
        }
    }

    protected void deleteMySQL(String id) throws Exception {

        try {
            ps = DaoUtil.getConnection()
                    .prepareStatement("delete from usuarios where id=?");
            ps.setString(1, id);
            int i = ps.executeUpdate();
            if (i != 0) {
                System.out.println("deleted");
            } else {
                throw new Exception();
            }

        } catch (java.sql.SQLIntegrityConstraintViolationException e) {
            System.err.println(e);
            e.printStackTrace();
        } catch (java.sql.SQLSyntaxErrorException e) {
            System.err.println(e);
            e.printStackTrace();
        } catch (SQLException e) {
            System.err.println(e);
            e.printStackTrace();
        }
    }

    protected void updateMySQL(User newUser) {

        try {

            ps = DaoUtil.getConnection().prepareStatement(
                    "call editUser("
                    + DaoUtil.Fields_Query(TblParams)
                    + ");"
            );

            ps.setString(1, newUser.getNombre());
            ps.setString(2, newUser.getPassword());
            ps.setString(3, newUser.getEmail());
            ps.setString(4, newUser.getId_ciudadania());
            ps.setString(5, newUser.getId_institucional());
            ps.setString(6, newUser.getRole());
            ps.setInt(7, newUser.getId_db());
            ps.setString(8, newUser.getDescripcion());
            ps.setString(9, newUser.getUbicacion());
            ps.setString(10, newUser.getImg());

            int i = ps.executeUpdate();
            if (i != 0) {
                System.out.println("updated");
            } else {
                System.out.println("not updated");
            }
        } catch (java.sql.SQLIntegrityConstraintViolationException e) {
            System.err.println(e);
        } catch (java.sql.SQLSyntaxErrorException e) {
            System.err.println(e);
            e.printStackTrace();
        } catch (SQLException e) {
            System.err.println(e);
            e.printStackTrace();
        } catch (Exception e) {
            System.err.println(e);
            e.printStackTrace();
        }
    }

    protected User logingMySQL(User user) {
        User result_user = null;
        try {
            ps = DaoUtil.getConnection()
                    .prepareStatement("select * from usuarios where "
                            + "(password=? and email=?); ");
            System.out.println(" " + user.getPassword()
                    + "  " + user.getEmail());
            ps.setString(1, user.getPassword());
            ps.setString(2, user.getEmail());
            ps.execute();

            ResultSet rs = ps.getResultSet();

            // iterate through the java resultset
            while (rs.next()) {

                int id_db = rs.getInt("id");
                String nombre = rs.getString("nombre");
                String password = rs.getString("password");
                String email = rs.getString("email");
                String id_institucional = rs.getString("id_institucional");
                String id_ciudadania = rs.getString("id_ciudadania");
                String role = rs.getString("role");
                String desc = rs.getString("descripcion");
                String ubic = rs.getString("ubicacion");
                String img = rs.getString("img");

                System.out.println(nombre);
                User p1 = new User(nombre, password, email,
                        id_institucional, id_ciudadania,
                        desc, ubic, img);
                p1.setId_db(id_db);
                p1.setRole(role);
                result_user = p1;

            }

        } catch (java.sql.SQLIntegrityConstraintViolationException e) {
            System.err.println(e);
        } catch (java.sql.SQLSyntaxErrorException e) {
            System.err.println(e);
            e.printStackTrace();
        } catch (SQLException e) {
            System.err.println(e);
            e.printStackTrace();
        } catch (Exception e) {
            System.err.println(e);
            e.printStackTrace();
        }
        return result_user;
    }
}
