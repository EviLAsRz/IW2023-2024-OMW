package com.IWPhone;

import com.IWPhone.Layouts.AppLayout;
import com.IWPhone.PanelEmpleados.services.AdminProfileService;
import com.IWPhone.PanelEmpleados.services.EmployeeProfileService;
import com.IWPhone.PanelEmpleados.view.PanelAdministracion;
import com.IWPhone.PanelEmpleados.view.PanelEmpleadosView;
import com.IWPhone.PanelUsuarios.services.UserProfileService;
import com.IWPhone.PanelUsuarios.view.PanelUsuariosView;
import com.IWPhone.Services.ApplicationUserService;
import com.IWPhone.Services.ClientService;
import com.IWPhone.security.SecurityService;

import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import jakarta.annotation.security.PermitAll;

@PermitAll
//TODO: Modificar route para que reciba varios layouts, o cambiar estructura de los layouts
@Route(value = "/", layout = AppLayout.class)
@PageTitle("Panel de Control")
public class MainView extends VerticalLayout {

    // LOS SERVICIOS SE INYECTAN EN EL CONSTRUCTOR del main view o falla al recibirlos.
    public MainView(SecurityService securityService, EmployeeProfileService employeeProfileService, AdminProfileService adminProfileService,
                    UserProfileService userProfileService, ApplicationUserService applicationUserService, ClientService clientService) {

        if (securityService.getAuthenticatedUser().getAuthorities().toString().equals("[ROLE_EMPLOYEE]")){
            add(new PanelEmpleadosView(securityService, employeeProfileService));
        }
        if (securityService.getAuthenticatedUser().getAuthorities().toString().equals("[ROLE_ADMIN]")){
            add(new PanelAdministracion(securityService, employeeProfileService,adminProfileService));
        }
        else if(securityService.getAuthenticatedUser().getAuthorities().toString().equals("[ROLE_USER]")) add(new PanelUsuariosView(securityService,userProfileService, applicationUserService,clientService));
        else if (securityService.getAuthenticatedUser().getAuthorities().toString().equals("[ROLE_DISABLED]")){
            add("Tu cuenta ha sido desactivada, ponga una reclamacion en: ");//TODO: Poner un link a la pagina de reclamaciones
        } else
            add("No tienes permisos para acceder a esta vista, tu rol es: " + securityService.getAuthenticatedUser().getAuthorities().toString() + " vuelve a la pagina de inicio");
    }
}
