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
                String url = "jdbc:mysql://wp433upk59nnhpoh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/q63uh3tx9w6svnjt";
                //        + "?autoReconnect=true&useSSL=false&useJDBCCompliantTimezoneShift=true&"
                //        + "useLegacyDatetimeCode=false&serverTimezone=UTC";
                String user = "j9qdmayrxsv4wu36";
                String password = "naxw26s3k8hac189";

                System.out.print(user);
                
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
