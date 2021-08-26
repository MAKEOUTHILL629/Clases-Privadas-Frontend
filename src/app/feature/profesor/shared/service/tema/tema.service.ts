import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Tema } from '../../model/tema/tema';
import { environment } from 'src/environments/environment.dev';
import { TemaSalida } from '../../model/tema/tema-salida';

@Injectable()
export class TemaService {

  constructor(protected http: HttpService) { }

  public consultar(){
    return this.http.doGet<Tema[]>(`${environment.endpoint}/temas-profesor`, this.http.optsName('Listar temas'));
  }

  public consultarEspecifico( id : number){
    return this.http.doGet<Tema[]>(`${environment.endpoint}/temas-profesor/${id}`, this.http.optsName('Listar temas de un profesor'));
  }

  public guardar(tema: TemaSalida){
    return this.http.doPost<TemaSalida, boolean>(`${environment.endpoint}/temas`, tema,
                                                this.http.optsName('Crear tema profesor'));
  }

  public actualizar(temaActualizar: TemaSalida, idTema: number){
    return this.http.doPost(`${environment.endpoint}/temas/${idTema}`, temaActualizar, this.http.optsName('Actualizar un tema'))
  }

  public eliminar(idTema: number){
    return this.http.doDelete<boolean>(`${environment.endpoint}/temas/${idTema}`,  this.http.optsName('eliminar temas'));
  }

}
