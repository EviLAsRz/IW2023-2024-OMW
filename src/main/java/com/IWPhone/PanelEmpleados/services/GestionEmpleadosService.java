package com.IWPhone.PanelEmpleados.services;

import com.IWPhone.Models.Empleado;
import com.IWPhone.Services.EmpleadoService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GestionEmpleadosService {
    private final EmployeeProfileService employeeProfileService;
    private final EmpleadoService empleadoService;
    public GestionEmpleadosService(EmployeeProfileService employeeProfileService, EmpleadoService empleadoService) {
        this.employeeProfileService = employeeProfileService;
        this.empleadoService = empleadoService;
    }

    public List<Empleado> getAllEmpleados() {
        return empleadoService.getAllEmployees();
    }



}
