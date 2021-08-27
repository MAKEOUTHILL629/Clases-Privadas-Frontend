import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Profesor } from '../model/profesor';
import { environment } from 'src/environments/environment.dev';

@Injectable()
export class ProfesorService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Profesor[]>(`${environment.endpoint}/profesores`, this.http.optsName('Listar profesores'));
  }

  public consultarEspecifico(id: number) {
    return this.http.doGet<Profesor>(`${environment.endpoint}/profesores/${id}`, this.http.optsName('obtine un profesor en especifico'));
  }


}
