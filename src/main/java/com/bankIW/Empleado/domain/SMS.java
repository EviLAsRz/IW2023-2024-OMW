package com.bankIW.Empleado.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import java.util.UUID;
import jakarta.validation.constraints.NotEmpty;

@Entity
public class SMS {

    @GeneratedValue
    @Id
    private UUID id;

    @NotEmpty
    private UUID _cliente;

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

    public String get_contenido() {
        return _contenido;
    }

    public void set_contenido(String _contenido) {
        this._contenido = _contenido;
    }

    public String get_telefonoDestino() {
        return _telefonoDestino;
    }

    public void set_telefonoDestino(String _telefonoDestino) {
        this._telefonoDestino = _telefonoDestino;
    }

    @NotEmpty
    private String _contenido;

    @NotEmpty
    private String _telefonoDestino;



}
