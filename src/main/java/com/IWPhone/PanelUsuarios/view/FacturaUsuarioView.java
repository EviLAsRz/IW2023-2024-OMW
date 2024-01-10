package com.IWPhone.PanelUsuarios.view;

import com.IWPhone.Layouts.AppLayout;
import com.IWPhone.Models.ConsumoAuxiliar;
import com.IWPhone.Models.LlamadaAuxiliar;
import com.IWPhone.Models.Opciones;
import com.IWPhone.Services.ApiManagerService;
import com.IWPhone.Services.ClientService;
import com.IWPhone.Services.PdfService;
import com.IWPhone.registration.services.ContractService;
import com.IWPhone.security.SecurityService;
import com.vaadin.flow.component.*;
import com.vaadin.flow.component.button.Button;

import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.NumberField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.VaadinService;
import jakarta.annotation.security.RolesAllowed;
import org.aspectj.weaver.ast.Not;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Route(value = "factura", layout = AppLayout.class)
@PageTitle("Facturas")
@RolesAllowed({"USER", "ADMIN"})
public class FacturaUsuarioView extends VerticalLayout {

    final ClientService clientService;
    final ContractService contractService;
    final SecurityService securityService;
    final PdfService pdfService;
    final ApiManagerService apiManagerService;
    Grid<LlamadaAuxiliar> gridLlamadas = new Grid<>(LlamadaAuxiliar.class, false);
    Grid<ConsumoAuxiliar> gridConsumo = new Grid<>(ConsumoAuxiliar.class, false);
    NumberField totalLlamadas = new NumberField("Total de llamadas");
    NumberField totalDatos = new NumberField("Total de datos");
    Button imprimirFactura = new Button("Imprimir factura");




    public FacturaUsuarioView(ClientService clientService, ContractService contractService, SecurityService securityService,
                              ApiManagerService apiManagerService, PdfService pdfService) {
        this.clientService = clientService;
        this.pdfService = pdfService;
        this.contractService = contractService;
        this.securityService = securityService;
        this.apiManagerService = apiManagerService;

        if(this.contractService.getStartDate(securityService.getAuthenticatedUser().getUsername()) == null) {
            add(new Span("No tienes un contrato activo, no puedes acceder a esta seccion, espera a que un empleado te valide el contrato"));
        }else {

            populateGridLlamadas();
            populateGridConsumo();
            fetchData();

            //Ajustamos el grid para que la altura sea siempre la maxima en funcion a sus elementos
            gridLlamadas.setAllRowsVisible(true);
            gridConsumo.setAllRowsVisible(true);

            Notification n = new Notification("Se muestra la factura de este mes, si lo prefiere seleccione un rango distinto.", 5000);
            n.open();
            NumberField gastoTotal = new NumberField("Gasto total");
            gastoTotal.setValue(totalLlamadas.getValue() + totalDatos.getValue());
            gastoTotal.setSuffixComponent(new Span("EUR"));
            gastoTotal.setReadOnly(true);
            NumberField gastoTotalConIVA = new NumberField("Gasto total con IVA");
            gastoTotalConIVA.setValue(gastoTotal.getValue() * 1.21);
            BigDecimal bd = BigDecimal.valueOf(gastoTotalConIVA.getValue()).setScale(4, BigDecimal.ROUND_HALF_UP);
            gastoTotalConIVA.setValue(bd.doubleValue());
            gastoTotalConIVA.setSuffixComponent(new Span("EUR"));
            gastoTotalConIVA.setReadOnly(true);
            imprimirFactura.addClickListener(e -> {
                UI.getCurrent().getPage().executeJs("window.print();");
                Notification n2 = new Notification("Se ha enviado la factura a su impresora", 5000);
                n2.open();
            });


            add(
                    new H1("Factura del mes actual"),

                    new H2("Desglose de llamadas"),
                    gridLlamadas,
                    new H2("Desglose de datos"),
                    gridConsumo,
                    new HorizontalLayout(totalLlamadas, totalDatos, gastoTotal, gastoTotalConIVA),
                    imprimirFactura

            );
        }
    }

    public void fetchData(){

        //Obtenemos los telefonos vinculados al cliente
        String mobilePhone = clientService.getMobilePhoneByDNI(securityService.getAuthenticatedUser().getUsername());
        String landlinePhone = clientService.getLandlineByDNI(securityService.getAuthenticatedUser().getUsername());

        //Obtenemos los datos del consumo de la api
        //Obtenemos el mes actual usando Localdate
        String month = LocalDate.now().getMonth().toString();
        String year = LocalDate.now().getYear() + "";

        //Creamnos las fehcas de inicio y fin del mes actual, en formato YYYY-MM-dd
        String startDate = year + "-" + month + "-01";
        String endDate ;
        if(month.equals("FEBRUARY")){
            endDate = year + "-" + month + "-28";
        }
        else if(month.equals("APRIL") || month.equals("JUNE") || month.equals("SEPTEMBER") || month.equals("NOVEMBER")){
            endDate = year + "-" + month + "-30";
        }else {
            endDate = year + "-" + month + "-31";
        }

        //Obtenemos el consumo de llamadas, datos y sms por cada linea telefonica
        Integer iNumeroLlamadasMovil = apiManagerService.getCallsConsumption(mobilePhone, startDate, endDate);
        Integer iNumeroLlamadasFijo = apiManagerService.getCallsConsumption(landlinePhone, startDate, endDate);

        Double dConsumoDatosMovil = apiManagerService.getDataConsumption(mobilePhone, startDate, endDate);
        Double dConsumoDatosFijo = apiManagerService.getDataConsumption(landlinePhone, startDate, endDate);

        //Obtenemos el coste de cada llamada, sms y gb de datos
        Double dCosteLlamada = contractService.getPricePerCall(securityService.getAuthenticatedUser().getUsername());
        Double dCosteDatos = contractService.getPricePerGb(securityService.getAuthenticatedUser().getUsername());


        //Obtenemos las opciones vinculadas al contrato del cliente
        Opciones opciones = contractService.getLinkedOptionsToContract(securityService.getAuthenticatedUser().getUsername());


        //Calculamos el consumo total de llamadas, datos y sms usando el descuento por gb de datos y llamadas
        double dTotalLlamadas = (iNumeroLlamadasMovil + iNumeroLlamadasFijo) * dCosteLlamada * (1 - opciones.get_descuentoLlamada());
        double dTotalDatos = (dConsumoDatosMovil + dConsumoDatosFijo) * dCosteDatos * (1 - opciones.get_descuentoGB());
        if(dTotalLlamadas < 0){
            dTotalLlamadas = 0.0;
        }
        if(dTotalDatos < 0){
            dTotalDatos = 0.0;
        }
        //Mostramos los datos en los campos de texto
        totalLlamadas.setValue(dTotalLlamadas);
        totalLlamadas.setReadOnly(true);
        //totalLlamadas.setWidth("400px");
        totalLlamadas.setSuffixComponent(new Span("EUR"));

        totalDatos.setValue(dTotalDatos);
        totalDatos.setReadOnly(true);
        //totalDatos.setWidth("400px");
        totalDatos.setSuffixComponent(new Span("EUR"));

    }

    public void populateGridLlamadas(){
        String mobilePhone = clientService.getMobilePhoneByDNI(securityService.getAuthenticatedUser().getUsername());
        String landlinePhone = clientService.getLandlineByDNI(securityService.getAuthenticatedUser().getUsername());
        List<LlamadaAuxiliar> llamadasMovil = apiManagerService.desgloseLLamadas(mobilePhone);
        List<LlamadaAuxiliar> llamadasFijo = apiManagerService.desgloseLLamadas(landlinePhone);

        //Metemos todas las llamadas en una lista
        llamadasMovil.addAll(llamadasFijo);

        gridLlamadas.setItems(llamadasMovil);
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
        consumoMovil.addAll(consumoFijo);

        gridConsumo.setItems(consumoMovil);
        gridConsumo.addColumn(ConsumoAuxiliar::getTelefono).setHeader("Telefono");
        gridConsumo.addColumn(ConsumoAuxiliar::getFecha).setHeader("Fecha");
        gridConsumo.addColumn(ConsumoAuxiliar::getConsumoMb).setHeader("Cantidad (MB)");
    }



}
















