import { Persona } from '@core/modelo/persona';
import { NivelEstudios } from '@feature/estudiante/shared/model/nivel-estudios.enum';

export interface Estudiante{
  id: number;
  persona?: Persona;
  nivelEstudios: NivelEstudios;
}
