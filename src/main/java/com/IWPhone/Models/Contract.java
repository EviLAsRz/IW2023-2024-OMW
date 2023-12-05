package com.IWPhone.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.UUID;

@Entity
public class Contract {
    // _Id: Methods.
    @GeneratedValue
    @Id
    private UUID _Id;
    public UUID getId() {
        return _Id;
    }

    // _sDetails: Methods.
    private String _sDetails;
    public String getDetails() {
        return _sDetails;
    }
    public void setDetails(String details) {
        if(details == null || details.isEmpty()) throw new IllegalArgumentException(
                "Los detalles no pueden ser nulos ni vacíos");
        _sDetails = details;
    }

    // _tStartDate: Methods.
    @NotEmpty
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date _tStartDate;
    public Date getStartDate() {
        return _tStartDate;
    }
    public void setStartDate(Date startDate) {
        if(startDate == null) throw new IllegalArgumentException(
                "La fecha de inicio no puede ser nula");
        _tStartDate = startDate;
    }

    // _tEndDate: Methods.
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date _EndDate;
    public Date getEndDate() {
        return _EndDate;
    }
    public void setEndDate(Date endDate) {
        if(endDate == null) throw new IllegalArgumentException(
                "La fecha de fin no puede ser nula");
        _EndDate = endDate;
    }

    // _dDataGigas: Methods.
    @NotEmpty
    private Double _dDataGigas;
    public Double getDataGigas() {
        return _dDataGigas;
    }
    public void setDataGigas(Double dataGigas) {
        if(dataGigas == null) throw new IllegalArgumentException(
                "Los datos en gigas no pueden ser nulos");
        _dDataGigas = dataGigas;
    }

    // _dPriceGigas: Methods.
    @NotEmpty
    private Double _dPriceGigas;
    public Double getPriceGigas() { return _dPriceGigas; }
    public void setPriceGigas(Double priceGigas) {
        if(priceGigas == null) throw new IllegalArgumentException(
                "El precio de los datos en gigas no puede ser nulo");
        _dPriceGigas = priceGigas;
    }

    // _dPriceSMS: Methods.
    @NotEmpty
    private Double _dPriceSMS;
    public Double getPriceSMS() { return _dPriceSMS; }
    public void setPriceSMS(Double priceSMS) {
        if(priceSMS == null) throw new IllegalArgumentException(
                "El precio de los SMS no puede ser nulo");
        _dPriceSMS = priceSMS;
    }

    // _dPriceCall: Methods.
    @NotEmpty
    private Double _dPriceCall;
    public Double getPriceCall() { return _dPriceCall; }
    public void setPriceCall(Double priceCall) {
        if(priceCall == null) throw new IllegalArgumentException(
                "El precio de las llamadas no puede ser nulo");
        _dPriceCall = priceCall;
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

    // _Employee: Methods.
    @NotEmpty
    private UUID _Employee;
    public UUID getEmployee() {
        return _Employee;
    }
    public void setEmployee(UUID employee) {
        if(employee == null) throw new IllegalArgumentException(
                "El empleado no puede ser nulo");
        _Employee = employee;
    }

    //! TODO: Falta añadir las opciones de contrato, Cliente que son 1-1.

}
