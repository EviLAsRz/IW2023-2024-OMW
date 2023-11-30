package com.bankIW.Empleado.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;

import java.util.UUID;

@Entity
public class Consulta {

    @GeneratedValue
    @Id
    private UUID id;

    @NotEmpty
    private String _detalles;

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
}
