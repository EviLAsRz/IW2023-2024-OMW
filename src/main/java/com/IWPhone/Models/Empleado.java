package com.IWPhone.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;

import java.util.UUID;

@Entity
public class Empleado extends User {//Exists as especification of the MainClass User (UserDetail)

    @GeneratedValue
    @Id
    private UUID id;


    private String _nombre;
    private String _apellidos;

    @NotEmpty
    @Email
    private String _email;

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

    public String get_email() {
        return _email;
    }

    public void set_email(String _email) {
        this._email = _email;
    }

    public String get_dni() {
        return _dni;
    }

    public void set_dni(String _dni) {
        this._dni = _dni;
    }

    public Integer get_tDepartamento() {
        return _tDepartamento;
    }

    public void set_tDepartamento(Integer _tDepartamento) {
        this._tDepartamento = _tDepartamento;
    }

    @NotEmpty
    private String _dni;

    @NotEmpty
    private Integer _tDepartamento;

    //! Falta añadir la password pq no sabemos si podemos usar el usario de Vaadin.

}
