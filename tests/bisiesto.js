/* 
Un año es bisiesto si es divisible por 4 (ej. 1996)
Un año es bisiesto si es divisible por 400 (ej. 1600)
Un año es bisiesto si no es divisible por 100 pero sí por 400 (ej. 1800)
*/

function esBisiesto(anio) {
  if (anio % 4 === 0 || (anio % 400 === 0 && anio % 100 !== 0)) {
    return true;
  } else {
    return false;
  }
}

module.exports = { esBisiesto };
