package com.IWPhone.PanelEmpleados.view;

import com.IWPhone.Layouts.EmployeeLayout;
import com.IWPhone.PanelEmpleados.services.EmployeeProfileService;
import com.IWPhone.security.SecurityService;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import jakarta.annotation.security.RolesAllowed;
import org.springframework.beans.factory.annotation.Autowired;

@Route( layout = EmployeeLayout.class)
@RolesAllowed({"EMPLOYEE", "ADMIN"})
public class PanelEmpleadosView extends VerticalLayout {

    //Los servicios lo recibe desde el mainview

    public PanelEmpleadosView(SecurityService securityService, EmployeeProfileService employeeProfileService) {

        //En la vista principal tendra los contratatos que aun no han sido dados de alta

        Notification n = new Notification("Departamento " + employeeProfileService.getEmployeeDepartamento(securityService.getAuthenticatedUser().getUsername().toString()));
        n.setDuration(3000);
        n.open();



        add(
                //TODO: AGREGAR GESTION DE PERFIL
                new H1("Mi perfil")
        );
    }
}
