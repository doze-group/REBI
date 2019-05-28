package Util;

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
                String url = "jdbc:mysql://arfo8ynm6olw6vpn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/n28y965z4bkv05va"
                        + "?autoReconnect=true&useSSL=false&useJDBCCompliantTimezoneShift=true&"
                        + "useLegacyDatetimeCode=false&serverTimezone=UTC";
                String user = "tke5gln74bqrmlzj";
                String password = "z2q9ddghsygdhobe";           
                
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
