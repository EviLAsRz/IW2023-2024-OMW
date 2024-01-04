package com.IWPhone.Repositories;
import com.IWPhone.Models.Cliente_Consulta_Empleado;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ClienteConsultaRepo extends JpaRepository<Cliente_Consulta_Empleado, Long> {
    Cliente_Consulta_Empleado findById(UUID id);
    List<Cliente_Consulta_Empleado> findBy_cliente(UUID id);
    List<Cliente_Consulta_Empleado> findBy_clienteAndAnswered(UUID id, boolean answered);
    Cliente_Consulta_Empleado findBy_consulta(UUID id);
    List<Cliente_Consulta_Empleado> findBy_empleado(UUID id);
}
