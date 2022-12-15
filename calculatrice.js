function calcule(string) {
  let hasOneNumber = (/^[+-]?\d+(?:\.\d+)?\s*(?:\(\s*\d+(?:\.\d+)?\s*\)\s*)?\s*$|^\([+-]?\d+(?:\.\d+)?\s*(?:\(\s*\d+(?:\.\d+)?\s*\)\s*)?\s*\)$|^[+-]?\d+(?:\.\d{1,}e[+-]?\d+\.\d+)$|^[+-]?\d+(?:\.\d{1,}e[+-]?\d+)$|\([+-]?\d+(?:\.\d{1,}e[+-]?\d+\.\d+)\)|Infinity|\(Infinity\)/).test(string)
  while (!hasOneNumber) {
    if ((/sqrt\((\d*.\d*)\)/).test(string)) {
      let subStringSQRT = (/sqrt\((\d*.\d*)\)/).exec(string);
      if (subStringSQRT[1] < 0) {
        subStringSQRT[1] = Math.abs(subStringSQRT[1]);
      }
      let resultatStringSQRT = calcule(`${subStringSQRT[1]}`)
      let resultatSQRT = calcule(`${resultatStringSQRT}^0.5`);
      string = string.replace(`${subStringSQRT[0]}`, `${resultatSQRT}`)
    }
    if ((/(\(\s*[+-]?\d+(\.\d+)?\s*[*\/\^\%]\s*[+-]?\d+(\.\d+)?\s*\))|(\d+(\.\d+)?\s*[*\/\^\%]\s*[+-]?\d+(\.\d+)?)|(^[+-]?\d+(\.\d+)?\s*[*\/\^\%]\s*[+-]?\d+(\.\d+)?)|[+-]?\d\.\d{1,}e[+-]\d{1,}[*\/\^\%]\s*[+-]?\d+(\.\d+)?|\(\d\.\d{1,}e[+-]\d{1,}[*\/\^\%]\s*[+-]?\d+(\.\d+)?\)/).test(string)) {
      let resultatLocalMultiDiv = 0;
      let subStringMulDiv = (/(\(\s*[+-]?\d+(\.\d+)?\s*[*\/\^\%]\s*[+-]?\d+(\.\d+)?\s*\))|(\d+(\.\d+)?\s*[*\/\^\%]\s*[+-]?\d+(\.\d+)?)|(^[+-]?\d+(\.\d+)?\s*[*\/\^\%]\s*[+-]?\d+(\.\d+)?)|[+-]?\d\.\d{1,}e[+-]\d{1,}[*\/\^\%]\s*[+-]?\d+(\.\d+)?|\(\d\.\d{1,}e[+-]\d{1,}[*\/\^\%]\s*[+-]?\d+(\.\d+)?\)/).exec(string)
      let subStringMulDivCalcule = "";
      if ((/^\(\s*(.+)\s*\)$/).test(subStringMulDiv[0])) {
        subStringMulDivCalcule = (/^\(\s*(.+)\s*\)$/).exec(subStringMulDiv[0])[1]
      } else {
        subStringMulDivCalcule = subStringMulDiv[0];
      }
      let operateurMultiDiv = (/[*\/\^\%]/).exec(subStringMulDivCalcule);
      switch (operateurMultiDiv[0]) {
        case '*':
          let tableauStringMulti = subStringMulDivCalcule.split('*');
          if (resultatLocalMultiDiv == 0) {
            resultatLocalMultiDiv = Number(tableauStringMulti[0]);
          }
          for (let i = 1; i < tableauStringMulti.length; i++) {
            resultatLocalMultiDiv *= Number(tableauStringMulti[i])
          }
          if (resultatLocalMultiDiv < 0) {

            string = string.replace(`${subStringMulDiv[0]}`, `${resultatLocalMultiDiv}`)
          } else {
            string = string.replace(`${subStringMulDiv[0]}`, `${Math.abs(resultatLocalMultiDiv)}`)
          }
          break;

        case '/':
          let tableauStringDiv = subStringMulDivCalcule.split('/');
          if (resultatLocalMultiDiv == 0) {
            resultatLocalMultiDiv = Number(tableauStringDiv[0]);
          }
          for (let i = 1; i < tableauStringDiv.length; i++) {
            resultatLocalMultiDiv /= Number(tableauStringDiv[i])
          }
          if (resultatLocalMultiDiv < 0) {

            string = string.replace(`${subStringMulDiv[0]}`, `${resultatLocalMultiDiv}`)
          } else {
            string = string.replace(`${subStringMulDiv[0]}`, `${Math.abs(resultatLocalMultiDiv)}`)
          }
          break;

        case '^':
          let tableauStringPow = subStringMulDivCalcule.split('^');
          if (resultatLocalMultiDiv == 0) {
            resultatLocalMultiDiv = tableauStringPow[0];
          }
          for (let i = 1; i < tableauStringPow.length; i++) {
            resultatLocalMultiDiv **= Number(tableauStringPow[i])
          }
          if (resultatLocalMultiDiv < 0) {

            string = string.replace(`${subStringMulDiv[0]}`, `${resultatLocalMultiDiv}`)
          } else {
            string = string.replace(`${subStringMulDiv[0]}`, `${resultatLocalMultiDiv}`)
          }
          break;

        case '%':
          let tableauStringPourcent = subStringMulDivCalcule.split('%');
          resultatLocalMultiDiv = calcule(`((${tableauStringPourcent[0]}/100)*${tableauStringPourcent[1]})`);
          if (resultatLocalMultiDiv < 0) {

            string = string.replace(`${subStringMulDiv[0]}`, `${resultatLocalMultiDiv}`);
          } else {
            if ((/^\s*[+-]?\d+(\.\d+)?\s*$/).test(resultatLocalMultiDiv)) {
              string = string.replace(`${subStringMulDiv[0]}`, `${resultatLocalMultiDiv}`);
            } else {
              string = string.replace(`${subStringMulDiv[0]}`, `${Math.abs(resultatLocalMultiDiv)}`);
            }
          }
          break;

        default:
          break;
      }
    } else if ((/(\(\s*[+-]?\d+(\.\d+)?\s*[+-]\s*[+-]?\d+(\.\d+)?\s*\))|(\d+(\.\d+)?\s*[+-]\s*[+-]?\d+(\.\d+)?)|(^[+-]?\d+(\.\d+)?\s*[+-]\s*[+-]?\d+(\.\d+)?)|[+-]\d\.\d{1,}e[+-]\d{1,}[+-]\s*[+-]?\d+(\.\d+)?|\(\d\.\d{1,}e[+-]\d{1,}[+-]\s*[+-]?\d+(\.\d+)?\)/).test(string)) {
      let resultatLocalAddSous = 0;
      let subStringAddSous = (/(\(\s*[+-]?\d+(\.\d+)?\s*[+-]\s*[+-]?\d+(\.\d+)?\s*\))|(\d+(\.\d+)?\s*[+-]\s*[+-]?\d+(\.\d+)?)|(^[+-]?\d+(\.\d+)?\s*[+-]\s*[+-]?\d+(\.\d+)?)|[+-]\d\.\d{1,}e[+-]\d{1,}[+-]\s*[+-]?\d+(\.\d+)?|\(\d\.\d{1,}e[+-]\d{1,}[+-]\s*[+-]?\d+(\.\d+)?\)/).exec(string);
      let subStringAddSousCalcule = "";
      if ((/^\(\s*(.+)\s*\)$/).test(subStringAddSous[0])) {
        subStringAddSousCalcule = (/^\(\s*(.+)\s*\)$/).exec(subStringAddSous[0])[1]
      } else {
        subStringAddSousCalcule = subStringAddSous[0];
      }
      let operateurAddSous = "";
      if ((/--/g).test(subStringAddSousCalcule)) {
        let signeOperateur = (/--/g).exec(subStringAddSousCalcule)
        subStringAddSousCalcule = subStringAddSousCalcule.replace(`${signeOperateur[0]}`, "+")
      }
      operateurAddSous = (/(?<=[\d.])[+-]/).exec(subStringAddSousCalcule);
      switch (operateurAddSous[0]) {
        case "+":
          let tableauStringAdd = subStringAddSousCalcule.split('+');
          if (resultatLocalAddSous == 0) {
            resultatLocalAddSous = Number(tableauStringAdd[0]);
          }
          for (let i = 1; i < tableauStringAdd.length; i++) {
            resultatLocalAddSous += Number(tableauStringAdd[i])
          }
          string = string.replace(`${subStringAddSous[0]}`, `${resultatLocalAddSous}`)
          break;

        case "-":
          let tableauStringSous = subStringAddSousCalcule.split('-');
          if (resultatLocalAddSous == 0) {
            resultatLocalAddSous = Number(tableauStringSous[0]);
          }
          for (let i = 1; i < tableauStringSous.length; i++) {
            resultatLocalAddSous -= Number(tableauStringSous[i])
          }
          string = string.replace(`${subStringAddSous[0]}`, `${resultatLocalAddSous}`)
          break;

        default:
          break;
      }
    }
    hasOneNumber = (/^[+-]?\d+(?:\.\d+)?\s*(?:\(\s*\d+(?:\.\d+)?\s*\)\s*)?\s*$|^\([+-]?\d+(?:\.\d+)?\s*(?:\(\s*\d+(?:\.\d+)?\s*\)\s*)?\s*\)$|^[+-]?\d+(?:\.\d{1,}e[+-]?\d+\.\d+)$|^[+-]?\d+(?:\.\d{1,}e[+-]?\d+)$|\([+-]?\d+(?:\.\d{1,}e[+-]?\d+\.\d+)\)|Infinity|\(Infinity\)/).test(string);
    if ((/^\(\s*(.+)\s*\)$/).test(string) && hasOneNumber) {
      let subString = (/^\(\s*(.+)\s*\)$/).exec(string);
      string = string.replace(`${subString[0]}`, `${subString[1]}`)
    }
    if (string == 'Infinity') {
      hasOneNumber = true;
    }
  }
  return string;
}
module.exports = calcule;