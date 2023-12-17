package com.IWPhone.PanelEmpleados.services;

import com.IWPhone.Repositories.ContractRepository;
import com.IWPhone.registration.services.ContractService;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class ValidarContratoService {

    private final ContractRepository contractRepository;
    private final ContractService contractService;
    public ValidarContratoService(ContractRepository contractRepository, ContractService contractService) {
        this.contractRepository = contractRepository;
        this.contractService = contractService;
    }

    public void validarContrato(String employee, String clientID){
        contractService.setStartDate(clientID, new Date());
        //Actualizamos el empleado que ha validado el contrato
        contractService.setEmployee(clientID, employee);
    }

}
