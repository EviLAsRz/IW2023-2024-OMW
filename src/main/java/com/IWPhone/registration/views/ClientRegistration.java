package com.IWPhone.registration.views;

import com.IWPhone.Repositories.ApplicationUserRepository;
import com.IWPhone.registration.services.RegistrationService;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.EmailField;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.notification.Notification;




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
    private RegistrationService service;
    Button register = new Button("Solicitar Registro");
    public ClientRegistration(ApplicationUserRepository userRepository, RegistrationService service){
        this.service = service;

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
        email.setErrorMessage("Introduzca un mail valido");
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
            //Create User and linked contract
            service.createUser(username.getValue(), password.getValue(), name.getValue(), surname.getValue(), email.getValue(),contratDetails.getValue(), pricePerCall.getValue(), pricePerGb.getValue(), pricePerSMS.getValue(), maxGbConsumption.getValue());
           /* Notification n = new Notification("Valor dPriceCall: "+ Double.parseDouble(pricePerCall.getValue()));
            n.open();*/
        });



        //Ajustes del layout principal
        getThemeList().add("dark");
        add(title,userDataLayout,contractDataLayout, register);
    }




}















