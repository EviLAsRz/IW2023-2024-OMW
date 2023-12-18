package com.IWPhone.PanelEmpleados.services;

import com.IWPhone.Models.Contract;
import com.IWPhone.Repositories.ContractRepository;
import com.IWPhone.registration.services.ContractService;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

import java.util.List;

@Service
public class ValidarContratoService {

    private final ContractRepository contractRepository;
    private final ContractService contractService;
    public ValidarContratoService(ContractRepository contractRepository, ContractService contractService) {
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

}
