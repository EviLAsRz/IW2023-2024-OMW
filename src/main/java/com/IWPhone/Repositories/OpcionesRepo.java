package com.IWPhone.Repositories;

import com.IWPhone.Models.Opciones;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface OpcionesRepo extends JpaRepository<Opciones, Long> {
    Opciones findBy_contrato(UUID contrato);
}
