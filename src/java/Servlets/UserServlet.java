/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlets;

import Controllers.UserController;
import Entities.User;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Rober19
 */
@WebServlet(name = "UserServlet", urlPatterns = {"/api/user"})
public class UserServlet extends HttpServlet {

    UserController userController = new UserController();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {

//        PrintWriter out = res.getWriter();
//        res.setContentType("application/json");
//        res.setCharacterEncoding("UTF-8");
//
//        Gson prettyGson = new GsonBuilder().setPrettyPrinting().create();
//        String productsListJson = prettyGson.toJson(new Object[]{"Ok1", 200});
//        out.print(productsListJson);
        PrintWriter out = res.getWriter();
        res.setContentType("application/json");
        res.setCharacterEncoding("UTF-8");
        String type = "";

        try {
            type = req.getParameter("type");
            switch (type) {
                case "getall": {
                    Gson prettyGson = new GsonBuilder().setPrettyPrinting().create();
                    String UserListJson = prettyGson.toJson(userController.GetUsers());
                    out.print(UserListJson);
                    break;
                }
                case "getbyId": {
                    Gson gson = new Gson();
                    String id = req.getParameter("id");
                    String userJson = gson.toJson(new Object[]{"Esto debe ser Desarrollado", 200});
                    out.print(userJson);
                    break;
                }
                default:
                    Gson prettyGson = new GsonBuilder().setPrettyPrinting().create();
                    String UserListJson = prettyGson.toJson(new Object[]{"debe enviar el parametro ?type=getall or ?type=getbyId&id=exampleid", 200});
                    out.print(UserListJson);
                    break;

            }
        } catch (Exception e) {
            Gson prettyGson = new GsonBuilder().setPrettyPrinting().create();
            String UserListJson = prettyGson.toJson(new Object[]{"debe enviar el parametro ?type=getall or ?type=getbyId&id=exampleid", 200});
            out.print(UserListJson);
        }

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {
        PrintWriter out = res.getWriter();
        res.setContentType("application/json");
        Gson gson = new Gson();

        try {

            StringBuilder sb = new StringBuilder();
            String body;
            while ((body = req.getReader().readLine()) != null) {
                sb.append(body);
            }

            User user = (User) gson.fromJson(sb.toString(), User.class);
            userController.AddUser(user);
            String userJson = gson.toJson(user);
            out.print(userJson);

        } catch (Exception ex) {
            ex.printStackTrace();
        }

    }
    
    @Override
    protected void doPut(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();
        res.setContentType("application/json");
        Gson gson = new Gson();

        try {

            StringBuilder sb = new StringBuilder();
            String body;
            while ((body = req.getReader().readLine()) != null) {
                sb.append(body);
            }            
            //out.print(gson.toJson(jsres("msg", "hello from put")));

            User user = (User) gson.fromJson(sb.toString(), User.class);
            userController.UpdateUser(user);
            String userJson = gson.toJson(user);
            out.print(userJson);

        } catch (Exception ex) {
            ex.printStackTrace();
        }

         //To change body of generated methods, choose Tools | Templates.
    }
    
     @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {

        PrintWriter out = res.getWriter();
        res.setContentType("application/json");
        Gson gson = new Gson();

        try {

            StringBuilder sb = new StringBuilder();
            String body;
            while ((body = req.getReader().readLine()) != null) {
                sb.append(body);
            }

            JsonObject jobj = new Gson().fromJson(sb.toString(), JsonObject.class);

            String result = jobj.get("id").toString();
            System.out.println(result);
            try {
                userController.DeleteUser(result);
            } catch (Exception ex) {
                out.print(gson.toJson(jsres("err", ex.toString())));
            }

            out.print(result);

            // Product product = (Product) gson.fromJson(sb.toString(), Product.class);
            //productController.DeleteProduct(body);
            //String productJson = gson.toJson(product);
        } catch (Exception ex) {
            ex.printStackTrace();
            out.print(gson.toJson(jsres("err", ex.toString())));
        }

    }

    public JsonObject jsres(String key, String value) {
        JsonObject obj = new JsonObject();
        obj.addProperty(key, value);
        return obj;
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
