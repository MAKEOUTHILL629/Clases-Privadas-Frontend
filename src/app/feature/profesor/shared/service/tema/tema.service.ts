import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Tema } from '../../model/tema/tema';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(protected http: HttpService) { }

  public consultar(){
    return this.http.doGet<Tema[]>(`${environment.endpoint}/temas-profesor`, this.http.optsName('Listar temas'));
  }

  public consultarEspecifico( id : number){
    return this.http.doGet<Tema[]>(`${environment.endpoint}/temas-profesor/${id}`, this.http.optsName('Listar temas de un profesor'));
  }

}
