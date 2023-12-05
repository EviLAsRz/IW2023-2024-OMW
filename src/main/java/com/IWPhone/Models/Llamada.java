package com.IWPhone.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;

import java.util.UUID;

@Entity
public class Llamada {
    @Id
    @GeneratedValue
    private UUID id;

    @NotEmpty
    private UUID _cliente;

    @NotEmpty
    private double _duracion;

    @NotEmpty
    private String _telefonoDestino;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public UUID get_cliente() {
        return _cliente;
    }

    public void set_cliente(UUID _cliente) {
        this._cliente = _cliente;
    }

    public double get_duracion() {
        return _duracion;
    }

    public void set_duracion(double _duracion) {
        this._duracion = _duracion;
    }

    public String get_telefonoDestino() {
        return _telefonoDestino;
    }

    public void set_telefonoDestino(String _telefonoDestino) {
        this._telefonoDestino = _telefonoDestino;
    }
}
