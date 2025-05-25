# **Java ☕** {#java}

[[toc]]

## **📌 Programma base** {#programma-base}

::: info
Il nome del programma deve essere uguale al nome della classe.
:::

**📄 Main.java**:

```java
public class Main {
    public static void main (String[] args) {

    }
}
```

## **💬 Commenti** {#commenti}

In una riga, tutto il testo dopo due slash (`//`) viene considerato come **commento**, e quindi ignorato.
Per scrivere un commento su più righe, lo si mette tra `/*` e `*/`.

```java
// Commento in una riga
/*
    Commento a più righe
*/
```

## **🖨️ Input/Output** {#input-output}

Per stampare qualcosa in **output**, si usa `System.out.println()` e `System.out.print()`.
La differenza è che `println` va a capo dopo aver stampato il testo, mentre `print` no.

```java
System.out.println("Hello, World!");
System.out.print("Hello, ");
System.out.print("again.");
```

Output:

```output
Hello, World!
Hello, again.
```

Per prendere **input** serve invece uno _Scanner_.
Lo Scanner va prima importato da `java.util.Scanner` e poi inizializzato.

```java
import java.util.Scanner; // Importa lo Scanner // [!code focus]

public class Main {
    public static void main (String[] args) {
        Scanner sc = new Scanner(System.in); // Inizializza lo Scanner e chiamalo `sc` // [!code focus]
    }
}
```

Per prendere del testo in input, si usa `sc.nextLine()` (`sc` è il nome della variabile che è stata assegnata allo scanner).

```java
String text = sc.nextLine();
```

Una volta finito il programma, lo Scanner va chiuso:

```java
import java.util.Scanner;

public class Main {
    public static void main (String[] args) {
        Scanner sc = new Scanner(System.in);

        String text = sc.nextLine();

        sc.close(); // [!code focus]
    }
}
```

## **📦 Variabili** {#variabili}

### **📌 Tipi principali** {#tipi-principali}

I tipi di variabili più importanti sono:

- `int`: numeri interi
- `float`: numeri decimali
- `boolean`: valori booleani (`true` o `false`)
- `char`: singole lettere
- `String`: stringhe/combinazioni di lettere

### **📌 Uso** {#uso}

In Java, prima di usare una variabile, essa va **dichiarata**.
Per fare ciò, basta scrivere il tipo della variabile da creare seguito dal suo nome:

```java
int myNumber;
float myDecimal;
boolean myBool;
char myCharacter;
String myString;
```

Dopodichè, la si può **inizializzare** assegnandole il suo primo valore:

```java
myNumber = 10;
myDecimal = 1.5;
myBool = true;
myCharacter = 'c';
myString = "Hello!";
```

Si può anche creare e inizializzare una variabile in una sola riga:

```java
int myNumber = 10;
float myDecimal = 1.5;
boolean myBool = true;
char myCharacter = 'c';
String myString = "Hello!";
```

Potete stampare il valore delle variabili come se fosse testo:

```java
System.out.println(myNumber);    // 10
System.out.println(myDecimal);   // 1.5
System.out.println(myBool);      // true
System.out.println(myCharacter); // c
System.out.println(myString);    // Hello!
```

### **🔄 Casting** {#casting}

Il casting consiste nel convertire un valore da un tipo ad un altro.
Avviene automaticamente se si passa da uno di questi valori a sinistra verso destra:

`char -> int -> float`

```java
float myDecimal = 1; // Viene convertito in 1.0
```

Il casting si può effettuare anche a mano, specificando il tipo che si vuole generare tra parentesi prima del valore da convertire:

```java
int x = (int) 9.7; // Viene troncato e diventa 9
```

### **📝 Stringhe** {#stringhe}

#### **✂️ Concatenazione** {#concatenazione}

Si possono concatenare più stringhe "sommandole" insieme:

```java
String username = "Doe";
System.out.println("Hello, " + username + "!"); // Hello, Doe!
```

Si possono concatenare anche altri valori, numeri e caratteri a delle stringhe:

```java
int points = 10;
System.out.println("You scored " + points + " points."); // You scored 10 points.
```

#### **🔄 Parsing** {#parsing}

Per convertire una stringa contenente un valore si effettua il **parsing**:

```java
int myNumber = Integer.parseInt("5");       // 5
float myDecimale = Float.parseFloat("5.1"); // 5.1
char myCharacter = "Godo".charAt(0);        // 'G', il primo carattere di "Godo"
```

Con questa tecnica, potete prendere in input diversi tipi di variabili:

```java
int myNumber = Integer.parseInt(sc.nextLine());
float myDecimale = Float.parseFloat(sc.nextLine());
char myCharacter = sc.nextLine().charAt(0);
```

#### **🧰 Metodi** {#metodi}

Le stringhe possiedono diversi **metodi**, cioè "funzioni" speciali che vi permettono di ottenere una funzione modificata della stringa.
I più importanti sono:

- `s.charAt(x)`: restituisce il carattere in posizione `x` della stringa, contando da zero.
- `s.substring(x, y)`: restituisce una stringa contenente tutti i caratteri dalla posizione `x` alla posizione `y` (esclusa), contando da zero.
- `s.indexOf(c)`: restituisce la prima posizione in cui appare un carattere `c`, o `-1` se non è presente.
- `s.toUpperCase()`: restituisce tutta la stringa con lettere maiuscole.
- `s.toLowerCase()`: restituisce tutta la stringa con lettere minuscole.
- `s.length()`: restituisce la lunghezza della stringa.

```java
String s = "Abcdef";
System.out.println(s.charAt(0));       // A
System.out.println(s.substring(0, 5)); // Abcde
System.out.println(s.indexOf('b'));    // 1
System.out.println(s.indexOf('B'));    // -1
System.out.println(s.toUpperCase());   // ABCDEF
System.out.println(s.toLowerCase());   // abcdef
System.out.println(s.length());        // 6
```

## **🔀 Condizioni e cicli** {#condizioni-e-cicli}

### ⚡ `if`/`else` {#if-else}

```java
if (condition) {
    // Code
}
```

Questo esegue `// Code` solo se `condition` è vero.
`condition` può essere una condizione (`x>y`, `i==10`, ...) o una booleana (in quel caso, il codice viene eseguito se la booleana ha valore `true`).

```java
if (condition) {
    // Code1
} else {
    // Code2
}
```

Questo esegue `// Code1` se `condition` è vero, o `// Code2` se `condition` è falso.

```java
if (condition1) {
    // Code1
} else if (condition2) {
    // Code2
} else {
    // Code3
}
```

Questo esegue `// Code1` se `condition1` è vero, `// Code2` se `condition1` è falso e `condition2` è vero, o `// Code3` se tutte le condizioni precedenti sono false.

### 🔁 `while` {#while}

```java
while (condition) {
    // Code
}
```

Questo continua ad eseguire `// Code` finché `condition` è vero.

### 🔄 `for` {#for}

```java
for (start; condition; step) {
    // Code
}
```

Il `for` esegue `start` la prima volta, continua a eseguire `// Code` finché `condition` è vero, ed esegue `step` ogni volta prima di eseguire `// Code`.
Un esempio più classico è:

```java
for (int i=0; i<5; i++) {
    // Code
}
```

Questo crea una variabile `i` con valore 0, continua ad eseguire `// Code` finché `i` è minore di 5, e aumenta `i` di 1 ogni volta. In altre parole, questo crea un loop che viene eseguito 5 volte.

## **📚 Array** {#array}

Gli array sono variabili speciali che possono contenere più valori dello stesso tipo. Per dichiararli, si scrive il nome del tipo con `[]` davanti:

```java
int[] myNumbers;
```

Si può anche scegliere la loro lunghezza:

```java
int[] myNumbers = new int[10];
```

Questo crea un array di 10 `int`.

Si può anche assegnare valori fin dalla sua creazione:

```java
int[] myNumbers = {1, 2, 3, 4, 5};
```

Questo crea un array di 5 `int`, con i valori sopra specificati.

Per accedere ad uno dei valori, si usano le parentesi quadre con dentro la posizione del valore da accedere (NOTA: negli array, il primo elemento è 0, mentre l'ultimo è la lunghezza dell'array meno 1):

```java
myNumbers[0] = 10; // Assegna 10 al primo elemento di myNumbers
System.out.println(myNumbers[0]);
```

Con `.length` possiamo ottenere la lunghezza di un array:

```java
System.out.println(myNumbers.length); // 5
```

## **🎲 Numeri casuali** {#numeri-casuali}

Per generare numeri casuali, potete usare `Math.random()` da `java.lang.Math`.
Esso restituisce un numero decimale a caso tra 0 (incluso) e 1 (escluso).

```java
import java.lang.Math; // Importa la libreria `Math` // [!code focus]

public class Main {
    public static void main (String[] args) {
        float x = (float) Math.random(); // Numero tra [0, 1) // [!code focus]
    }
}
```

Per generare numeri interi a caso tra x (incluso) e y (escluso), potete usare la seguente formula:

```java
(int) (Math.random()*(y-x)+x)
```

Per esempio:

```java
int a = (int) (Math.random()*10)     // [0, 10)
int b = (int) (Math.random()*10+10)  // [10, 20)
int c = (int) (Math.random()*30+20)  // [20, 50)
int d = (int) (Math.random()*471+41) // [41, 512)
```

## **🔧 Funzioni** {#funzioni}

### **🐾 Procedure** {#procedure}

Le funzioni sono pezzi di codice che possono essere riutilizzati più volte. Le **procedure** sono funzioni che non "restituiscono" nessun valore. Per definirne una (fuori dal `main`):

```java
public static void funzione() {
    // codice
}
```

Questo crea la procedura `funzione`, che fa tutto quello che c'è scritto in `// codice`.
Un esempio semplice può essere:

```java
public static void saluta() {
    System.out.println("Hello, World!");
}

public static void main(String[] args) {
    saluta();
    saluta();
    saluta();
}
```

Questo crea una funzione `saluta` e la "chiama" (cioè la esegue) 3 volte. In questo modo, esegue il codice dentro `saluta` 3 volte.

Le funzioni e le procedure possono prendere **argomenti**, cioé "input" che utilizzera per fare qualche calcolo od operazione. Per creare una funzione che richiede dei parametri:

```java
public static void funzione(int a, int b) {
    // codice
}
```

Questa funzione prende come parametri due numeri interi `a` e `b`. Dentro `funzione(...)` si può scrivere un qualsiasi numero di parametri di qualsiasi tipo. Per esempio:

```java
public static void funzione(int a, char b, String S, float[] A) {
    // codice
}
```

Questa funzione prende come parametri un numero intero `a`, un carattere `b`, una stringa `S` e un array di float `A`.
::: warning NOTA
Le variabili e i parametri dentro una funzione non sono accessibili da altre funzioni. Per esempio, se dentro `main()` creiamo una variabile `a`, e definiamo una procedura `funzione()`, dentro il codice di `funzione()` non possiamo accedere o modificare `a`. Se `funzione()` prende un parametro o crea una variabile di nome `a`, questa sarà una nuova variabile completamente separata dalla `a` di `main()`.
:::

Scriviamo, per esempio, una procedura che stampi un array:

```java
public static void stampa(int[] A) {
    for (int i=0; i<A.length; i++) {
        System.out.print(A[i] + " ");
    }
    System.out.println();
}

public static void main(String[] args) {
    int[] A = {1, 2, 3, 4, 5};

    stampa(A);
}
```

Ora, possiamo scrivere `stampa(A)` quando vogliamo stampare un array `A` invece di riscrivere tutto il codice per farlo manualmente.

### **↩️ Funzioni con ritorno** {#funzioni-con-ritorno}

Le **funzioni** (o **metodi** in base al contesto), a differenza delle procedure, restituiscono un valore oltre a compiere delle azioni. Per esempio, una ipotetica funzione `raddoppia()` potrebbe fare una cosa del genere:

```java
int x = raddoppia(10); // 20
System.out.println(raddoppia(15)); // 30
```

Questa funzione prende come parametro un intero, fa dei calcoli o delle operazioni, e poi **restituisce** un valore, che può poi essere assegnato ad una variabile o stampato in output. La chiamata a `raddoppia(10)` viene rimpiazzata col suo risultato, `20`.

La definizione di una funzione è uguale a quella di una procedura; l'unica differenza è che al posto di `void` va scritto il tipo di valore che viene restituito dalla funzione. Inoltre, per restituire il valore, la funzione deve usare il comando `return`.

```java
public static int raddoppia(int a) {
    return a*2;
}
```

Questa funzione, appunto, prende come parametro un intero `a`, lo raddoppia, e lo restituisce.

## **➿ Ricorsione** {#ricorsione}

La ricorsione permette di risolvere alcuni problemi che possono essere scomposti in problemi più piccoli.
Prendiamo, per esempio, il fattoriale di un numero:

$$
    0! = 1
$$

$$
    1! = 1
$$

$$
    2! = 1\cdot2
$$

$$
    3! = 1\cdot2\cdot3
$$

$$
    4! = 1\cdot2\cdot3\cdot4
$$

$$
    5! = 1\cdot2\cdot3\cdot4\cdot5
$$

Possiamo notare che il fattoriale di un numero è uguale al fattoriale del numero precedente per sé stesso:

$$
    5! = 4!\cdot5 = 3!\cdot4\cdot5 = 2!\cdot3\cdot4\cdot5 = 1!\cdot2\cdot3\cdot4\cdot5 = 1\cdot2\cdot3\cdot4\cdot5
$$

In altre parole, per calcolare il fattoriale di un numero, possiamo calcolare prima quello di un numero più piccolo per poi ricondurci a quello originale. Deriviamo quindi questa formula:

$$
    x! = (x-1)! \cdot x
$$

Oppure, con una funzione:

$$
    fact(x) = fact(x-1) \cdot x
$$

Questa definizione ha solo un problema: non finisce mai. Paritrà da $fact(5)$, poi $fact(4)$, $fact(3)$... fino a $fact(0)$, poi continuerà con $fact(-1)$, $fact(-2)$... all'infinito. Per questo ci serve un **caso base**. Il caso base è il caso più semplice che non può essere scomposto o semplificato ulteriormente, dal quale poi si possono derivare tutti gli altri. Nel fattoriale, il caso base è $0!$ = $1$. Da qui deriviamo una nuova definizione:

$$
    fact(x) =
    \begin{cases}
    1 & \text{quando } x = 0 \\
    fact(x-1) \cdot x & \text{altrimenti}
    \end{cases}
$$

Questo viene letto come:

> Il fattoriale di 0 è 1, e il fattoriale di qualsiasi altro numero x è $fact(x-1) * x$.

Ora basta riscriverlo in codice Java:

```java
public static int fact(int x) {
    // caso base
    // se x è 0, il suo fattoriale è 1
    if (x == 0) {
        return 1;
    }
    // per gli altri numeri, calcola il fattoriale ricorsivamente
    else {
        return fact(x-1) * x;
    }
}
```

Un altro esempio è la sequenza di Fibonacci. Essa è una sequenza di numeri dove ogni numero è la somma dei due precedenti. Il numero in posizione 0 è 0, e quello in posizione 1 è 1:

$$
    fib(0) = 0
$$

$$
    fib(1) = 1
$$

$$
    fib(2) = 1 \ (1+1)
$$

$$
    fib(3) = 2 \ (1+1)
$$

$$
    fib(4) = 3 \ (1+2)
$$

$$
    fib(5) = 5 \ (2+3)
$$

$$
    fib(6) = 8 \ (3+5)
$$

$$
    fib(7) = 13 \ (5+8)
$$

$$
    ...
$$

Seguendo la definizione scritta della sequenza _(ogni numero è la somma dei due precedenti; lo 0esimo è 0; il primo è 1)_, possiamo derivare questa formula:

$$
    fib(x) =
    \begin{cases}
    0 & \text{quando } x = 0 \\
    1 & \text{quando } x = 1 \\
    fib(x-1) + fib(x-2) & \text{altrimenti}
    \end{cases}
$$

In Java:

```java
public static int fib(int i) {
    // casi base
    if (i == 0) {
        return 0;
    }
    else if (i == 1) {
        return 1;
    }
    // casi generali
    else {
        return fib(i-1) + fib(i-2)
    }
}
```

Un ultimo esempio può essere invertire una stringa.
Per invertire una stringa S (per esempio, "ciao"), possiamo togliere il primo carattere ("c"), invertire il resto della stringa ("iao" -> "oai") e aggiungere il carattere alla fine della stringa ("oaic"). Possiamo prendere come caso base una stringa vuota, dove non c'è più niente da invertire. Una definizione generica può essere:

```latex
inverti("") = ""
inverti(S) = inverti(S[1:]) + S[0]
```

(`S[1:]` vuol dire "tutti i caratteri di S apparte il primo", o `S.substring(1, S.length())`. `S[0]` vuol dire "il primo carattere in S", o `S.charAt(0)`)

In Java:

```java
public static String inverti(String S) {
    // caso base
    if (S.length() == 0) { // se la stringa è vuota, la sua lunghezza sarà 0
        return "";
    }
    // altri casi
    else {
        return inverti(S.substring(1, S.length()) + S.charAt(0);
    }
}
```
