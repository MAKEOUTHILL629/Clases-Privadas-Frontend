import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { EstudiantePage } from '../page/estudiantes/estudiantes.po';
import { browser, by, element, protractor } from 'protractor';

describe('workspace-project Estudiante', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let estudiante: EstudiantePage;
  let EC;
  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    estudiante = new EstudiantePage();
    EC = protractor.ExpectedConditions;
    page.navigateTo();
    navBar.clickBotonEstudiantes();
    estudiante.clickVerDetallerUsuario();
  });

  it('Deberia crear clase', () => {


    const CANTIDAD_CLASES = estudiante.contarClases();
    estudiante.clickOpcionesProfesores();
    estudiante.clickOpcionUnoProfesores();

    // Ingresar una fecha en el campo de tipo fecha
    estudiante.ingresarFechaCrearClase(' ');
    estudiante.oprimirFlechaAlLadoCampoFecha();
    estudiante.oprimirFlechaAlLadoCampoFecha();
    estudiante.oprimirFlechaAlLadoCampoFecha();
    estudiante.oprimirFlechaAbajoCampoFecha();
    estudiante.oprimirFlechaAbajoCampoFecha();
    estudiante.oprimirFlechaAbajoCampoFecha();


    estudiante.oprimirEnter();
    estudiante.clickCrearClase();
    browser.wait(EC.presenceOf
      (element(by.css('body > app-root > app-skeleton > app-estudiante-detail > div > div > div.col-md-8.mx-1 > table > tbody > tr:nth-child(2)')))
      , 1000, 'Esperando la actualizacion de la tabla');


    expect(estudiante.contarClases()).toBeGreaterThan(CANTIDAD_CLASES);
  });

  it('Deberia Actualizar Clase', () => {
    estudiante.clickActualizarClase();
    browser.wait(EC.visibilityOf(estudiante.getBotonActualizarConfirmar()), 1000, 'Esperando que se observe el modal de actualizar');
    estudiante.clickProfesorActualizarSelect();
    estudiante.clickOpcionDosActualizar();
    estudiante.rellenarInputFechaActualizar();
    estudiante.clickConfirmarActualizar();

    expect(element(by.xpath('/html/body/app-root/app-skeleton/app-estudiante-detail/div/div/div[2]/table/tbody/tr/th')).getText()).toEqual('Denton Copeland');
  });

  it('Deberia eliminar clase', () => {

    const CANTIDAD_CLASES = estudiante.contarClases();
    estudiante.clickBotonEliminarClase();
    browser.wait(EC.visibilityOf(estudiante.getBotonConfirmarEliminarClase()), 1000, ' Deberia aparecer');
    estudiante.clickConfirmarEliminarClase();

    expect(estudiante.contarClases()).toBeLessThan(CANTIDAD_CLASES);
  });



});

