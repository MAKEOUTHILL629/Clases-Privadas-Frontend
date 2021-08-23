import { Profesor } from "@feature/profesor/shared/model/profesor";
import { Estudiante } from "../estudiante";

export interface ClaseCompleta{
  id: number;
  estudiante: Estudiante;
  profesor: Profesor;
  fecha: string;
  valor: number;
}
