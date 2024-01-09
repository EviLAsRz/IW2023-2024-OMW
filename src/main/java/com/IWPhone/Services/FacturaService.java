package com.IWPhone.Services;

import com.IWPhone.Repositories.FacturaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.IWPhone.Models.Factura;
import com.IWPhone.Models.Contract;

import java.time.LocalDate;
import java.util.Date;
import java.util.UUID;

@Service
public class FacturaService {

    @Autowired
    private FacturaRepository facturaRepository;

    FacturaService(FacturaRepository facturaRepository) {
        this.facturaRepository = facturaRepository;
    }

    public void create(UUID contrato, String detalles, Double iva) {

        Factura factura = new Factura();

        factura.set_detalles(detalles);
        factura.set_fecha(LocalDate.now());
        factura.set_iva(iva);
        facturaRepository.save(factura);
    }

    //Setters
    //public UUID getContract(UUID contrato) { return facturaRepository.findBy_contrato(contrato).get_contrato(); }
    public String getDetails(UUID contrato) { return facturaRepository.findById(contrato).get_detalles(); }
    public Double getIva(UUID contrato) { return facturaRepository.findById(contrato).get_iva(); }
    public LocalDate getDate(UUID contrato) { return facturaRepository.findById(contrato).get_fecha(); }
    public LocalDate getEndDate(UUID contrato) { return facturaRepository.findById(contrato).get_fechaEnd(); }

    //Getters

    public void setDetails(UUID contrato, String detalles) {
        try{
            Factura factura = facturaRepository.findById(contrato);
            factura.set_detalles(detalles);
            facturaRepository.save(factura);
        } catch(Exception e) {
            System.out.println("Error al cambiar los detalles de la factura");
        }
    }

    public void setIva (UUID contrato, Double iva) {
        try{
            Factura factura = facturaRepository.findById(contrato);
            factura.set_iva(iva);
            facturaRepository.save(factura);
        }catch (Exception e) {
            System.out.println("Error al cambiar el IVA de la factura");
        }
    }

    public void setDate (UUID contrato, LocalDate date) {
        try{
            Factura factura = facturaRepository.findById(contrato);
            factura.set_fecha(date);
            facturaRepository.save(factura);
        }catch (Exception e) {
            System.out.println("Error al cambiar la fecha de la factura");
        }
    }

    public void setEndDate (UUID contrato, LocalDate endDate) {
        try{
            Factura factura = facturaRepository.findById(contrato);
            factura.set_fecha(endDate);
            facturaRepository.save(factura);
        }catch (Exception e) {
            System.out.println("Error al cambiar la fecha de fin de la factura");
        }
    }

    public String getDniFromFactura(UUID facturaId) {
        Factura factura = facturaRepository.findById(facturaId);
        if(factura == null){
            throw new IllegalArgumentException("La factura con el ID proporcionado no existe");
        }

        return factura.getContract().getClient();
    }
}
