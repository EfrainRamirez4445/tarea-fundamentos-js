// ============================================================
// Fundamentos de JavaScript - script.js
// ============================================================

// Función auxiliar: muestra el mensaje en la consola y en la página.
function mostrar(idSalida, mensaje) {
  console.log(mensaje);
  const salida = document.getElementById(idSalida);
  salida.textContent += mensaje + "\n";
}

// ------------------------------------------------------------
// 1. CONCEPTOS BÁSICOS: variables, tipos de datos, arreglos, objetos
// ------------------------------------------------------------
const nombre = "Ana"; // string (texto)
let edad = 20; // number (número)
const esEstudiante = true; // boolean
let sinValor = null; // null
let indefinida; // undefined

mostrar("salida-basicos", "Nombre: " + nombre + " (" + typeof nombre + ")");
mostrar("salida-basicos", "Edad: " + edad + " (" + typeof edad + ")");
mostrar("salida-basicos", "Es estudiante: " + esEstudiante + " (" + typeof esEstudiante + ")");
mostrar("salida-basicos", "null: " + sinValor + " | undefined: " + indefinida);

// Arreglo
const lenguajes = ["HTML", "CSS", "JavaScript"];
lenguajes.push("Git");
mostrar("salida-basicos", "Arreglo: " + lenguajes.join(", "));
mostrar("salida-basicos", "Cantidad: " + lenguajes.length + " | Primero: " + lenguajes[0]);

// Objeto
const estudiante = {
  nombre: nombre,
  edad: edad,
  cursos: ["Front-End", "UI"],
  saludar: function () {
    return "Hola, soy " + this.nombre + " y tengo " + this.edad + " años.";
  }
};
estudiante.carrera = "Desarrollo web";
mostrar("salida-basicos", estudiante.saludar());
mostrar("salida-basicos", "Carrera: " + estudiante.carrera);

// ------------------------------------------------------------
// 2. ESTRUCTURAS DE CONTROL Y FUNCIONES
// ------------------------------------------------------------
function clasificarNota(nota) {
  if (nota >= 90) {
    return "Excelente";
  } else if (nota >= 70) {
    return "Aprobado";
  } else if (nota >= 0) {
    return "Reprobado";
  } else {
    return "Nota inválida";
  }
}
mostrar("salida-control", "Nota 95 -> " + clasificarNota(95));
mostrar("salida-control", "Nota 75 -> " + clasificarNota(75));
mostrar("salida-control", "Nota 40 -> " + clasificarNota(40));

// for
mostrar("salida-control", "-- for --");
for (let i = 0; i < lenguajes.length; i++) {
  mostrar("salida-control", "Posición " + i + ": " + lenguajes[i]);
}

// while
mostrar("salida-control", "-- while --");
let cuenta = 3;
while (cuenta > 0) {
  mostrar("salida-control", "Cuenta: " + cuenta);
  cuenta--;
}

// do...while
mostrar("salida-control", "-- do...while --");
let intento = 1;
do {
  mostrar("salida-control", "Intento número " + intento);
  intento++;
} while (intento <= 2);

// Función que suma un arreglo
function sumar(numeros) {
  let total = 0;
  for (const n of numeros) {
    total += n;
  }
  return total;
}
mostrar("salida-control", "Suma de [4, 8, 15]: " + sumar([4, 8, 15]));

// ------------------------------------------------------------
// 3. ALCANCE Y CLAUSURAS
// ------------------------------------------------------------
const global = "Soy global: se ve en todo el archivo";

function probarAlcance() {
  var conVar = "var: vive en toda la función";
  if (true) {
    var dentroVar = "var declarada dentro del if";
    let dentroLet = "let: solo vive dentro de este bloque";
    const dentroConst = "const: igual que let, pero no se reasigna";
    mostrar("salida-alcance", "Dentro del bloque: " + dentroLet + " / " + dentroConst);
  }
  mostrar("salida-alcance", "Fuera del bloque, var sí existe: " + dentroVar);
  mostrar("salida-alcance", "Fuera del bloque, let NO existe: " + (typeof dentroLet));
  mostrar("salida-alcance", conVar);
}
probarAlcance();
mostrar("salida-alcance", global);

// Clausura: la función interna recuerda la variable privada "cuenta"
function crearContador() {
  let cuenta = 0;
  return function () {
    cuenta++;
    return cuenta;
  };
}
const contador = crearContador();
mostrar("salida-alcance", "Contador: " + contador());
mostrar("salida-alcance", "Contador: " + contador());
mostrar("salida-alcance", "Contador: " + contador());

// ------------------------------------------------------------
// 4. PRUEBAS Y EXPERIMENTACIÓN
// ------------------------------------------------------------
const salidaPruebas = document.getElementById("salida-pruebas");
const contadorBoton = crearContador();

document.getElementById("btn-probar").addEventListener("click", function () {
  const valor = Number(document.getElementById("nota").value);
  const resultado = clasificarNota(valor);
  console.log("Prueba con " + valor + ": " + resultado);
  salidaPruebas.textContent = "Nota " + valor + " -> " + resultado;
});

document.getElementById("btn-contador").addEventListener("click", function () {
  const veces = contadorBoton();
  console.log("Clic número " + veces);
  salidaPruebas.textContent = "El contador (clausura) va en: " + veces;
});