package com.IWPhone.PanelUsuarios.view;
import com.IWPhone.Layouts.AppLayout;
import com.IWPhone.Models.*;
import com.IWPhone.Services.*;
import com.IWPhone.security.SecurityService;
import com.vaadin.flow.component.accordion.Accordion;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.notification.NotificationVariant;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import jakarta.annotation.security.RolesAllowed;

import java.util.List;
import java.util.Set;

@Route(value = "consultas", layout = AppLayout.class)
@RolesAllowed({"USER","ADMIN"})
@PageTitle("Mis Consultas")
public class CreacionConsultasView extends VerticalLayout {

    private final SecurityService securityService;
    private final ClienteConsultaService clienteConsultaService;
    private final ClientService clienteService;
    private final EmailService emailService;
    private final ApplicationUserService applicationUserService;
    private final EmpleadoService empleadoService;
    private final Button solicitarRevision = new Button("Solicitar revisión");
    private final Button crearConsulta = new Button("Crear consulta");
    private final TextArea detallesConsulta = new TextArea("Detalles de la consulta");
    private final Grid<Consult> grid = new Grid<Consult>(Consult.class, false);
    private final Button eliminarConsulta = new Button("Eliminar consulta");
    private Consult selectedConsult;
    CreacionConsultasView(SecurityService securityService, ClienteConsultaService clienteConsultaService, EmpleadoService empleadoService,
                          ClientService clienteService, EmailService emailService, ApplicationUserService applicationUserService){
        this.securityService = securityService;
        this.applicationUserService = applicationUserService;
        this.clienteConsultaService = clienteConsultaService;
        this.empleadoService = empleadoService;
        this.clienteService = clienteService;
        this.emailService = emailService;
        configLayout();
        configComponentClickEvents();
        //Acordeon
        Accordion accordion = new Accordion();

        H1 name = new H1("Creacion de consultas");


        VerticalLayout personalInformationLayout = new VerticalLayout(name, detallesConsulta, crearConsulta);
        personalInformationLayout.setSpacing(false);
        personalInformationLayout.setPadding(false);

        accordion.add("Creacion de consultas y Peticiones", personalInformationLayout);
        populateGrid();
        add(
                new H1("Mis consultas pendientes"),
                grid,
                new HorizontalLayout(solicitarRevision,eliminarConsulta ),
                accordion
        );
    }

    private void configLayout(){

        //Configuramos el grid
        grid.setSelectionMode(Grid.SelectionMode.MULTI);
        grid.setMaxHeight("800px");
        grid.addColumn(Consult::getDetails).setHeader("Detalles");


        //Configuramos el text area
        detallesConsulta.setWidth("600px");
        detallesConsulta.setHeight("200px");

        //Configuramos el boton de crear consulta


    }


    private void configComponentClickEvents(){
        solicitarRevision.addClickListener(e -> {

            Set<Consult> consultas = grid.getSelectedItems();
            // Check if consultas is not empty
            if(!consultas.isEmpty()){
                for (Consult c: consultas){
                    //Pillamos el contenido de la consulta
                    String contenido = c.getDetails();
                    //Enviamos a un empleado cualquiera que un cliente solicita la revision de su consulta
                    //Generamos un numero aleatorio entre 1 y el numero de empleados que hay
                    //int numeroAleatorio = (int) (Math.random() * empleadoService.getAllEmployees().size() + 1);
                    Empleado empleado = empleadoService.getAllEmployees().get(0);
                    //Enviamos al mail del empleado
                    ApplicationUser user = applicationUserService.getApplicationUser(empleado.get_dni()).get();
                    if(applicationUserService.getApplicationUser(empleado.get_dni()).isPresent()){
                        emailService.sendCustomEmail(user.getEmail(), "Solicitud de revision de consulta",
                                "Un cliente ha solicitado la revision de su consulta"
                                        + "\n" + "Detalles de la consulta: " + contenido
                                        + "\n" + "Para ver la consulta, acceda al panel de empleados");
                    }

                    Notification n = new Notification("Se ha enviado la solicitud de revision de consulta al empleado " + empleado.get_dni(), 3000);
                    n.addThemeVariants(NotificationVariant.LUMO_SUCCESS);
                    n.open();
                }
            }else{
                Notification n = new Notification("No se ha seleccionado ninguna consulta", 3000);
                n.addThemeVariants(NotificationVariant.LUMO_ERROR);
                n.open();
            }
        });

        //Crear Consulta
        crearConsulta.addClickListener(e -> {//Error No value present.
            //Pillamos el contenido de la consulta
            String contenido = detallesConsulta.getValue();
            //Pillamos el client id del usuario logeado
            String dniUsuario = securityService.getAuthenticatedUser().getUsername();
            //Pillamos el empleado id del usuario logeado
            Client cliente = clienteService.getClientByDNI(dniUsuario);
            //Creamos la consulta
            clienteConsultaService.createClienteConsulta(cliente.getDNI(), contenido);
            //Notificamos al usuario
            Notification n = new Notification("Se ha creado la consulta", 3000);
            n.addThemeVariants(NotificationVariant.LUMO_SUCCESS);
            n.open();
            //Actualizamos el grid
            populateGrid();
        });

        //Eliminar Consulta
        eliminarConsulta.addClickListener(e -> {
            //Eliminamos las consultas seleccionadas
            Set<Consult> consultas = grid.getSelectedItems();
            // Check if consultas is not empty
            if (!consultas.isEmpty()) {
                //Eliminamos
                for(Consult c : consultas){
                    clienteConsultaService.delete(c);
                }
                populateGrid();
            }
            //Notificamos al usuario
            Notification n = new Notification("Se han eliminados las consultas seleccionadas", 3000);
            n.addThemeVariants(NotificationVariant.LUMO_SUCCESS);
            n.open();
            //Actualizamos el grid
            populateGrid();
        });





    }

    private void populateGrid(){
        //Pillamos el client id del usuario logeado
        String dniUsuario = securityService.getAuthenticatedUser().getUsername();
        //Pillamos el empleado id del usuario logeado
        Client cliente = clienteService.getClientByDNI(dniUsuario);
        List<Consult> consultas = clienteConsultaService.getAllUnansweredConsults(cliente.getId());
        //Pillamos las consultas del cliente que esten abierta
        grid.setItems(consultas);

    }



}
















