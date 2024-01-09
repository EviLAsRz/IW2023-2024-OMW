package com.IWPhone.PanelUsuarios.view;

import com.IWPhone.Layouts.AppLayout;
import com.IWPhone.Models.ConsumoAuxiliar;
import com.IWPhone.Models.Contract;
import com.IWPhone.Models.LlamadaAuxiliar;
import com.IWPhone.Models.Opciones;
import com.IWPhone.Services.ApiManagerService;
import com.IWPhone.Services.ClientService;
import com.IWPhone.registration.services.ContractService;
import com.IWPhone.security.SecurityService;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.NumberField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import jakarta.annotation.security.RolesAllowed;

import java.time.LocalDate;
import java.util.List;

@Route(value = "consumo", layout = AppLayout.class)
@PageTitle("Consumo")
@RolesAllowed({"USER", "ADMIN"})
public class ConsumoView extends VerticalLayout {

    final ClientService clientService;
    final ContractService contractService;
    final SecurityService securityService;

    final ApiManagerService apiManagerService;

    Grid<LlamadaAuxiliar> gridLlamadas = new Grid<>(LlamadaAuxiliar.class, false);
    Grid<ConsumoAuxiliar> gridConsumo = new Grid<>(ConsumoAuxiliar.class, false);
    NumberField totalLlamadas = new NumberField("Total de llamadas");
    NumberField totalDatos = new NumberField("Total de datos");




    public ConsumoView(ClientService clientService, ContractService contractService, SecurityService securityService, ApiManagerService apiManagerService) {
        this.clientService = clientService;
        this.contractService = contractService;
        this.securityService = securityService;
        this.apiManagerService = apiManagerService;
        populateGridLlamadas();
        populateGridConsumo();

        Notification n = new Notification("El consumo se actualiza cada 24 horas, si tienes alguna duda/reclamacion dirigete a tu seccion de consultas donde nuestros agentes te pueden atender.", 5000);
        n.open();

        add(
                new H1("Desglose del Consumo Actual"),
                new H2("Desglose de llamadas"),
                gridLlamadas,
                new H2("Desglose de datos"),
                gridConsumo,
                new HorizontalLayout(totalLlamadas, totalDatos),
                new HorizontalLayout(),
                new HorizontalLayout()
        );
    }



    public void populateGridLlamadas(){
        String mobilePhone = clientService.getMobilePhoneByDNI(securityService.getAuthenticatedUser().getUsername());
        String landlinePhone = clientService.getLandlineByDNI(securityService.getAuthenticatedUser().getUsername());
        List<LlamadaAuxiliar> llamadasMovil = apiManagerService.desgloseLLamadas(mobilePhone);
        List<LlamadaAuxiliar> llamadasFijo = apiManagerService.desgloseLLamadas(landlinePhone);

        //Metemos todas las llamadas en una lista
        List<LlamadaAuxiliar> totalLlamadas = llamadasMovil;
        totalLlamadas.addAll(llamadasFijo);

        gridLlamadas.setItems(totalLlamadas);
        gridLlamadas.addColumn(LlamadaAuxiliar::getTlfOrigen).setHeader("Telefono Origen");
        gridLlamadas.addColumn(LlamadaAuxiliar::getTlfDestino).setHeader("Telefono Destino");
        gridLlamadas.addColumn(LlamadaAuxiliar::getFecha).setHeader("Fecha");
        gridLlamadas.addColumn(LlamadaAuxiliar::getDuracion).setHeader("Duracion(s)");

    }

    public void populateGridConsumo(){
        String mobilePhone = clientService.getMobilePhoneByDNI(securityService.getAuthenticatedUser().getUsername());
        String landlinePhone = clientService.getLandlineByDNI(securityService.getAuthenticatedUser().getUsername());
        List<ConsumoAuxiliar> consumoMovil = apiManagerService.desgloseConsumo(mobilePhone);
        List<ConsumoAuxiliar> consumoFijo = apiManagerService.desgloseConsumo(landlinePhone);

        //Metemos todas las llamadas en una lista
        List<ConsumoAuxiliar> totalConsumo = consumoMovil;
        totalConsumo.addAll(consumoFijo);

        gridConsumo.setItems(totalConsumo);
        gridConsumo.addColumn(ConsumoAuxiliar::getTelefono).setHeader("Telefono");
        gridConsumo.addColumn(ConsumoAuxiliar::getFecha).setHeader("Fecha");
        gridConsumo.addColumn(ConsumoAuxiliar::getConsumoMb).setHeader("Cantidad (MB)");
    }
}
















