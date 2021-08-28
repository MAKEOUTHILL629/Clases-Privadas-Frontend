import { formatDate } from '@angular/common';

export function fechaActualConFormato(): string{
  return formatoTipoFecha(new Date());
}

function formatoTipoFecha(fecha: Date){
  return formatDate(fecha, 'YYYY-MM-ddThh:mm', 'en-US');
}

export function formatoFecha(fecha: string): string{
  return formatDate(new Date(fecha), 'YYYY-MM-dd hh:mm:ss', 'en-US');
}
