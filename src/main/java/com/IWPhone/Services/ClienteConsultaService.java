package com.IWPhone.Services;

import com.IWPhone.Models.Client;
import com.IWPhone.Models.Cliente_Consulta_Empleado;
import com.IWPhone.Models.Consult;
import com.IWPhone.Models.Empleado;
import com.IWPhone.Repositories.ClienteConsultaRepo;
import com.IWPhone.Repositories.ConsultRepo;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ClienteConsultaService {
    private final ClienteConsultaRepo clienteConsultaRepo;
    private final ClientService clienteService;
    private final ConsultRepo consultRepo;
    private final EmpleadoService empleadoService;
    private final ApplicationUserService applicationUserService;
    private final EmailService emailService;

    public ClienteConsultaService(ClienteConsultaRepo clienteConsultaRepo, ClientService clienteService, ConsultRepo consultRepo,
                                  EmpleadoService empleadoService, ApplicationUserService applicationUserService, EmailService emailService){
        this.clienteConsultaRepo = clienteConsultaRepo;
        this.emailService = emailService;
        this.applicationUserService = applicationUserService;
        this.consultRepo = consultRepo;
        this.clienteService = clienteService;
        this.empleadoService = empleadoService;
    }

    public void delete(Consult c){
        consultRepo.delete(c);
        //Buscamos el cliente consulta que tenga la consulta que queremos borrar
        Cliente_Consulta_Empleado cce = clienteConsultaRepo.findBy_consulta(c.getId());
        //Borramos el cliente consulta
        clienteConsultaRepo.delete(cce);

    }


    public List<Consult>getConsultasByClienteId(UUID id){
        List<Cliente_Consulta_Empleado> c = clienteConsultaRepo.findBy_cliente(id);
        List<Consult> consults = new ArrayList<>();
        for(Cliente_Consulta_Empleado cce : c){
            consults.add(consultRepo.findById(cce.get_consulta()));
        }
        return consults;
    }

    public List<Consult>getConsultasByEmpleadoId(UUID id){
        List<Cliente_Consulta_Empleado> c = clienteConsultaRepo.findBy_empleado(id);
        List<Consult> consults = new ArrayList<>();
        for(Cliente_Consulta_Empleado cce : c){
            consults.add(consultRepo.findById(cce.get_consulta()));
        }
        return consults;
    }

    public List<Consult>getAllConsultas(){
        return consultRepo.findAll();
    }

    public void setConsulta(String contenido, UUID consultId){
        Consult c = consultRepo.findById(consultId);
        c.setDetails(contenido);
        consultRepo.save(c);
    }

    public void createClienteConsulta(String dniCliente, String detallesConsulta){

        Cliente_Consulta_Empleado c = new Cliente_Consulta_Empleado();

        //El cliente siempre va a existir
        Client cliente = clienteService.getClientByDNI(dniCliente);
        c.set_cliente(cliente.getId());
        c.setAnswered(false);

        //El empleado no es necesario poner el empleado, ya que se asigna a cerrar la consulta

        //Creamos y guardamos los detalles de la consulta
        Consult consult = new Consult();
        consult.setDetails(detallesConsulta);
        consultRepo.save(consult);
        c.set_consulta(consult.getId());

        //Guardamos la relacion cliente consulta
        clienteConsultaRepo.save(c);

    }

    public Map<Client,Consult> getAllLinkedEmployeesConsult(){
        //Pillamos todos los clientes que tienen consultas
        List<Cliente_Consulta_Empleado> clientesConsultas = clienteConsultaRepo.findAll();
        //Creamos un mapa para guardar los clientes y sus consultas
        Map<Client,Consult> clientesConsultasMap = new HashMap<>();
        //Por cada cliente consulta, pillamos el cliente y la consulta y lo metemos en el mapa
        for(Cliente_Consulta_Empleado c : clientesConsultas){
            Client cliente = clienteService.getClientById(c.get_cliente());
            Consult consult = consultRepo.findById(c.get_consulta());
            clientesConsultasMap.put(cliente,consult);
        }
        return clientesConsultasMap;
    }

    public Empleado getLinkedEmployee(UUID id){
        Cliente_Consulta_Empleado c = clienteConsultaRepo.findById(id);
        return empleadoService.getEmpleadoByUUID(c.get_empleado()).get();
    }

    public List<Consult> getAllUnansweredConsults(UUID clienteId){

        List<Consult> consults = new ArrayList<>();
        List<Cliente_Consulta_Empleado> cces = clienteConsultaRepo.findBy_clienteAndAnswered(clienteId,false);
        for(Cliente_Consulta_Empleado cce : cces){
            consults.add(consultRepo.findById(cce.get_consulta()));
        }
        return consults;

    }


    public void setAnswered(UUID id, boolean answered){
        Cliente_Consulta_Empleado c = clienteConsultaRepo.findBy_consulta(id);
        c.setAnswered(answered);
        clienteConsultaRepo.save(c);
    }

    public void sendMailToCliente(UUID id){
        Cliente_Consulta_Empleado c = clienteConsultaRepo.findById(id);
        Client cliente = clienteService.getClientById(c.get_cliente());
        Consult consult = consultRepo.findById(c.get_consulta());
        String email = applicationUserService.getMail(cliente.getDNI());
        String subject = "Respuesta a su consulta";
        String body = "Su consulta: " + consult.getDetails() + " ha sido respondida";
        emailService.sendCustomEmail(email, subject, body);
    }

    public List<Consult>getUnasweredConsults(){
        List<Consult> consults = new ArrayList<>();
        List<Cliente_Consulta_Empleado> cces = clienteConsultaRepo.findByAnsweredIsFalse();
        for(Cliente_Consulta_Empleado cce : cces){
            consults.add(consultRepo.findById(cce.get_consulta()));
        }
        return consults;
    }


}


















