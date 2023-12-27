
import com.IWPhone.Models.Departamento;
import com.IWPhone.Models.Empleado;
import com.IWPhone.Repositories.EmployeeRepo;
import com.IWPhone.Services.DepartamentoService;
import com.IWPhone.Services.EmpleadoService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest(classes = IwBankApplicationTests.class)
public class EmpleadoServiceTest {

    @MockBean
    private EmployeeRepo empleadoRepo;

    private EmpleadoService empleadoService;

    private DepartamentoService departamentoService;

    @BeforeEach
    void setup() {
        empleadoService = new EmpleadoService(empleadoRepo,departamentoService);
    }

    @Test
    void testAddEmpleado() {
        // Creamos un Empleado con los datos de prueba
        Empleado empleado = new Empleado();
        empleado.set_dni("test");
        empleado.set_tDepartamento(UUID.randomUUID());

        // Configuramos el mock para devolver el Empleado cuando se llame a findBy_dni
        Mockito.when(empleadoRepo.findBy_dni("test")).thenReturn(Optional.of(empleado));

        // Llamamos al método que queremos probar
        Optional<Empleado> result = empleadoService.getEmpleado("test");

        // Verificamos que el resultado es el esperado
        assertTrue(result.isPresent());
        assertEquals("test", result.get().get_dni());

    }

    @Test
    void testGetEmpleado() {
        // Creamos un Empleado con los datos de prueba
        Empleado empleado = new Empleado();
        empleado.set_dni("test");
        empleado.set_tDepartamento(UUID.randomUUID());

        // Configuramos el mock para devolver el Empleado cuando se llame a findBy_dni
        Mockito.when(empleadoRepo.findBy_dni("test")).thenReturn(Optional.of(empleado));

        // Llamamos al método que queremos probar
        Optional<Empleado> result = empleadoService.getEmpleado("test");

        // Verificamos que el resultado es el esperado
        assertTrue(result.isPresent());
        assertEquals("test", result.get().get_dni());

    }

    @Test
    void testCreateEmpleado(){
        Empleado empleado = new Empleado();
        empleado.set_dni("test");
        empleado.set_tDepartamento(UUID.randomUUID());
        Mockito.when(empleadoRepo.findBy_dni("test")).thenReturn(Optional.of(empleado));
        Optional<Empleado> result = empleadoService.getEmpleado("test");
        assertTrue(result.isPresent());
    }

    @Test
    void testUpdateEmpleado(){
        Empleado empleado = new Empleado();
        empleado.set_dni("test");
        UUID uuid1 = UUID.randomUUID();
        UUID uuid2 = UUID.randomUUID();
        empleado.set_tDepartamento(uuid1);
        Mockito.when(empleadoRepo.findBy_dni("test")).thenReturn(Optional.of(empleado));
        Mockito.when(empleadoRepo.save(empleado)).thenReturn(empleado);
        //Hacemos el update del empleado
        empleadoService.updateEmpleado("test", uuid2);

        //Comprobamos que el empleado ha sido actualizado
        Optional<Empleado> result = empleadoService.getEmpleado("test");
        assertTrue(result.isPresent());//Existe el empleado
        assertEquals(uuid2, result.get().get_tDepartamento());//El departamento es el nuevo


    }



}
























