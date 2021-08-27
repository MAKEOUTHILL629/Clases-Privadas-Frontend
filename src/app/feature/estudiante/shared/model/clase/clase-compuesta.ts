import { Profesor } from '@feature/profesor/shared/model/profesor';
import { Estudiante } from '../estudiante';

export interface ClaseCompleta{
  id: number;
  estudianteDTO: Estudiante;
  profesorDTO: Profesor;
  fecha: string;
  valor: number;
}
