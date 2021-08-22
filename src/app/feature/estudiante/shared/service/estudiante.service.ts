import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Estudiante } from '../model/estudiante';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(protected http: HttpService) { }

  public consultar(){
    return this.http.doGet<Estudiante[]>(`${environment.endpoint}/estudiantes`, this.http.optsName('Listar estudiantes'));
  }

  public consultarEspecifico( id : number){
    return this.http.doGet<Estudiante>(`${environment.endpoint}/estudiantes/${id}`, this.http.optsName('Obtener un estudiante en especifico'));
  }

}
