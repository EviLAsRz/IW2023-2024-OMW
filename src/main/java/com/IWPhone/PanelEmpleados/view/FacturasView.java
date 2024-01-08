package com.IWPhone.PanelEmpleados.view;

import com.IWPhone.Layouts.AppLayout;
import com.IWPhone.Models.Factura;
import com.IWPhone.Models.ConsumoAuxiliar;
import com.IWPhone.Models.LlamadaAuxiliar;
import com.IWPhone.Models.Contract;
import com.IWPhone.Repositories.OpcionesRepo;
import com.IWPhone.Services.ApplicationUserService;
import com.IWPhone.PanelEmpleados.services.ValidarFacturasService;
import com.IWPhone.Services.ClientService;
import com.IWPhone.Services.EmailService;
import com.IWPhone.Services.EmpleadoService;
import com.IWPhone.registration.services.ContractService;
import com.IWPhone.security.SecurityService;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.checkbox.CheckboxGroup;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.combobox.ComboBoxVariant;
import com.vaadin.flow.component.datepicker.DatePicker;
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

import java.time.LocalDate;
import java.util.Date;
import java.util.UUID;


@RolesAllowed({"EMPLOYEE", "ADMIN"})
@PageTitle("Facturas")
@Route(value = "Facturas", layout = AppLayout.class)
public class FacturasView extends VerticalLayout {

    private final EmpleadoService empleadoService;
    private SecurityService securityService;
    private EmailService emailService;
    private ApplicationUserService applicationUserService;
    private final ClientService clientService;
    private final ContractService contractService;
    private final ValidarFacturasService validarFacturasService;
    private Grid<Factura> gridFacturas = new Grid<>();

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
    ComboBox<UUID> contratoCombo = new ComboBox<>();
    Button validarFacturaBtn = new Button("Guardar cambios");
    Button eliminarFacturaBtn = new Button("Eliminar factura");

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

        if (!empleadoService.getNombreDepartamento(securityService.getAuthenticatedUser().getUsername().toString()).equals("Finanzas")) {
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
            generalLayout.add(contratoCombo);

            //Settings layout

            eliminarFacturaBtn.addClickListener(e-> {
                if(selectedFactura != null) {
                    if(validarFacturasService.disableFactura(contratoCombo.getValue())) {
                        Notification notification = new Notification("Factura eliminada correctamente", 3000);
                        notification.addThemeVariants(NotificationVariant.LUMO_SUCCESS);
                        notification.setDuration(3000);
                        notification.open();
                        gridFacturas.setItems(validarFacturasService.getAll());
                    }
                    else {
                        Notification notification = new Notification("Error al eliminar la factura",3000);
                        notification.addThemeVariants(NotificationVariant.LUMO_ERROR);
                        notification.setDuration(3000);
                        notification.open();
                    }
                }
                else {
                    Notification notification = new Notification("No hay ninguna factura seleccionado", 3000);
                    notification.addThemeVariants(NotificationVariant.LUMO_ERROR);
                    notification.setDuration(3000);
                    notification.open();
                }
            });

            add(new H1("Visualizar/editar Facturas"),
                    gridFacturas,
                    new HorizontalLayout(eliminarFacturaBtn),
                    validarFacturaBtn
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
                //contratoCombo.setValue(selectedFactura.get_contrato());
                detallesContractuales.setValue(selectedFactura.get_detalles());
                perIva.setValue(selectedFactura.get_iva());
            }
        });
    }
}
