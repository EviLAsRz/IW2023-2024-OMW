package com.bankIW.Empleado.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.UUID;

@Entity
public class Contrato {
    @GeneratedValue
    @Id
    private UUID id;
    private String _detalles;
    @NotEmpty
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date _fechaInicio;

    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date _fechaFin;

    @NotEmpty
    private Double _datosGigas;

    @NotEmpty
    private Double _precioGigas;

    @NotEmpty
    private Double _precioSMS;

    @NotEmpty
    private Double _precioLlamada;

    @NotEmpty
    private UUID _cliente;

    public UUID get_cliente() {
        return _cliente;
    }

    public void set_cliente(UUID _cliente) {
        this._cliente = _cliente;
    }

    public UUID get_empleado() {
        return _empleado;
    }

    public void set_empleado(UUID _empleado) {
        this._empleado = _empleado;
    }

    @NotEmpty
    private UUID _empleado;

    //! TODO Falta añadir las opciones de contrato, Cliente que son 1-1.

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String get_detalles() {
        return _detalles;
    }

    public void set_detalles(String _detalles) {
        this._detalles = _detalles;
    }

    public Date get_fechaInicio() {
        return _fechaInicio;
    }

    public void set_fechaInicio(Date _fechaInicio) {
        this._fechaInicio = _fechaInicio;
    }

    public Date get_fechaFin() {
        return _fechaFin;
    }

    public void set_fechaFin(Date _fechaFin) {
        this._fechaFin = _fechaFin;
    }

    public Double get_datosGigas() {
        return _datosGigas;
    }

    public void set_datosGigas(Double _datosGigas) {
        this._datosGigas = _datosGigas;
    }

    public Double get_precioGigas() {
        return _precioGigas;
    }

    public void set_precioGigas(Double _precioGigas) {
        this._precioGigas = _precioGigas;
    }

    public Double get_precioSMS() {
        return _precioSMS;
    }

    public void set_precioSMS(Double _precioSMS) {
        this._precioSMS = _precioSMS;
    }

    public Double get_precioLlamada() {
        return _precioLlamada;
    }

    public void set_precioLlamada(Double _precioLlamada) {
        this._precioLlamada = _precioLlamada;
    }
}
