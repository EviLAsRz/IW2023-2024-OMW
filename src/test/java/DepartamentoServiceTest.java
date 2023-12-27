import com.IWPhone.Models.Departamento;
import com.IWPhone.Repositories.DepartamentoRepo;
import com.IWPhone.Services.DepartamentoService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest(classes = IwBankApplicationTests.class)
public class DepartamentoServiceTest {

    @MockBean
    private DepartamentoRepo departamentoRepo;

    private DepartamentoService departamentoService;

    @BeforeEach
    void setup() {
        departamentoService = new DepartamentoService(departamentoRepo);
    }

    @Test
    void testGetDepartamentoByNombre() {
        // Creamos un Departamento con los datos de prueba
        Departamento departamento = new Departamento();
        departamento.setNombre("test");

        // Configuramos el mock para devolver el Departamento cuando se llame a findByNombre
        Mockito.when(departamentoRepo.findByNombre("test")).thenReturn(Optional.of(departamento));

        // Llamamos al método que queremos probar
        Departamento result = departamentoService.getDepartamentoByNombre("test");

        // Verificamos que el resultado es el esperado
        assertTrue(result.equals(departamento));

    }

    @Test
    void testSetNombreDepartamento(){
        // Creamos un Departamento con los datos de prueba
        Departamento departamento = new Departamento();
        departamento.setNombre("test");

        // Configuramos el mock para devolver el Departamento cuando se llame a findByNombre
        Mockito.when(departamentoRepo.findByNombre("test")).thenReturn(Optional.of(departamento));

        // Llamamos al método que queremos probar
        departamentoService.setNombre("test", "test2");

        // Verificamos que el resultado es el esperado
        assertTrue(departamento.getNombre().equals("test2"));
    }

    @Test
    void testGetAllDepartamento(){
        // Creamos un Departamento con los datos de prueba
        Departamento departamento = new Departamento();
        departamento.setNombre("test");
        Departamento[] departamentos = new Departamento[1];
        departamentos[0] = departamento;

        // Configuramos el mock para devolver el Departamento cuando se llame a findByNombre
        Mockito.when(departamentoRepo.findAll()).thenReturn(List.of(departamentos));

        // Llamamos al método que queremos probar
        Departamento[] result = departamentoService.getAllDepartamentos();

        // Verificamos que el resultado es el esperado
        assertTrue(result[0].equals(departamento));
    }

    @Test
    void testAddDepartamento(){
        // Creamos un Departamento con los datos de prueba
        Departamento departamento = new Departamento();
        departamento.setNombre("test");

        // Configuramos el mock para devolver el Departamento cuando se llame a findByNombre
        Mockito.when(departamentoRepo.save(departamento)).thenReturn(departamento);

        // Llamamos al método que queremos probar
        departamentoService.addDepartamento(departamento);

        // Verificamos que el resultado es el esperado
        assertTrue(departamento.getNombre().equals("test"));
    }

    @Test
    void testGetNombresDepartamentos(){
        // Creamos un Departamento con los datos de prueba
        Departamento departamento = new Departamento();
        departamento.setNombre("test");
        List<String> departamentos = List.of("test");

        // Configuramos el mock para devolver el Departamento cuando se llame a findByNombre
        Mockito.when(departamentoRepo.findAll()).thenReturn(List.of(departamento));

        // Llamamos al método que queremos probar
        List<String> result = departamentoService.getNombresDepartamentos();

        // Verificamos que el resultado es el esperado
        assertTrue(result.equals(departamentos));
    }

    @Test
    void testGetDepartamentoByUUID(){
        // Creamos un Departamento con los datos de prueba
        Departamento departamento = new Departamento();
        departamento.setNombre("test");

        // Configuramos el mock para devolver el Departamento cuando se llame a findByNombre
        Mockito.when(departamentoRepo.findById(departamento.getId())).thenReturn(Optional.of(departamento));

        // Llamamos al método que queremos probar
        Optional<Departamento> result = departamentoService.getDepartamentoByUUID(departamento.getId());

        // Verificamos que el resultado es el esperado
        assertTrue(result.equals(Optional.of(departamento)));
    }

}

























