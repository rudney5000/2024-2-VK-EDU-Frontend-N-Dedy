/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

function round(value, digits){
  const factor = Math.pow(10, digits);
  return Math.round(value * factor) / factor;
}

const isValidNumber = value => typeof value === 'number' && !Number.isNaN(value) && value >= 0;

export default function convertBytesToHuman(bytes) {
  // your solution goes here
  if(!isValidNumber(bytes)) return false;

  const NAMES_OF_UNIT = ["B", "KB", "MB", "GB", "TB"];
  const SIZE_OF_UNIT = 1024;
  let unitIndex = 0;

  while(bytes >= SIZE_OF_UNIT && unitIndex < NAMES_OF_UNIT.length - 1){
    bytes /= SIZE_OF_UNIT;
    unitIndex++;
  }

  return `${round(bytes, 2)} ${NAMES_OF_UNIT[unitIndex]}`;
}
