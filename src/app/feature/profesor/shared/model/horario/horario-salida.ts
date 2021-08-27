import { DiasSemana } from '@core/modelo/dias-semana.enum';


export interface HorarioSalida {
  idProfesor: number;
  diaSemana: DiasSemana;
  hora: string;
}
