package com.IWPhone.PanelEmpleados.view;

import com.IWPhone.Layouts.AppLayout;
import com.IWPhone.Models.Factura;
import com.IWPhone.Models.ConsumoAuxiliar;
import com.IWPhone.Models.LlamadaAuxiliar;
import com.IWPhone.Models.Contract;
import com.IWPhone.Services.ApplicationUserService;
import com.IWPhone.PanelEmpleados.services.ValidarFacturasService;
import com.IWPhone.Services.ClientService;
import com.IWPhone.Services.EmailService;
import com.IWPhone.Services.EmpleadoService;
import com.IWPhone.registration.services.ContractService;
import com.IWPhone.security.SecurityService;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.combobox.ComboBoxVariant;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.notification.NotificationVariant;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.NumberField;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import jakarta.annotation.security.RolesAllowed;

@RolesAllowed({"EMPLOYEE", "ADMIN"})
@PageTitle("Facturas")
@Route(value = "Facturas", layout = AppLayout.class)
public class FacturasView extends VerticalLayout {

    private final EmpleadoService empleadoService;
    private final SecurityService securityService;
    private final EmailService emailService;
    private final ApplicationUserService applicationUserService;
    private final ClientService clientService;
    private final ContractService contractService;
    private final ValidarFacturasService validarFacturasService;
    private final Grid<Factura> gridFacturas = new Grid<>();

    private Factura selectedFactura = null;

    //Elementos de la vista

    TextArea detallesContractuales = new TextArea();
    NumberField idContrato = new NumberField();
    NumberField perIva = new NumberField();
    TextField contratoFact = new TextField();
    TextField direccion = new TextField();
    TextField dni = new TextField();
    TextField landline = new TextField();
    NumberField mobile = new NumberField();
    NumberField totalDatos = new NumberField();
    NumberField totalLLamadas = new NumberField();
    DatePicker fechaEmitida = new DatePicker();
    ComboBox<Contract> contratoCombo = new ComboBox<>();
    Button editarFacturaBtn = new Button("Guardar cambios");

    FacturasView( EmpleadoService empleadoService, SecurityService securityService, EmailService emailService,
                  ApplicationUserService applicationUserService, ClientService clientService,
                  ValidarFacturasService validarFacturasService, ContractService contractService) {

        this.empleadoService = empleadoService;
        this.securityService = securityService;
        this.emailService = emailService;
        this.applicationUserService = applicationUserService;
        this.clientService = clientService;
        this.validarFacturasService = validarFacturasService;
        this.contractService = contractService;

        if (!empleadoService.getNombreDepartamento(securityService.getAuthenticatedUser().getUsername()).equals("Finanzas")) {
            add("No tienes permisos para acceder a esta vista, vuelve a tu panel de empleado");
        } else {

             populateTable(gridFacturas);

            contratoCombo.setItems(contractService.getAllContracts());
            contratoCombo.addThemeVariants(
                    ComboBoxVariant.LUMO_ALIGN_RIGHT,
                    ComboBoxVariant.LUMO_HELPER_ABOVE_FIELD
            );

            contratoCombo.setMinWidth("300px");
            contratoCombo.setMaxWidth("300px");
            idContrato.setMinWidth("600px");
            idContrato.setMinHeight("200px");
            detallesContractuales.setMinWidth("600px");
            detallesContractuales.setMinHeight("200px");
            fechaEmitida.setMinWidth("300px");
            fechaEmitida.setMaxWidth("300px");
             
            HorizontalLayout generalLayout = new HorizontalLayout();
            generalLayout.add(contratoCombo, fechaEmitida);

            FormLayout genLayout = new FormLayout();
            genLayout.setResponsiveSteps(
                    new FormLayout.ResponsiveStep("1000px", 2)
            );

            genLayout.addFormItem(contratoCombo, "DNI Cliente");
            genLayout.addFormItem(landline, "Numero de teléfono fijo");
            genLayout.addFormItem(mobile, "Numero de teléfono móvil");
            genLayout.addFormItem(fechaEmitida, "Fecha de emisión");
            genLayout.addFormItem(detallesContractuales, "Detalles contractuales");
            //Settings layout

            add(new H1("Visualizar/editar Facturas"),
                    gridFacturas,
                    editarFacturaBtn
            );
        }
    }

    void populateTable(Grid<Factura> grid) {
        grid.addColumn(factura -> factura.getContract().getClient()).setHeader("DNI del Cliente");
        grid.addColumn(Factura::get_fecha).setHeader("Fecha factura");
        grid.addColumn(Factura::get_detalles).setHeader("Detalles");
        grid.addColumn(Factura::get_iva).setHeader("IVA");
        grid.setItems(validarFacturasService.getAll());

        grid.addSelectionListener(event -> {
            if (event.getFirstSelectedItem().isPresent()) {
                selectedFactura = event.getFirstSelectedItem().get();

                //falta get contrato y get fecha por definir
                contratoCombo.setValue(selectedFactura.getContract());
                detallesContractuales.setValue(selectedFactura.get_detalles());
                perIva.setValue(selectedFactura.get_iva());
                fechaEmitida.setValue(selectedFactura.get_fecha());
            }
        });
    }
}