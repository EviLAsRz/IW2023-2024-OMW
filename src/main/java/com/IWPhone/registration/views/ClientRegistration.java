package com.IWPhone.registration.views;

import com.IWPhone.Models.ApplicationUser;
import com.IWPhone.Repositories.ApplicationUserRepository;
import com.IWPhone.security.SecurityService;

import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.notification.NotificationVariant;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.EmailField;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.icon.Icon;




@Route("register")
@AnonymousAllowed
public class ClientRegistration extends VerticalLayout {
    private final ApplicationUserRepository userRepository;
    TextField name = new TextField("Nombre", "Introduzca su nombre");
    TextField surname = new TextField("Apellidos", "Introduzca sus apellidos");
    EmailField email = new EmailField("Email", "Introduzca su email");

    TextField username = new TextField("DNI", "Introduzca su Documento Nacional de Identidad");
    PasswordField password = new PasswordField("Introduzca su contraseña");

    //Atributos del contrato
    TextArea contratDetails = new TextArea("Detalles del Contrato", "Introduzca los detalles del contrato");

    TextField maxGbConsumption = new TextField("Consumo Maximo de Datos", "Introduzca el consumo maximo de datos");
    TextField pricePerGb = new TextField("Precio por Gb", "Introduzca el precio por Gb");
    TextField pricePerSMS = new TextField("Precio por SMS", "Introduzca el precio por SMS");
    TextField pricePerCall = new TextField("Precio por Llamada", "Introduzca el precio por llamada");

    Button register = new Button("Solicitar Registro");
    public ClientRegistration(ApplicationUserRepository userRepository){

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
        password.setPlaceholder("* * * * * * * *");
        //Ajustes del campo del mail

        email.setLabel("Direccion de Correo Electronico");
        email.getElement().setAttribute("name", "email");
        email.setPlaceholder("username@example.com");
        email.setErrorMessage("Introduzca un mail validos");
        email.setClearButtonVisible(true);
        email.setPattern("^.+@(alum\\.uca.es|gmail\\.com|hotmail\\.com|outlook\\.com|yahoo\\.com)$");
        email.setMinWidth("400px");

        //Ajustes del campo del nombre
        name.setMaxWidth("400px");
        name.setMinWidth("400px");
        name.setRequired(true);
        //Ajustes del campo del apellido
        surname.setMaxWidth("400px");
        surname.setMinWidth("400px");
        surname.setRequired(true);

        //Ajustes del campo de los detalles del contrato
        contratDetails.setMaxWidth("400px");
        contratDetails.setMinWidth("400px");
        contratDetails.setMinHeight("200px");
        contratDetails.setRequired(true);
        pricePerCall.setMinWidth("400px");
        pricePerCall.setMaxWidth("400px");
        pricePerCall.setRequired(true);
        pricePerGb.setMinWidth("400px");
        pricePerGb.setMaxWidth("400px");
        pricePerGb.setRequired(true);
        pricePerSMS.setMinWidth("400px");
        pricePerSMS.setMaxWidth("400px");
        pricePerSMS.setRequired(true);
        maxGbConsumption.setMinWidth("400px");
        maxGbConsumption.setMaxWidth("400px");
        maxGbConsumption.setRequired(true);


        VerticalLayout contractDataLayout = new VerticalLayout(
                new H2("Datos del Contrato"),
                contratDetails,
                maxGbConsumption,
                pricePerGb,
                pricePerSMS,
                pricePerCall

        );
        contractDataLayout.setSizeFull();
        contractDataLayout.setAlignItems(Alignment.CENTER);
        contractDataLayout.setJustifyContentMode(JustifyContentMode.CENTER);


        //Ajustes del campo de la seccion de datos del usuario
        VerticalLayout userDataLayout = new VerticalLayout(
                new H2("Datos Personales"),
                name,
                surname,
                username,
                email,
                password
        );
        userDataLayout.setSizeFull();
        userDataLayout.setAlignItems(Alignment.CENTER);
        userDataLayout.setJustifyContentMode(JustifyContentMode.CENTER);




        //Ajustes del boton de registro

        H1 title = new H1("Registro del Nuevo Cliente");

        register.addClickListener(e -> {
            String dniValue = username.getValue();
            //Create User
            createUser(username.getValue(), password.getValue());

        });



        //Ajustes del layout principal
        add(title,userDataLayout,contractDataLayout, register);
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

    private void prepareSuccessNotification(Notification notification, String message){

        notification.addThemeVariants(NotificationVariant.LUMO_SUCCESS);

        Div text = new Div(new Text(message));

        Button closeButton = new Button(new Icon("lumo", "cross"));
        closeButton.addThemeVariants(ButtonVariant.LUMO_TERTIARY_INLINE);
        closeButton.getElement().setAttribute("aria-label", "Close");
        closeButton.addClickListener(event -> {
            notification.close();
        });

        HorizontalLayout layout = new HorizontalLayout(text, closeButton);
        layout.setAlignItems(Alignment.CENTER);

        notification.add(layout);
        notification.open();
    }

    private void prepareNotificationError(Notification notification, String message){

        notification.addThemeVariants(NotificationVariant.LUMO_ERROR);

        Div text = new Div(new Text(message));

        Button closeButton = new Button(new Icon("lumo", "cross"));
        closeButton.addThemeVariants(ButtonVariant.LUMO_TERTIARY_INLINE);
        closeButton.getElement().setAttribute("aria-label", "Close");
        closeButton.addClickListener(event -> {
            notification.close();
        });

        HorizontalLayout layout = new HorizontalLayout(text, closeButton);
        layout.setAlignItems(Alignment.CENTER);

        notification.add(layout);
        notification.open();
    }

    //TODO: End this method (check if client is already registered)
    private void createUser(String username, String password){
        if(!checkDNI(username)){
            Notification n = new Notification();
            prepareNotificationError(n, "El DNI introducido no es válido");
            n.open();

        } else if (checkPassword(password)!=null){
            Notification n = new Notification();
            prepareNotificationError(n, checkPassword(password));
            n.open();

        }
        else if(name.getValue() == null || name.getValue().isEmpty() || surname.getValue() == null || surname.getValue().isEmpty()){
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
            user.setName(name.getValue());
            user.setSurname(surname.getValue());
            user.setEmail(email.getValue());
            user.setUsername(username);
            user.setPassword(SecurityService.passwordEncoder().encode(password));
            //user.setRoles("USER");
            userRepository.save(user);
            Notification n = new Notification();
            prepareSuccessNotification(n, "Usuario creado correctamente");

            //TODO: Create the Client and Contract Enties Linked to the ApplicationUser

        }

    }

}















