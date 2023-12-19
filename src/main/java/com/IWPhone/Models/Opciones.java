package com.IWPhone.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;

import java.util.UUID;

@Entity
public class Opciones {

    @Id
    @GeneratedValue
    private UUID id;


    private UUID _contrato;

    private Double _descuentoGB = null;

    private Double _descuentoSMS=null;

    private Double _descuentoLlamada=null;

    private Boolean _roaming = false;

    private Boolean _numeroEspeciales = false;

    public UUID getId() {
        return id;
    }



    public UUID get_contrato() {
        return _contrato;
    }

    public void set_contrato(UUID _contrato) {
        this._contrato = _contrato;
    }

    public Double get_descuentoGB() {
        return _descuentoGB;
    }

    public void set_descuentoGB(Double _descuentoGB) {
        this._descuentoGB = _descuentoGB;
    }

    public Double get_descuentoSMS() {
        return _descuentoSMS;
    }

    public void set_descuentoSMS(Double _descuentoSMS) {
        this._descuentoSMS = _descuentoSMS;
    }

    public Double get_descuentoLlamada() {
        return _descuentoLlamada;
    }

    public void set_descuentoLlamada(Double _descuentoLlamada) {
        this._descuentoLlamada = _descuentoLlamada;
    }

    public Boolean get_roaming() {
        return _roaming;
    }

    public void set_roaming(Boolean _roaming) {
        this._roaming = _roaming;
    }

    public Boolean get_numeroEspeciales() {
        return _numeroEspeciales;
    }

    public void set_numeroEspeciales(Boolean _numeroEspeciales) {
        this._numeroEspeciales = _numeroEspeciales;
    }
}
