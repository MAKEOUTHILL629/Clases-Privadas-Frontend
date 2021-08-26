import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment.dev';
import { Clase } from '../../model/clase/clase';
import { ClaseCompleta } from '../../model/clase/clase-compuesta';
import { ClaseSalida } from '../../model/clase/clase-salida';

@Injectable()
export class ClaseService {

  constructor(protected http: HttpService, protected httpClient: HttpClient) { }

  public consultar() {
    return this.http.doGet<Clase[]>(`${environment.endpoint}/clases`, this.http.optsName('Listar estudiantes'));
  }

  public consultarEspecifico(id: number) {
    return this.http.doGet<ClaseCompleta[]>(`${environment.endpoint}/clases/estudiante/${id}`, this.http.optsName('Obtiene una lista de clases, dependiendo del id del estudiante'));
  }

  public guardar(clase: ClaseSalida) {
    return this.http.doPost<ClaseSalida, boolean>(`${environment.endpoint}/clase`, clase,
      this.http.optsName('crear clase'));
  }

  public actualizar(claseActualizar: ClaseSalida, idClase: number) {
    return this.httpClient.put(`${environment.endpoint}/clase/${idClase}`, claseActualizar, this.http.optsName('Actualizar una clase'));
  }

  public eliminar(idClase: number) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/clase/${idClase}`, this.http.optsName('eliminar clase'));
  }
}
