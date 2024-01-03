package com.IWPhone.Repositories;
import com.IWPhone.Models.Cliente_Consulta_Empleado;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ClienteConsultaRepo extends JpaRepository<Cliente_Consulta_Empleado, Long> {
    Cliente_Consulta_Empleado findById(UUID id);
    Cliente_Consulta_Empleado findByClienteId(UUID id);
    Cliente_Consulta_Empleado findByConsultaId(UUID id);

}
