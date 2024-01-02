package com.IWPhone.registration.views;

import com.IWPhone.Layouts.AppLayout;
import com.IWPhone.Repositories.ApplicationUserRepo;
import com.IWPhone.Services.DepartamentoService;
import com.IWPhone.registration.services.RegistrationService;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.select.Select;
import com.vaadin.flow.component.textfield.EmailField;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import jakarta.annotation.security.RolesAllowed;


@Route(value = "registerEmployee", layout = AppLayout.class)
@PageTitle("Registro de Empleados")
@RolesAllowed({"ADMIN"})
public class EmployeeRegistration extends VerticalLayout {
    private final ApplicationUserRepo userRepository;
    TextField name = new TextField("Nombre", "Introduzca su nombre");
    TextField surname = new TextField("Apellidos", "Introduzca sus apellidos");
    EmailField email = new EmailField("Email", "Introduzca su email");

    TextField username = new TextField("DNI", "Introduzca su Documento Nacional de Identidad");
    PasswordField password = new PasswordField("Introduzca su contraseña");

    //Atributos del empleado
    Select<String> nombreDepartamento;

    private RegistrationService service;
    private DepartamentoService departamentoService;
    Button register = new Button("Registrar Empleado");
    public EmployeeRegistration(ApplicationUserRepo userRepository, RegistrationService service, DepartamentoService departamentoService) {


        this.departamentoService = departamentoService;
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


        //Ajustes del campo del departamento
        nombreDepartamento = new Select<String>();
        nombreDepartamento.setLabel("Departamento");
        nombreDepartamento.setPlaceholder("Seleccione un departamento");
        nombreDepartamento.setItems(departamentoService.getNombresDepartamentos());
        nombreDepartamento.setMinWidth("400px");

        //Ajustes del campo de la seccion de datos del usuario
        VerticalLayout userDataLayout = new VerticalLayout(
                new H2("Datos Personales"),
                name,
                surname,
                username,
                email,
                password,
                nombreDepartamento
        );
        userDataLayout.setSizeFull();
        userDataLayout.setAlignItems(Alignment.CENTER);
        userDataLayout.setJustifyContentMode(JustifyContentMode.CENTER);




        //Ajustes del boton de registro

        H1 title = new H1("Registro del Nuevo Empleado");

        register.addClickListener(e -> {
            String dniValue = username.getValue();
            //Create User and linked contract
           if(service.createEmployee(username.getValue(), password.getValue(), name.getValue(), surname.getValue(), email.getValue(), nombreDepartamento.getValue())){
               UI.getCurrent().navigate("login");
           }
           /* Notification n = new Notification("Valor dPriceCall: "+ Double.parseDouble(pricePerCall.getValue()));
            n.open();*/
        });



        //Ajustes del layout principal
        getThemeList().add("dark");
        add(title,userDataLayout, register);
    }




}















