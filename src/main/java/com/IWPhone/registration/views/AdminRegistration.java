package com.IWPhone.registration.views;

import com.IWPhone.Layouts.AppLayout;
import com.IWPhone.PanelEmpleados.services.AdminProfileService;
import com.IWPhone.PanelEmpleados.services.EmployeeProfileService;
import com.IWPhone.Services.ApplicationUserService;
import com.IWPhone.security.SecurityService;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.notification.NotificationVariant;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;

import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import jakarta.annotation.security.RolesAllowed;

@RolesAllowed({"ADMIN"})
@Route(value = "adminRegistration",layout = AppLayout.class)
@PageTitle("Panel de administracion")
public class AdminRegistration extends VerticalLayout {

    private final ApplicationUserService applicationUserService;
    private final SecurityService securityService;
    private HorizontalLayout nameSurnameLayout = new HorizontalLayout();
    private TextField name = new TextField();
    private TextField surname = new TextField();
    private TextField dni = new TextField();
    private TextField mail = new TextField();
    private PasswordField password = new PasswordField();
    private PasswordField confirmPassword = new PasswordField();
    private Button changePasswordBtn = new Button("Cambiar contraseña");
    private Button saveBtn = new Button("Guardar cambios");

    //GESTION DE PERFIL PROPIO + Gestion del resto de usuarios del sistema
    public AdminRegistration(SecurityService securityService, ApplicationUserService applicationUserService) {

        this.securityService = securityService;
        this.applicationUserService = applicationUserService;


        //Pillamos los datos del empleado
        dni.setValue(securityService.getAuthenticatedUser().getUsername().toString());
        dni.setLabel("DNI");

        surname.setPlaceholder("XXXXXXXXA");
        surname.setLabel("Apellidos");


        name.setLabel("Nombre");


        mail.setLabel("Correo electronico");

        dni.setMinWidth("400px");
        surname.setMinWidth("400px");
        name.setMinWidth("400px");
        mail.setMinWidth("400px");

        password.setLabel("Nueva Contraseña");
        password.setMinWidth("400px");
        confirmPassword.setMinWidth("400px");
        confirmPassword.setLabel("Confirmar nueva contraseña");

        //Funcionalidad del boton de guardar cambios
        saveBtn.addClickListener(e -> guardarCambios());


        nameSurnameLayout.add(name, surname);

        add(
                new H1("Creacion de administradores"),
                nameSurnameLayout,
                new HorizontalLayout(dni, mail),
                new HorizontalLayout(password, confirmPassword),
                new HorizontalLayout(saveBtn)
        );
    }

    public void guardarCambios(){
        //Comprobar que los campos no esten vacios, si lo estan mandar error con variante LUMO_ERROR
        if(name.getValue().isEmpty() || surname.getValue().isEmpty() || mail.getValue().isEmpty()){
            Notification notification = new Notification(
                    "No se pueden dejar campos vacios",
                    3000,
                    Notification.Position.TOP_CENTER);
            notification.addThemeVariants(NotificationVariant.LUMO_ERROR);
            notification.open();
        }
        else if(!checkPasswordCoincidence(password.getValue(), confirmPassword.getValue()) && !password.getValue().isEmpty()){
            Notification notification = new Notification(
                    "Las contraseñas no coinciden",
                    3000,
                    Notification.Position.TOP_CENTER);
            notification.addThemeVariants(NotificationVariant.LUMO_ERROR);
            notification.open();

        }
        else{
            //Todo correcto, al ser el admin puede escribir todo menos vacio.
            applicationUserService.createAdmin(dni.getValue(), password.getValue(), name.getValue(), surname.getValue(), mail.getValue());
            Notification notification = new Notification(
                    "Datos actualizados correctamente",
                    3000,
                    Notification.Position.TOP_CENTER);
            notification.open();
        }

    }



    public boolean checkPasswordCoincidence(String password, String confirmPassword){
        return password.equals(confirmPassword);
    }

}
