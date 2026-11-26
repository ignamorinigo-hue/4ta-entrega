const CANTIDAD_NOTAS = 3;
const NOTA_MINIMA = 1;
const NOTA_MAXIMA = 10;
const NOTA_APROBACION = 6;
const NOTA_PROMOCION = 8;


const esNotaValida = (entrada) =>
    entrada !== null &&
    entrada.trim() !== "" &&
    !isNaN(Number(entrada)) &&
    Number(entrada) >= NOTA_MINIMA &&
    Number(entrada) <= NOTA_MAXIMA;

const calcularPromedio = (suma, cantidad) => suma / cantidad;

const redondear = (numero) => Math.round(numero * 100) / 100;

const quiereContinuar = (respuesta) =>
    respuesta !== null && (respuesta.trim().toLowerCase() === "si" || respuesta.trim().toLowerCase() === "sí");


function pedirNombre(mensaje) {
    let nombre = prompt(mensaje);
    while (nombre === null || nombre.trim() === "") {
        alert("El nombre no puede estar vacío.");
        nombre = prompt(mensaje);
    }
    return nombre.trim();
}

const pedirNota = function (numero, alumno) {
    let entrada = prompt("Ingresa la nota " + numero + " del alumno " + alumno);
    while (!esNotaValida(entrada)) {
        alert("Nota inválida. Ingresá un número entre " + NOTA_MINIMA + " y " + NOTA_MAXIMA + ".");
        entrada = prompt("Ingresa la nota " + numero + " del alumno " + alumno);
    }
    return Number(entrada);
};



function obtenerCondicion(promedio) {
    if (promedio >= NOTA_PROMOCION) {
        return "promocionó la materia";
    } else if (promedio >= NOTA_APROBACION) {
        return "aprobó la materia";
    } else {
        return "debe recursar la materia";
    }
}


function mostrarNota(numero, nota) {
    if (nota >= NOTA_APROBACION) {
        console.log("Nota " + numero + ": " + nota + " - Aprobado");
    } else {
        console.log("Nota " + numero + ": " + nota + " - Desaprobado");
    }
}

function mostrarResultado(alumno, promedio) {
    const condicion = obtenerCondicion(promedio);
    console.log("El promedio del alumno " + alumno + " es: " + promedio + " (" + condicion + ")");
    alert(alumno + " " + condicion + " con un promedio de: " + promedio);
}


function procesarAlumno(alumno, cantidadNotas) {
    let suma = 0;

    console.log("--- Notas de " + alumno + " ---");
    for (let i = 1; i <= cantidadNotas; i++) {
        const nota = pedirNota(i, alumno);
        mostrarNota(i, nota);
        suma = suma + nota;
    }

    const promedio = redondear(calcularPromedio(suma, cantidadNotas));
    mostrarResultado(alumno, promedio);
    return promedio;
}

function listarAlumnos(titulo, lista) {
    console.log("--- " + titulo + " ---");
    if (lista.length === 0) {
        console.log("(sin alumnos)");
    }
    for (const alumno of lista) {
        console.log("Alumno: " + alumno);
    }
    console.log("Total: " + lista.length + " alumnos");
}

function buscarAlumno(lista, nombre) {
    if (lista.includes(nombre)) {
        const posicion = lista.indexOf(nombre);
        console.log("✅ " + nombre + " está en la lista, en la posición " + posicion);
        alert(nombre + " está en la lista de evaluación (posición " + posicion + ").");
    } else {
        console.log("❌ " + nombre + " no está en la lista");
        alert(nombre + " no está en la lista de evaluación.");
    }
}

const alumnosPorEvaluar = ["Ana", "Juan", "Leo", "Sofía", "Martín"];
const resultados = [];

listarAlumnos("Lista inicial", alumnosPorEvaluar);

const alumnoDadoDeBaja = alumnosPorEvaluar.pop();
console.log("Se ha eliminado el elemento: " + alumnoDadoDeBaja);
alert(alumnoDadoDeBaja + " se dio de baja y sale de la lista.");

const alumnoNuevo = pedirNombre("Ingresá el nombre de un alumno nuevo (se agrega al final de la lista)");
alumnosPorEvaluar.push(alumnoNuevo);
console.log(alumnoNuevo + " se agregó al final de la lista");

const alumnoRecuperatorio = pedirNombre("Ingresá el nombre del alumno que rinde recuperatorio (tiene prioridad y va primero)");
alumnosPorEvaluar.unshift(alumnoRecuperatorio);
console.log(alumnoRecuperatorio + " se agregó al principio de la lista");

buscarAlumno(alumnosPorEvaluar, pedirNombre("¿Qué alumno querés buscar en la lista? (escribilo igual que en la lista, ej: Ana)"));

const posicionACorregir = 3;
const nombreAnterior = alumnosPorEvaluar[posicionACorregir];
alumnosPorEvaluar.splice(posicionACorregir, 1, "Leonel");
console.log("Corrección en la posición " + posicionACorregir + ": " + nombreAnterior + " → " + alumnosPorEvaluar[posicionACorregir]);

listarAlumnos("Lista para evaluar", alumnosPorEvaluar);

let sumaPromedios = 0;
let seguir = true;

while (seguir && alumnosPorEvaluar.length > 0) {
    const alumno = alumnosPorEvaluar.shift();
    const promedio = procesarAlumno(alumno, CANTIDAD_NOTAS);
    sumaPromedios = sumaPromedios + promedio;
    resultados.push(alumno + ": " + promedio + " (" + obtenerCondicion(promedio) + ")");

    if (alumnosPorEvaluar.length > 0) {
        seguir = quiereContinuar(prompt("¿Querés evaluar al siguiente alumno, " + alumnosPorEvaluar[0] + "? (si / no)"));
    }
}

listarAlumnos("Resultados", resultados);
listarAlumnos("Pendientes de evaluar", alumnosPorEvaluar);

const promedioCurso = redondear(calcularPromedio(sumaPromedios, resultados.length));
console.log("Alumnos evaluados: " + resultados.length + ". Promedio general del curso: " + promedioCurso);
alert("Fin del simulador. Se evaluaron " + resultados.length + " alumnos con un promedio general de " + promedioCurso + ".");
