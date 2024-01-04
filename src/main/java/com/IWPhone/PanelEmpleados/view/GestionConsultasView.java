package com.IWPhone.PanelEmpleados.view;

import com.IWPhone.Layouts.AppLayout;
import com.IWPhone.Models.Consult;
import com.IWPhone.Services.ApplicationUserService;
import com.IWPhone.Services.ClienteConsultaService;
import com.IWPhone.Services.EmpleadoService;
import com.IWPhone.security.SecurityService;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.notification.NotificationVariant;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.router.Route;
import jakarta.annotation.security.RolesAllowed;

@Route(value = "gestionConsultas", layout = AppLayout.class)
@RolesAllowed({"EMPLOYEE","ADMIN"})
public class GestionConsultasView extends VerticalLayout {
    final SecurityService securityService;
    final ApplicationUserService applicationUserService;
    final ClienteConsultaService clienteConsultaService;
    final EmpleadoService empleadoService;

    Consult selectedConsult;
    Grid<Consult> consultGrid = new Grid<>(Consult.class, false);
    private TextArea detallesConsulta = new TextArea("Detalles de la consulta");
    private Button cierraConsulta = new Button("Cerrar consulta");
    private Button habilitaConsulta = new Button("Habilitar consulta");

    GestionConsultasView(SecurityService securityService, ApplicationUserService applicationUserService, ClienteConsultaService clienteConsultaService, EmpleadoService empleadoService){
        this.securityService = securityService;
        this.applicationUserService = applicationUserService;
        this.clienteConsultaService = clienteConsultaService;
        this.empleadoService = empleadoService;

        configElements();
        populateGrid();

        //Guardo en selectedConsult la consulta seleccionada
        consultGrid.asSingleSelect().addValueChangeListener(event -> {
            selectedConsult = event.getValue();
        });

        consultGrid.addItemClickListener(event -> {
            detallesConsulta.setValue(selectedConsult.getDetails());
        });

        //Cuando se cierre una consulta, se cerrara en el grid
        cierraConsulta.addClickListener(event -> {
            clienteConsultaService.setAnswered(selectedConsult.getId(), true);
            populateGrid();
            Notification n = new Notification("Consulta cerrada", 3000);
            n.addThemeVariants(NotificationVariant.LUMO_SUCCESS);
            n.open();
            //clienteConsultaService.sendMailToCliente(selectedConsult.getId());

        });

        //Cuando se habilite una consulta, se habilitara en el grid
        habilitaConsulta.addClickListener(event -> {
            clienteConsultaService.setAnswered(selectedConsult.getId(), false);
            populateGrid();
            Notification n = new Notification("Consulta habilitada", 3000);
            n.addThemeVariants(NotificationVariant.LUMO_SUCCESS);
            n.open();
        });


        add(
                new H1("Gestion de consultas"),
                consultGrid,
                detallesConsulta,
                new HorizontalLayout(cierraConsulta, habilitaConsulta)
        );

    }

    void configElements(){
        consultGrid.addColumn(Consult::getDetails).setHeader("Detalles");
        //Config el TextArea
        detallesConsulta.setReadOnly(true);
        detallesConsulta.setWidth("500px");
        detallesConsulta.setHeight("100px");

    }

    void populateGrid(){
        consultGrid.setItems(clienteConsultaService.getUnasweredConsults());
    }



}



















