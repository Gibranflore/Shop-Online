

const firstName = 'lalo' 
const LastName = 'Flores'
const country =  'Canada'
const city = 5 * !(50 > 33) || !( 5* 4 ) < 5 / 4
const age = parseInt('9.8') == 10
const isMarried = false 
const year = !(true == true)

console.log(firstName);
console.log(LastName);
console.log(country);
console.log(city);
console.log(age);
console.log(isMarried);
console.log(year);

const now = new Date()
const dia = now.getDay()
const mes = now.getMonth()
const fecha = now.getTime()
const hoy = now.getDate()
const pasado = now.getSeconds()
const hora = now.getHours()
const minutos = now.getMinutes()



// console.log(`${dia}, ${mes}, ${fecha}, ${hoy}, ${pasado}, ${hora}, ${minutos}`);

const altura = prompt('Ingrese la altura de inicial')
const base = prompt('Ingrese la base de inicial')
const area = 0.5

const resultado = altura * base * area 

console.log(resultado);


const a = prompt( 'Ingrese el valor del lado a' )
const b = prompt( 'Ingrese el valor del lado b' )
const c = prompt( 'Ingrese el valor del lado c' )

const d = Number(a)
const e = Number(b)
const f = Number(c)

const res = d + e + f
console.log(res);

// Obtenga el largo y el ancho usando prompt y calcule el área del rectángulo 
// (área = largo x ancho y el perímetro del rectángulo (perímetro = 2 x (largo + ancho))

const ancho = Number(prompt('Ingrese el ancho'))
const largo = Number(prompt('Ingrese el largo'))

const areas = ancho * largo
console.log(`${areas}`);


const perimetro = 2 * (largo + ancho) 
console.log(`${perimetro}`);

// Obtenga el radio usando prompt y calcule el área de un círculo (área = pi x r x r)
//  y la circunferencia de un círculo (c = 2 x pi x r) donde pi = 3.14.


const pi = 3.14
let radio = Number(prompt('Ingrese el radio del circulo'))

const areaCirculo = pi * radio * radio
console.log(`${areaCirculo}`);

const circunferencia = 2* pi* radio
console.log(`${circunferencia}`);

// Escriba un script con prompt que solicite al usuario que ingrese
//  las horas y la tarifa por hora. ¿Calcular el salario de la persona?

const horas = Number(prompt('Ingrese las horas que trabaja'))
const tarifa = Number(prompt('Ingrese la tarifa por hora'))

const salario = horas * tarifa

console.log(`${salraio}`);

// Si la longitud de su nombre es mayor que 7, 
// diga que su nombre es largo; de lo contrario, diga que su nombre es corto.

const name = prompt('Ingrese su nombre completo');

if (name.length > 7) {
  console.log('Su nombre es muy largo');
} else {
  console.log('Su nombre es muy corto');
}

const nombre = prompt('Ingrese su nombre completo');
const lastname = prompt('Ingrese su apellido');

if (nombre.length <  lastname.length ) {
    console.log(`Tu nombre ${ nombre } es mas largo que tu apellido, ${ lastname }`)
} 
    console.log(`Tu apellido ${ lastname } es mas largo que tu nombre, ${ nombre }`)


for( let i = 0; i<= 10; ++i );

let num = [1, 45, 63, 5, 6, 100]
let newLista = []

for (let i = 0; i < num.length; ++i){
  newLista.push(num[i] ** 2)
}
console.log(newLista)

let num = [1,45,63,5,6,100]
let newNum = 0
for (let i = 0; i < num.length; ++i){
  newNum = newNum + num[i] 
  
}
console.log(newNum)

let fruta = ['manzana', 'pera', 'mango', 'uva', 'fresa']
let newFruta = []
for (let i = 0; i < fruta.length; ++i){
  newFruta.push(fruta[i].toUpperCase());
  
}
console.log(newFruta)

for (let i = 1; i <= 7; ++i){
  console.log('#'.repeat(i))
}

let signo = ''
for (let i = 1; i <= 7; ++i){
  signo += '#'
  console.log(signo)
}

const arry = ['Facebook', 'Google', 'Microsoft',
  'Apple', 'IBM', 'Oracle', 'Amazon'];


const primera = arry[0]
const medio = arry[Math.floor( arry.length / 2)]
const ultima = arry[arry.length - 1]

console.log(primera)
console.log(medio)
console.log(ultima)

for ( let i = 0; i < arry.length; ++i ){
  console.log(arry[i].toUpperCase())
}

for (let i = 0; i < arry.length; ++i ){
  console.log(`son grandes compañias de tecnologias ${arry[i]}`)
}


const lista = arry.slice(0, -1).join(', ') + ' y ' + arry[arry.length - 1];

console.log(`${lista} son grandes empresas de TI.`);

const empresa = arry.indexOf('Oracle')

console.log(empresa)

if (empresa === -1) {
  console.log(`La empresa no existe`)
}
console.log(`La empresa si existe`)

empresa === -1
  ? console.log(`La empresa  no existe`)
  : console.log(`La empresa si existe`)


  const arry = ['Facebook', 'Google', 'Microsoft',
  'Apple', 'IBM', 'Oracle', 'Amazon'];

const newArry = []

for (let i = 0; i < arry.length; ++i) {
  let nombre = arry[i]
  let contador = 0

  for (let j = 0; j < nombre.length; ++j){
    if (nombre[j] === 'o') {
      contador++
    }
  }
  if (contador > 1) {
    newArry.push(nombre)
  }
}
console.log(newArry)

function generarIdAleatorio(longitud = 6) {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';

  for (let i = 0; i < longitud; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    id += caracteres[indice];
  }

  return id;
}

console.log(generarIdAleatorio());