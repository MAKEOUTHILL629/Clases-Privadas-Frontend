import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Profesor } from '../../../data/interfaces/profesor.metada';
import { environment } from '../../../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  constructor(protected http: HttpService) { }

  public consultar(){
    return this.http.doGet<Profesor[]>(`${environment.endpoint}/profesores`, this.http.optsName('Listar profesores'));
  }

  public consultarEspecifico( id : number){
    return this.http.doGet<Profesor>(`${environment.endpoint}/profesores/${id}`, this.http.optsName('obtine un profesor en especifico'));
  }
}
