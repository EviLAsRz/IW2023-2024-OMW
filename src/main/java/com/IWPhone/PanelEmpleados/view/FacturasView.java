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
    NumberField idFactura = new NumberField();
    NumberField perIva = new NumberField();
    TextField contratoFact = new TextField();
    TextField direccion = new TextField();
    TextField dni = new TextField();
    TextField landline = new TextField();
    NumberField mobile = new NumberField();
    NumberField totalDatos = new NumberField();
    NumberField totalLLamadas = new NumberField();
    LocalDate fechaEmitida;
    ComboBox<String> dniClienteCombo = new ComboBox<>();

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

            dniClienteCombo.setItems(applicationUserService.getAllUsernames());
            dniClienteCombo.addThemeVariants(
                    ComboBoxVariant.LUMO_ALIGN_RIGHT,
                    ComboBoxVariant.LUMO_HELPER_ABOVE_FIELD
            );

            dniClienteCombo.setMinWidth("300px");
            dniClienteCombo.setMaxWidth("300px");
            detallesContractuales.setMinWidth("600px");
            detallesContractuales.setMinHeight("200px");

            HorizontalLayout generalLayout = new HorizontalLayout();
            generalLayout.add(dniClienteCombo);

            //Settings layout

            validarFacturaBtn.addClickListener(e -> {
                validateFactura();
            });

            eliminarFacturaBtn.addClickListener(e-> {
                if(selectedFactura != null) {
                    if(validarFacturasService.disableFactura(dniClienteCombo.getValue())) {
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
        grid.addColumn(Factura::).setHeader("DNI Cliente");
        grid.addColumn(Factura::get_fecha).setHeader("Fecha factura");
        grid.addColumn(Factura::get_contrato).setHeader("Contrato asociado");
        grid.setItems(validarFacturasService.getAll());

        grid.addSelectionListener(event -> {
            if (event.getFirstSelectedItem().isPresent()) {
                selectedFactura = event.getFirstSelectedItem().get();

                //falta get contrato y get fecha por definir
                dniClienteCombo.setValue(selectedFactura.getClient());
                detallesContractuales.setValue(selectedFactura.get_detalles());
                perIva.setValue(selectedFactura.get_iva());

            }
        })
    }
}
