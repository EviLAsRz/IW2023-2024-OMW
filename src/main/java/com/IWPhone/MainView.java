package com.IWPhone;

import com.IWPhone.playground.Customer;
import com.IWPhone.playground.CustomerRepository;
import com.IWPhone.playground.CustomerService;
import com.IWPhone.security.SecurityService;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.component.textfield.TextField;
import jakarta.annotation.security.PermitAll;

@PermitAll
@Route("/")
public class MainView extends VerticalLayout {

    private final SecurityService securityService;
    private final CustomerService service;
    final Grid<Customer> grid;
    final TextField filter = new TextField();
    final TextField firstNameTxt = new TextField();
    final TextField lastNameTxt = new TextField();
    final Button filterBtn = new Button("Filter by First Name");

    final Button refreshBtn = new Button("Refresh Table Data");
    final Button addBtn = new Button("Add Customer");

    final Button logoutBtn = new Button("Logout");

    public MainView(CustomerRepository repo, CustomerService service, SecurityService securityService){
        getThemeList().add("dark");
        setSizeFull();setHeightFull();
        this.grid = new Grid<>(Customer.class);
        this.service = service;
        this.securityService = securityService;
        add(
                new HorizontalLayout(filter, filterBtn),
                new HorizontalLayout(firstNameTxt, lastNameTxt, addBtn),
                new HorizontalLayout(refreshBtn, logoutBtn),
                grid
        );
        listCustomers();
        addBtn.addClickListener(e -> {
            service.save(new Customer(firstNameTxt.getValue(), lastNameTxt.getValue()));
            listCustomers();
        });
        refreshBtn.addClickListener(e -> listCustomers());
        filterBtn.addClickListener(e ->
                //Filtramos del grid los clientes que empiecen por el texto introducido en el TextField
                grid.setItems(service.findByFirstName(filter.getValue()))
        );
        logoutBtn.addClickListener(e -> {
            securityService.logout();
            getUI().ifPresent(ui -> ui.navigate("login"));
        });
    }

    private void listCustomers() {

        grid.setItems(service.findAll());
    }

}
