package com.IWPhone;

import com.IWPhone.Layouts.AppLayout;
import com.IWPhone.PanelEmpleados.services.EmployeeProfileService;
import com.IWPhone.PanelEmpleados.view.PanelEmpleadosView;
import com.IWPhone.PanelUsuarios.view.PanelUsuariosView;
import com.IWPhone.security.SecurityService;

import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import jakarta.annotation.security.PermitAll;

@PermitAll
//TODO: Modificar route para que reciba varios layouts, o cambiar estructura de los layouts
@Route(value = "/", layout = AppLayout.class)
public class MainView extends VerticalLayout {

    // LOS SERVICIOS SE INYECTAN EN EL CONSTRUCTOR del main view o falla al recibirlos.
    public MainView(SecurityService securityService, EmployeeProfileService employeeProfileService) {
        Notification n = new Notification("ROL " + securityService.getAuthenticatedUser().getAuthorities().toString());
        n.setDuration(3000);
        n.open();
        if (securityService.getAuthenticatedUser().getAuthorities().toString().equals("[ROLE_EMPLOYEE]")){
            add(new PanelEmpleadosView(securityService, employeeProfileService));
        }
       //TODO: Crear vista para administrador
        if (securityService.getAuthenticatedUser().getAuthorities().toString().equals("[ROLE_ADMIN]")){
            add("Vista de administrador");
        }
        else if(securityService.getAuthenticatedUser().getAuthorities().toString().equals("[ROLE_USER]")) add(new PanelUsuariosView());
        else add("No tienes permisos para acceder a esta vista, tu rol es: " + securityService.getAuthenticatedUser().getAuthorities().toString() + " vuelve a la pagina de inicio");
    }
}
