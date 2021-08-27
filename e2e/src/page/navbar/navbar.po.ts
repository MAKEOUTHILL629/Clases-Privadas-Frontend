import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkProducto = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkProfesores = element(by.xpath('/html/body/app-root/app-skeleton/app-navigation/nav/div/div/ul/li[1]/a'));
    linkEstudiantes = element(by.xpath('/html/body/app-root/app-skeleton/app-navigation/nav/div/div/ul/li[2]/a'));

    async clickBotonProductos() {
        await this.linkProducto.click();
    }

    async clickBotonProfesores() {
      await this.linkProfesores.click();
    }

    async clickBotonEstudiantes() {
      await this.linkEstudiantes.click();
    }
}
