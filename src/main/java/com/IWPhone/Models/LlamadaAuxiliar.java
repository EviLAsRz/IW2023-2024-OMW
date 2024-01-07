package com.IWPhone.Models;

public class LlamadaAuxiliar {
    private String tlfDestino;
    private String fecha;
    private String duracion;
    private String tlfOrigen;

    public String getTlfOrigen() {
        return tlfOrigen;
    }

    public void setTlfOrigen(String tlfOrigen) {
        this.tlfOrigen = tlfOrigen;
    }

    public String getTlfDestino() {
        return tlfDestino;
    }
    public LlamadaAuxiliar(){

    }
    public void setTlfDestino(String tlfDestino) {
        this.tlfDestino = tlfDestino;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public String getDuracion() {
        return duracion;
    }

    public void setDuracion(String duracion) {
        this.duracion = duracion;
    }

    public LlamadaAuxiliar(String tlfDestino, String fecha, String duracion) {
        this.tlfDestino = tlfDestino;
        this.fecha = fecha;
        this.duracion = duracion;
    }
}
