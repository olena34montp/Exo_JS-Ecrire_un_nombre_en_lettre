let unites = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 
'douze', 'treize', 'quatorze', 'cinquante', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
let douzaines = ['', '', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'quatre-vingt'];
// let centaines = ['cent'];
// let milliers = ['mille'];
let exeption;

/**
 * 
 * @returns {string}
 */
function getNumber(){
    return prompt('Votre numero entre 1 et 2000');
}

function printNumberToLetter() {
    let answer = getNumber();
    numberToLetter(answer);
}

function numberDouzaines(numString) {
    exeption = Number(numString[1]) + 10;
    let resultDouzaine;
        if (numString[1] === '1'){
            if (numString[0] === '7') {
                exeption = Number(numString[1]) + 10;
                resultDouzaine = douzaines[6] + '-et-' + unites[exeption];
            } else if(numString[0] === '9') {
                exeption = Number(numString[1]) + 10;
                resultDouzaine = douzaines[7] + '-' + unites[exeption]; 
            } else {
                resultDouzaine = douzaines[numString[0]] + ' et ' + unites[numString[1]];
            }

        } else if (numString[0] === '7') {
            exeption = Number(numString[1]) + 10;
            resultDouzaine = douzaines[6] + ' ' + unites[exeption];
        } else if (numString[0] === '8') {
            resultDouzaine = douzaines[7] + '-' + unites[numString[1]]; 
        } else if (numString[0] === '9') {
            exeption = Number(numString[1]) + 10;
            resultDouzaine = douzaines[7] + '-' + unites[exeption]; 
        }
        else {
            resultDouzaine = douzaines[numString[0]] + ' ' + unites[numString[1]];
        }
        
        return resultDouzaine;
}

function numberUnites (num) {
    if (num < 20) {
        return true;
    }
}

function numberToLetter(numString) {
    numString = String(numString);
    let num = Number(numString);

    if (isNaN(numString) || num > 2000) {
        alert('Ecrivez un bon chiffre');
    } else {
        if (numberUnites(num)) {
            console.log(unites[num]);
        }
        if (numString.length === 2) {
            console.log(numberDouzaines(numString));
        }

        if (numString.length === 3) { 
            if (numString[0] === '1' && numString[1] === '0' && numString[2] === '0') {
                console.log('cent');
            }
            else if (numString[1] === '0' && numString[2] === '0') {
                console.log(unites[numString[0]] + ' cent');
            }
            else {
                let result = numberDouzaines(numString[1]+numString[2]);
                console.log(unites[numString[0]] + ' cent ' + result);
            }
        }

        if(numString.length === 4) {
            if (numString[0] === '1') {
                if (numString[1] === '0' && numString[2] === '0' && numString[3] === '0') {
                    console.log('mille');
                } else {
                    let result = numberDouzaines(numString[2]+numString[3]);
                    console.log('mille ' + unites[numString[1]] + ' cent ' + result);
                }
            }
            else if (numString[1] === '0' && numString[2] === '0' && numString[3] === '0') {
                console.log(unites[numString[0]] + ' mille');
            }
            else {
                let result = numberDouzaines(numString[2]+numString[3]);
                console.log(unites[numString[0]] + ' mille ' + unites[numString[1]] + ' cent ' + result);
            }
        }
    }
}


function numberToLetterAll() {
    for (i = 1; i < 2000; i++) {
        numberToLetter(i);
    }
}