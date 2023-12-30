package com.IWPhone.PanelEmpleados.view;

import com.IWPhone.Layouts.AppLayout;
import com.IWPhone.Models.Contract;
import com.IWPhone.PanelEmpleados.services.ValidarContratoService;
import com.IWPhone.Repositories.OpcionesRepo;
import com.IWPhone.Services.ApplicationUserService;
import com.IWPhone.Services.ClientService;
import com.IWPhone.Services.EmailService;
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
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import jakarta.annotation.security.RolesAllowed;
import com.vaadin.flow.component.textfield.TextField;

@RolesAllowed({"EMPLOYEE", "ADMIN"})
@PageTitle("Contratos")
@Route(value = "contratos", layout = AppLayout.class)
public class ContratosView extends VerticalLayout {

    private final ValidarContratoService validarContratoService;
    private final EmpleadoService empleadoService;
    private final SecurityService securityService;
    private final EmailService emailService;
    private final ApplicationUserService applicationUserService;

    private final ClientService clientService;

    private final OpcionesRepo opcionesRepo;


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
    Button eliminarContratoBtn = new Button("Dar de baja el contrato");
    Button habilitarContratoBtn = new Button("Habilitar el contrato");
    boolean bRoaming = false;
    boolean bBloquearNumerosEspeciales = false;
    ContratosView(ValidarContratoService validarContratoService, EmpleadoService empleadoService, SecurityService securityService,
                  ApplicationUserService applicationUserService, ClientService clientService, OpcionesRepo opcionesRepo, EmailService emailService){

        //Servicios
        this.emailService = emailService;
        this.validarContratoService = validarContratoService;
        this.empleadoService = empleadoService;
        this.securityService = securityService;
        this.applicationUserService = applicationUserService;
        this.clientService = clientService;
        this.opcionesRepo = opcionesRepo;

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
                bBloquearNumerosEspeciales = event.getValue().contains("Bloquear Numeros Especiales");

                bRoaming = event.getValue().contains("Roaming");
            });

            validarContratoBtn.addClickListener(e -> {
                validateContract();
            });

            eliminarContratoBtn.addClickListener(e -> {
                if(selectedContract != null){
                    if(validarContratoService.disableContract(dniClienteCombo.getValue())){
                        Notification notification = new Notification("Contrato eliminado correctamente, su usuario se ha deshabilitado en consecuencia", 3000);
                        notification.addThemeVariants(NotificationVariant.LUMO_SUCCESS);
                        notification.setDuration(3000);
                        notification.open();
                        gridContratos.setItems(validarContratoService.getAll());//Actualizamos la tabla
                    }
                    else{
                        Notification notification = new Notification("Error al eliminar el contrato", 3000);
                        notification.addThemeVariants(NotificationVariant.LUMO_ERROR);
                        notification.setDuration(3000);
                        notification.open();
                    }
                }
                else{
                    Notification notification = new Notification("No hay ningun contrato seleccionado", 3000);
                    notification.addThemeVariants(NotificationVariant.LUMO_ERROR);
                    notification.setDuration(3000);
                    notification.open();
                }
            });

            habilitarContratoBtn.addClickListener(e -> {
                if(selectedContract != null){
                    if(validarContratoService.disableContract(dniClienteCombo.getValue())){
                        Notification notification = new Notification("Contrato Habilitado correctamente, su usuario se ha habilitado en consecuencia", 3000);
                        notification.addThemeVariants(NotificationVariant.LUMO_SUCCESS);
                        notification.setDuration(3000);
                        notification.open();
                        validarContratoService.enableContract(dniClienteCombo.getValue());
                        gridContratos.setItems(validarContratoService.getAll());//Actualizamos la tabla
                    }
                    else{
                        Notification notification = new Notification("Error al habilitar el contrato", 3000);
                        notification.addThemeVariants(NotificationVariant.LUMO_ERROR);
                        notification.setDuration(3000);
                        notification.open();
                    }
                }
                else{
                    Notification notification = new Notification("No hay ningun contrato seleccionado", 3000);
                    notification.addThemeVariants(NotificationVariant.LUMO_ERROR);
                    notification.setDuration(3000);
                    notification.open();
                }
            });

            add(new H1("Visualizar/Editar Contratos"),
                    gridContratos,
                    new HorizontalLayout(eliminarContratoBtn, habilitarContratoBtn),
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
                //Cargamos los valores del cliente y el contrato en caso de existir
                if(opcionesRepo.findBy_contrato(selectedContract.getId()) != null){
                    descuentoGB.setValue(opcionesRepo.findBy_contrato(selectedContract.getId()).get_descuentoGB());
                    descuentoLlamadas.setValue(opcionesRepo.findBy_contrato(selectedContract.getId()).get_descuentoLlamada());
                    descuentoSMS.setValue(opcionesRepo.findBy_contrato(selectedContract.getId()).get_descuentoSMS());
                    direccion.setValue(clientService.getAddressByDNI(selectedContract.getClient()));
                    //Seleccionamos los checkbox en caso de que esten activados
                    if(opcionesRepo.findBy_contrato(selectedContract.getId()).get_roaming()){
                        opcionesBasicas.select("Roaming");
                    }
                    if(opcionesRepo.findBy_contrato(selectedContract.getId()).get_numeroEspeciales()){
                        opcionesBasicas.select("Bloquear Numeros Especiales");
                    }
                }
                else{
                    descuentoGB.setValue(0.0);
                    descuentoLlamadas.setValue(0.0);
                    descuentoSMS.setValue(0.0);
                    direccion.setValue("");
                }
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
        else{
            if(validarContratoService.validateContract(dniClienteCombo.getValue(), securityService.getAuthenticatedUser().getUsername().toString(),detallesContractuales.getValue(), fechaInicio.getValue(), direccion.getValue(),
                    precioGb.getValue(), precioLlamada.getValue(), precioSms.getValue(), descuentoGB.getValue(), descuentoLlamadas.getValue(), descuentoSMS.getValue(), bBloquearNumerosEspeciales, bRoaming)){
                Notification notification = new Notification("Contrato validado correctamente", 3000);
                notification.addThemeVariants(NotificationVariant.LUMO_SUCCESS);
                notification.setDuration(3000);
                notification.open();
                //Enviamos un correo al cliente con los datos de su contrato
                //Pillamos el mail del cliente
                String sClientMail = applicationUserService.getMail(dniClienteCombo.getValue());
                emailService.sendCustomEmail(sClientMail, "Contrato validado correctamente",
                        "Su contrato ha sido validado correctamente, puede acceder a su panel de cliente para ver los detalles del mismo, bienvenido a IWPhone");
                if(!applicationUserService.getApplicationUser(dniClienteCombo.getValue()).get().isEnabled()){
                   //Si el usuario no esta habilitado lo habilitamos
                    applicationUserService.enableUser(dniClienteCombo.getValue());
                }
                gridContratos.setItems(validarContratoService.getAll());//Actualizamos la tabla

            }
            else{
                Notification notification = new Notification("Error al validar el contrato", 3000);
                notification.addThemeVariants(NotificationVariant.LUMO_ERROR);
                notification.setDuration(3000);
                notification.open();
            }
        }
    }




}














