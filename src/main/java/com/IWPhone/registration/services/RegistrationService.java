package com.IWPhone.registration.services;

import com.IWPhone.Models.ApplicationUser;
import com.IWPhone.Repositories.ApplicationUserRepo;
import com.IWPhone.Services.DepartamentoService;
import com.IWPhone.Services.EmpleadoService;
import com.IWPhone.security.SecurityService;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.notification.NotificationVariant;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import org.springframework.stereotype.Service;
import com.IWPhone.Services.EmpleadoService;

@Service
public class RegistrationService {
    private final ApplicationUserRepo userRepository;
    private final ContractService contractService;
    private final EmpleadoService empleadoService;
    private final SecurityService securityService;

    private final DepartamentoService departamentoService;

    RegistrationService(ApplicationUserRepo userRepository, SecurityService securityService, ContractService contractService, DepartamentoService departamentoService, EmpleadoService emp){
        this.userRepository = userRepository;
        this.securityService = securityService;
        this.contractService = contractService;
        this.departamentoService = departamentoService;
        this.empleadoService = emp;

    }

    //Check if the Contract does not exist
    public boolean isContractRegistered(String contract){
        return false;
    }

    //Check if the client is already registered
    public boolean isClientRegistered(String dni){
        return false;
    }



    public boolean createUser(String username, String password, String name, String surname, String email, String contractDetails, String pricePerCall, String pricePerGb, String pricePerSMS, String maxGbConsumption){
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
        else if(pricePerCall.isEmpty() || !isNumericField(pricePerCall)){
            Notification n = new Notification();
            prepareNotificationError(n, "El precio por llamada no puede estar vacío y tiene que ser un numero");
            n.open();
        }
        else if(pricePerGb.isEmpty() || !isNumericField(pricePerGb)){
            Notification n = new Notification();
            prepareNotificationError(n, "El precio por GB no puede estar vacío y tiene que ser un numero");
            n.open();
        }
        else if(pricePerSMS.isEmpty() || !isNumericField(pricePerSMS)){
            Notification n = new Notification();
            prepareNotificationError(n, "El precio por SMS no puede estar vacío y tiene que ser un numero");
            n.open();
        }
        else if(maxGbConsumption.isEmpty() || !isNumericField(maxGbConsumption)){
            Notification n = new Notification();
            prepareNotificationError(n, "El máximo de GB de consumo no puede estar vacío y tiene que ser un numero");
            n.open();
        }
        //Comprobar que no existe un contrato con ese dni
        else if(contractService.isContractRegistered(username)){
            Notification n = new Notification();
            prepareNotificationError(n, "El contrato ya existe, ese usuario ya tiene un contrato asociado contacte con el administrador");
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
            user.setRole("USER");
            userRepository.save(user);

            Notification n = new Notification();
            prepareSuccessNotification(n, "Usuario creado correctamente");

            contractService.create(username, contractDetails, Double.parseDouble(maxGbConsumption), Double.parseDouble(pricePerGb),
                    Double.parseDouble(pricePerSMS), Double.parseDouble(pricePerCall));

            return true;
        }
        return false;
    }

    public boolean createEmployee(String username, String password, String name, String surname, String email, String nombreDepartamento){
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
            prepareNotificationError(n, "El empleado ya existe");
            n.open();
        }
        else if (nombreDepartamento == null || nombreDepartamento.isEmpty()){
            Notification n = new Notification();
            prepareNotificationError(n, "El nombre del departamento no puede estar vacío, debe seleccionar uno");
            n.open();
        }
        else if(!departamentoService.getUUIDByNombre(nombreDepartamento).isPresent()){
            Notification n = new Notification();
            prepareNotificationError(n, "El departamento seleccionado no existe, si el problema persiste contacte con el administrador");
            n.open();
            //No debe ocurrir nunca por definicion pero siempre esta bien cubrirse las espaldas
        }
        else{
            ApplicationUser user = new ApplicationUser();
            user.setName(name);
            user.setSurname(surname);
            user.setEmail(email);
            user.setUsername(username);
            user.setPassword(SecurityService.passwordEncoder().encode(password));
            //user.setRoles("USER");
            user.setRole("EMPLOYEE");
            userRepository.save(user);

            //Creamos el empleado
            empleadoService.createEmpleado(username, departamentoService.getUUIDByNombre(nombreDepartamento).get());

            Notification n = new Notification();
            prepareSuccessNotification(n, "Usuario creado correctamente");



            return true;
        }
        return false;
    }


    boolean isNumericField(String s)
    {
       try{
              Double.parseDouble(s);
              return true;
       }catch (NumberFormatException e){
           return false;
       }
    }

    private boolean checkDNI(String dni){
        if(dni.length() != 9) return false;
        String dniNumbers = dni.substring(0,8);
        String dniLetter = dni.substring(8);
        return (dniLetter.matches("^[A-Z]$") && dniNumbers.matches("^[0-9]+$"));
    }




    public static String checkPassword(String password){
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
