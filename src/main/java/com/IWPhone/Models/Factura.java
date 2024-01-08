package com.IWPhone.Models;

import jakarta.persistence.*;
        import jakarta.validation.constraints.NotEmpty;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.Date;
import java.util.UUID;

@Entity
public class Factura {
    @Id
    @GeneratedValue
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "_contrato", nullable = false)
    private Contract contract;

    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date _fecha;
    private Date _fechaEnd;
    private String _detalles;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public Contract getContract() {
        return contract;
    }
    public Date get_fecha() {
        return _fecha;
    }

    public void set_fecha(Date _fecha) {
        this._fecha = _fecha;
    }

    public Date get_fechaEnd() { return _fechaEnd; }

    public void set_fechaEnd(Date _fechaEnd) { this._fechaEnd = _fechaEnd; }

    public String get_detalles() {
        return _detalles;
    }

    public void set_detalles(String _detalles) {
        this._detalles = _detalles;
    }

    public Double get_iva() {
        return _iva;
    }

    public void set_iva(Double _iva) {
        this._iva = _iva;
    }

    @NotEmpty
    private Double _iva;

}
