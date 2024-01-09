package com.IWPhone.Repositories;

import com.IWPhone.Models.Contract;
import com.IWPhone.Models.Factura;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface FacturaRepository  extends JpaRepository<Factura, Long> {
    Factura findById(UUID id);
    Factura findByContract(Contract contract);
}
