package com.IWPhone.PanelEmpleados.view;

import com.IWPhone.Layouts.AppLayout;
import com.IWPhone.Models.Contract;
import com.IWPhone.PanelEmpleados.services.ValidarContratoService;
import com.IWPhone.Services.ApplicationUserService;
import com.IWPhone.Services.EmpleadoService;
import com.IWPhone.security.SecurityService;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.checkbox.CheckboxGroup;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.combobox.ComboBoxVariant;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.notification.NotificationVariant;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;

import com.vaadin.flow.component.textfield.NumberField;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.router.Route;
import jakarta.annotation.security.RolesAllowed;
import com.vaadin.flow.component.textfield.TextField;

@RolesAllowed({"EMPLOYEE", "ADMIN"})
@Route(value = "contratos", layout = AppLayout.class)
public class ContratosView extends VerticalLayout {

    private final ValidarContratoService validarContratoService;
    private final EmpleadoService empleadoService;
    private final SecurityService securityService;

    private final ApplicationUserService applicationUserService;

    private Grid<Contract> gridContratos = new Grid<>();

    private Contract selectedContract = null;

    //Elementos relacionados a la vista
    DatePicker fechaInicio = new DatePicker();
    TextArea detallesContractuales = new TextArea();

    NumberField precioGb = new NumberField();
    NumberField precioLlamada = new NumberField();
    NumberField precioSms = new NumberField();

    ComboBox<String> dniClienteCombo = new ComboBox<>();
    CheckboxGroup<String> opcionesBasicas = new CheckboxGroup<>();
    NumberField descuentoGB = new NumberField();
    NumberField descuentoLlamadas = new NumberField();
    NumberField descuentoSMS = new NumberField();
    TextField direccion = new TextField();
    Button validarContratoBtn = new Button("Guardar Cambios");
    boolean bRoaming = false;
    boolean bBloquearNumerosEspeciales = false;
    ContratosView(ValidarContratoService validarContratoService, EmpleadoService empleadoService, SecurityService securityService, ApplicationUserService applicationUserService){

        //Servicios
        this.validarContratoService = validarContratoService;
        this.empleadoService = empleadoService;
        this.securityService = securityService;
        this.applicationUserService = applicationUserService;

        if(!empleadoService.getNombreDepartamento(securityService.getAuthenticatedUser().getUsername().toString()).equals("Atencion Al Cliente")){
            add("No tienes permisos para acceder a esta vista, vuelve a tu panel de empleado");
        }else{
            //Desarrollo de la vista ppal de validar contratos

            //1) Pillamos todos los datos de los contratos que estan pendientes de validar (no tienen fecha de inicio)
            populateTable(gridContratos);
            //2) Mostramos los datos de los contratos en una tabla

            //Estilamos la anchura de los componentes del formulario


            dniClienteCombo.addThemeVariants(
                    ComboBoxVariant.LUMO_ALIGN_RIGHT,
                    ComboBoxVariant.LUMO_HELPER_ABOVE_FIELD
            );
            dniClienteCombo.setItems(applicationUserService.getAllUsernames());

            dniClienteCombo.setMinWidth("300px");
            dniClienteCombo.setMaxWidth("300px");
            fechaInicio.setMinWidth("300px");
            fechaInicio.setMaxWidth("300px");
            detallesContractuales.setMinWidth("600px");
            detallesContractuales.setMinHeight("200px");

            HorizontalLayout generalLayout = new HorizontalLayout();
            generalLayout.add(dniClienteCombo, fechaInicio);

            //Pricing layout

            precioGb.setSuffixComponent(new Span("EUR"));
            precioGb.setMin(0);


            precioLlamada.setSuffixComponent(new Span("EUR"));
            precioLlamada.setMin(0);

            precioSms.setSuffixComponent(new Span("EUR"));
            precioSms.setMin(0);
            FormLayout genLayout = new FormLayout();
            genLayout.setResponsiveSteps(
                    new FormLayout.ResponsiveStep("1000px", 2)

            );

            genLayout.addFormItem(dniClienteCombo, "DNI Cliente");
            genLayout.addFormItem(fechaInicio, "Fecha de inicio");
            genLayout.addFormItem(detallesContractuales, "Detalles contractuales");


            FormLayout pricingLayout = new FormLayout();
            pricingLayout.setResponsiveSteps(
                    new FormLayout.ResponsiveStep("600px", 3)

            );
            // Use addFormItem instead of add, to wrap fields into form items,
            // which displays labels on the side by default
            pricingLayout.addFormItem(precioGb, "GB");
            pricingLayout.addFormItem(precioLlamada, "Llamadas");
            pricingLayout.addFormItem(precioSms, "SMS");

            //3)Seleccionamos el contrato y cargamos la creacion de contrato y establecemos el cliente y la fecha de inicio

            //4) Mostramos notificacion con los datos del cliente asignado (su telefono, su tarifa, etc)
            //TODO: Mandar correo al cliente con los datos de su contrato.
            FormLayout contractOptions = new FormLayout();
            contractOptions.setResponsiveSteps(
                    new FormLayout.ResponsiveStep("600px", 3)

            );


            opcionesBasicas.setLabel("Habilitar/Deshabilitar opciones basicas");
            opcionesBasicas.setItems("Bloquear Numeros Especiales", "Roaming");
            contractOptions.addFormItem(opcionesBasicas, "Opciones Basicas");

            descuentoGB.setSuffixComponent(new Span("%"));
            descuentoGB.setMin(0);
            descuentoGB.setMax(100);
            descuentoLlamadas.setSuffixComponent(new Span("%"));
            descuentoLlamadas.setMin(0);
            descuentoLlamadas.setMax(100);
            descuentoSMS.setSuffixComponent(new Span("%"));
            descuentoSMS.setMin(0);
            descuentoSMS.setMax(100);
            descuentoGB.setMinWidth("300px");
            descuentoLlamadas.setMinWidth("300px");
            descuentoSMS.setMinWidth("300px");
            direccion.setMinWidth("450px");


            contractOptions.addFormItem(descuentoGB, "Descuento GB");
            contractOptions.addFormItem(descuentoLlamadas, "Descuento Llamadas");
            contractOptions.addFormItem(descuentoSMS, "Descuento SMS");
            contractOptions.addFormItem(direccion, "Direccion");
            opcionesBasicas.addValueChangeListener(event -> {
                if(event.getValue().contains("Bloquear Numeros Especiales")){
                    bBloquearNumerosEspeciales = true;
                }
                if(event.getValue().contains("Roaming")){
                    bRoaming = true;
                }
            });

            validarContratoBtn.addClickListener(e -> {
                validateContract();
            });

            add(new H1("Visualizar/Editar Contratos"),
                    gridContratos,
                    genLayout,
                    pricingLayout,
                    new H2("Opciones del contrato"),
                    contractOptions,
                    validarContratoBtn
            );
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

                dniClienteCombo.setValue(selectedContract.getClient());
                detallesContractuales.setValue(selectedContract.getDetails());
                fechaInicio.setValue(selectedContract.getStartDate());
                precioGb.setValue(selectedContract.getPriceGigas());
                precioLlamada.setValue(selectedContract.getPriceCall());
                precioSms.setValue(selectedContract.getPriceSMS());

            }
        });

    }

    void validateContract(){
        //Comprobamos que los campos esten rellenos y en caso de serlos mostramos notificacion con LUMO.ERROR
        if(dniClienteCombo.getValue() == null){
            Notification notification = new Notification("El campo DNI Cliente no puede estar vacio", 3000);
            notification.addThemeVariants(NotificationVariant.LUMO_ERROR);
            notification.setDuration(3000);
            notification.open();
        }
        else if (fechaInicio.getValue() == null){
            Notification notification = new Notification("El campo Fecha de inicio no puede estar vacio", 3000);
            notification.addThemeVariants(NotificationVariant.LUMO_ERROR);
            notification.setDuration(3000);
            notification.open();
        }
        else if (detallesContractuales.getValue() == null){
            Notification notification = new Notification("El campo Detalles contractuales no puede estar vacio", 3000);
            notification.addThemeVariants(NotificationVariant.LUMO_ERROR);
            notification.setDuration(3000);
            notification.open();
        }
        else if (precioGb.getValue() == null){
            Notification notification = new Notification("El campo Precio GB no puede estar vacio", 3000);
            notification.addThemeVariants(NotificationVariant.LUMO_ERROR);
            notification.setDuration(3000);
            notification.open();
        }
        else if (precioLlamada.getValue() == null){
            Notification notification = new Notification("El campo Precio Llamada no puede estar vacio", 3000);
            notification.addThemeVariants(NotificationVariant.LUMO_ERROR);
            notification.setDuration(3000);
            notification.open();
        }
        else if (precioSms.getValue() == null){
            Notification notification = new Notification("El campo Precio SMS no puede estar vacio", 3000);
            notification.addThemeVariants(NotificationVariant.LUMO_ERROR);
            notification.setDuration(3000);
            notification.open();
        }
        else if (descuentoGB.getValue() == null){
            Notification notification = new Notification("El campo Descuento GB no puede estar vacio", 3000);
            notification.addThemeVariants(NotificationVariant.LUMO_ERROR);
            notification.setDuration(3000);
            notification.open();
        }
        else if (descuentoLlamadas.getValue() == null){
            Notification notification = new Notification("El campo Descuento Llamadas no puede estar vacio", 3000);
            notification.addThemeVariants(NotificationVariant.LUMO_ERROR);
            notification.setDuration(3000);
            notification.open();
        }
        else if (descuentoSMS.getValue() == null){
            Notification notification = new Notification("El campo Descuento SMS no puede estar vacio", 3000);
            notification.addThemeVariants(NotificationVariant.LUMO_ERROR);
            notification.setDuration(3000);
            notification.open();
        }
        else{ //TODO CORRECTO por lo que procedemos a validar el contrato
            if(validarContratoService.validateContract(dniClienteCombo.getValue(), securityService.getAuthenticatedUser().getUsername().toString(), fechaInicio.getValue(), direccion.getValue(),
                    precioGb.getValue(), precioLlamada.getValue(), precioSms.getValue(), descuentoGB.getValue(), descuentoLlamadas.getValue(), descuentoSMS.getValue(), bBloquearNumerosEspeciales, bRoaming)){
                Notification notification = new Notification("Contrato validado correctamente", 3000);
                notification.addThemeVariants(NotificationVariant.LUMO_SUCCESS);
                notification.setDuration(3000);
                notification.open();
            }
            else{
                Notification notification = new Notification("Error al validar el contrato", 3000);
                notification.addThemeVariants(NotificationVariant.LUMO_ERROR);
                notification.setDuration(3000);
                notification.open();
            }
        }
    }

    //TODO: Si el contrato tiene opciones previas pillarlas de la base de datos
    //TODO: Guardar y crear las opciones del contrato

}














