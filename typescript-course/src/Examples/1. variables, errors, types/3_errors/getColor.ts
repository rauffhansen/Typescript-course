import { User } from './3_errors/interfaces'

function getColorTS(color: string): string {
  return color.toUpperCase();
}

console.log(getColorTS(123));
