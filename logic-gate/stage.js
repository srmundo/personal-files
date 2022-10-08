//----------True and False------------
let isTrue = true;
let isFalse = false;

//-------------Stages-----------------
function AND(bool1, bool2) {
  if (bool1 == isTrue && bool2 == isTrue) {
    return isTrue;
  } else {
    return isFalse;
  }
}

function OR(bool1, bool2) {
  if (bool1 == isTrue || bool2 == isTrue) {
    return isTrue;
  } else {
    return isFalse;
  }
}

function NOT(bool1) {
  if (bool1 != isFalse) {
    return isFalse;
  } else {
    return isTrue;
  }
}

//----------Exclusive OR / XOR------------
function XOR(and, or) {
  let datXOR = null;
  if (and === true && or === true) {
    datXOR = isFalse;
    return "es " + datXOR + " por que las dos salidas son positivas";
  } else if (and === true || or === true) {
    datXOR = isTrue;
    return "es " + datXOR + " por que solo hay una salida positiva";
  } else if (and === false && or === false) {
    datXOR = isFalse;
    return "es " + datXOR + " por que las dos puertas son negativas";
  }
}

console.log(XOR(AND(isTrue, isTrue), OR(isTrue, isTrue)));
