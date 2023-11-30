package com.bankIW.Empleado.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;

import java.util.UUID;

@Entity
public class Cliente {

    @GeneratedValue
    @Id
    private UUID id;

    @NotEmpty
    private String _nombre;

    @NotEmpty
    private String _apellidos;

    @NotEmpty
    private String _dni;

    @NotEmpty
    private String _direccion;

    @NotEmpty
    private String _telefonoMovil;

    private String _telefonoFijo = null;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String get_nombre() {
        return _nombre;
    }

    public void set_nombre(String _nombre) {
        this._nombre = _nombre;
    }

    public String get_apellidos() {
        return _apellidos;
    }

    public void set_apellidos(String _apellidos) {
        this._apellidos = _apellidos;
    }

    public String get_dni() {
        return _dni;
    }

    public void set_dni(String _dni) {
        this._dni = _dni;
    }

    public String get_direccion() {
        return _direccion;
    }

    public void set_direccion(String _direccion) {
        this._direccion = _direccion;
    }

    public String get_telefonoMovil() {
        return _telefonoMovil;
    }

    public void set_telefonoMovil(String _telefonoMovil) {
        this._telefonoMovil = _telefonoMovil;
    }

    public String get_telefonoFijo() {
        return _telefonoFijo;
    }

    public void set_telefonoFijo(String _telefonoFijo) {
        this._telefonoFijo = _telefonoFijo;
    }
}

