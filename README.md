# CoderJS - Pre-entregas

## Tablero de control de notas

Simulador hecho en JavaScript para el curso de JavaScript de Coderhouse.
Calcula el promedio de los alumnos y les dice si promocionaron, aprobaron o tienen que recursar la materia.



## Cómo funciona

1. Muestra en la consola la lista inicial de alumnos por evaluar.
2. El último alumno de la lista se da de baja (`pop`).
3. Pide un alumno nuevo y lo agrega al final de la lista (`push`).
4. Pide un alumno que rinde recuperatorio y lo agrega al principio, porque tiene prioridad (`unshift`).
5. Pide un nombre para buscar y avisa si está en la lista y en qué posición (`includes` e `indexOf`).
6. Corrige el nombre del alumno de la posición 3 (`splice`).
7. Evalúa a los alumnos en orden, sacándolos del principio de la lista (`shift`). Para cada uno:
   - Pide 3 notas. Cada nota tiene que ser un número entre 1 y 10; si se ingresa algo inválido, la vuelve a pedir.
   - Muestra en la consola si cada nota está aprobada (6 o más) o desaprobada.
   - Calcula el promedio y muestra el resultado con un `alert`:
     - **Promedio de 8 o más:** promociona la materia.
     - **Promedio de 6 o más:** aprueba la materia.
     - **Promedio menor a 6:** debe recursar.
   - Pregunta si se quiere evaluar al siguiente alumno.
8. Al terminar, lista los resultados, los alumnos que quedaron pendientes y el promedio general del curso.

## Arrays

| Array | Qué guarda |
| --- | --- |
| `alumnosPorEvaluar` | Los alumnos que faltan evaluar, en orden |
| `resultados` | El promedio y la condición de cada alumno evaluado |

## Funciones

| Función | Tipo | Qué hace |
| --- | --- | --- |
| `pedirNombre(mensaje)` | Declarada | Entrada: pide un nombre y lo retorna |
| `pedirNota(numero, alumno)` | Expresada | Entrada: pide una nota válida y la retorna |
| `esNotaValida(entrada)` | Flecha | Procesamiento: retorna si la nota ingresada es válida |
| `calcularPromedio(suma, cantidad)` | Flecha | Procesamiento: retorna el promedio |
| `redondear(numero)` | Flecha | Procesamiento: redondea a 2 decimales |
| `quiereContinuar(respuesta)` | Flecha | Procesamiento: retorna si se quiere seguir |
| `obtenerCondicion(promedio)` | Declarada | Procesamiento: retorna si promocionó, aprobó o debe recursar |
| `buscarAlumno(lista, nombre)` | Declarada | Procesamiento: busca un alumno con `includes` e `indexOf` |
| `mostrarNota(numero, nota)` | Declarada | Salida: muestra en consola si la nota está aprobada |
| `mostrarResultado(alumno, promedio)` | Declarada | Salida: muestra el resultado en consola y con un `alert` |
| `listarAlumnos(titulo, lista)` | Declarada | Salida: recorre una lista con `for...of` y la muestra en consola |
| `procesarAlumno(alumno, cantidadNotas)` | Declarada | Carga las notas de un alumno y retorna su promedio |

## Cómo usarlo

1. Abrí `index.html` en el navegador.
2. Completá los datos que se piden en los cuadros de diálogo.
3. Abrí la consola del navegador (F12) para ver las listas y el detalle de cada nota.

## Tecnologías

- HTML
- JavaScript
# 4ta-entrega
