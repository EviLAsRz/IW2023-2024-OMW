package com.IWPhone.Repositories;

import com.IWPhone.Models.Empleado;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmployeeRepo  extends JpaRepository<Empleado, String> {
    Optional<Empleado> findBy_dni(String username);
    Optional<Empleado> findById(java.util.UUID uuid);
}
