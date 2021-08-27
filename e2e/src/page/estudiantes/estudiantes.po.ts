import { by, element, protractor } from 'protractor';

export class EstudiantePage {
  private linkClickSegundoEstudiante = element(by.xpath('/html/body/app-root/app-skeleton/app-estudiante-list/div/div[2]/app-card-estudiante[2]/div/div'));
  private inputIdProfesor = element(by.id('id-profesor'));
  private inputFecha = element(by.id('fecha-crear'));
  private botonCrearClase = element(by.css('#crear-clase'));
  private listarClases = element.all(by.css('tr'));
  private clickOpcionUno = element(by.xpath('//*[@id="id-profesor"]/option[1]'));
  private botonEliminarClase = element(by.css('body > app-root > app-skeleton > app-estudiante-detail > div > div > div.col-md-8.mx-1 > table > tbody > tr:nth-child(1) > td:nth-child(5) > app-eliminar-clase > button'));
  private botonConfirmarEliminarClase = element(by.xpath('/html/body/app-root/app-skeleton/app-estudiante-detail/div/div/div[2]/table/tbody/tr[1]/td[4]/app-eliminar-clase/div/div/div/div[3]/button[2]'));
  private botonActualizarClase = element(by.css('body > app-root > app-skeleton > app-estudiante-detail > div > div > div.col-md-8.mx-1 > table > tbody > tr > td:nth-child(4) > app-actualizar-clase > button'));
  private inputProfesorActualizar = element(by.xpath('/html/body/app-root/app-skeleton/app-estudiante-detail/div/div/div[2]/table/tbody/tr/td[3]/app-actualizar-clase/div/div/div/form/div[1]/select'));
  private opcionDosProfesorActualizar = element(by.xpath('//*[@id="clase33"]/div/div/form/div[1]/select/option[2]'));
  private inputFechaActualizar = element(by.xpath('/html/body/app-root/app-skeleton/app-estudiante-detail/div/div/div[2]/table/tbody/tr/td[3]/app-actualizar-clase/div/div/div/form/div[1]/input'));
  private botonActualizarConfirmar = element(by.xpath('/html/body/app-root/app-skeleton/app-estudiante-detail/div/div/div[2]/table/tbody/tr/td[3]/app-actualizar-clase/div/div/div/form/div[2]/button[2]'));


  getBotonConfirmarEliminarClase(){
    return this.botonConfirmarEliminarClase;
  }

  getBotonActualizarConfirmar(){
    return this.botonActualizarConfirmar;
  }

  async clickVerDetallerUsuario() {
    await this.linkClickSegundoEstudiante.click();
  }

  async clickOpcionesProfesores() {
    await this.inputIdProfesor.click();
  }

  async clickOpcionUnoProfesores() {
    await this.clickOpcionUno.click();
  }

  async ingresarFechaCrearClase(fecha) {
    await this.inputFecha.sendKeys(fecha);
  }

  async oprimirFlechaAlLadoCampoFecha() {
    await this.inputFecha.sendKeys(protractor.Key.ARROW_LEFT);
  }

  async oprimirFlechaAbajoCampoFecha() {
    await this.inputFecha.sendKeys(protractor.Key.ARROW_DOWN);
  }

  async oprimirEnter() {
    await this.inputFecha.sendKeys(protractor.Key.ENTER);
  }

  async clickCrearClase() {
    await this.botonCrearClase.click();
  }

  async clickActualizarClase(){
    await this.botonActualizarClase.click();
  }

  async clickBotonEliminarClase(){
    await this.botonEliminarClase.click();
  }

  async clickConfirmarEliminarClase(){
    await this.botonConfirmarEliminarClase.click();
  }

  async clickProfesorActualizarSelect(){
    await this.inputProfesorActualizar.click();
  }

  async clickOpcionDosActualizar(){
    await this.opcionDosProfesorActualizar.click();
  }


  async rellenarInputFechaActualizar(){
    await this.inputFechaActualizar.sendKeys(' ');
    await this.inputFechaActualizar.sendKeys(protractor.Key.ARROW_DOWN);
    await this.inputFechaActualizar.sendKeys(protractor.Key.ARROW_DOWN);
    await this.inputFechaActualizar.sendKeys(protractor.Key.ARROW_DOWN);
    await this.inputFechaActualizar.sendKeys(protractor.Key.ARROW_DOWN);
    await this.inputFechaActualizar.sendKeys(protractor.Key.ARROW_LEFT);
    await this.inputFechaActualizar.sendKeys(protractor.Key.ENTER);
  }

  async clickConfirmarActualizar(){
    await this.botonActualizarConfirmar.click();
  }


  async contarClases() {
    return await this.listarClases.count();
  }
}
