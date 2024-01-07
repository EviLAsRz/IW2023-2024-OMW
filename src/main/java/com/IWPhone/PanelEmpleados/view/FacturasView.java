package com.IWPhone.PanelEmpleados.view;

import com.IWPhone.Layouts.AppLayout;
import com.IWPhone.Models.Factura;
import com.IWPhone.Repositories.OpcionesRepo;
import com.IWPhone.Services.ApplicationUserService;
import com.IWPhone.Services.ClientService;
import com.IWPhone.Services.EmailService;
import com.IWPhone.Services.EmpleadoService;
import com.IWPhone.security.SecurityService;
import com.vaadin.flow.component.checkbox.CheckboxGroup;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.NumberField;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import jakarta.annotation.security.RolesAllowed;

import java.awt.*;

@RolesAllowed({"EMPLOYEE", "ADMIN"})
@PageTitle("Facturas")
@Route(value = "Facturas", layout = AppLayout.class)
public class FacturasView extends VerticalLayout {

    private final EmpleadoService empleadoService;
    private SecurityService securityService;
    private EmailService emailService;
    private ApplicationUserService applicationUserService;
    private final ClientService clientService;

    private Grid<Factura> gridFacturas = new Grid<>();

    private Factura selectedFactura = null;

    //Elementos de la vista

    TextArea detallesContractuales = new TextArea();
    NumberField perIva = new NumberField();

    ComboBox<String> dniClienteCombo = new ComboBox<>();

    Button validarFactura = new Button("Guardar cambios");
    Button eliminarFactura = new Button("Eliminar factura");

    FacturasView( EmpleadoService empleadoService, SecurityService securityService, EmailService emailService,
                  ApplicationUserService applicationUserService, ClientService clientService) {

        this.empleadoService = empleadoService;
        this.securityService = securityService;
        this.emailService = emailService;
        this.applicationUserService = applicationUserService;
        this.clientService = clientService;
    }
}
