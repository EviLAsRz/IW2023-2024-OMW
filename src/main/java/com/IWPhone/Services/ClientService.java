package com.IWPhone.Services;
import com.IWPhone.Models.Client;
import com.IWPhone.Repositories.ClientRepo;
import com.IWPhone.security.SecurityService;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class ClientService {
    SecurityService securityService;
    ClientRepo clientRepo;
    ApplicationUserService applicationUserService;

    public ClientService(SecurityService securityService, ClientRepo clientRepo, ApplicationUserService applicationUserService) {
        this.securityService = securityService;
        this.clientRepo = clientRepo;
        this.applicationUserService = applicationUserService;
    }

    public String getDNI(UUID idCliente){
        return clientRepo.findById(idCliente).get().getDNI();
    }

    public void setDNI(UUID idCliente, String dni){
        Client c = clientRepo.findById(idCliente).get();
        c.setDNI(dni);
        clientRepo.save(c);
    }

    public String getAddressByDNI(String dni){
        return clientRepo.findByDni(dni).getAddress();
    }

    public void setAddressByDNI(String dni, String address){
        Client c = clientRepo.findByDni(dni);
        c.setAddress(address);
        clientRepo.save(c);
    }

    public String getMobilePhoneByDNI(String dni){
        return clientRepo.findByDni(dni).getMobilePhone();
    }

    public void setMobilePhoneByDNI(String dni, String mobilePhone){
        Client c = clientRepo.findByDni(dni);
        c.setMobilePhone(mobilePhone);
        clientRepo.save(c);
    }

    public String getLandlineByDNI(String dni){
        return clientRepo.findByDni(dni).getLandline();
    }

    public void setLandlineByDNI(String dni, String landline){
        Client c = clientRepo.findByDni(dni);
        c.setLandline(landline);
        clientRepo.save(c);
    }

    public Client getClientByDNI(String dni){
        return clientRepo.findByDni(dni);
    }

    public Client getClientById(UUID id){
        return clientRepo.findById(id).get();
    }

}
