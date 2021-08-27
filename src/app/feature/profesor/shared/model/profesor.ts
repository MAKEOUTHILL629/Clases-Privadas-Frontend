import { Persona } from '../../../../core/modelo/persona';

export interface Profesor{
  id: number;
  persona?: Persona;
  profesion: string;
}
