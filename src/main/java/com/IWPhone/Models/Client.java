package com.IWPhone.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;

import java.util.UUID;

@Entity
public class Client  {

    @Id
    @GeneratedValue
    private UUID id;


    // _sDNI: Methods.
    @NotEmpty
    private String _sDNI;//Bind to ApplicationUser.username
    public String getDNI() { return _sDNI; }
    public void setDNI(String dni) {
        if(dni == null || dni.isEmpty()) throw new IllegalArgumentException(
                "DNI no puede ser nulo ni vacío");
        _sDNI = dni;
    }

    // _sAddress: Methods.
    @NotEmpty
    private String _sAddress;
    public String getAddress() { return _sAddress; }
    public void setAddress(String address) {
        if(address == null || address.isEmpty()) throw new IllegalArgumentException(
                "Dirección no puede ser nula ni vacía");
        _sAddress = address;
    }

    // _sMobilePhone: Methods.
    @NotEmpty
    private String _sMobilePhone;
    public String getMobilePhone() { return _sMobilePhone; }
    public void setMobilePhone(String mobilePhone) {
        if(mobilePhone == null || mobilePhone.isEmpty()) throw new IllegalArgumentException(
                "Teléfono móvil no puede ser nulo ni vacío");
        _sMobilePhone = mobilePhone;
    }

    // _sLandline: Methods.
    private String _sLandline = null;
    public String getLandline() { return _sLandline; }
    public void setLandline(String landLine) { _sLandline = landLine; }
}

