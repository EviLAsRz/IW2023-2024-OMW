package com.IWPhone.Models;

public class ConsumoAuxiliar
{
    private String fecha;
    private String consumoMb;
    private String telefono;

    public ConsumoAuxiliar(String fecha, String consumoMb,String tlfono) {
        this.fecha = fecha;
        this.telefono = tlfono;
        this.consumoMb = consumoMb;
    }
    public ConsumoAuxiliar(){

    }
    public String getTelefono() {
        return telefono;
    }
    public void setTelefono(String tlfono) {
        this.telefono = tlfono;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public String getConsumoMb() {
        return consumoMb;
    }

    public void setConsumoMb(String consumoMb) {
        this.consumoMb = consumoMb;
    }
}
