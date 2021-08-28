import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Horario } from '../../model/horario/horario';
import { environment } from 'src/environments/environment.dev';
import { HorarioSalida } from '../../model/horario/horario-salida';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HorarioService {


  constructor(protected http: HttpService, protected httpClient: HttpClient) { }
  get refresh$() {
    return this.refresh$;
  }

  public consultar() {
    return this.http.doGet<Horario[]>(
      `${environment.endpoint}/horarios-profesor`,
      this.http.optsName('Listar horarios')
    );
  }

  public consultarEspecifico(id: number) {
    return this.http.doGet<Horario[]>(
      `${environment.endpoint}/horarios-profesor/${id}`,
      this.http.optsName('obtine un horario en especifico')
    );
  }

  public guardar(horario: HorarioSalida) {
    return this.http.doPost<HorarioSalida, boolean>(
      `${environment.endpoint}/horarios`,
      horario,
      this.http.optsName('Crear horario profesor')
    );
  }

  public actualizar(horarioActualizar: HorarioSalida, idHorario: number) {
    return this.httpClient.put(
      `${environment.endpoint}/horarios/${idHorario}`,
      horarioActualizar,
      this.http.optsName('Actualizar un horario')
    );
  }

  public eliminar(idHorario: number) {
    return this.http.doDelete<boolean>(
      `${environment.endpoint}/horarios/${idHorario}`,
      this.http.optsName('eliminar horario')
    );
  }
}
