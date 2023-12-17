package com.IWPhone.PanelEmpleados.view;

import com.IWPhone.Layouts.EmployeeLayout;
import com.IWPhone.PanelEmpleados.services.EmployeeProfileService;
import com.IWPhone.security.SecurityService;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.notification.NotificationVariant;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.select.Select;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Route;
import jakarta.annotation.security.RolesAllowed;
import org.springframework.beans.factory.annotation.Autowired;

@Route( layout = EmployeeLayout.class)
@RolesAllowed({"EMPLOYEE", "ADMIN"})
public class PanelEmpleadosView extends VerticalLayout {

    //Los servicios lo recibe desde el mainview
    private HorizontalLayout nameSurnameLayout = new HorizontalLayout();
    private Select<String> departamentos = new Select<>();
    private TextField name = new TextField();
    private TextField surname = new TextField();
    private TextField dni = new TextField();
    private TextField mail = new TextField();

    private Button saveBtn = new Button("Guardar cambios");
    private final EmployeeProfileService employeeProfileService;
    public PanelEmpleadosView(SecurityService securityService, EmployeeProfileService employeeProfileService) {
        this.employeeProfileService = employeeProfileService;
        //La vista contendra un layout que permite modificar los datos del empleado (datos basicos)

        //Pillamos los departamentos
        departamentos.setItems(employeeProfileService.getAllDepartamentosNombre());
        departamentos.setLabel("Departamento (solo modificable por administradores)");
        departamentos.setValue(employeeProfileService.getEmployeeDepartamento(securityService.getAuthenticatedUser().getUsername().toString()));
        departamentos.setPlaceholder(employeeProfileService.getEmployeeDepartamento(securityService.getAuthenticatedUser().getUsername().toString()));
        departamentos.setWidth("400px");
        departamentos.setReadOnly(true);


        //Pillamos los datos del empleado
        dni.setValue(securityService.getAuthenticatedUser().getUsername().toString());
        dni.setLabel("DNI (no modificable)");
        dni.setEnabled(false);
        surname.setValue(employeeProfileService.getSurname(securityService.getAuthenticatedUser().getUsername().toString()));
        surname.setLabel("Apellidos");
        surname.setEnabled(false);
        name.setValue(employeeProfileService.getName(securityService.getAuthenticatedUser().getUsername().toString()));
        name.setLabel("Nombre");
        name.setEnabled(false);
        mail.setValue(employeeProfileService.getMail(securityService.getAuthenticatedUser().getUsername().toString()));
        mail.setLabel("Correo electronico");

        dni.setMinWidth("400px");
        surname.setMinWidth("400px");
        name.setMinWidth("400px");
        mail.setMinWidth("400px");

        nameSurnameLayout.add(name, surname);

        //Funcionalidad del boton de guardar cambios
        saveBtn.addClickListener(e -> {
            if(checkMail(mail.getValue())){
                employeeProfileService.setMail(dni.getValue(), mail.getValue());
                Notification notification = new Notification("Mail cambiado correctamente");
                notification.addThemeVariants(NotificationVariant.LUMO_SUCCESS);
                notification.setDuration(3000);
                notification.open();
            }
        });

        add(
                //TODO: AGREGAR GESTION DE PERFIL
                new H1("Mi perfil"),
                nameSurnameLayout,
                new HorizontalLayout(dni, mail),
                departamentos,
                saveBtn
        );
    }

    public boolean checkMail(String mail){
        //Comprobamos que ese mail no este ya en uso
        if(employeeProfileService.checkMailExistence(mail))
        {
            Notification notification = new Notification("Error al cambiar el mail, ya existe un usuario con ese correo electronico");
            notification.addThemeVariants(NotificationVariant.LUMO_ERROR);
            notification.setDuration(3000);
            notification.open();
            return false;
        }
        //Comprueba si esta en los mails validos (alum.uca.es, gmail.com, hotmail.com, yahoo.com, outlook.com)
        else if(mail.contains("@") && mail.contains(".") && mail.contains("alum.uca.es") || mail.contains("gmail.com") || mail.contains("hotmail.com") || mail.contains("yahoo.com") || mail.contains("outlook.com")){
            return true;
        }
        else{
            Notification notification = new Notification("Error al cambiar el mail, compruebe que es correcto y/o pertenece a una de las siguientes plataformas: alum.uca.es, gmail.com, hotmail.com, yahoo.com, outlook.com ");
            notification.addThemeVariants(NotificationVariant.LUMO_ERROR);
            notification.setDuration(3000);
            notification.open();
            return false;
        }

    }

}
