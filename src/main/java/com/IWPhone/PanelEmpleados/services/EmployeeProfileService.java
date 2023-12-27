package com.IWPhone.PanelEmpleados.services;

import com.IWPhone.Services.ApplicationUserService;
import com.IWPhone.Services.DepartamentoService;
import com.IWPhone.Services.EmpleadoService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class EmployeeProfileService {
    private final EmpleadoService empleadoService;
    private final ApplicationUserService applicationUserService;
    private final DepartamentoService departamentoService;

    public EmployeeProfileService(EmpleadoService empleadoService, ApplicationUserService applicationUserService, DepartamentoService departamentoService) {
        this.empleadoService = empleadoService;
        this.departamentoService = departamentoService;
        this.applicationUserService = applicationUserService;
    }

    public List<String> getAllDepartamentosNombre() {
        return departamentoService.getNombresDepartamentos();
    }

    public void setDepartamento(String username, String newDepartamento) {
        empleadoService.updateEmpleado(username, departamentoService.getUUIDByNombre(newDepartamento).get());
    }

    public void setDNI(String username, String newDNI) {
        applicationUserService.setUsername(username, newDNI);

    }

    public void setMail(String username, String newMail) {
        applicationUserService.setMail(username, newMail);
    }

    public void setName(String username, String newName) {
        applicationUserService.setName(username, newName);
    }

    public void setSurname(String username, String newSurname) {
        applicationUserService.setSurname(username, newSurname);
    }

    public String getSurname(String username) {
        return applicationUserService.getSurname(username);
    }

    public String getName(String username) {
        return applicationUserService.getName(username);
    }

    public String getMail(String username) {
        return applicationUserService.getMail(username);
    }

    public String getEmployeeDepartamento(String username) {

        //Pillamos el UUID DEL DEPARTAMENTO vinculado al empleado
        UUID departamento = empleadoService.getEmpleado(username).get().get_tDepartamento();
        //Pillamos el nombre del departamento
        String nombreDepartamento = departamentoService.getDepartamentoByUUID(departamento).get().getNombre();

        return nombreDepartamento;

    }

    public boolean checkMailExistence(String mail) {
        return applicationUserService.checkMailExistence(mail);
    }

}
