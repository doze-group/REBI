package Util;

import java.net.URI;
import java.net.URISyntaxException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DbUtil {

    private static Connection connection = null;
    
       

    public static Connection getConnection() {
        if (connection != null) {
            return connection;
        } else {
            try {
                
                String driver = "com.mysql.jdbc.Driver";
                String url = "jdbc:mysql://h7xe2knj2qb6kxal.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/jrw7h2v2kivd3fq7";
//                        + "?autoReconnect=true&useSSL=false&useJDBCCompliantTimezoneShift=true&"
//                        + "useLegacyDatetimeCode=false&serverTimezone=UTC";
                String user = "glffxuj3225jl5wv";
                String password = "q6cpyfzm6uvs2yls";           
                
                Class.forName(driver);
                connection = DriverManager.getConnection(url, user, password);
                
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            } catch (SQLException e) {
                e.printStackTrace();
            }
            return connection;
            
        }
    }

}
