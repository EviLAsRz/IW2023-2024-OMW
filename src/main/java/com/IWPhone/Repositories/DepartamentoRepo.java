package com.IWPhone.Repositories;

import com.IWPhone.Models.Departamento;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;
import java.util.Optional;

public interface DepartamentoRepo extends JpaRepository<Departamento, UUID>{
    Optional<Departamento> findByNombre(String nombre);
}
