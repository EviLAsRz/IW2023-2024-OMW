package com.bankIW.Empleado.domain;

import com.helger.commons.annotation.Nonempty;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;

import java.util.UUID;

@Entity
public class Empleado {

    @GeneratedValue
    @Id
    private UUID id;

    private String nombre;
    private String apellidos;

    @NotEmpty
    @Email
    private String email;

    @NotEmpty
    private String DNI;

    @NotEmpty
    private Integer tDepartamento;

    //! Falta añadir la password pq no sabemos si podemos usar el usario de Vaadin.

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDNI() {
        return DNI;
    }

    public void setDNI(String DNI) {
        this.DNI = DNI;
    }

    public Integer gettDepartamento() {
        return tDepartamento;
    }

    public void settDepartamento(Integer tDepartamento) {
        this.tDepartamento = tDepartamento;
    }
}
