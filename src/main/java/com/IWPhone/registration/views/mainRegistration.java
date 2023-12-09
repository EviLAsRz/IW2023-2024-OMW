package com.IWPhone.registration.views;

import com.IWPhone.Models.ApplicationUser;
import com.IWPhone.Repositories.ApplicationUserRepository;
import com.IWPhone.security.SecurityService;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.button.Button;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Route("register")
@AnonymousAllowed
public class mainRegistration extends VerticalLayout {
    private final ApplicationUserRepository userRepository;
    TextField username = new TextField("DNI", "Introduzca su Documento Nacional de Identidad");
    PasswordField password = new PasswordField("Introduzca su contraseña");
    public mainRegistration(ApplicationUserRepository userRepository){

        setSizeFull();
        setAlignItems(Alignment.CENTER);
        setJustifyContentMode(JustifyContentMode.CENTER);

        this.userRepository = userRepository;

        //Ajustes del campo de DNI.
        username.setRequiredIndicatorVisible(true);
        username.setMinWidth("400px");
        username.setMinLength(9);
        username.setMaxLength(9);


        //Ajustes del campo de contraseña.
        password.setRequiredIndicatorVisible(true);
        password.setMinWidth("400px");
        password.setMinLength(8);
        password.setMaxLength(50);




        Button register = new Button("Solicitar Registro");
        H1 title = new H1("Registro de Usuario");

        register.addClickListener(e -> {
            String dniValue = username.getValue();

            Notification.show("DNI: " + dniValue);

            ApplicationUser user = new ApplicationUser();
            user.setUsername(username.getValue());
            user.setPassword(SecurityService.passwordEncoder().encode(password.getValue()));
            //user.setRoles("USER");
            userRepository.save(user);
        });
        add(title,username, password, register);
    }

    private boolean checkDNI(String dni){
        if(dni.length() != 9) return false;
        String dniNumbers = dni.substring(0,8);
        String dniLetter = dni.substring(8);
        if(!dniLetter.matches("[A-Z]")) return false;
        return dniNumbers.matches("[0-9]+");
    }

    private boolean checkPassword(String password){
        if(password.length() < 8) return false;
        return password.matches("[a-zA-Z0-9]+");
    }
}
