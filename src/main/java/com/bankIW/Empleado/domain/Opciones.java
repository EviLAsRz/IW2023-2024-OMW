package com.bankIW.Empleado.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;
import org.springframework.boot.context.properties.bind.DefaultValue;

import java.util.UUID;

@Entity
public class Opciones {

    @Id
    @GeneratedValue
    private UUID id;

    @NotEmpty
    private UUID _contrato;

    private Double _descuentoGB = null;

    private Double _descuentoSMS=null;

    private Double _descuentoLlamada=null;

    private Boolean _roaming = false;

    private Boolean _numeroEspeciales = false;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }
}
