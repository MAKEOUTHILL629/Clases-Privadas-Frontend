import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { ProfesorPage } from '../page/profesores/profesores.po';
import { browser, by, element, protractor } from 'protractor';

describe('workspace-project Estudiante', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let profesor: ProfesorPage;
  let EC;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    profesor = new ProfesorPage();
    EC = protractor.ExpectedConditions;
    page.navigateTo();
    navBar.clickBotonProfesores();
    profesor.clickVerDetalleProfesor();
  });

  it('Deberia crear tema', ()=> {
    const CANTIDAD_TEMAS = profesor.contarTemas();
    profesor.ingresarCrearTema('Tema Test');
    profesor.clickBotonCrearTema();

    browser.wait(EC.presenceOf
      (element(by.css('body > app-root > app-skeleton > app-profesor-detail > div > div > div:nth-child(1) > ul > li:nth-child(2)')))
      , 1000, 'Esperando la actualizacion de la tabla de temas');

    expect(profesor.contarTemas()).toBeGreaterThan(CANTIDAD_TEMAS);
  });

  it('Deberia Actualizar tema', () => {
    profesor.clickBotonActualizarTema();
    browser.wait(EC.visibilityOf(profesor.getBotonActualizarTemaConfirmar()), 1000, 'Esperando que se observe el modal de actualizar');
    profesor.ingresarActualizarTema('Test Actualizar Tema');
    profesor.clickConfirmarActualizarTema();

    expect(element(by.xpath('/html/body/app-root/app-skeleton/app-profesor-detail/div/div/div[1]/ul/li[2]')).getText()).toEqual('Test Actualizar Tema');
  });


  it('Deberia eliminar tema', () => {
    const CANTIDAD_TEMAS = profesor.contarTemas();
    profesor.clickBotonEliminarTema();
    browser.wait(EC.visibilityOf(profesor.getBotonEliminarTemaConfirmar()), 1000, 'Esperando que se observe el modal de eliminar');
    profesor.clickBotonConfirmarEliminarTema();
    expect(profesor.contarTemas()).toBeLessThan(CANTIDAD_TEMAS);
  });


  it('Deberia crear horario', ()=> {
    const CANTIDAD_HORARIO = profesor.contarHorarios();

    profesor.llenarSelectDiasCrearHorario();
    profesor.llenarHoraCrearHorario();
    profesor.clickBotonCrearHorario();

    browser.wait(EC.presenceOf
      (element(by.css('body > app-root > app-skeleton > app-profesor-detail > div > div > div.col-md-5.mx-1 > table > tbody > tr:nth-child(2)')))
      , 1000, 'Esperando la actualizacion de la tabla de horarios');

    expect(profesor.contarHorarios()).toBeGreaterThan(CANTIDAD_HORARIO);
  });


  it('Deberia Actualizar horario', () => {
    profesor.clickBotonActualizarHorario();
    browser.wait(EC.visibilityOf(profesor.getBotonActualizarHorarioConfirmar()), 1000, 'Esperando que se observe el modal de actualizar');
    profesor.llenarSelectHorarioActualizar();
    profesor.llenarHoraActualizarHorario();
    profesor.clickBotonActualizarHorarioConfirmar();

    expect(element(by.xpath('/html/body/app-root/app-skeleton/app-profesor-detail/div/div/div[2]/table/tbody/tr[2]/th')).getText()).not.toBe('MARTES');
  });


  it('Deberia eliminar tema', () => {
    const CANTIDAD_HORARIO = profesor.contarHorarios();
    profesor.clickBotonEliminarHorario();
    browser.wait(EC.visibilityOf(profesor.getBotonEliminarHorarioConfirmar()), 1000, 'Esperando que se observe el modal de eliminar');
    profesor.clickBotonConfirmarEliminarHorario();
    expect(profesor.contarHorarios()).toBeLessThan(CANTIDAD_HORARIO);
  });

});
