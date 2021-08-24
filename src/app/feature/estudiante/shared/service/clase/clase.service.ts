import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment.dev';
import { Clase } from '../../model/clase/clase';
import { ClaseCompleta } from '../../model/clase/clase-compuesta';
import { ClaseSalida } from '../../model/clase/clase-salida';

@Injectable({
  providedIn: 'root'
})
export class ClaseService {

  constructor(protected http: HttpService) { }

  public consultar(){
    return this.http.doGet<Clase[]>(`${environment.endpoint}/clases`, this.http.optsName('Listar estudiantes'));
  }

  public consultarEspecifico( id : number){
    return this.http.doGet<ClaseCompleta[]>(`${environment.endpoint}/clases/estudiante/${id}`, this.http.optsName('Obtiene una lista de clases, dependiendo del id del estudiante'));
  }

  public guardar(clase: ClaseSalida){
    return this.http.doPost<ClaseSalida, boolean>(`${environment.endpoint}/clase`, clase,
      this.http.optsName('crear clase'));
  }
}