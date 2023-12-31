package com.IWPhone.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;

import java.util.UUID;

@Entity
public class Cliente_Consulta_Empleado {
    @GeneratedValue
    @Id
    private UUID id;


    private UUID _cliente;

    private UUID _empleado;

    private UUID _consulta;

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

    public UUID get_empleado() {
        return _empleado;
    }

    public void set_empleado(UUID _empleado) {
        this._empleado = _empleado;
    }

    public UUID get_consulta() {
        return _consulta;
    }

    public void set_consulta(UUID _consulta) {
        this._consulta = _consulta;
    }

    private boolean answered = false;//Si esta cerrada o contestada se

    public boolean isAnswered() {
        return answered;
    }

    public void setAnswered(boolean answered) {
        this.answered = answered;
    }

}
