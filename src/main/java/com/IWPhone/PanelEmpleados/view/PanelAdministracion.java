package com.IWPhone.PanelEmpleados.view;

import com.IWPhone.Layouts.AppLayout;
import com.IWPhone.PanelEmpleados.services.AdminProfileService;
import com.IWPhone.PanelEmpleados.services.EmployeeProfileService;
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
@Route(layout = AppLayout.class)
@PageTitle("Panel de administracion")
public class PanelAdministracion extends VerticalLayout {
    private final EmployeeProfileService employeeProfileService;
    private final AdminProfileService adminProfileService;
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
    public PanelAdministracion(SecurityService securityService, EmployeeProfileService employeeProfileService, AdminProfileService adminProfileService) {
        this.employeeProfileService = employeeProfileService;
        this.securityService = securityService;
        this.adminProfileService = adminProfileService;


        //Pillamos los datos del empleado
        dni.setValue(securityService.getAuthenticatedUser().getUsername().toString());
        dni.setLabel("DNI (no modificable)");

        surname.setValue(employeeProfileService.getSurname(securityService.getAuthenticatedUser().getUsername().toString()));
        surname.setLabel("Apellidos");

        name.setValue(employeeProfileService.getName(securityService.getAuthenticatedUser().getUsername().toString()));
        name.setLabel("Nombre");

        mail.setValue(employeeProfileService.getMail(securityService.getAuthenticatedUser().getUsername().toString()));
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
        changePasswordBtn.addClickListener(e -> cambiarPassword());

        nameSurnameLayout.add(name, surname);

        add(
                new H1("Mi perfil"),
                nameSurnameLayout,
                new HorizontalLayout(dni, mail),
                new HorizontalLayout(password, confirmPassword),
                new HorizontalLayout(changePasswordBtn, saveBtn)
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
        else{
            //Todo correcto, al ser el admin puede escribir todo menos vacio.
            adminProfileService.updateAdminData(dni.getValue(), dni.getValue(), name.getValue(), surname.getValue(), mail.getValue());
            Notification notification = new Notification(
                    "Datos actualizados correctamente",
                    3000,
                    Notification.Position.TOP_CENTER);
        }

    }

    public void cambiarPassword(){
        //Comprobar que los campos no esten vacios, si lo estan mandar error con variante LUMO_ERROR
        if(password.getValue().isEmpty() || confirmPassword.getValue().isEmpty()){
            Notification notification = new Notification(
                    "No se pueden dejar campos vacios",
                    3000,
                    Notification.Position.TOP_CENTER);
            notification.addThemeVariants(NotificationVariant.LUMO_ERROR);
            notification.open();
        }
        else{
            //Todo correcto, al ser el admin puede escribir todo menos vacio.
            if(checkPasswordCoincidence(password.getValue(), confirmPassword.getValue())){
                adminProfileService.updateAdminPassword(dni.getValue(), password.getValue());
                Notification notification = new Notification(
                        "Contraseña cambiada correctamente",
                        3000,
                        Notification.Position.TOP_CENTER);
            }
            else{
                Notification notification = new Notification(
                        "Las contraseñas no coinciden",
                        3000,
                        Notification.Position.TOP_CENTER);
                notification.addThemeVariants(NotificationVariant.LUMO_ERROR);
                notification.open();
            }
        }
    }

    public boolean checkPasswordCoincidence(String password, String confirmPassword){
        return password.equals(confirmPassword);
    }

    //TODO: VISTA PARA ELIMINAR LOS USUARIOS DEL SISTEMA

}
