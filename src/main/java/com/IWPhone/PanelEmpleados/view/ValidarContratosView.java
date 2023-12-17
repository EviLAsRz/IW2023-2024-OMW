package com.IWPhone.PanelEmpleados.view;

import com.IWPhone.Layouts.EmployeeLayout;
import com.IWPhone.PanelEmpleados.services.ValidarContratoService;
import com.IWPhone.Services.EmpleadoService;
import com.IWPhone.security.SecurityService;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import jakarta.annotation.security.RolesAllowed;

@RolesAllowed({"EMPLOYEE", "ADMIN"})
@Route(value = "validarContratos", layout = EmployeeLayout.class)
public class ValidarContratosView extends VerticalLayout {

    //TODO: SOLO PUEDEN HACER ESTO LOS EMPLEADOS DE ATENCION AL CLIENTE
    private final ValidarContratoService validarContratoService;
    private final EmpleadoService empleadoService;
    private final SecurityService securityService;

    ValidarContratosView(ValidarContratoService validarContratoService, EmpleadoService empleadoService, SecurityService securityService){

        //Servicios
        this.validarContratoService = validarContratoService;
        this.empleadoService = empleadoService;
        this.securityService = securityService;

        if(!empleadoService.getNombreDepartamento(securityService.getAuthenticatedUser().getUsername().toString()).equals("Atencion Al Cliente")){
            add("No tienes permisos para acceder a esta vista, vuelve a tu panel de empleado");
        }else{
            //Desarrollo de la vista ppal de validar contratos
            add("Validar Contratos");
            //1) Pillamos todos los datos de los contratos que estan pendientes de validar (no tienen fecha de inicio)
            //2) Mostramos los datos de los contratos en una tabla
            //3)Seleccionamos el contrato y cargamos la creacion de contrato y establecemos el cliente y la fecha de inicio
        }


    }
}
