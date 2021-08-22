import { DiasSemana } from "@core/modelo/dias-semana.enum";


export interface Horario{
  id: number;
  idProfesor: number;
  diaSemana: DiasSemana;
  hora: string;
}
