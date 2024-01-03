package com.IWPhone.Services;

import com.IWPhone.Models.Client;
import com.IWPhone.Models.Cliente_Consulta_Empleado;
import com.IWPhone.Models.Consult;
import com.IWPhone.Models.Empleado;
import com.IWPhone.Repositories.ClienteConsultaRepo;
import com.IWPhone.Repositories.ConsultRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.UUID;

@Service
public class ClienteConsultaService {
    private final ClienteConsultaRepo clienteConsultaRepo;
    private final ClientService clienteService;
    private final ConsultRepo consultRepo;
    private final EmpleadoService empleadoService;

    public ClienteConsultaService(ClienteConsultaRepo clienteConsultaRepo, ClientService clienteService, ConsultRepo consultRepo, EmpleadoService empleadoService){
        this.clienteConsultaRepo = clienteConsultaRepo;
        this.consultRepo = consultRepo;
        this.clienteService = clienteService;
        this.empleadoService = empleadoService;
    }

    public void delete(long id){
        clienteConsultaRepo.deleteById(id);
    }

    public void deleteByClienteId(UUID id){
        Cliente_Consulta_Empleado c = clienteConsultaRepo.findByClienteId(id);
        clienteConsultaRepo.delete(c);
    }

    public List<Consult>getConsultasByClienteId(UUID id){
        Cliente_Consulta_Empleado c = clienteConsultaRepo.findByClienteId(id);
        return consultRepo.getAllByClienteId(c.get_cliente());
    }

    public List<Consult>getAllConsultas(){
        return consultRepo.findAll();
    }

    public void setConsulta(String contenido, UUID consultId){
        Consult c = consultRepo.findById(consultId);
        c.setDetails(contenido);
        consultRepo.save(c);
    }

    public void createClienteConsulta(String dniCliente, String dniEmpleado, String detallesConsulta){

        Cliente_Consulta_Empleado c = new Cliente_Consulta_Empleado();

        //El cliente siempre va a existir
        Client cliente = clienteService.getClientByDNI(dniCliente);
        c.set_cliente(cliente.getId());

        //El empleado siempre existe
        Empleado e = empleadoService.getEmpleado(dniEmpleado).get();
        if(empleadoService.getEmpleado(dniEmpleado).isEmpty()) throw new IllegalArgumentException("El empleado no existe");
        c.set_empleado(e.getId());

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
        Map<Client,Consult> clientesConsultasMap = null;
        //Por cada cliente consulta, pillamos el cliente y la consulta y lo metemos en el mapa
        for(Cliente_Consulta_Empleado c : clientesConsultas){
            Client cliente = clienteService.getClientById(c.get_cliente());
            Consult consult = consultRepo.findById(c.get_consulta());
            clientesConsultasMap.put(cliente,consult);
        }
        return clientesConsultasMap;
    }

    public Empleado getLinkedEmployee(UUID id){
        Cliente_Consulta_Empleado c = clienteConsultaRepo.findByClienteId(id);
        return empleadoService.getEmpleadoByUUID(c.get_empleado()).get();
    }



}


















