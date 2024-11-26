import { User } from './interfaces'

function getColorTS(color: string): string {
  return color.toUpperCase();
}

console.log(getColorTS(123));
