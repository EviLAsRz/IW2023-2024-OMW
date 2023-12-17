package com.IWPhone;

import com.IWPhone.Layouts.EmployeeLayout;
import com.IWPhone.PanelEmpleados.view.PanelEmpleadosView;
import com.IWPhone.PanelUsuarios.view.PanelUsuariosView;
import com.IWPhone.playground.CustomerRepository;
import com.IWPhone.playground.CustomerService;
import com.IWPhone.security.SecurityService;

import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import jakarta.annotation.security.PermitAll;

@PermitAll
//TODO: Modificar route para que reciba varios layouts, o cambiar estructura de los layouts
@Route(value = "/", layout = EmployeeLayout.class)
public class MainView extends VerticalLayout {

    public MainView(CustomerRepository repo, CustomerService service, SecurityService securityService) {
        Notification n = new Notification("ROL " + securityService.getAuthenticatedUser().getAuthorities().toString());
        n.setDuration(3000);
        n.open();
        if (securityService.getAuthenticatedUser().getAuthorities().toString().equals("[ROLE_EMPLOYEE]")){
            add(new PanelEmpleadosView());
        }
        else add(new PanelUsuariosView());
    }
}
