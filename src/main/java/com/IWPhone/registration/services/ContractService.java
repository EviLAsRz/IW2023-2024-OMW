package com.IWPhone.registration.services;

import com.IWPhone.Models.Contract;
import com.IWPhone.Models.Opciones;
import com.IWPhone.Repositories.ContractRepository;
import com.IWPhone.Repositories.OpcionesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class ContractService {
    @Autowired
    private ContractRepository contractRepository;
    private final OpcionesRepo opcionesRepository;
    ContractService(ContractRepository contractRepository, OpcionesRepo opcionesRepository){
        this.contractRepository = contractRepository;
        this.opcionesRepository = opcionesRepository;
    }

    public void create(String clientDNI,String details, Double maxGbConsumption, Double pricePerGb, Double pricePerSMS,
                       Double pricePerCall
    ){
        Contract contract = new Contract();
        contract.setClient(clientDNI);
        contract.setDetails(details);
        contract.setDataGigas(maxGbConsumption);
        contract.setPriceGigas(pricePerGb);
        contract.setPriceSMS(pricePerSMS);
        contract.setPriceCall(pricePerCall);
        contractRepository.save(contract);
    }

    public boolean isContractRegistered(String dni){
        return contractRepository.findBy_sClient(dni) != null;
    }

    public String getClient(String dni){
        return contractRepository.findBy_sClient(dni).getClient();
    }

    public String getDetails(String dni){
        return contractRepository.findBy_sClient(dni).getDetails();
    }

    public Double getMaxGbConsumption(String dni){
        return contractRepository.findBy_sClient(dni).getDataGigas();
    }

    public Double getPricePerGb(String dni){
        return contractRepository.findBy_sClient(dni).getPriceGigas();
    }

    public Double getPricePerSMS(String dni){
        return contractRepository.findBy_sClient(dni).getPriceSMS();
    }

    public Double getPricePerCall(String dni){
        return contractRepository.findBy_sClient(dni).getPriceCall();
    }

    public void setClient(String dni, String client){
        try{
            Contract contract = contractRepository.findBy_sClient(dni);
            contract.setClient(client);
            contractRepository.save(contract);
        } catch (Exception e){
            System.out.println("Error al cambiar el cliente del contrato");
        }
    }

    public void setDetails(String dni, String details){
        try{
            Contract contract = contractRepository.findBy_sClient(dni);
            contract.setDetails(details);
            contractRepository.save(contract);
        } catch (Exception e){
            System.out.println("Error al cambiar los detalles del contrato");
        }
    }

    public void setMaxGbConsumption(String dni, Double maxGbConsumption){
        try{
            Contract contract = contractRepository.findBy_sClient(dni);
            contract.setDataGigas(maxGbConsumption);
            contractRepository.save(contract);
        } catch (Exception e){
            System.out.println("Error al cambiar los datos en gigas del contrato");
        }
    }

    public void setPricePerGb(String dni, Double pricePerGb){
        try{
            Contract contract = contractRepository.findBy_sClient(dni);
            contract.setPriceGigas(pricePerGb);
            contractRepository.save(contract);
        } catch (Exception e){
            System.out.println("Error al cambiar el precio de los datos en gigas del contrato");
        }
    }

    public void setPricePerSMS(String dni, Double pricePerSMS){
        try{
            Contract contract = contractRepository.findBy_sClient(dni);
            contract.setPriceSMS(pricePerSMS);
            contractRepository.save(contract);
        } catch (Exception e){
            System.out.println("Error al cambiar el precio de los SMS del contrato");
        }
    }

    public void setPricePerCall(String dni, Double pricePerCall){
        try{
            Contract contract = contractRepository.findBy_sClient(dni);
            contract.setPriceCall(pricePerCall);
            contractRepository.save(contract);
        } catch (Exception e){
            System.out.println("Error al cambiar el precio de las llamadas del contrato");
        }
    }

    public LocalDate getStartDate(String dni){
        return contractRepository.findBy_sClient(dni).getStartDate();
    }

    public LocalDate getEndDate(String dni){
        return contractRepository.findBy_sClient(dni).getEndDate();
    }

    public void setStartDate(String dni, LocalDate startDate){
        try{
            Contract contract = contractRepository.findBy_sClient(dni);
            contract.setStartDate(startDate);
            contractRepository.save(contract);
        } catch (Exception e){
            System.out.println("Error al cambiar la fecha de inicio del contrato");
        }
    }

    public void setEndDate(String dni, LocalDate endDate){
        try{
            Contract contract = contractRepository.findBy_sClient(dni);
            contract.setEndDate(endDate);
            contractRepository.save(contract);
        } catch (Exception e){
            System.out.println("Error al cambiar la fecha de fin del contrato");
        }
    }

    public void setEmployee(String dni, String employee){
        try{
            Contract contract = contractRepository.findBy_sClient(dni);
            contract.setEmployee(employee);
            contractRepository.save(contract);
        } catch (Exception e){
            System.out.println("Error al cambiar el empleado del contrato");
        }
    }

    public Opciones getLinkedOptionsToContract(String dniCliente){
        //Pillamos el contrato vinculado al cliente
        Contract contract = contractRepository.findBy_sClient(dniCliente);
        //Pillamos las opciones vinculadas al contrato
        Opciones opciones = opcionesRepository.findBy_contrato(contract.getId());
        return opciones;
    }

    public List<Contract> getAllContracts() {
        return new ArrayList<>(contractRepository.findAllByIdIsNotNull());
    }

}
