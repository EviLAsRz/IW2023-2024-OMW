package com.user.views;

import com.IWPhone.Layouts.UserLayout;
import com.IWPhone.playground.Customer;
import com.IWPhone.playground.CustomerRepository;
import com.IWPhone.playground.CustomerService;
import com.IWPhone.security.SecurityService;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.component.textfield.TextField;
import jakarta.annotation.security.PermitAll;
import jakarta.annotation.security.RolesAllowed;


@RolesAllowed({"USER", "ADMIN"})
@Route(value = "/user", layout = UserLayout.class)
public class UserView extends VerticalLayout {



    public UserView(CustomerRepository repo, CustomerService service, SecurityService securityService) {
    }
}
