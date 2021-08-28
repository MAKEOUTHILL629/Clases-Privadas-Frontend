import { DiasSemana } from '@core/modelo/dias-semana.enum';
import { Persona } from '@core/modelo/persona';
import { Horario } from '@feature/profesor/shared/model/horario/horario';
import { Profesor } from '@feature/profesor/shared/model/profesor';
import { Tema } from '@feature/profesor/shared/model/tema/tema';

export const person: Persona = {
  id: 1,
  nombres: 'Nombres',
  apellidos: 'Apellidos',
  cedula: '1234567890'
};

export const temas: Tema[] = [
  { id: 1, idProfesor: 1, tema: 'Test Tema 1' },
  { id: 2, idProfesor: 2, tema: 'Test Tema 2' },
];
export const horarios: Horario[] = [{
  id: 1,
  idProfesor: 1,
  diaSemana: DiasSemana.LUNES,
  hora: '04:22'
},
{
  id: 2,
  idProfesor: 2,
  diaSemana: DiasSemana.SABADO,
  hora: '12:00'
}
];

export const profesor: Profesor = {
  id: 1,
  persona: person,
  profesion: 'Programador',
};


export const profesores: Profesor[] = [
  {
    id: 1,
    persona: {
      id: 3,
      nombres: 'Prueba',
      apellidos: 'Prueba',
      cedula: '12321321',
    },
    profesion: 'Cardiologo',
  },
  {
    id: 2,
    persona: {
      id: 4,
      nombres: 'Prueba 2',
      apellidos: 'Prueba 2',
      cedula: '12321312',
    },
    profesion: 'Programador',
  },
];
