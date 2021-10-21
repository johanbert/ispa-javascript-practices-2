let day = 'LLUVIOSO'
while (day == 'LLUVIOSO') {
    console.log('no salir de casa porque day es', day)

    day = 'SOLEADO'
}

let isHoliday = false;
let counter = 0;
// while (isHoliday == false) {
while (!isHoliday) {
    // if (counter == 5) {
    //     isHoliday = true;
    // }
    isHoliday = counter == 5 ? true : false;

    console.log('Seguimos sin dia festivo porque es', isHoliday)
    counter++;
}

isHoliday = false;
let holidays = 5;
for (let i = 0; i < holidays; i++) {
    console.log('Seguimos sin dia festivo porque es', i)
}

// ARRAYS
const alphabet = ' ABCDEFGHIJKLMNÑOPQRSTUVWXYZ '
const arrayStudents = ['Laura', 'Juan', 'Jose', 'Sebastian', 'JuanG', 'Angel', 'Esteban']
console.log('tamaño arrayStudents', arrayStudents.length);

for (let i = 0; i < arrayStudents.length; i++) {
    console.log(i, arrayStudents[i], alphabet[i]);
}

// let newAlphabet = [1,2,3,true,false,'texto',[1,2,3],['a','b','c']];
let newAlphabet = [];
let newAlphabetString = '';
for (let i = 0; i < alphabet.length; i++) {
    if (alphabet[i] != ' ') {
        newAlphabet.push(alphabet[i])

        // newAlphabetString = newAlphabetString + alphabet[i]
        newAlphabetString += alphabet[i]
    }
}

console.log('newAlphabet: ', newAlphabet);
console.log('newAlphabet: ', newAlphabet.join(','));
console.log('newAlphabet: ', newAlphabet.join(''));

console.log('newAlphabetString: ', newAlphabetString);

// SOLO QUITA LOS ESPACIOS EN LOS COSTADOS
console.log('CON TRIM:', alphabet.trim());