package com.IWPhone.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import org.springframework.format.annotation.DateTimeFormat;
import java.util.Date;
import java.util.UUID;

@Getter
@Entity
public class Consumo {//Controlará el consumo de datos total de un usuario por dia.
    @Id
    @GeneratedValue
    private UUID id;
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date _fecha;

    @NotEmpty
    private Double consumo;

    @NotEmpty
    private UUID contrato;//Relacion con contrato.

    public UUID getId() {
        return id;
    }

    public Date get_fecha() {
        return _fecha;
    }

    public Double getConsumo() {
        return consumo;
    }

    public UUID getContrato() {
        return contrato;
    }

    public void setContrato(UUID contrato) {
        this.contrato = contrato;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public void set_fecha(Date _fecha) {
        this._fecha = _fecha;
    }

    public void setConsumo(Double consumo) {
        this.consumo = consumo;
    }
}
