package com.IWPhone.PanelEmpleados.view;
import com.IWPhone.Models.Client;
import com.IWPhone.Layouts.AppLayout;
import com.IWPhone.Services.ClientService;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.notification.NotificationVariant;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import jakarta.annotation.security.RolesAllowed;

@Route(value = "mobileNumbers", layout = AppLayout.class)
@PageTitle("Gestión de números de teléfono")
@RolesAllowed("ROLE_EMPLOYEE")
public class GestionNumeros extends VerticalLayout {

    private final ClientService clientService;
    Grid<Client> grid = new Grid<>(Client.class, false);
    Button eliminarTelefono = new Button("Eliminar teléfono");
    Button modificarTelefonoMovil = new Button("Modificar teléfono móvil");
    Button modificarTelefonoFijo = new Button("Modificar teléfono fijo");
    TextField numeroMovil = new TextField();
    TextField numeroFijo = new TextField();

    Button generarTelefono = new Button("Generar teléfono nuevo");
    GestionNumeros(ClientService clientService){
        this.clientService = clientService;
        //Set grid
        configureGrid();
        populateGrid();
        configButtons();
        //Actualizamos el valor de los campos de texto con los valores del cliente seleccionado.
        grid.asSingleSelect().addValueChangeListener(event -> {
            numeroMovil.setValue(grid.asSingleSelect().getValue().getMobilePhone());
            numeroFijo.setValue(grid.asSingleSelect().getValue().getLandline());
        });


        add(
                new H1("Gestión de números de telefono de los clientes."),
                grid,
                new HorizontalLayout(numeroMovil, modificarTelefonoMovil),//TODO: HACERLO CON FORM
                new HorizontalLayout(numeroFijo, modificarTelefonoFijo),
                new HorizontalLayout(generarTelefono)
        );
    }


    void populateGrid(){
        grid.setItems(clientService.getAll());
    }

    void configureGrid(){
        grid.addColumn(Client::getDNI).setHeader("DNI");
        grid.addColumn(Client::getMobilePhone).setHeader("Teléfono móvil");
        grid.addColumn(Client::getLandline).setHeader("Teléfono fijo");
    }

    void configButtons(){
       //Cliente seleccionado

        //Eliminar teléfono
        eliminarTelefono.addClickListener(e -> {

            clientService.setMobilePhoneByDNI(grid.asSingleSelect().getValue().getDNI(), null);
            Notification n = new Notification("Teléfono móvil eliminado, RECUERDA AGREGAR UN TELEFONO!!!", 3000);
            n.addThemeVariants(NotificationVariant.LUMO_ERROR);
            n.open();
            populateGrid();
        });

        //Modificar teléfono a eleccion.
        modificarTelefonoMovil.addClickListener(e -> {
           //Comprobamos que este seleccionado un cliente.
              if(grid.asSingleSelect().getValue() == null) {
                  Notification n = new Notification("Debes seleccionar un cliente para modificar su teléfono", 3000);
                  n.addThemeVariants(NotificationVariant.LUMO_ERROR);
                  n.open();
              }else{
                  if(numeroMovil.getValue() == null){
                      Notification n = new Notification("Debes introducir un número de teléfono", 3000);
                      n.addThemeVariants(NotificationVariant.LUMO_ERROR);
                      n.open();
                  }
                  if(numeroMovil.getValue().length() != 9 && numeroMovil.getValue().length() != 13){
                      Notification n = new Notification("El número de teléfono debe tener 9 dígitos, tiene "+ numeroMovil.getValue().length(), 3000);
                      n.addThemeVariants(NotificationVariant.LUMO_ERROR);
                      n.open();
                  }

                  if(clientService.telefonoExiste(numeroMovil.getValue())){
                      Notification n = new Notification("El número de teléfono ya está en uso", 3000);
                      n.addThemeVariants(NotificationVariant.LUMO_ERROR);
                      n.open();
                  }else{
                      clientService.setMobilePhoneByDNI(grid.asSingleSelect().getValue().getDNI(), numeroMovil.getValue());
                      Notification n = new Notification("Teléfono móvil modificado", 3000);
                      n.addThemeVariants(NotificationVariant.LUMO_SUCCESS);
                      n.open();
                      populateGrid();
                  }
              }
        });

        //Modificar telefono fijo, hacer exactamente lo mismo que con el movil.
        modificarTelefonoFijo.addClickListener(e -> {
            //Comprobamos que este seleccionado un cliente.
            if(grid.asSingleSelect().getValue() == null) {
                Notification n = new Notification("Debes seleccionar un cliente para modificar su teléfono", 3000);
                n.addThemeVariants(NotificationVariant.LUMO_ERROR);
                n.open();
            }else{
                if(numeroFijo.getValue() == null){
                    Notification n = new Notification("Debes introducir un número de teléfono", 3000);
                    n.addThemeVariants(NotificationVariant.LUMO_ERROR);
                    n.open();
                }
                if(numeroFijo.getValue().length() != 9 && numeroFijo.getValue().length() != 13){
                    Notification n = new Notification("El número de teléfono debe tener 9 o 13 dígitos", 3000);
                    n.addThemeVariants(NotificationVariant.LUMO_ERROR);
                    n.open();
                }
                if(clientService.telefonoExiste(numeroFijo.getValue())){
                    Notification n = new Notification("El número de teléfono ya está en uso", 3000);
                    n.addThemeVariants(NotificationVariant.LUMO_ERROR);
                    n.open();
                }else{
                    clientService.setLandlineByDNI(grid.asSingleSelect().getValue().getDNI(), numeroFijo.getValue());
                    Notification n = new Notification("Teléfono fijo modificado", 3000);
                    n.addThemeVariants(NotificationVariant.LUMO_SUCCESS);
                    n.open();
                    populateGrid();
                }
            }
        });

        //Generar teléfono nuevo de forma aleatoria.
        generarTelefono.addClickListener(e -> {
            //Comprobamos que este seleccionado un cliente.
            if(grid.asSingleSelect().getValue() == null) {
                Notification n = new Notification("Debes seleccionar un cliente para modificar su teléfono", 3000);
                n.addThemeVariants(NotificationVariant.LUMO_ERROR);
                n.open();
            }else{
                //Generamos un número de teléfono aleatorio.
                String sMobileNumber = ClientService.generateMobileNumber();
                String sLandlineNumber = ClientService.generateLandlineNumber();
                clientService.setMobilePhoneByDNI(grid.asSingleSelect().getValue().getDNI(), sMobileNumber);
                clientService.setLandlineByDNI(grid.asSingleSelect().getValue().getDNI(), sLandlineNumber);
                //Las comprobaciones se hacen dentro del generador de números de teléfono.
                Notification n = new Notification("Teléfono móvil generado: " + sMobileNumber + " Teléfono fijo generado: " + sLandlineNumber, 3000);
                n.addThemeVariants(NotificationVariant.LUMO_SUCCESS);
                n.open();
                populateGrid();
            }
        });

    }

    //TODO: Metodos para eliminar, agregar y modificar números de teléfono.

}




















