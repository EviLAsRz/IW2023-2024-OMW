package com.IWPhone.PanelEmpleados.view;

import com.IWPhone.Layouts.AppLayout;
import com.IWPhone.Models.Contract;
import com.IWPhone.PanelEmpleados.services.ValidarContratoService;
import com.IWPhone.Services.EmpleadoService;
import com.IWPhone.security.SecurityService;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;

import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.router.Route;
import jakarta.annotation.security.RolesAllowed;
import com.vaadin.flow.component.textfield.TextField;

@RolesAllowed({"EMPLOYEE", "ADMIN"})
@Route(value = "contratos", layout = AppLayout.class)
public class ContratosView extends VerticalLayout {

    //TODO: SOLO PUEDEN HACER ESTO LOS EMPLEADOS DE ATENCION AL CLIENTE
    private final ValidarContratoService validarContratoService;
    private final EmpleadoService empleadoService;
    private final SecurityService securityService;
    private Grid<Contract> gridContratos = new Grid<>();

    private Contract selectedContract = null;

    //Elementos relacionados a la vista
    TextField dniCliente = new TextField("DNI Cliente");
    DatePicker fechaInicio = new DatePicker("Fecha de inicio");
    TextArea detallesContractuales = new TextArea("Detalles contractuales");



    ContratosView(ValidarContratoService validarContratoService, EmpleadoService empleadoService, SecurityService securityService){

        //Servicios
        this.validarContratoService = validarContratoService;
        this.empleadoService = empleadoService;
        this.securityService = securityService;

        if(!empleadoService.getNombreDepartamento(securityService.getAuthenticatedUser().getUsername().toString()).equals("Atencion Al Cliente")){
            add("No tienes permisos para acceder a esta vista, vuelve a tu panel de empleado");
        }else{
            //Desarrollo de la vista ppal de validar contratos

            //1) Pillamos todos los datos de los contratos que estan pendientes de validar (no tienen fecha de inicio)
            populateTable(gridContratos);
            //2) Mostramos los datos de los contratos en una tabla

            //Estilamso la anchura de los componentes del formulario
            dniCliente.setMinWidth("300px");
            dniCliente.setMaxWidth("300px");
            fechaInicio.setMinWidth("300px");
            fechaInicio.setMaxWidth("300px");
            detallesContractuales.setMinWidth("600px");
            detallesContractuales.setMinHeight("200px");

            HorizontalLayout generalLayout = new HorizontalLayout();
            generalLayout.add(dniCliente, fechaInicio);

            //3)Seleccionamos el contrato y cargamos la creacion de contrato y establecemos el cliente y la fecha de inicio
            add(new H1("Visualizar/Editar Contratos"),gridContratos, generalLayout,detallesContractuales);
        }


    }

    void populateTable(Grid<Contract> grid){
        Notification notification = new Notification("Hay " + validarContratoService.getContratosPendientesValidar().size()
                + " contratos pendientes de validar", 3000);
        notification.open();

        //Ajustamos las columnas de la tabla
        grid.addColumn(Contract::getClient).setHeader("DNI Cliente");
        grid.addColumn(Contract::getStartDate).setHeader("Comienzo contrato");
        grid.addColumn(Contract::getEndDate).setHeader("Fin Contrato");
        grid.setItems(validarContratoService.getAll());//Carga todos los contratos para editarlos todos

        //Añadimos el evento de seleccionar un contrato
        grid.addSelectionListener(event -> {
            if(event.getFirstSelectedItem().isPresent()) {
                selectedContract = event.getFirstSelectedItem().get();
                //Cargamos los datos del contrato en el formulario
                dniCliente.setValue(selectedContract.getClient());
                detallesContractuales.setValue(selectedContract.getDetails());
                fechaInicio.setValue(selectedContract.getStartDate());
            }
        });

    }



}














