package com.IWPhone.PanelEmpleados.services;

import com.IWPhone.Models.Factura;
import com.IWPhone.Repositories.ClientRepo;
import com.IWPhone.Repositories.ContractRepository;
import com.IWPhone.Repositories.FacturaRepository;
import com.IWPhone.Services.ApplicationUserService;
import org.springframework.stereotype.Service;

import java.net.http.HttpClient;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class ValidarFacturasService {

    private final ClientRepo clientRepo;
    private final ContractRepository contractRepository;
    private final FacturaRepository facturaRepository;
    private final ApplicationUserService applicationUserService;
    HttpClient httpClient = HttpClient.newHttpClient();

    public ValidarFacturasService(ClientRepo clientRepo, ContractRepository contractRepository, FacturaRepository facturaRepository,
                                  ApplicationUserService applicationUserService) {
        this.clientRepo = clientRepo;
        this.contractRepository = contractRepository;
        this.facturaRepository = facturaRepository;
        this.applicationUserService = applicationUserService;
    }

    public List<Factura> getAll() { return facturaRepository.findAll(); }

    public boolean disableFactura(UUID contrato) {
        try{
            Factura factura = facturaRepository.findById(contrato);
            factura.set_fecha(new Date());
            facturaRepository.save(factura);
        } catch (Exception e){
            System.out.println(e.getMessage());
            return false;
        }
        return true;
    }

    public boolean enableFactura(UUID contrato) {
        try{
            Factura factura = facturaRepository.findById(contrato);
            factura.set_fecha(null);
            facturaRepository.save(factura);
        } catch (Exception e){
            System.out.println(e.getMessage());
            return false;
        }
        return true;
    }
}
