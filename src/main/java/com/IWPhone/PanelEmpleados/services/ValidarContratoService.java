package com.IWPhone.PanelEmpleados.services;

import com.IWPhone.Models.Client;
import com.IWPhone.Models.Contract;
import com.IWPhone.Models.Opciones;
import com.IWPhone.Repositories.ClientRepo;
import com.IWPhone.Repositories.ContractRepository;
import com.IWPhone.Repositories.OpcionesRepo;
import com.IWPhone.Services.ClientService;
import com.IWPhone.registration.services.ContractService;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.vaadin.flow.component.notification.Notification;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.LocalDate;

import java.util.*;

@Service
public class ValidarContratoService {
    private final ClientRepo clientRepository;
    private final ContractRepository contractRepository;
    private final ContractService contractService;
    private final OpcionesRepo opcionesRepo;
    private final ClientService clientService;
    HttpClient httpClient = HttpClient.newHttpClient();
    public ValidarContratoService(ContractRepository contractRepository, ContractService contractService, ClientRepo clientRepo, OpcionesRepo opcionesRepo, ClientService clientService) {
        this.clientRepository = clientRepo;
        this.clientService = clientService;
        this.opcionesRepo = opcionesRepo;
        this.contractRepository = contractRepository;
        this.contractService = contractService;
    }

    public void validarContrato(String employee, String clientID, LocalDate startDate){
        contractService.setStartDate(clientID, startDate);
        //Actualizamos el empleado que ha validado el contrato
        contractService.setEmployee(clientID, employee);
    }

    public List<Contract> getContratosPendientesValidar(){
        return contractRepository.findBy_tStartDateIsNull();
    }

    public List<Contract> getAll(){
        return contractRepository.findAll();
    }




    public boolean validateContract(String dni, String employee, String contractDetails, LocalDate startDate,String address,
                                 double priceGB, double priceCall, double priceSMS, double discountGB, double discountCall, double discountSMS,
                                    boolean bNumerosEspeciales, boolean bRoaming
    ){

        boolean bEstadoEscritura = true;
        //Buscamos que contrato es aquel que se va a modificar
        Contract contract = contractRepository.findBy_sClient(dni);
        //Actualizamos el empleado que ha validado el contrato
        contract.setEmployee(employee);
        contract.setDetails(contractDetails);
        contract.setStartDate(startDate);
        contract.setPriceGigas(priceGB);
        contract.setPriceCall(priceCall);
        contract.setPriceSMS(priceSMS);
        UUID idContrato = contract.getId();

        try {
            contractRepository.save(contract);
        }catch (Exception e){
            bEstadoEscritura = false;
        }

        if(bEstadoEscritura) {

            //Comprobamos que el cliente Exista
            if(clientService.getClientByDNI(dni) == null){
                //No existe por lo que lo creamos
                //Creamos una entidad Client y le asociamos el contrato
                Client client = new Client();
                client.setDNI(dni);
                String sNumeroMovil = generarNumeroTelefonoAleatorio();
                String sNumeroFijo = generarNumeroTelefonoAleatorio();
                client.setMobilePhone(sNumeroMovil);
                client.setLandline(sNumeroFijo);
                if(address.contains("Calle")){
                    client.setAddress(address);
                }else client.setAddress("Calle " + address);
                try {
                    clientRepository.save(client);
                } catch (Exception e) {
                    bEstadoEscritura = false;
                    System.out.println(e.getMessage());
                }
                guardarNumeroApi(sNumeroMovil, dni);
                guardarNumeroApi(sNumeroFijo, dni);

            }
            else{//Existe por lo que lo actualizamos
                Client client = clientService.getClientByDNI(dni);
                if(address.contains("Calle")){
                    client.setAddress(address);
                }else {
                    client.setAddress("Calle " + address);
                }
                try {
                    clientRepository.save(client);
                } catch (Exception e) {
                    bEstadoEscritura = false;
                    System.out.println(e.getMessage());
                }

            }


        }

        if (bEstadoEscritura){

            if(opcionesRepo.findBy_contrato(idContrato) == null){
                //No existe por lo que lo creamos
                //Creamos una entidad Client y le asociamos el contrato
                Opciones options = new Opciones();
                options.set_contrato(idContrato);
                options.set_descuentoGB(discountGB);
                options.set_descuentoLlamada(discountCall);
                options.set_descuentoSMS(discountSMS);
                options.set_roaming(bRoaming);
                options.set_numeroEspeciales(bNumerosEspeciales);
                try {
                    opcionesRepo.save(options);
                } catch (Exception e) {
                    bEstadoEscritura = false;
                    System.out.println(e.getMessage());
                }
            }
            else{//Existe por lo que lo actualizamos
                Opciones options = opcionesRepo.findBy_contrato(idContrato);
                options.set_descuentoGB(discountGB);
                options.set_descuentoLlamada(discountCall);
                options.set_descuentoSMS(discountSMS);
                options.set_roaming(bRoaming);
                options.set_numeroEspeciales(bNumerosEspeciales);

                try {
                    opcionesRepo.save(options);
                } catch (Exception e) {
                    bEstadoEscritura = false;
                    System.out.println(e.getMessage());
                }
            }

        }

        return bEstadoEscritura;
    }

    public  String generarNumeroTelefonoAleatorio(){

        Random random = new Random();
        int digitoInicial = random.nextInt(4) + 6; // Genera un número entre 6 y 9
        long restoNumero = (long) (random.nextInt(900000000) + 100000000); // Genera un número entre 100000000 y 999999999
        return String.valueOf(digitoInicial) + String.valueOf(restoNumero);

    }

    //API USAGE
    public void guardarNumeroApi(String numero, String dniCliente){//POSTEANDO EN LA API DE OMRSIMULATOR
        Map<String, String> data = new HashMap<>();
        data.put("name", dniCliente);
        data.put("surname", dniCliente);
        data.put("carrier", "IWPHONE");
        data.put("phoneNumber", numero);

        ObjectMapper objectMapper = new ObjectMapper();
        String requestBody = "";
        try{
             requestBody = objectMapper.writeValueAsString(data);
        }catch (Exception e){
            System.out.println(e.getMessage());
        }

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("http://omr-simulator.us-east-1.elasticbeanstalk.com/"))
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(requestBody))
                .build();
        try{
            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());//HACER PETICION
            System.out.println(response.body());
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }

}





















