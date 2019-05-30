package Entities;

public class File {

    private int id_db;
    private int id_db_user;
    private int descargados;
    private int favoritos;
    private int visto;
    private String nombre;
    private String link_view;
    private String link_download;
    private String titulo;
    private String decripcion;
    private String categoria;
    private String[] tags;

    public File(int id_db, int id_db_user, int descargados, int favoritos, int visto, String nombre, String link_view, String link_download) {
        this.id_db = id_db;
        this.id_db_user = id_db_user;
        this.descargados = descargados;
        this.favoritos = favoritos;
        this.visto = visto;
        this.nombre = nombre;
        this.link_view = link_view;
        this.link_download = link_download;
    }

    public int getId_db() {
        return id_db;
    }

    public void setId_db(int id_db) {
        this.id_db = id_db;
    }

    public int getId_db_user() {
        return id_db_user;
    }

    public void setId_db_user(int id_db_user) {
        this.id_db_user = id_db_user;
    }

    public int getDescargados() {
        return descargados;
    }

    public void setDescargados(int descargados) {
        this.descargados = descargados;
    }

    public int getFavoritos() {
        return favoritos;
    }

    public void setFavoritos(int favoritos) {
        this.favoritos = favoritos;
    }

    public int getVisto() {
        return visto;
    }

    public void setVisto(int visto) {
        this.visto = visto;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getLink_view() {
        return link_view;
    }

    public void setLink_view(String link_view) {
        this.link_view = link_view;
    }

    public String getLink_download() {
        return link_download;
    }

    public void setLink_download(String link_download) {
        this.link_download = link_download;
    }

}
