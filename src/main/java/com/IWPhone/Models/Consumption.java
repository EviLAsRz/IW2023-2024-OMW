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
public class Consumption {  // Controlará el consumo de datos total de un usuario por día.
    // _Id: Methods.
    @GeneratedValue
    @Id
    private UUID _Id;
    public UUID getId() { return _Id; }

    // _tDate: Methods.
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date _tDate;
    public Date getDate() { return _tDate; }
    public void setDate(Date date) {
        if (date == null) throw new IllegalArgumentException(
                "La fecha no puede ser nula");
        _tDate = date;
    }

    // _dConsumption: Methods.
    @NotEmpty
    private Double _dConsumption;
    public Double getConsumption() { return _dConsumption; }
    public void setConsumption(Double consumption) {
        if (consumption == null) throw new IllegalArgumentException(
                "El consumo no puede ser nulo");
        _dConsumption = consumption;
    }

    // _Contract: Methods.
    @NotEmpty
    private UUID _Contract; // Relación con contrato.
    public UUID getContract() { return _Contract; }
    public void setContract(UUID contract) {
        if (contract == null) throw new IllegalArgumentException(
                "El contrato no puede ser nulo");
        _Contract = contract;
    }
}