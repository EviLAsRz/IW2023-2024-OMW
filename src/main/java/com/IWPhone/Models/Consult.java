package com.IWPhone.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;

import java.util.UUID;

@Entity
public class Consult {
    // _Id: Methods.
    @GeneratedValue
    @Id
    private UUID _Id;
    public UUID getId() { return _Id; }

    // _sDetails: Methods.

    private String _sDetails;
    public String getDetails() {
        return _sDetails;
    }
    public void setDetails(String details) {

        _sDetails = details;
    }


}
