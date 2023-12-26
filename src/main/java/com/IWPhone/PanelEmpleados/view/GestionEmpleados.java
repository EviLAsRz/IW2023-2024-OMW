package com.IWPhone.PanelEmpleados.view;

import com.IWPhone.Layouts.AppLayout;

import com.IWPhone.Models.ApplicationUser;
import com.IWPhone.Models.Empleado;
import com.IWPhone.PanelEmpleados.services.EmployeeProfileService;
import com.IWPhone.PanelEmpleados.services.GestionEmpleadosService;
import com.IWPhone.Services.ApplicationUserService;
import com.IWPhone.Services.EmpleadoService;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.combobox.ComboBox;

import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.notification.Notification;

import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.select.Select;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Route;
import jakarta.annotation.security.RolesAllowed;

import java.util.List;
import java.util.Optional;

@RolesAllowed("ADMIN")//Solo los administradores pueden acceder a esta vista
@Route(value = "editEmployee",layout = AppLayout.class)
public class GestionEmpleados extends VerticalLayout {
    private final GestionEmpleadosService gestionEmpleadosService;
    private final EmployeeProfileService employeeProfileService;
    private final EmpleadoService empleadoService;
    private final ApplicationUserService applicationUserService;
    private ComboBox<String> comboClient = new ComboBox<>();

    //Los servicios lo recibe desde el mainview
    private HorizontalLayout nameSurnameLayout = new HorizontalLayout();
    private Select<String> departamentos = new Select<>();
    private TextField name = new TextField();
    private TextField surname = new TextField();
    private TextField dni = new TextField();
    private TextField mail = new TextField();

    private Button saveBtn = new Button("Guardar cambios");

    GestionEmpleados(GestionEmpleadosService gestionEmpleadosService, EmployeeProfileService employeeProfileService,
                     EmpleadoService empleadoService, ApplicationUserService applicationUserService) {
        //Servicios
        this.gestionEmpleadosService = gestionEmpleadosService;
        this.employeeProfileService = employeeProfileService;
        this.empleadoService = empleadoService;
        this.applicationUserService = applicationUserService;
        //Configuramos el grid
        configComboClients(comboClient);

        //Configuracion de la vista
        //La vista contendra un layout que permite modificar los datos del empleado (datos basicos)

        //Pillamos los departamentos
        departamentos.setItems(employeeProfileService.getAllDepartamentosNombre());
        departamentos.setLabel("Departamento (solo modificable por administradores)");
        //departamentos.setValue(employeeProfileService.getEmployeeDepartamento(securityService.getAuthenticatedUser().getUsername().toString()));
        //departamentos.setPlaceholder(employeeProfileService.getEmployeeDepartamento(securityService.getAuthenticatedUser().getUsername().toString()));
        departamentos.setWidth("400px");


        //Pillamos los datos del empleado
        //dni.setValue(securityService.getAuthenticatedUser().getUsername().toString());
        dni.setLabel("DNI");

        //surname.setValue(employeeProfileService.getSurname(securityService.getAuthenticatedUser().getUsername().toString()));
        surname.setLabel("Apellidos");

        //name.setValue(employeeProfileService.getName(securityService.getAuthenticatedUser().getUsername().toString()));
        name.setLabel("Nombre");

        //mail.setValue(employeeProfileService.getMail(securityService.getAuthenticatedUser().getUsername().toString()));
        mail.setLabel("Correo electronico");

        dni.setMinWidth("400px");
        surname.setMinWidth("400px");
        name.setMinWidth("400px");
        mail.setMinWidth("400px");

        nameSurnameLayout.add(name, surname);

        //Funcionalidad del boton de guardar cambios
        saveBtn.addClickListener(e -> {
            /*
            if(checkMail(mail.getValue())){
                employeeProfileService.setMail(dni.getValue(), mail.getValue());
                Notification notification = new Notification("Mail cambiado correctamente");
                notification.addThemeVariants(NotificationVariant.LUMO_SUCCESS);
                notification.setDuration(3000);
                notification.open();
            }
                         */
        });

        add(new H1("Gestión de empleados"),
                comboClient,
                nameSurnameLayout,
                new HorizontalLayout(dni, mail),
                departamentos,
                saveBtn
                );
    }

    void configComboClients(ComboBox<String> comboClients){

        //Configuramos el combo
        comboClients.setLabel("Empleados");
        comboClients.setPlaceholder("Seleccione un empleado");
        comboClients.setWidth("400px");
        comboClients.setAllowCustomValue(false);
        comboClients.setRequired(true);
        comboClients.setRequiredIndicatorVisible(true);



        //Pillamos todos los empleados
        List<Empleado> empleados = gestionEmpleadosService.getAllEmpleados();
        for (Empleado empleado : empleados) {
            comboClients.setItems(empleado.get_dni());
        }

        comboClients.addValueChangeListener(event -> {
            if (event.getValue() != null) {
                //Pillamos el empleado seleccionado
                Notification n = new Notification();
                n.setText("Empleado seleccionado: " + event.getValue());
                n.setDuration(3000);
                n.open();
                //Ponemos los datos en los textfields
                departamentos.setValue(empleadoService.getNombreDepartamento(event.getValue()));

                ApplicationUser selectedUser = getSelectedUserData(event.getValue());
                if (selectedUser != null){
                    name.setValue(selectedUser.getName());
                    surname.setValue(selectedUser.getSurname());
                    dni.setValue(selectedUser.getUsername());
                    mail.setValue(selectedUser.getEmail());
                }

            }
        });

    }

    private ApplicationUser getSelectedUserData(String dni){

        if (applicationUserService.getApplicationUser(dni).isPresent()){
            Optional<ApplicationUser> applicationUser = applicationUserService.getApplicationUser(dni);
            return applicationUser.get();
        }
        return null;
    }


}
