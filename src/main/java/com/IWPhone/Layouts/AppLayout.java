package com.IWPhone.Layouts;

import com.IWPhone.MainView;
import com.IWPhone.PanelEmpleados.view.*;

import com.IWPhone.PanelUsuarios.view.ConsumoView;
import com.IWPhone.PanelUsuarios.view.CreacionConsultasView;
import com.IWPhone.PanelUsuarios.view.FacturaUsuarioView;
import com.IWPhone.Services.EmpleadoService;
import com.IWPhone.registration.views.AdminRegistration;
import com.IWPhone.registration.views.ClientRegistration;
import com.IWPhone.registration.views.EmployeeRegistration;
import com.IWPhone.security.SecurityService;
import com.vaadin.flow.component.applayout.DrawerToggle;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.contextmenu.MenuItem;
import com.vaadin.flow.component.contextmenu.SubMenu;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.menubar.MenuBar;
import com.vaadin.flow.component.menubar.MenuBarVariant;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.RouterLink;
import com.vaadin.flow.theme.lumo.LumoUtility;


public class AppLayout extends com.vaadin.flow.component.applayout.AppLayout {
    private final SecurityService securityService;
    private final EmpleadoService empleadoService;
    private Button logoutBtn = new Button("Cerrar Sesión");
    private Button profileBtn = new Button("Perfil");


    public AppLayout(SecurityService ser, EmpleadoService empleadoService){
        this.securityService = ser;
        this.empleadoService = empleadoService;



        if(securityService.getAuthenticatedUser().getAuthorities().toString().equals("[ROLE_EMPLOYEE]")){
            createHeader("Empleado");
            createEmployeeDrawer();
        } else if (securityService.getAuthenticatedUser().getAuthorities().toString().equals("[ROLE_USER]")) {
            createHeader("Usuario");
            createUserDrawer();
        }
        else if (securityService.getAuthenticatedUser().getAuthorities().toString().equals("[ROLE_ADMIN]")){
            createHeader("Administrador");
            createAdminDrawer();
        }

    }

    private void createHeader(String role) {

        //Eventos
        logoutBtn.addClickListener(e -> {
            securityService.logout();
            logoutBtn.getUI().ifPresent(ui ->
                    ui.navigate("company"));
        });


        H1 logo = new H1("Panel del " + role +"  de IWPhone");
        logo.addClassNames(
                LumoUtility.FontSize.LARGE,
                LumoUtility.Margin.MEDIUM);

        //Agregar un menu a la zona de la cabecera en la derecha
        MenuBar menuBar = new MenuBar();
        menuBar.addThemeVariants(MenuBarVariant.LUMO_END_ALIGNED);

        menuBar.addClassNames(LumoUtility.Margin.Start.LARGE);
        MenuItem share = menuBar.addItem(securityService.getAuthenticatedUser().getUsername());
        SubMenu shareSubMenu = share.getSubMenu();
        shareSubMenu.addItem(logoutBtn);


        var header = new HorizontalLayout(new DrawerToggle(), logo, menuBar);

        header.setDefaultVerticalComponentAlignment(FlexComponent.Alignment.CENTER);
        header.setWidthFull();
        header.addClassNames(
                LumoUtility.Padding.Vertical.NONE,
                LumoUtility.Padding.Horizontal.MEDIUM);

        addToNavbar(header);

    }

    private void createEmployeeDrawer() {

        //Pillamos el departamento del empleado
        String departamento = empleadoService.getEmpleado(securityService.getAuthenticatedUser().getUsername().toString()).get().
                get_tDepartamento().toString();

        VerticalLayout layout = new VerticalLayout();
        layout.setAlignItems(FlexComponent.Alignment.CENTER);
        layout.setJustifyContentMode(FlexComponent.JustifyContentMode.CENTER);
        layout.setWidthFull();
        layout.add(
                new RouterLink("Volver al inicio", MainView.class)
        );
        if(empleadoService.getNombreDepartamento(securityService.getAuthenticatedUser().getUsername().toString()).equals("Atencion Al Cliente")){//Es de Atencion al cliente
            layout.add(
                    new RouterLink("Contratos", ContratosView.class),
                    new RouterLink("Telefonos", GestionNumeros.class),
                    new RouterLink("Consultas", GestionConsultasView.class)
            );
        }

        if(empleadoService.getNombreDepartamento(securityService.getAuthenticatedUser().getUsername().toString()).equals("Marketing")){//Es de Marketing
            layout.add(
                    new RouterLink("Registrar Contrato", ClientRegistration.class)
            );
        }

        if(empleadoService.getNombreDepartamento(securityService.getAuthenticatedUser().getUsername().toString()).equals("Finanzas")){//Es de Finanzas
            layout.add(
                    new RouterLink("Facturas", FacturasView.class)
            );
        }


        addToDrawer(
                layout
        );
    }
    private void createUserDrawer() {

        //Pillamos el departamento del empleado

        VerticalLayout layout = new VerticalLayout();
        layout.setAlignItems(FlexComponent.Alignment.CENTER);
        layout.setJustifyContentMode(FlexComponent.JustifyContentMode.CENTER);
        layout.setWidthFull();
        layout.add(
                new RouterLink("Volver al incio", MainView.class),
                new RouterLink("Consultas", CreacionConsultasView.class),
                new RouterLink("Facturas", FacturaUsuarioView.class),
                new RouterLink("Consumo", ConsumoView.class)
        );



        addToDrawer(
                layout
        );
    }

    private void createAdminDrawer() {

        VerticalLayout layout = new VerticalLayout();
        layout.setAlignItems(FlexComponent.Alignment.CENTER);
        layout.setJustifyContentMode(FlexComponent.JustifyContentMode.CENTER);
        layout.setWidthFull();
        layout.add(
                new RouterLink("Mi perfil", MainView.class),
                new RouterLink("Registrar Administrador", AdminRegistration.class),
                new RouterLink("Gestion de empleados", GestionEmpleados.class),
                new RouterLink("Registrar Empleado", EmployeeRegistration.class),
                new RouterLink("Baja de Usuarios", DeleteUserView.class)

        );


        addToDrawer(
                layout
        );
    }
}

