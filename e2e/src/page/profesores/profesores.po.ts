import { by, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';

export class ProfesorPage {
  private linkClickSegundoProfesor = element(
    by.xpath(
      '/html/body/app-root/app-skeleton/app-profesor-list/div/div[2]/app-card-profesor[2]/div/div'
    )
  );
  private inputCrearTema = element(
    by.xpath(
      '/html/body/app-root/app-skeleton/app-profesor-detail/div/div/div[1]/ul/app-crear-tema/form/div/input'
    )
  );
  private botonCrearTema = element(by.xpath('//*[@id="button-addon"]'));
  private listarTemas = element.all(
    by.css(
      'body > app-root > app-skeleton > app-profesor-detail > div > div > div:nth-child(1) > ul > li'
    )
  );
  private listarHorarios = element.all(by.css('tr'));
  private botonActualizarTema = element(
    by.css(
      'body > app-root > app-skeleton > app-profesor-detail > div > div > div:nth-child(1) > ul > li:nth-child(2) > app-actualizar-tema > button'
    )
  );
  private inputActualizarTema = element(
    by.css(
      'body > app-root > app-skeleton > app-profesor-detail > div > div > div:nth-child(1) > ul > li:nth-child(2) > app-actualizar-tema > div > div > div > form > div.modal-body > input'
    )
  );
  private botonActualizarTemaConfirmar = element(
    by.css(
      'body > app-root > app-skeleton > app-profesor-detail > div > div > div:nth-child(1) > ul > li:nth-child(2) > app-actualizar-tema > div > div > div > form > div.modal-footer > button.btn.btn-primary'
    )
  );
  private botonEliminarTema = element(
    by.css(
      'body > app-root > app-skeleton > app-profesor-detail > div > div > div:nth-child(1) > ul > li:nth-child(2) > app-eliminar-tema > button'
    )
  );
  private botonEliminarTemaConfirmar = element(
    by.css(
      'body > app-root > app-skeleton > app-profesor-detail > div > div > div:nth-child(1) > ul > li:nth-child(2) > app-eliminar-tema > div > div > div > div.modal-footer > button.btn.btn-primary'
    )
  );
  private selectDiasCrearHorario = element(
    by.css(
      'body > app-root > app-skeleton > app-profesor-detail > div > div > div.col-md-5.mx-1 > app-crear-horario > form > div > div > select'
    )
  );
  private inputHoraCrearHorario = element(
    by.css(
      'body > app-root > app-skeleton > app-profesor-detail > div > div > div.col-md-5.mx-1 > app-crear-horario > form > div > input'
    )
  );
  private botonCrearHorario = element(
    by.xpath(
      '/html/body/app-root/app-skeleton/app-profesor-detail/div/div/div[2]/app-crear-horario/form/div/button'
    )
  );
  private botonActualizarHorario = element(
    by.css(
      'body > app-root > app-skeleton > app-profesor-detail > div > div > div.col-md-5.mx-1 > table > tbody > tr:nth-child(2) > td:nth-child(4) > app-actualizar-horario > button'
    )
  );
  private selectDiasActualizarHorario = element(
    by.css(
      'body > app-root > app-skeleton > app-profesor-detail > div > div > div.col-md-5.mx-1 > table > tbody > tr:nth-child(2) > td:nth-child(4) > app-actualizar-horario > div > div > div > form > div.modal-body > select'
    )
  );
  private inputHorarActualizarHorario = element(
    by.css(
      'body > app-root > app-skeleton > app-profesor-detail > div > div > div.col-md-5.mx-1 > table > tbody > tr:nth-child(2) > td:nth-child(4) > app-actualizar-horario > div > div > div > form > div.modal-body > input'
    )
  );
  private botonActualizarHorarioConfirmar = element(
    by.css(
      'body > app-root > app-skeleton > app-profesor-detail > div > div > div.col-md-5.mx-1 > table > tbody > tr:nth-child(2) > td:nth-child(4) > app-actualizar-horario > div > div > div > form > div.modal-footer > button.btn.btn-primary'
    )
  );
  private botonEliminarHorario = element(
    by.css(
      'body > app-root > app-skeleton > app-profesor-detail > div > div > div.col-md-5.mx-1 > table > tbody > tr:nth-child(2) > td:nth-child(3) > app-eliminar-horario > button'
    )
  );
  private botonEliminarHorarioConfirmar = element(
    by.css(
      'body > app-root > app-skeleton > app-profesor-detail > div > div > div.col-md-5.mx-1 > table > tbody > tr:nth-child(2) > td:nth-child(3) > app-eliminar-horario > div > div > div > div.modal-footer > button.btn.btn-primary'
    )
  );

  getBotonCrearHorario() {
    return this.botonCrearHorario;
  }

  getBotonEliminarHorarioConfirmar() {
    return this.botonEliminarHorarioConfirmar;
  }

  getBotonActualizarHorarioConfirmar() {
    return this.botonActualizarHorarioConfirmar;
  }

  getBotonActualizarTemaConfirmar() {
    return this.botonActualizarTemaConfirmar;
  }

  getBotonEliminarTemaConfirmar() {
    return this.botonEliminarTemaConfirmar;
  }
  async clickVerDetalleProfesor() {
    await this.linkClickSegundoProfesor.click();
  }

  async ingresarCrearTema(tema) {
    await this.inputCrearTema.sendKeys(tema);
  }

  async clickBotonCrearTema() {
    await this.botonCrearTema.click();
  }

  async clickBotonActualizarTema() {
    await this.botonActualizarTema.click();
  }

  async ingresarActualizarTema(tema) {
    await this.inputActualizarTema.sendKeys(tema);
  }

  async clickConfirmarActualizarTema() {
    await this.botonActualizarTemaConfirmar.click();
  }

  async clickBotonEliminarTema() {
    await this.botonEliminarTema.click();
  }

  async clickBotonConfirmarEliminarTema() {
    await this.botonEliminarTemaConfirmar.click();
  }

  async llenarSelectDiasCrearHorario() {
    await this.selectDiasCrearHorario.click();
    await this.selectDiasCrearHorario.sendKeys(protractor.Key.ARROW_DOWN);
    await this.selectDiasCrearHorario.sendKeys(protractor.Key.ARROW_DOWN);
    await this.selectDiasCrearHorario.sendKeys(protractor.Key.ARROW_DOWN);
  }

  async llenarHoraCrearHorario() {
    await this.inputHoraCrearHorario.sendKeys('12:33');
    await this.inputHoraCrearHorario.sendKeys(protractor.Key.ARROW_LEFT);
    await this.inputHoraCrearHorario.sendKeys(protractor.Key.ARROW_DOWN);
  }

  async clickBotonCrearHorario() {
    await this.botonCrearHorario.click();
  }

  async clickBotonActualizarHorario() {
    await this.botonActualizarHorario.click();
  }

  async llenarSelectHorarioActualizar() {
    await this.selectDiasActualizarHorario.click();
    await this.selectDiasActualizarHorario.sendKeys(protractor.Key.ARROW_DOWN);
  }

  async llenarHoraActualizarHorario() {
    await this.inputHorarActualizarHorario.sendKeys('02:15');
    await this.inputHorarActualizarHorario.sendKeys(protractor.Key.ARROW_LEFT);
    await this.inputHorarActualizarHorario.sendKeys(protractor.Key.ARROW_DOWN);
    await this.inputHorarActualizarHorario.sendKeys(protractor.Key.ARROW_LEFT);
    await this.inputHorarActualizarHorario.sendKeys(protractor.Key.ARROW_DOWN);
  }

  async clickBotonActualizarHorarioConfirmar() {
    await this.botonActualizarHorarioConfirmar.click();
  }

  async clickBotonEliminarHorario() {
    await this.botonEliminarHorario.click();
  }

  async clickBotonConfirmarEliminarHorario() {
    await this.botonEliminarHorarioConfirmar.click();
  }

  async contarTemas() {
    return await this.listarTemas.count();
  }

  async contarHorarios() {
    return await this.listarHorarios.count();
  }
}
