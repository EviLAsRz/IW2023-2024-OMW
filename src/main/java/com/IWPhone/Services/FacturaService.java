package com.IWPhone.Services;

import com.IWPhone.Repositories.FacturaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.IWPhone.Models.Factura;

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

    public void create(UUID contrato, String detalles, Date fecha, Double iva) {

        Factura factura = new Factura();
        factura.set_contrato(contrato);
        factura.set_detalles(detalles);
        factura.set_fecha(LocalDate.now());
        factura.set_iva(iva);
        facturaRepository.save(factura);
    }

    public UUID getContract(UUID contrato) { return facturaRepository.findBy_contrato(contrato).get_contrato(); }
    public String getDetails(UUID contrato) { return facturaRepository.findBy_contrato(contrato).get_detalles(); }
    public Double getIva(UUID contrato) { return facturaRepository.findBy_contrato(contrato).get_iva(); }
}
