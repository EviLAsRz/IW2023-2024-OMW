package com.IWPhone.views;

import com.IWPhone.Models.ApplicationUser;
import com.IWPhone.Services.ApplicationUserService;
import com.IWPhone.Services.PasswordResetService;
import com.IWPhone.login.views.LoginView;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.FlexLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.notification.Notification.Position;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.router.BeforeEvent;
import com.vaadin.flow.router.HasUrlParameter;
import com.vaadin.flow.router.OptionalParameter;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import org.springframework.beans.factory.annotation.Autowired;
import com.vaadin.flow.component.dependency.JavaScript;
import java.util.Objects;
import java.util.Optional;
import java.util.regex.Pattern;

@JavaScript("./js/redirect.js")
@Route("new-password")
@AnonymousAllowed
public class NewPasswordTokenView extends FlexLayout implements HasUrlParameter<String> {

    @Autowired
    private PasswordResetService passwordService;

    @Autowired
    private ApplicationUserService applicationUserService;

    @Autowired
    private PasswordResetService passwordResetService;

    private VerticalLayout formLayout;
    private Div firstSection;
    private Div secondSection;
    private String mail;
    private boolean isValidToken;
    private static ApplicationUser target;
    private static ApplicationUserService applicationUserServiceInt;
    @Override
    public void setParameter(BeforeEvent event, @OptionalParameter String parameter) {
        Optional<String> tokenOptional = event.getLocation().getQueryParameters().getSingleParameter("token");
        Optional<String> mailOptional = event.getLocation().getQueryParameters().getSingleParameter("mail");


        if (tokenOptional.isPresent() && mailOptional.isPresent()) {
            String token = tokenOptional.get();
            mail = mailOptional.get();

            isValidToken = passwordService.verifyToken(token);

            Notification.show("Email del destinatario: " + mail);
            //Desactivamos el valor del token
            passwordResetService.changeisValidValuetoFalse(token);
            Notification.show("Se llama a isValidValuetoFalse");

            //si no es valido se reenvia al login
        }else UI.getCurrent().access(() -> UI.getCurrent().navigate(LoginView.class));


        Optional<ApplicationUser> optionalUser = applicationUserService.getApplicationUserMail(mail);
        if (optionalUser.isPresent()) {
            target = optionalUser.get();
            Notification.show("Usuario valido: " + target);

        } else {
            if (!isValidToken)
                Notification.show("Error: El token ha caducado. Vuelve a solicitar un nuevo código.", 5000, Position.MIDDLE);
            else
                Notification.show("Error: No se encontró un usuario con el correo electrónico proporcionado.", 5000, Position.MIDDLE);
            UI.getCurrent().access(() -> UI.getCurrent().navigate(LoginView.class));
        }

        applicationUserServiceInt = applicationUserService;

        //Creación del formulario en la funcion setParameter
        formLayout = new VerticalLayout();

        secondSection = new Div();
        secondSection.getStyle().set("display", "none");

        firstSection = new Div();
        firstSection.add(formLayout);
        firstSection.getStyle().set("width", "325px");
        firstSection.getStyle().set("height", "430px");
        firstSection.getStyle().set("border", "1px solid transparent");
        firstSection.getStyle().set("background-color", "#2d3d53");
        firstSection.getStyle().set("padding", "15px");
        add(firstSection);

        add(secondSection);

        //Estilos
        getStyle().set("display", "flex");
        getStyle().set("justify-content", "center");
        getStyle().set("align-items", "center");
        getStyle().set("height", "100vh");

        //formulario
        H2 resetLabel = new H2("Password assistance");
        PasswordField currentPassword = new PasswordField("current password");
        PasswordField newPassword = new PasswordField("new password");
        PasswordField confirmPassword = new PasswordField("repeat new password");

        currentPassword.setSizeFull();
        newPassword.setSizeFull();
        confirmPassword.setSizeFull();

        Button submitButton = getButton(currentPassword, newPassword, confirmPassword);
        formLayout.add(resetLabel, currentPassword, newPassword, confirmPassword, submitButton);

        // Agregar los componentes a la interfaz de usuario

        Notification.show("Usuario actual: "+ target.getUsername());
        Notification.show("Mail actual: "+ target.getEmail());

    }
    public NewPasswordTokenView(){
        //vacia ya que queremos que toda la lógica de la vista esté en setParameter

    }

    private Button getButton(PasswordField currentPassword, PasswordField newPassword, PasswordField confirmPassword) {
        Button submitButton = new Button("Continue");
        submitButton.setThemeName("primary");
        submitButton.setSizeFull();
        Notification.show("Contraseña actual: "+ applicationUserServiceInt.getPassword(mail));
        submitButton.addClickListener(event-> {

            if (!isValidCurrentPassword(currentPassword.getValue(), target.getPassword())) {
                currentPassword.setErrorMessage("La contraseña actual no coincide");
                currentPassword.setInvalid(true);
            }else
            if (!isValidNewPassword(newPassword.getValue(), confirmPassword.getValue())) {
                confirmPassword.setErrorMessage("Las contraseñas nuevas deben coincidir");
                newPassword.setErrorMessage("");
                confirmPassword.setInvalid(true);
                newPassword.setInvalid(true);
            }else
            if (!isNotEqualPassword(currentPassword.getValue(), newPassword.getValue())) {
                newPassword.setErrorMessage("La contraseña nueva no puede ser la misma que la contraseña actual");
                newPassword.setInvalid(true);
            }else
            if (!isValidPassword(newPassword.getValue())){
                newPassword.setErrorMessage("La contraseña debe tener de 8 a 50 caracteres y debe contener al menos una mayúscula y un número");
                newPassword.setInvalid(true);
            } else{

                Notification.show("Usuario actual post Parameter: "+ target.getUsername());
                Notification.show("Contraseña antigua: " + currentPassword.getValue());
                Notification.show("Contraseña antigua hashed: " + target.getPassword());
                Notification.show("Contraseña nueva: " + newPassword.getValue());
                Notification.show("Verificación de la constraseña: " + applicationUserService.verifyPassword(currentPassword.getValue(), target.getPassword()));
                //modificacion de la contraseña
                applicationUserService.setPassword(target.getUsername(), newPassword.getValue());
                //desactivamos el formulario
                firstSection.getStyle().set("display", "none");
                //activamos el mensaje de exito
                secondSection.getStyle().set("display", "block");

                //mensaje de exito
                Paragraph exitoParagraph = new Paragraph("La contraseña se ha modificado con exito!");
                Paragraph exitoParagraph2 = new Paragraph("Redireccionando al login...");
                exitoParagraph.getElement().getStyle().set("font-size", "20px");
                exitoParagraph2.getElement().getStyle().set("font-size", "20px");
                secondSection.add(exitoParagraph, exitoParagraph2);

                UI.getCurrent().getPage().executeJs("delayRedirect('login');");
            }
        });
        return submitButton;
    }

    //contraseña sigue el patrón
    private boolean isValidPassword(String password) {
        String passwordRegex = "^(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]{8,50}$";
        Pattern pat = Pattern.compile(passwordRegex);
        if (password == null)
            return false;
        return pat.matcher(password).matches();
    }

    //contraseña coincide con base de datos
    private boolean isValidCurrentPassword(String formPassword, String currentPassword) {
        if (formPassword == null || currentPassword == null)
            return false;
        return applicationUserService.verifyPassword(formPassword, currentPassword);
    }

    //contraseñas nuevas coinciden
    private boolean isValidNewPassword(String newPassword, String confirmPassword) {
        if (newPassword == null || confirmPassword == null)
            return false;
        return Objects.equals(newPassword, confirmPassword);
    }

    //contraseña nueva y actual son distintas
    private boolean isNotEqualPassword(String currentPassword, String newPassword) {
        if (currentPassword == null || newPassword == null)
            return false;
        return !Objects.equals(currentPassword, newPassword);
    }

    private boolean isValidForm(String formPassword, String currentPassword, String newPassword, String confirmPassword) {
        return isValidCurrentPassword(formPassword, currentPassword) && isValidNewPassword(newPassword, confirmPassword) && isNotEqualPassword(currentPassword, newPassword);
    }
}