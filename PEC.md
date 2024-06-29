# PJP PEC 2

En esta PEC se practica la programación JavaScript por medio de ejercicios concretos que evaluarán una o varias características del lenguaje. 

## Competencias

En esta PEC se desarrollan las siguientes competencias del Máster:

* Utilizar de manera adecuada el lenguaje JavaScript y usarlo en el desarrollo de sitios y aplicaciones web, en función de las necesidades del proyecto.

## Objetivos

Los objetivos concretos de esta PEC son:

* Aprender a utilizar JavaScript y sus características básicas.
* Contribuir a conocer a fondo el lenguaje JavaScript para poder usarlo en el desarrollo de aplicaciones Web.

## Entrega de la PEC 

Una vez hayas realizado las actividades prácticas propuestas en este enunciado, **la entrega se realizará de forma doble**:

- Deberás enviar tus cambios al apartado del aula virtual de la UOC.
- Deberás enviar tus cambios al repositorio de GitHub Classroom.
 
Recuerda que este repositorio lo has clonado del repositorio en GitHub. Cuando trabajes en tu sistema, todos los cambios los harás en tus ficheros locales, los cuales tendrás que añadir y _comitear_ a tu repositorio Git. Estos cambios estarán en tu sistema hasta que hagas _push_ y los envíes al repositorio en GitHub.

Recuerda que debes trabajar en la rama _main_ o _master_ (la que se cree por defecto). Puedes hacer varios envíos.

En el aula virtual encontrarás una _checklist_ que te ayudará a repasar todos los pasos que debes hacer para la entrega de tu PEC.

## Puntuación

El hecho de trabajar con tests para verificar la funcionalidad del código os permitirá tener una idea de vuestra propia nota antes de la entrega. 

La puntuación de los ejercicios prácticos se basa en dos criterios: **Funcionalidad** e **implementación**. Se espera que los ejercicios funcionen correctamente (pasen los tests) y que la implementación (el código) tenga una calidad adecuada. 

Algunos detalles a tener en cuenta:

- Se penalizará cualquier intento de _hardcodear_ los tests para forzar que pasen. Esta técnica consiste en cambiar la implementación para que devuelva únicamente el valor esperado por el test (cualquier otro test fallaría).
- Los tests automáticos están diseñados para detectar ejercicios erróneos o incompletos para casos concretos. El hecho de que un test pase no garantiza que el ejercicio esté realizado correctamente, es decir, que cubra todos los casos.
- Un ejercicio cuyos tests no pasan se puntuará con un 0 salvo que existan problemas con el test.
- Además de pasar los tests, el profesorado evaluará vuestro código en base a los siguientes criterios:
  - Legibilidad, sencillez y calidad del código.
  - Conocimientos de programación. Por ejemplo, no utilizar las estructuras de control adecuadas, como utilizar un bucle para construir una sentencia condicional o viceversa.

## Requisitos mínimos

- Tener instalado Visual Studio Code.
- Conocimientos básicos de Git y GitHub (Actividades 2 y 3 del Reto 1).
- Estudio de la introducción y repaso a JavaScript (Actividad 1 del Reto 2).
- Estudio de la conceptos de JavaScript (Actividad 2 del Reto 2).

## Ejercicios prácticos (10 p)

Para realizar los ejercicios prácticos debes dirigirte a la siguiente ruta, dentro del repositorio: `src/pec2/pec2.js`.
En este fichero deberás implementar las funciones que te indicamos en los ejercicios que verás más abajo.

Por otro lado, los tests que te permitirán saber si la solución que propones para los ejercicios es correcta están en el fichero `src/pec2/pec2.spec.js`.
**No debes editar este fichero**.
Ten en cuenta que los tests son condiciones que deben cumplir las funciones que implementarás en los ejercicios, por lo que pueden servirte de ayuda para corregirlos.

### Preparando el entorno

Una vez hecho clone del repositorio, debes instalar las dependencias del proyecto.

```
npm install
```

A continuación, para lanzar los tests debes ejecutar el siguiente comando:

```
npm t
```

La instrucción anterior lanzará los tests cada vez que guardes el fichero `src/pec2/pec2.js`, que es precisamente donde implementarás los ejercicios de esta PEC.

Tal y como te indicamos en la PEC 1, la primera vez que ejecutes `npm t` y se lancen los tests, fallarán todos, ya que no hay ningún ejercicio implementado. Conforme vayas trabajando en los ejercicios y guardes el fichero, puede que algún test lance algún error. Revisa el mensaje de error que se imprime para conocer su formato y entender cómo se notifican los errores.

Si tienes algún problema con los tests, no dudes en preguntar en el foro "Dudas PEC 2 | Dubtes PAC 2" del aula.


### Ejercicio 1 (1 p)

Implementa una función `searchNumber` que recibe 2 parámetros:

- `matrix`: array
- `targetNumber`: número entero

Esta función debe recorrer `matrix`, buscando el número `targetNumber`.

Debes tener en cuenta las siguientes consideraciones:

- `matrix` puede contener valores de cualquier tipo, no sólo enteros.
- `matrix` no tiene límite en cuanto a su nivel de anidación, es decir, puede contener arrays dentro de arrays.
- Se asume que `targetNumber` siempre será un número entero, por lo que no es necesario verificar su tipo.
- La función debe devolver un valor booleano, indicando si se ha localizado `targetNumber` en `matrix`.

> **Nota:** Puedes consultar ejemplos del array `matrix` en el fichero `src/pec2/data.js`. 

> **Nota:** En la puntuación de este ejercicio se prestará especial atención a la optimización de la solución presentada.


### Ejercicio 2 (1,5 p)

#### Ejercicio 2.1 (0,5 p)

Implementa una clase `Shape` cuyo constructor debe aceptar el parámetro `name`.

Esta clase debe incorporar los siguientes métodos:

- `calculateArea`: Método _abstracto_ que debe lanzar una nueva instancia de un objeto de tipo `Error` con el siguiente texto: "The 'calculateArea' function must be implemented in child classes."
- `getName`: Método que debe devolver el valor de `name`.

#### Ejercicio 2.2 (1 p)

Implementa una clase `Circle` que extienda de la clase `Shape` y cuyo constructor acepte los siguientes métodos: `name` y `radius`.

Esta clase debe incorporar los siguientes métodos:

- `calculateArea`: Implementación del método _abstracto_ de la clase `Shape`. Debe devolver el àrea del círculo en formato de dos decimales.
- `getName`: Método que debe delvolver el literal "I'm a circle named " seguido del valor de `name`, entre comillas simples.


### Ejercicio 3 (2 p)

Este ejercicio está pensado para entender que hay otra forma de crear objetos. Esta forma se considera _legacy_ pero es una técnica que se sigue utilizando y es importante entender que las clases son _syntax sugar_ de dicha técnica. Además, este ejercicio te servirá para practicar y entender los prototipos y el uso de `this` en JavaScript.

Realiza las siguientes tareas:

- Crea una función constructora `Book` que recibe los siguientes parámetros: `title`, `author` y `genre`.
- Implementa la función `isGenre`. Este método ha de recibir un parámetro `genre` y debe devolver un valor booleano indicando si el parámetro pasado es igual a la propiedad `genre` de `Book`.
- Implementa la función `getInfo` que devuelva un objeto con toda la información de un `Book`. Ejemplo:

  ```js
  {
    Title: 'Fundation',
    Author: 'Isaac Asimov',
    Genre: 'Science fiction'
  }
  ```

- Implementa la función `setGenre` que recibe el parámetro `newGenre`. Este método sirve para cambiar el valor de la propiedad `genre` de un `Book`.

- Debes tener en cuenta las siguientes consideraciones:
  - La función `isGenre` debe implementarse de manera que cada instancia de `Book` tenga su propia copia de esta función.
  - Las funciones `getInfo` y `setGenre` deben implementarse de manera que **se compartan a través del prototype**.


### Ejercicio 4 (2,5 p)

Implementa una función `dashboardCompany`, que reciba como parámetro un objeto `company` y que devuelva otro objeto que contenga la siguiente información:

- Empleados ordenados por nombre de departamento (de manera ascendente) y por número de horas trabajadas en total (de manera descendente).
- Número de horas totales trabajadas por departamento, ordenado por nombre de departamento (de manera ascendente).

Debes verificar el parámetro de entrada `company` y en caso de que éste no sea correcto, lanzar una nueva instancia de un objeto de tipo `Error` con el texto "The value of company is invalid.".

#### Ejemplo de objeto devuelto:

```js
{
  employeeRankByDepartment: [
    {
      departmentName: "Department A",
      rank: [
        { fullName: "Employee A", totalHoursWorked: 10 },
        { fullName: "Employee C", totalHoursWorked: 8 },
        { fullName: "Employee B", totalHoursWorked: 2 },
      ]
    },
    {
      departmentName: "Department B",
      rank: [
        { fullName: "Employee C", totalHoursWorked: 15 },
        { fullName: "Employee D", totalHoursWorked: 12 },
        { fullName: "Employee A", totalHoursWorked: 9 },
        { fullName: "Employee B", totalHoursWorked: 1 },
      ]
    }
  ],
  rankByDepartment: [
    { departmentName: 'Department A', totalHoursWorked: 20 },
    { departmentName: 'Department B', totalHoursWorked: 37 }
  ]
};
```

> **Nota:** Puedes consultar un ejemplo del objeto `company` que se recibiría como parámetro en el fichero `src/pec2/data.js`. 


### Ejercicio 5 (3 p)

Implementa la clase `WordsAnalyzer`, que utilizaremos para realizar una serie de operaciones sobre una lista de strings.

#### Constructor (0,6 p)
El constructor de la clase `WordsAnalyzer` debe aceptar el parámetro de entrada `data` de tipo objeto.

> **Nota:** Puedes consultar varios ejemplos de la estructura del objeto, contenidos en el array `wordList` del fichero `src/pec2/data.js`. 

La clase ha de tener las siguientes propiedades (todas ellas _protegidas_):
  - `words`: Array de strings. Debes verificar el parámetro de entrada (`data`) y en caso de que éste no sea correcto, lanzar una nueva instancia de un objeto de tipo `Error` con el texto "The list of words is invalid.".
  - `totalVowels`: Ha de contener el número total de _vocales_ en toda la lista de palabras.
  - `totalConsonants`: Ha de contener el número total de _consonantes_ en toda la lista de palabras.
  - `totalNumbers`: Ha de contener el número total de _números_ en toda la lista de palabras.
  - `totalSymbols`: Ha de contener el número total de _símbolos_ en toda la lista de palabras.

> **Nota:** Recuerda que las propiedades del objeto deben contener, en todo momento, los valores que se espera que tengan.

#### Getters (0,2 p)
Debes implementar los _getters_ de cada una de las propiedades de la clase `WordsAnalyzer`.

#### Setter (0,6 p)
Debes implementar únicamente el _setter_ de la propiedad `words` de la clase `WordsAnalyzer`. Para ello, debes verificar el parámetro de entrada y en caso de que éste no sea correcto, lanzar una nueva instancia de un objeto de tipo `Error` con el texto "The value of words is invalid.".

#### Métodos públicos
Debes implementar los siguientes métodos públicos:

> **Nota:** No deben existir más métodos públicos que los indicados

##### getTotals() (0,2 p)

Devuelve un objeto con todos los totales siguiendo este formato de ejemplo:

  ```js
  {
    "consonants": 31,
    "numbers": 4,
    "symbols": 6,
    "vowels": 28
  }
  ```

##### textExists(textToSearch) (0,4 p)

Devuelve un booleano indicando si el texto pasado por parámetro `textToSearch` existe en la lista. No se debe distinguir entre mayúsculas y minúsculas.

##### orderWords(orderType) (0,4 p)

Ordena las palabras en función del valor del parámetro `orderType`, que únicamente puede tomar los valores: 'ASC' y 'DESC'. En caso de recibir cualquier otro valor, deberá lanzar una nueva instancia de un objeto de tipo `Error` con el texto "Order type not valid.".

##### deleteWord(number) (0,6 p)

Elimina el registro número `number` de la lista (donde la primera posición de la lista es el valor 1). Debes verificar el parámetro `number` y en caso de que éste no sea correcto, lanzar una nueva instancia de un objeto de tipo `Error` con el texto "The value of number is invalid.".

#### Métodos privados/protegidos

Puedes crear tus propios métodos protegidos o privados, si lo necesitas.