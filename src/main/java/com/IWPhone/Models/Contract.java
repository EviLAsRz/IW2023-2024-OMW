package com.IWPhone.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
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
        if(details != null) _sDetails = details;

    }

    // _tStartDate: Methods.

    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private LocalDate _tStartDate;
    public LocalDate getStartDate() {
        return _tStartDate;
    }
    public void setStartDate(LocalDate startDate) {
        if(startDate == null) throw new IllegalArgumentException(
                "La fecha de inicio no puede ser nula");
        _tStartDate = startDate;
    }

    // _tEndDate: Methods.
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private LocalDate _EndDate;
    public LocalDate getEndDate() {
        return _EndDate;
    }
    public void setEndDate(LocalDate endDate) {
        _EndDate = endDate;
    }

    // _dDataGigas: Methods.

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

    private Double _dPriceGigas;
    public Double getPriceGigas() { return _dPriceGigas; }
    public void setPriceGigas(Double priceGigas) {
        if(priceGigas == null) throw new IllegalArgumentException(
                "El precio de los datos en gigas no puede ser nulo");
        _dPriceGigas = priceGigas;
    }

    // _dPriceSMS: Methods.

    private Double _dPriceSMS;
    public Double getPriceSMS() { return _dPriceSMS; }
    public void setPriceSMS(Double priceSMS) {
        if(priceSMS == null) throw new IllegalArgumentException(
                "El precio de los SMS no puede ser nulo");
        _dPriceSMS = priceSMS;
    }

    // _dPriceCall: Methods.
    private Double _dPriceCall;
    public Double getPriceCall() { return _dPriceCall; }
    public void setPriceCall(Double priceCall) {
        if(priceCall == null) throw new IllegalArgumentException(
                "El precio de las llamadas no puede ser nulo");
        _dPriceCall = priceCall;
    }

    // _Client: Methods.
    @NotEmpty
    private String _sClient;//Hace referencia al DNI del cliente.
    public String getClient() {
        return _sClient;
    }
    public void setClient(String client) {
        if(client == null) throw new IllegalArgumentException(
                "El cliente no puede ser nulo");
        _sClient = client;
    }

    // _Employee: Methods.

    private String _sEmployee=null;//Inicialmente no tiene empleado asignado.
    public String getEmployee() {
        return _sEmployee;
    }
    public void setEmployee(String employee) {
        if(employee == null) throw new IllegalArgumentException(
                "El empleado no puede ser nulo");
        _sEmployee = employee;
    }



}
