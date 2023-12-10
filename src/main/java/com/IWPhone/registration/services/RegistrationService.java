package com.IWPhone.registration.services;

import com.IWPhone.Models.ApplicationUser;
import com.IWPhone.Repositories.ApplicationUserRepository;
import com.IWPhone.security.SecurityService;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.notification.NotificationVariant;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import org.springframework.stereotype.Service;

@Service
public class RegistrationService {
    private final ApplicationUserRepository userRepository;
    private final SecurityService securityService;

    RegistrationService(ApplicationUserRepository userRepository, SecurityService securityService){
        this.userRepository = userRepository;
        this.securityService = securityService;
    }

    //Check if the Contract does not exist
    public boolean isContractRegistered(String contract){
        return false;
    }

    //Check if the client is already registered
    public boolean isClientRegistered(String dni){
        return false;
    }



    public void createUser(String username, String password, String name, String surname, String email){
        if(!checkDNI(username)){
            Notification n = new Notification();
            prepareNotificationError(n, "El DNI introducido no es válido");
            n.open();

        } else if (checkPassword(password)!=null){
            Notification n = new Notification();
            prepareNotificationError(n, checkPassword(password));
            n.open();

        }
        else if(name == null || surname == null || name.isEmpty() || surname.isEmpty()){
            Notification n = new Notification();
            prepareNotificationError(n, "El nombre y los apellidos no pueden estar vacíos");
            n.open();
        }
        else if(userRepository.findByUsername(username).isPresent()){
            Notification n = new Notification();
            prepareNotificationError(n, "El usuario ya existe");
            n.open();
        }
        else{
            ApplicationUser user = new ApplicationUser();
            user.setName(name);
            user.setSurname(surname);
            user.setEmail(email);
            user.setUsername(username);
            user.setPassword(SecurityService.passwordEncoder().encode(password));
            //user.setRoles("USER");
            userRepository.save(user);
            UI.getCurrent().navigate("login");
            Notification n = new Notification();
            prepareSuccessNotification(n, "Usuario creado correctamente");

            //TODO: Create the Client and Contract Enties Linked to the ApplicationUser

        }

    }

    private boolean checkDNI(String dni){
        if(dni.length() != 9) return false;
        String dniNumbers = dni.substring(0,8);
        String dniLetter = dni.substring(8);
        return (dniLetter.matches("^[A-Z]$") && dniNumbers.matches("^[0-9]+$"));
    }


    private String checkPassword(String password){
        if (password == null || password.length() < 8) {
            return "La contraseña debe tener al menos 8 caractéres.";
        }
        if (!password.matches(".*[0-9].*")) {
            return "La contraseña debe tener al menos un digito numerico.";
        }
        if (!password.matches(".*[a-z].*")) {
            return "La contraseña debe tener al menos una letra en minuscula.";
        }
        if (!password.matches(".*[A-Z].*")) {
            return "La contraseña debe tener al menos una letra en mayuscula.";
        }
        if (!password.matches(".*[@#$%^&+=].*")) {
            return "La contraseña debe tener al menos un caracter especial.";
        }
        if (password.matches(".*\\s.*")) {
            return "La contraseña no puede tener espacios dentro de la misma.";
        }
        return null;
    }

    public void prepareSuccessNotification(Notification notification, String message){

        notification.addThemeVariants(NotificationVariant.LUMO_SUCCESS);

        Div text = new Div(new Text(message));

        Button closeButton = new Button(new Icon("lumo", "cross"));
        closeButton.addThemeVariants(ButtonVariant.LUMO_TERTIARY_INLINE);
        closeButton.getElement().setAttribute("aria-label", "Close");
        closeButton.addClickListener(event -> {
            notification.close();
        });

        HorizontalLayout layout = new HorizontalLayout(text, closeButton);
        layout.setAlignItems(FlexComponent.Alignment.CENTER);

        notification.add(layout);
        notification.open();
    }

    public void prepareNotificationError(Notification notification, String message){

        notification.addThemeVariants(NotificationVariant.LUMO_ERROR);

        Div text = new Div(new Text(message));

        Button closeButton = new Button(new Icon("lumo", "cross"));
        closeButton.addThemeVariants(ButtonVariant.LUMO_TERTIARY_INLINE);
        closeButton.getElement().setAttribute("aria-label", "Close");
        closeButton.addClickListener(event -> {
            notification.close();
        });

        HorizontalLayout layout = new HorizontalLayout(text, closeButton);
        layout.setAlignItems(FlexComponent.Alignment.CENTER);

        notification.add(layout);
        notification.open();
    }
}
