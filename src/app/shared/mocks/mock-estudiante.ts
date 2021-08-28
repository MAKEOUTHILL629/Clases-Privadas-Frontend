import { ClaseCompleta } from '@feature/estudiante/shared/model/clase/clase-compuesta';
import { Estudiante } from '@feature/estudiante/shared/model/estudiante';
import { NivelEstudios } from '@feature/estudiante/shared/model/nivel-estudios.enum';


export const estudiante: Estudiante = {
  id: 1,
  persona: {
    id: 1,
    nombres: 'Testing 1',
    apellidos: 'Testing 1',
    cedula: '1231231'
  },
  nivelEstudios: NivelEstudios.UNIVERSIDAD
};

export const clases: ClaseCompleta[] = [
  {
    estudianteDTO: {
      id: 1,
      nivelEstudios: NivelEstudios.UNIVERSIDAD,
      persona: {
        apellidos: 'string',
        cedula: 'string',
        id: 1,
        nombres: 'string'
      }
    },
    fecha: '2021-08-25T17:05:04.841Z',
    id: 2,
    profesorDTO: {
      id: 2,
      persona: {
        apellidos: 'string',
        cedula: 'string',
        id: 1,
        nombres: 'string'
      },
      profesion: 'string'
    },
    valor: 1213
  },

  {
    estudianteDTO: {
      id: 1,
      nivelEstudios: NivelEstudios.UNIVERSIDAD,
      persona: {
        apellidos: 'string',
        cedula: 'string',
        id: 2,
        nombres: 'string'
      }
    },
    fecha: '2021-08-25T17:05:04.841Z',
    id: 3,
    profesorDTO: {
      id: 2,
      persona: {
        apellidos: 'string',
        cedula: 'string',
        id: 2,
        nombres: 'string'
      },
      profesion: 'string'
    },
    valor: 12321
  },

];
