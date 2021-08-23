import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Horario } from '../../model/horario/horario';
import { environment } from 'src/environments/environment.dev';
import { HorarioSalida } from '../../model/horario/horario-salida';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  constructor(protected http: HttpService) { }

  public consultar(){
    return this.http.doGet<Horario[]>(`${environment.endpoint}/horarios-profesor`, this.http.optsName('Listar horarios'));
  }

  public consultarEspecifico( id : number){
    return this.http.doGet<Horario[]>(`${environment.endpoint}/horarios-profesor/${id}`, this.http.optsName('obtine un horario en especifico'));
  }


  public guardar(horario: HorarioSalida){
    return this.http.doPost<HorarioSalida, number>(`${environment.endpoint}/horarios`, horario,
                                                this.http.optsName('Crear horario profesor'));

  }
}
