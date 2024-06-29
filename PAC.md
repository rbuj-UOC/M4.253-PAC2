# PJP PAC 2

En aquesta PAC es practica la programació JavaScript mitjançant exercicis concrets que avaluaran una o diverses característiques del llenguatge.

## Competències

En aquesta PAC es desenvolupen les següents competències del Màster:

* Utilitzar de manera adequada el llenguatge JavaScript i fer-lo servir en el desenvolupament de llocs i aplicacions web, en funció de les necessitats del projecte.

## Objectius

Els objectius concrets d'aquesta PAC són:

* Aprendre a utilitzar JavaScript i les seves característiques bàsiques.
* Contribuir a conèixer a fons el llenguatge JavaScript per poder fer-lo servir en el desenvolupament d'aplicacions Web.

## Lliurament de la PAC

Un cop hagis realitzat les activitats pràctiques proposades en aquest enunciat, **el lliurament es realitzarà de forma doble**:

- Hauràs d'enviar els teus canvis a l'apartat de l'aula virtual de la UOC.
- Hauràs d'enviar els teus canvis al repositori de GitHub Classroom.
 
Recorda que aquest repositori l'has clonat del repositori a GitHub. Quan treballis al teu sistema, tots els canvis els faràs als teus fitxers locals, els quals hauràs d'afegir i _comitejar_ al teu repositori Git. Aquests canvis estaran al teu sistema fins que facis _push_ i els enviïs al repositori a GitHub.

Recorda que has de treballar a la branca _main_ o _master_ (la que es crei per defecte). Pots fer diversos enviaments.

A l'aula virtual trobareu una _checklist_ que us ajudarà a repassar tots els passos que heu de fer per al lliurament de la vostra PAC.

## Puntuació

El fet de treballar amb tests per verificar la funcionalitat del codi us permetrà tenir una idea de la vostra pròpia nota abans del lliurament.

La puntuació dels exercicis pràctics es basa en dos criteris: **Funcionalitat** i **implementació**. S'espera que els exercicis funcionin correctament (passin els tests) i que la implementació (el codi) tingui una qualitat adequada.

Alguns detalls a tenir en compte:

- Es penalitzarà qualsevol intent de _hardcodejar_ els tests per forçar que passin. Aquesta tècnica consisteix a canviar la implementació perquè torni únicament el valor esperat pel test (qualsevol altre test fallaria).
- Els tests automàtics estan dissenyats per detectar exercicis erronis o incomplets per a casos concrets. El fet que un test passi no garanteix que l'exercici estigui realitzat correctament, és a dir, que cobreixi tots els casos.
- Un exercici els tests del qual no passen es puntuarà amb un 0 llevat que hi hagi problemes amb el test.
- A més de passar els tests, el professorat avaluarà el vostre codi en base als següents criteris:
   - Llegibilitat, senzillesa i qualitat del codi.
   - Coneixements de programació. Per exemple, no utilitzar les estructures de control adequades, com ara utilitzar un bucle per construir una sentència condicional o viceversa.

## Requisits mínims

- Tenir instal·lat Visual Studio Code.
- Coneixements bàsics de Git i GitHub (Activitats 2 i 3 del Repte 1).
- Estudi de la introducció i repàs a JavaScript (Activitat 1 del Repte 2).
- Estudi de conceptes de JavaScript (Activitat 2 del Repte 2).

## Exercicis pràctics (10 p)

Per realitzar els exercicis pràctics t'has de dirigir a la següent ruta, dins del repositori: `src/pec2/pec2.js`.
En aquest fitxer hauràs d'implementar les funcions que t'indiquem als exercicis que veuràs més avall.

D'altra banda, els tests que et permetran saber si la solució que proposes per als exercicis és correcta són al fitxer `src/pec2/pec2.spec.js`.
**No heu d'editar aquest fitxer**.
Tingues en compte que els tests són condicions que han de complir les funcions que implementaràs en els exercicis, per la qual cosa et poden servir d'ajuda per corregir-los.

### Preparant l'entorn

Un cop fet clon del repositori, has d'instal·lar les dependències del projecte.

```
npm install
```

A continuació, per llançar els tests has d'executar la següent ordre:

```
npm t
```

La instrucció anterior llançarà els tests cada cop que deseu el fitxer `src/pec2/pec2.js`, que és precisament on implementareu els exercicis d'aquesta PAC.

Tal com t'indiquem a la PAC 1, la primera vegada que executis `npm t` i es llencin els tests, fallaran tots, ja que no hi ha cap exercici implementat. Conformi vagis treballant en els exercicis i guardis el fitxer, pot ser que algun test llanci algun error. Revisa el missatge d'error que s'imprimeix per conèixer el format i entendre com es notifiquen els errors.

Si tens algun problema amb els tests, no dubtis a preguntar al fòrum "Dudas PEC 2 | Dubtes PAC 2" de l'aula.


### Exercici 1 (1 p)

Implementa una funció `searchNumber` que rep 2 paràmetres:

- `matrix`: array
- `targetNumber`: número sencer

Aquesta funció ha de recórrer `matrix`, cercant el nombre `targetNumber`.

Has de tenir en compte les consideracions següents:

- `matrix` pot contenir valors de qualsevol tipus, no només enters.
- `matrix` no té límit quant al seu nivell de nidificació, és a dir, pot contenir arrays dins d'arrays.
- S'assumeix que `targetNumber` sempre serà un nombre enter, per la qual cosa no cal verificar-ne el tipus.
- La funció ha de tornar un valor booleà, indicant si s'ha localitzat `targetNumber` a `matrix`.

> **Nota:** Podeu consultar exemples de l'array `matrix` al fitxer `src/pec2/data.js`.

> **Nota:** En la puntuació d'aquest exercici es prestarà una atenció especial a l'optimització de la solució presentada.


### Exercici 2 (1,5 p)

#### Exercici 2.1 (0,5 p)

Implementa una classe `Shape` el constructor de la qual ha d'acceptar el paràmetre `name`.

Aquesta classe ha d'incorporar els mètodes següents:

- `calculateArea`: Mètode _abstracte_ que ha de llançar una nova instància d'un objecte de tipus `Error` amb el text següent: "The 'calculateArea' function must be implemented in child classes."
- `getName`: Mètode que ha de tornar el valor de `name`.

#### Exercici 2.2 (1 p)

Implementa una classe `Circle` que estengui de la classe `Shape` i el constructor del qual accepti els mètodes següents: `name` i `radius`.

Aquesta classe ha d'incorporar els mètodes següents:

- `calculateArea`: Implementació del mètode _abstracte_ de la classe `Shape`. Heu de tornar l'àrea del cercle en format de dos decimals.
- `getName`: Mètode que ha de tornar el literal "I'm a circle named" seguit del valor de `name`, entre cometes simples.


### Exercici 3 (2 p)

Aquest exercici està pensat per entendre que hi ha una altra manera de crear objectes. Aquesta forma es considera _legacy_ però és una tècnica que es segueix utilitzant i és important entendre que les classes són _syntax sugar_ d'aquesta tècnica. A més, aquest exercici us servirà per practicar i entendre els prototips i l'ús de `this` en JavaScript.

Realitza les tasques següents:

- Crea una funció constructora `Book` que rep els paràmetres següents: `title`, `author` i `genre`.
- Implementa la funció `isGenre`. Aquest mètode ha de rebre un paràmetre `genre` i ha de tornar un valor booleà indicant si el paràmetre passat és igual a la propietat `genre` de `Book`.
- Implementa la funció `getInfo` que retorni un objecte amb tota la informació d'un `Book`. Exemple:

   ```js
   {
     Title: 'Fundation',
     Autor: 'Isaac Asimov',
     Gènere: 'Science fiction'
   }
   ```

- Implementa la funció `setGenre` que rep el paràmetre `newGenre`. Aquest mètode serveix per canviar el valor de la propietat `genre` d'un `Book`.

- Has de tenir en compte les consideracions següents:
   - La funció `isGenre` s'ha d'implementar de manera que cada instància de `Book` tingui la seva còpia d'aquesta funció.
   - Les funcions `getInfo` i `setGenre` s'han d'implementar de manera que **es comparteixin a través del prototype**.


### Exercici 4 (2,5 p)

Implementa una funció `dashboardCompany`, que rebi com a paràmetre un objecte `company` i que torni un altre objecte que contingui la informació següent:

- Empleats ordenats per nom de departament (de manera ascendent) i per nombre d'hores treballades en total (de manera descendent).
- Nombre d'hores totals treballades per departament, ordenat per nom de departament (de manera ascendent).

Heu de verificar el paràmetre d'entrada `company` i en cas que aquest no sigui correcte, llançar una nova instància d'un objecte de tipus `Error` amb el text "The value of company is invalid.".

#### Exemple d'objecte retornat:

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

> **Nota:** Pots consultar un exemple de l'objecte `company` que es rebria com a paràmetre al fitxer `src/pec2/data.js`.


### Exercici 5 (3 p)

Implementa la classe `WordsAnalyzer`, que utilitzarem per fer una sèrie d'operacions sobre una llista d'strings.

#### Constructor (0,6 p)
El constructor de la classe `WordsAnalyzer` ha d'acceptar el paràmetre d'entrada `data` de tipus objecte.

> **Nota:** Podeu consultar diversos exemples de l'estructura de l'objecte, continguts a l'array `wordList` del fitxer `src/pec2/data.js`.

La classe ha de tenir les propietats següents (totes elles _protegides_):
   - `words`: Array d'strings. Has de verificar el paràmetre d'entrada (`data`) i en cas que aquest no sigui correcte, llançar una instància nova d'un objecte de tipus `Error` amb el text "The list of words is invalid.".
   - `totalVowels`: Ha de contenir el nombre total de _vocals_ a tota la llista de paraules.
   - `totalConsonants`: Ha de contenir el nombre total de _consonants_ a tota la llista de paraules.
   - `totalNumbers`: Ha de contenir el nombre total de _números_ en tota la llista de paraules.
   - `totalSymbols`: Ha de contenir el nombre total de _símbols_ a tota la llista de paraules.

> **Nota:** Recordeu que les propietats de l'objecte han de contenir, en tot moment, els valors que s'espera que tinguin.

#### Getters (0,2 p)
Heu d'implementar els _getters_ de cadascuna de les propietats de la classe `WordsAnalyzer`.

#### Setter (0,6 p)
Has d'implementar només el _setter_ de la propietat `words` de la classe `WordsAnalyzer`. Per fer-ho, has de verificar el paràmetre d'entrada i en cas que aquest no sigui correcte, llançar una instància nova d'un objecte de tipus `Error` amb el text "The value of words is invalid.".

#### Mètodes públics
Has d'implementar els mètodes públics següents:

> **Nota:** No hi ha d'haver més mètodes públics que els indicats

##### getTotals() (0,2 p)

Retorna un objecte amb tots els totals seguint aquest format d'exemple:

   ```js
   {
     "consonants": 31,
     "numbers": 4,
     "symbols": 6,
     "vowels": 28
   }
   ```

##### textExists(textToSearch) (0,4 p)

Torna un booleà indicant si el text passat per paràmetre `textToSearch` existeix a la llista. No cal distingir entre majúscules i minúscules.

##### orderWords(orderType) (0,4 p)

Ordena les paraules en funció del valor del paràmetre `orderType`, que només pot prendre els valors: 'ASC' i 'DESC'. En cas de rebre qualsevol altre valor, haureu de llançar una nova instància d'un objecte de tipus `Error` amb el text "Order type not valid.".

##### deleteWord(number) (0,6 p)

Elimina el registre número `number` de la llista (on la primera posició de la llista és el valor 1). Heu de verificar el paràmetre `number` i en cas que aquest no sigui correcte, llançar una nova instància d'un objecte de tipus `Error` amb el text "The value of number is invalid.".

#### Mètodes privats/protegits

Pots crear els teus propis mètodes protegits o privats, si ho necessites.