package com.IWPhone.Services;

import com.IWPhone.Models.Empleado;
import com.IWPhone.Repositories.EmployeeRepo;
import org.springframework.stereotype.Service;

import java.util.UUID;
import java.util.Optional;
@Service
public class EmpleadoService {

    private final EmployeeRepo empleadoRepo;

    public EmpleadoService(EmployeeRepo empleadoRepo) {
        this.empleadoRepo = empleadoRepo;
    }

    public void addEmpleado(Empleado empleado){
        empleadoRepo.save(empleado);
    }

    public Optional<Empleado> getEmpleado(String username){
        return empleadoRepo.findBy_dni(username);
    }

    public void createEmpleado(String dniUsuario, UUID tDepartamento){
        Empleado empleado = new Empleado();
        empleado.set_dni(dniUsuario);
        empleado.set_tDepartamento(tDepartamento);
        addEmpleado(empleado);
    }

    public void updateEmpleado(String dniUsuario, UUID tDepartamento){
        Empleado empleado = getEmpleado(dniUsuario).get();
        if(empleado.get_tDepartamento() != null) {
            empleado.set_tDepartamento(tDepartamento);
            empleadoRepo.save(empleado);
        }
    }


}
