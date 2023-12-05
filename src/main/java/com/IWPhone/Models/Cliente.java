package com.IWPhone.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;

import java.util.UUID;

@Entity
public class Cliente{

    //_Id: Métodos.
    @GeneratedValue
    @Id
    private UUID _Id;
    public UUID getId() {
        return _Id;
    }
    /* TODO: ¿Realmente nos hace falta un setId? Quiero decir, es un método que al estar modificándose
        algo tan crucial como es el identificador puede dar problemas, ¿no?
        public void setId(UUID id) { this.Id = id; } */

    //_sName: Métodos.
    @NotEmpty
    private String _sName;
    public String getName() { return _sName; }
    public void setName(String name) {
        if(name == null || name.isEmpty()) throw new IllegalArgumentException(
                "Nombre no puede ser nulo ni vacío");
        _sName = name;
    }

    //_sLastName: Métodos.
    @NotEmpty
    private String _sLastName;
    public String getLastName() { return _sLastName; }
    public void setLastName(String lastname) {
        if(lastname == null || lastname.isEmpty()) throw new IllegalArgumentException(
                "Apellido no puede ser nulo ni vacío");
        _sLastName = lastname;
    }

    @NotEmpty
    private String _sDNI;
    public String getDNI() { return _sDNI; }
    public void setDNI(String dni) {
        if(dni == null || dni.isEmpty()) throw new IllegalArgumentException(
                "DNI no puede ser nulo ni vacío");
        _sDNI = dni;
    }

    @NotEmpty
    private String _sAddress;
    public String getAddress() { return _sAddress; }
    public void setAddress(String address) {
        if(address == null || address.isEmpty()) throw new IllegalArgumentException(
                "Dirección no puede ser nula ni vacía");
        _sAddress = address;
    }

    @NotEmpty
    private String _sMobilePhone;
    public String getMobilePhone() { return _sMobilePhone; }
    public void setMobilePhone(String mobilePhone) {
        if(mobilePhone == null || mobilePhone.isEmpty()) throw new IllegalArgumentException(
                "Teléfono móvil no puede ser nulo ni vacío");
        _sMobilePhone = mobilePhone;
    }

    private String _sLandline = null;
    public String getLandline() { return _sLandline; }
    public void setLandline(String landLine) { _sLandline = landLine; }
}

