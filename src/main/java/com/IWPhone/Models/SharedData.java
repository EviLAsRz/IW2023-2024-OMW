package com.IWPhone.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;

import java.util.UUID;

@Entity
public class SharedData {
    // _Id: Methods.
    @Id
    @GeneratedValue
    private UUID _Id;
    public UUID getId() {
        return _Id;
    }

    // _Contract: Methods.
    @NotEmpty
    private UUID _Contract;
    public UUID getContract() {
        return _Contract;
    }
    public void setContract(UUID contract) {
        if(contract == null) throw new IllegalArgumentException(
                "El contrato no puede ser nulo");
        _Contract = contract;
    }

    // _Client: Methods.
    @NotEmpty
    private UUID _Client;
    public UUID getClient() {
        return _Client;
    }
    public void setClient(UUID client) {
        if(client == null) throw new IllegalArgumentException(
                "El cliente no puede ser nulo");
        _Client = client;
    }

    // _dSharedGigas: Methods.
    @NotEmpty
    private Double _dSharedGigas;
    public Double getSharedGigas() {
        return _dSharedGigas;
    }
    public void setSharedGigas(Double sharedGigas) {
        if(sharedGigas == null) throw new IllegalArgumentException(
                "Los gigas compartidos no pueden ser nulos");
        _dSharedGigas = sharedGigas;
    }
}
