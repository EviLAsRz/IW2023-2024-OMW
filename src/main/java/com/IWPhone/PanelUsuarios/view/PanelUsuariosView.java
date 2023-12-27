package com.IWPhone.PanelUsuarios.view;

import com.IWPhone.Layouts.UserLayout;
import com.IWPhone.Models.ApplicationUser;
import com.IWPhone.Models.Client;
import com.IWPhone.PanelUsuarios.services.UserProfileService;
import com.IWPhone.Services.ApplicationUserService;
import com.IWPhone.Services.ClientService;
import com.IWPhone.registration.services.RegistrationService;
import com.IWPhone.security.SecurityService;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.notification.NotificationVariant;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Route;
import jakarta.annotation.security.RolesAllowed;

@Route(layout = UserLayout.class)
@RolesAllowed({"USER", "ADMIN"})
public class PanelUsuariosView extends VerticalLayout{
    final SecurityService securityService;
    final UserProfileService userProfileService;
    final ApplicationUserService applicationUserService;
    final ClientService clientService;
    TextField nombre = new TextField("Nombre");
    TextField apellidos = new TextField("Apellidos");
    TextField email = new TextField("Email");

    TextField telefonoMovil = new TextField("Telefono Movil");
    TextField telefonoFijo = new TextField("Telefono Fijo");

    TextField direccion = new TextField("Direccion");

    PasswordField password = new PasswordField("Contraseña");
    PasswordField password2 = new PasswordField("Repetir Contraseña");

    Button saveChangesbtn = new Button("Guardar Cambios");
    Button changePasswordbtn = new Button("Cambiar Contraseña");

    public PanelUsuariosView(SecurityService securityService, UserProfileService userProfileService, ApplicationUserService applicationUserService,
                             ClientService clientService) {
        //Inyeccion de servicios
        this.securityService = securityService;
        this.userProfileService = userProfileService;
        this.applicationUserService = applicationUserService;
        this.clientService = clientService;

        //Data fetching
        setComponentData();//Cargamos los datos del usuario al entrar en la vista
        //Agregamos los eventos a los botones
        changePasswordbtn.addClickListener(e -> changePassword());
        //Layout
        add(
                new H1("Mi perfil"),
                new HorizontalLayout(nombre, apellidos),
                email,
                new HorizontalLayout(telefonoMovil, telefonoFijo),
                direccion,
                saveChangesbtn,
                new HorizontalLayout(password, password2),
                changePasswordbtn
        );
    }


    private void styleComponents(){
        //Todos los campos tiene que tener 400px de largo excepto botones, y la direccion tiene que ser 800px
        nombre.setWidth("400px");
        apellidos.setWidth("400px");
        email.setWidth("400px");
        telefonoMovil.setWidth("400px");
        telefonoFijo.setWidth("400px");
        telefonoFijo.setReadOnly(true);
        telefonoMovil.setReadOnly(true);

        direccion.setWidth("800px");
        password.setWidth("400px");
        password2.setWidth("400px");
        saveChangesbtn.setWidth("400px");
        changePasswordbtn.setWidth("400px");



    }

    private void setComponentData(){
        ApplicationUser user = applicationUserService.getApplicationUser(securityService.getAuthenticatedUser().getUsername()).get();

        nombre.setValue(user.getName());
        apellidos.setValue(user.getSurname());
        email.setValue(user.getEmail());
        //Cargamos los datos de cliente
        Client client = clientService.getClientByDNI(user.getUsername());
        if(client != null){
            telefonoMovil.setValue(client.getMobilePhone());
            telefonoFijo.setValue(client.getLandline());
            direccion.setValue(client.getAddress());
        }

    }

    private void changePassword(){

        if (!password.getValue().equals(password2.getValue())){

            Notification.show("Las contraseñas no coinciden");
        }
        else if (password.isEmpty() || password2.isEmpty()){
            Notification.show("Las contraseñas no pueden estar vacias");

        }
        else if(RegistrationService.checkPassword(password.getValue()) != null){
            //Mostramose el error por pantalla
            Notification n = new Notification(RegistrationService.checkPassword(password.getValue()), 3000);
            n.addThemeVariants(NotificationVariant.LUMO_ERROR);
            n.open();
        }
        else{
            applicationUserService.setPassword(securityService.getAuthenticatedUser().getUsername(), password.getValue());
            Notification n = new Notification("Contraseña cambiada con exito", 3000);
            n.addThemeVariants(NotificationVariant.LUMO_SUCCESS);
            n.open();

        }
    }

}





















