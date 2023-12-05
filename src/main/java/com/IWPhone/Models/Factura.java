package com.IWPhone.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;
import org.springframework.format.annotation.DateTimeFormat;
import java.util.Date;
import java.util.UUID;

@Entity
public class Factura {
    @Id
    @GeneratedValue
    private UUID id;

    @NotEmpty
    private UUID _contrato;

    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date _fecha;

    private String _detalles;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public UUID get_contrato() {
        return _contrato;
    }

    public void set_contrato(UUID _contrato) {
        this._contrato = _contrato;
    }

    public Date get_fecha() {
        return _fecha;
    }

    public void set_fecha(Date _fecha) {
        this._fecha = _fecha;
    }

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
