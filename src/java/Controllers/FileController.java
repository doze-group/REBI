/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controllers;

import Entities.File;
import Util.DaoUtil;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

/**
 *
 * @author Rober19
 */
public class FileController {

    PreparedStatement ps;

    String TblParams = "id_db_user, nombre, link_view, link_download,"
            + " titulo, descripcion, categoria, tags";

    public ArrayList<File> GetFiles() {
        ArrayList<File> Files = new ArrayList<>();
        GetMySQL(Files);
        return Files;
    }

    public void getFilesByFilter() {

    }

    public void getFileByFilter() {

    }

    public ArrayList<File> getFileById(String id) {
        ArrayList<File> Files = new ArrayList<>();
        GetByIdMySQL(Files, id);
        return Files;
    }
    
       public ArrayList<File> getFileByUserId(String user_id) {
        ArrayList<File> Files = new ArrayList<>();
        GetByUserIdMySQL(Files, user_id);
        return Files;
    }

    public void AddFile(File file) {
        postMySQL(file);
    }

    public void DeleteFile(String id) throws Exception {
        deleteMySQL(id);
    }

    public void UpdateFile(File file) {
        updateMySQL(file);
    }

    protected void GetMySQL(ArrayList<File> arr) {
        try {
            String query = "SELECT * FROM archivos";

            // create the java statement
            Statement st = DaoUtil.getConnection().createStatement();

            // execute the query, and get a java resultset
            ResultSet rs = st.executeQuery(query);

            // iterate through the java resultset
            while (rs.next()) {

                int id_db = rs.getInt("id");
                int id_db_user = rs.getInt("id_db_user");
                int descargados = rs.getInt("descargados");
                int favoritos = rs.getInt("favoritos");
                int visto = rs.getInt("visto");
                String nombre = rs.getString("nombre");
                String link_view = rs.getString("link_view");
                String link_download = rs.getString("link_download");
                String titulo = rs.getString("titulo");
                String decripcion = rs.getString("descripcion");
                String categoria = rs.getString("categoria");
                String[] tags = rs.getString("tags").split(";");//                
//                
//
                System.out.println(nombre);
                File p1 = new File(
                        id_db, id_db_user, descargados,
                        favoritos, visto, nombre, link_view,
                        link_download, titulo, decripcion,
                        categoria, tags);

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

    protected void GetByIdMySQL(ArrayList<File> arr, String id) {
        try {
            String query = "SELECT * FROM archivos where id = " + id;

            // create the java statement
            Statement st = DaoUtil.getConnection().createStatement();

            // execute the query, and get a java resultset
            ResultSet rs = st.executeQuery(query);

            // iterate through the java resultset
            while (rs.next()) {

                int id_db = rs.getInt("id");
                int id_db_user = rs.getInt("id_db_user");
                int descargados = rs.getInt("descargados");
                int favoritos = rs.getInt("favoritos");
                int visto = rs.getInt("visto");
                String nombre = rs.getString("nombre");
                String link_view = rs.getString("link_view");
                String link_download = rs.getString("link_download");
                String titulo = rs.getString("titulo");
                String decripcion = rs.getString("descripcion");
                String categoria = rs.getString("categoria");
                String[] tags = rs.getString("tags").split(";");//                
//                
//
                System.out.println(nombre);
                File p1 = new File(
                        id_db, id_db_user, descargados,
                        favoritos, visto, nombre, link_view,
                        link_download, titulo, decripcion,
                        categoria, tags);

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
    
     protected void GetByUserIdMySQL(ArrayList<File> arr, String user_id) {
        try {
            String query = "SELECT * FROM archivos where id_db_user = " + user_id;

            // create the java statement
            Statement st = DaoUtil.getConnection().createStatement();

            // execute the query, and get a java resultset
            ResultSet rs = st.executeQuery(query);

            // iterate through the java resultset
            while (rs.next()) {

                int id_db = rs.getInt("id");
                int id_db_user = rs.getInt("id_db_user");
                int descargados = rs.getInt("descargados");
                int favoritos = rs.getInt("favoritos");
                int visto = rs.getInt("visto");
                String nombre = rs.getString("nombre");
                String link_view = rs.getString("link_view");
                String link_download = rs.getString("link_download");
                String titulo = rs.getString("titulo");
                String decripcion = rs.getString("descripcion");
                String categoria = rs.getString("categoria");
                String[] tags = rs.getString("tags").split(";");//                
//                
//
                System.out.println(nombre);
                File p1 = new File(
                        id_db, id_db_user, descargados,
                        favoritos, visto, nombre, link_view,
                        link_download, titulo, decripcion,
                        categoria, tags);

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

    protected void postMySQL(File file) {
        try {

            String TblParams = "id_db_user, nombre, link_view, link_download, titulo, descripcion, categoria, tags";

            ps = DaoUtil.getConnection()
                    .prepareStatement(
                            "insert into archivos("
                            + TblParams
                            + ") values ("
                            + DaoUtil.Fields_Query(TblParams) + ");"
                    );
            // Parameters start with 1      
            ps.setInt(1, file.getId_db_user());
            ps.setString(2, file.getNombre());
            ps.setString(3, file.getLink_view());
            ps.setString(4, file.getLink_download());
            ps.setString(5, file.getTitulo());
            ps.setString(6, file.getDescripcion());
            ps.setString(7, file.getCategoria());
            String tags = "";
            for (String tag : file.getTags()) {
                tags += tag + ";";
            }
            ps.setString(8, tags);
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

    protected void updateMySQL(File newFile) {

        try {

            ps = DaoUtil.getConnection().prepareStatement(
                    "call editFile("
                    + DaoUtil.Fields_Query(TblParams)
                    + ");"
            );

//            ps.setString(1, newFile.getNombre());
//            ps.setString(2, newFile.getPassword());
//            ps.setString(3, newFile.getEmail());
//            ps.setString(4, newFile.getId_ciudadania());
//            ps.setString(5, newFile.getId_institucional());
//            ps.setString(6, newFile.getRole());
//            ps.setInt(7, newFile.getId_db());
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

}
