package com.IWPhone.Services;
import com.IWPhone.Models.Client;
import com.IWPhone.Repositories.ClientRepo;
import com.IWPhone.security.SecurityService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;
import java.util.UUID;

@Service
public class ClientService {
    SecurityService securityService;
    ClientRepo clientRepo;
    ApplicationUserService applicationUserService;
    private static final Random RANDOM = new Random();
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
        return clientRepo.findBy_sDNI(dni).getAddress();
    }

    public void setAddressByDNI(String dni, String address){
        Client c = clientRepo.findBy_sDNI(dni);
        c.setAddress(address);
        clientRepo.save(c);
    }

    public String getMobilePhoneByDNI(String dni){
        return clientRepo.findBy_sDNI(dni).getMobilePhone();
    }

    public void setMobilePhoneByDNI(String dni, String mobilePhone){
        Client c = clientRepo.findBy_sDNI(dni);
        c.setMobilePhone(mobilePhone);
        clientRepo.save(c);
    }

    public String getLandlineByDNI(String dni){
        return clientRepo.findBy_sDNI(dni).getLandline();
    }

    public void setLandlineByDNI(String dni, String landline){
        Client c = clientRepo.findBy_sDNI(dni);
        c.setLandline(landline);
        clientRepo.save(c);
    }

    public Client getClientByDNI(String dni){
        return clientRepo.findBy_sDNI(dni);
    }

    public Client getClientById(UUID id){
        return clientRepo.findById(id).get();
    }

    public boolean telefonoExiste(String telefono){
        return clientRepo.findBy_sMobilePhone(telefono) != null || clientRepo.findBy_sLandline(telefono) != null;
    }

    public List<Client> getAll(){
        return clientRepo.findAll();
    }

    public void eraseMobilePhone(String dni){
        Client c = clientRepo.findBy_sDNI(dni);
        c.setMobilePhone(null);
        clientRepo.save(c);
    }

    public void eraseLandline(String dni){
        Client c = clientRepo.findBy_sDNI(dni);
        c.setLandline(null);
        clientRepo.save(c);
    }

    public static String generateMobileNumber() {
        int num1, num2, num3; //3 números en la parte 2 del número de teléfono
        int set2, set3; //2 números en la parte 3 del número de teléfono

        num1 = RANDOM.nextInt(7) + 1; //primer número es siempre 6
        num2 = RANDOM.nextInt(8); //segundo número va de 0 a 7
        num3 = RANDOM.nextInt(8); //tercer número va de 0 a 7
        set2 = RANDOM.nextInt(643) + 100; //los siguientes tres números van de 100 a 742
        set3 = RANDOM.nextInt(8999) + 1000; //los últimos cuatro números van de 1000 a 9999

        return "+34" + num1 + num2 + num3 + set2 + set3;
    }

    public static String generateLandlineNumber() {
        int num1, num2, num3; //3 números en la parte 2 del número de teléfono
        int set2, set3; //2 números en la parte 3 del número de teléfono

        num1 = 9; //primer número es siempre 9
        num2 = RANDOM.nextInt(8); //segundo número va de 0 a 7
        num3 = RANDOM.nextInt(8); //tercer número va de 0 a 7
        set2 = RANDOM.nextInt(643) + 100; //los siguientes tres números van de 100 a 742
        set3 = RANDOM.nextInt(8999) + 1000; //los últimos cuatro números van de 1000 a 9999

        return "+34" + num1 + num2 + num3 + set2 + set3;
    }



    public String setRandomNewMobilePhone(String dniCliente){
        String sNumeroMovil = generateMobileNumber();
        while(telefonoExiste(sNumeroMovil)){
            sNumeroMovil = generateMobileNumber();
        }
        setMobilePhoneByDNI(dniCliente, sNumeroMovil);
        return sNumeroMovil;
    }

    public String setRandomNewLandline(String dniCliente){
        String sNumeroFijo = generateLandlineNumber();
        while(telefonoExiste(sNumeroFijo)){
            sNumeroFijo = generateLandlineNumber();
        }
        setLandlineByDNI(dniCliente, sNumeroFijo);
        return sNumeroFijo;
    }

}
