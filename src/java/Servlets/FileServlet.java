/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlets;

import Controllers.FileController;
import Entities.File;
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
@WebServlet(name = "UserServlet", urlPatterns = {"/api/file"})
public class FileServlet extends HttpServlet {

    FileController filecon = new FileController();

    private void addCorsHeader(HttpServletResponse response) {
        //TODO: externalize the Allow-Origin
        response.addHeader("Access-Control-Allow-Origin", "*");
        response.addHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, HEAD");
        response.addHeader("Access-Control-Allow-Headers", "X-PINGOTHER, Origin, X-Requested-With, Content-Type, Accept");
        response.addHeader("Access-Control-Max-Age", "1728000");
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {
        addCorsHeader(res);
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
        Gson prettyGson = new GsonBuilder().setPrettyPrinting().create();
        Gson gson = new Gson();
        String ExcpMessage = "debe enviar el parametro"
                + " ?type=getall"
                + " | ?type=getbyId&id=exampleid"
                + " | ?type=login&email=a@a.com&password=###";
        try {
            type = req.getParameter("type");
            switch (type) {
                case "getall": {
                    String UserListJson = prettyGson
                            .toJson(filecon.GetFiles());
                    out.print(UserListJson);
                    break;
                }
                case "getbyId": {

                    String id = req.getParameter("id");
                    String UserListJson = prettyGson
                            .toJson(filecon.getFileById(id));
                    out.print(UserListJson);
                    break;
                }
                case "getbyUserId": {

                    String id = req.getParameter("id");
                    String UserListJson = prettyGson
                            .toJson(filecon.getFileByUserId(id));
                    out.print(UserListJson);
                    break;
                }

                default:
                    String UserListJson = prettyGson
                            .toJson(
                                    new Object[]{ExcpMessage,
                                        200});
                    out.print(UserListJson);
                    break;
            }
        } catch (Exception ex) {

//            String UserListJson = prettyGson
//                    .toJson(new Object[]{ExcpMessage, 200});
//            out.print(UserListJson);
            out.print(gson.toJson(jsres("err", ExcpMessage)));
        }

    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {
        addCorsHeader(res);
        PrintWriter out = res.getWriter();
        res.setContentType("application/json");
        Gson gson = new Gson();
        try {

            StringBuilder sb = new StringBuilder();
            String body;
            while ((body = req.getReader().readLine()) != null) {
                sb.append(body);
            }
            File file = (File) gson.fromJson(sb.toString(), File.class);
            filecon.AddFile(file);
            out.print(sb.toString());

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

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
