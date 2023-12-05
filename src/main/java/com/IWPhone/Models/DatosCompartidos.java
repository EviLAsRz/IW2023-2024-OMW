package com.IWPhone.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;

import java.util.UUID;

@Entity
public class DatosCompartidos {
    @Id
    @GeneratedValue
    private UUID id;

    @NotEmpty
    private UUID _contrato;

    @NotEmpty
    private UUID _cliente;

    @NotEmpty
    private Double _gigasCompartidos;

    public UUID get_contrato() {
        return _contrato;
    }

    public void set_contrato(UUID _contrato) {
        this._contrato = _contrato;
    }

    public UUID get_cliente() {
        return _cliente;
    }

    public void set_cliente(UUID _cliente) {
        this._cliente = _cliente;
    }

    public Double get_gigasCompartidos() {
        return _gigasCompartidos;
    }

    public void set_gigasCompartidos(Double _gigasCompartidos) {
        this._gigasCompartidos = _gigasCompartidos;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }
}
