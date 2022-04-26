//Se crea un simulador de notas. Primero a través de una funcion se ingresa el código de la materia. Luego, se pide la nota de cada materia y por último, a través de un alert, se brinda el promedio general entre las cuatro materias

function getSubject(codigo) {
    let nameSubject
    switch (codigo){
        case '1':
        nameSubject= "matematica";
        break;
        case '2':
        nameSubject= "lengua";
        break;
        case '3':
        nameSubject= "programacion";
        break;
        case '4':
        nameSubject= "biologia";
        break;
    }
    return nameSubject
}

let contador = 0
let totalNotas = 0


let subjectCode1 = prompt("Ingresar el código de la materia");
let nameSubject1 = getSubject(subjectCode1)
let nota1 = parseInt(prompt("Ingrese nota de la materia " + nameSubject1));
contador = contador + 1
totalNotas = totalNotas + nota1


let subjectCode2 = prompt("Ingresar el código de la materia");
let nameSubject2 = getSubject(subjectCode2)
let nota2 = parseInt(prompt("Ingrese nota de la materia " + nameSubject2));
contador = contador + 1
totalNotas = totalNotas + nota2


let subjectCode3 = prompt("Ingresar el código de la materia");
let nameSubject3 = getSubject(subjectCode3)
let nota3 = parseInt(prompt("Ingrese nota de la materia " + nameSubject3));
contador = contador + 1
totalNotas = totalNotas + nota3

let subjectCode4 = prompt("Ingresar el código de la materia");
let nameSubject4 = getSubject(subjectCode4)
let nota4 = parseInt(prompt("Ingrese nota de la materia " + nameSubject4));
contador = contador + 1
totalNotas = totalNotas + nota4

let average = totalNotas / contador

alert(average)

